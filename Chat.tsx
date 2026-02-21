import { useState, useRef, useEffect } from 'react';
import ChatInput from '../components/ChatInput';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';
import ThinkingLoader from '../components/ThinkingLoader';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI financial advisor. How can I help you with your financial questions today?',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isThinking]);

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

    // Show thinking indicator
    setIsThinking(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsThinking(false);

    // Show typing indicator
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate AI response
    const responses = [
      "That's a great question! Based on your inquiry, I'd recommend considering your risk tolerance and investment timeline. Would you like me to elaborate on any specific aspect?",
      "I understand your concern. Let me break this down for you: financial planning involves several key components including budgeting, saving, investing, and risk management.",
      "Thank you for sharing that information. To provide you with the best advice, I'd need to understand more about your financial goals and current situation.",
      "Based on general best practices, I'd suggest starting with an emergency fund covering 3-6 months of expenses, then focusing on high-interest debt repayment before investing.",
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: randomResponse,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
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
