import { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, X } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string, files?: File[]) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (message.trim() || files.length > 0) {
      onSend(message.trim(), files.length > 0 ? files : undefined);
      setMessage('');
      setFiles([]);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="sticky bottom-0 bg-white dark:bg-fin-green-950 border-t border-fin-green-200 dark:border-fin-green-800 p-4">
      {/* File previews */}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-fin-green-100 dark:bg-fin-green-900 rounded-lg text-sm"
            >
              <span className="text-fin-green-700 dark:text-fin-green-300 font-medium truncate max-w-[200px]">
                {file.name}
              </span>
              <button
                onClick={() => removeFile(index)}
                className="text-fin-green-600 dark:text-fin-green-400 hover:text-fin-green-800 dark:hover:text-fin-green-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input container */}
      <div className="relative flex items-end gap-2">
        {/* File upload button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          className="p-2.5 text-fin-green-600 dark:text-fin-green-400 hover:bg-fin-green-100 dark:hover:bg-fin-green-900 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Upload file"
        >
          <Paperclip className="w-5 h-5" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Textarea */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Ask me anything about your finances..."
            rows={1}
            className="w-full px-4 py-3 pr-12 bg-fin-green-50 dark:bg-fin-green-900 border border-fin-green-200 dark:border-fin-green-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-fin-green-500 dark:focus:ring-fin-green-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 font-medium disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            style={{ minHeight: '48px', maxHeight: '200px' }}
          />

          {/* Send button inside textarea */}
          <button
            onClick={handleSend}
            disabled={disabled || (!message.trim() && files.length === 0)}
            className="absolute right-2 bottom-2 p-2 bg-fin-green-600 hover:bg-fin-green-700 dark:bg-fin-green-500 dark:hover:bg-fin-green-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
        Press Enter to send, Shift+Enter for new line
      </p>
    </div>
  );
}
