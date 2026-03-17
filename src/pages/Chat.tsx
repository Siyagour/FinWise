import { useState, useRef, useEffect } from 'react';
import ChatInput from '../components/ChatInput';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';
import ThinkingLoader from '../components/ThinkingLoader';
import { CHAT_HISTORY_STORAGE_KEY } from '../utils/userUtils';
import type { StoredChatMessage } from '../utils/userUtils';
import { callAiAgent } from '../services/aiClient';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content: "Hello! I'm your AI financial advisor. How can I help you with your financial questions today?",
  timestamp: new Date(),
};

/**
 * Persist chat history to localStorage (MVP). Same key/shape as userUtils so
 * Home can treat users with history as "returning" and show PersonalizedFinancialDashboard.
 * In production: replace with API (e.g. POST /chat with JWT) and optionally load on mount from GET /chat/history.
 */
function persistChatHistory(messages: Message[]) {
  try {
    const stored: StoredChatMessage[] = messages.map((m) => ({
      role: m.role,
      message: m.content,
      timestamp: m.timestamp.toISOString(),
    }));
    localStorage.setItem(CHAT_HISTORY_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // localStorage full or disabled
  }
}

/** Hydrate Message[] from localStorage. Returns null if none or invalid. */
function loadChatHistory(): Message[] | null {
  try {
    const raw = localStorage.getItem(CHAT_HISTORY_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredChatMessage[];
    if (!Array.isArray(parsed) || parsed.length === 0) return null;
    return parsed.map((m, i) => ({
      id: `loaded-${i}`,
      role: m.role,
      content: m.message,
      timestamp: m.timestamp ? new Date(m.timestamp) : new Date(),
    }));
  } catch {
    return null;
  }
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(() => {
    const loaded = loadChatHistory();
    return loaded ?? [WELCOME_MESSAGE];
  });
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isThinking]);

  // Persist whenever messages change so Home's checkIfReturningUser() stays in sync
  useEffect(() => {
    persistChatHistory(messages);
  }, [messages]);

  const handleSend = async (message: string, files?: File[]) => {
    if (!message.trim() && (!files || files.length === 0)) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message || `Uploaded ${files?.length} file(s)`,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Show thinking indicator while we "send" the message to the AI backend.
    setIsThinking(true);
    try {
      // Build a lightweight transcript for the AI client. In production,
      // you might also include system messages or truncated history here.
      const payload = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      // Show typing indicator while we wait for the AI to respond.
      setIsThinking(false);
      setIsTyping(true);

      const replyText = await callAiAgent(payload);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsThinking(false);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-fin-green-950 max-md:h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="border-b border-fin-green-200 dark:border-fin-green-800 px-4 sm:px-6 py-4 bg-white dark:bg-fin-green-950">
        <h1 className="text-2xl font-bold text-fin-green-900 dark:text-fin-green-100">
          AI Financial Advisor
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Ask me anything about your finances
        </p>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 scrollbar-hide pb-24">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isThinking && <ThinkingLoader />}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <ChatInput onSend={handleSend} disabled={isTyping || isThinking} />
    </div>
  );
}
