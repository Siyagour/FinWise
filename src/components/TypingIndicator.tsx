export default function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-6">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fin-green-100 dark:bg-fin-green-800 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-fin-green-600 dark:bg-fin-green-400"></div>
      </div>

      {/* Typing animation */}
      <div className="flex items-center gap-1 bg-fin-green-100 dark:bg-fin-green-900 rounded-2xl px-4 py-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-fin-green-600 dark:bg-fin-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-fin-green-600 dark:bg-fin-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-fin-green-600 dark:bg-fin-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
