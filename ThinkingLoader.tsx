export default function ThinkingLoader() {
  return (
    <div className="flex gap-3 mb-6">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fin-green-100 dark:bg-fin-green-800 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-fin-green-600 dark:bg-fin-green-400 animate-pulse"></div>
      </div>

      {/* Thinking message */}
      <div className="bg-fin-green-100 dark:bg-fin-green-900 rounded-2xl px-4 py-3">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium italic">
          Thinking...
        </p>
      </div>
    </div>
  );
}
