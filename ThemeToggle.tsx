import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2.5 rounded-lg bg-white dark:bg-fin-green-900 border border-fin-green-200 dark:border-fin-green-800 shadow-lg hover:bg-fin-green-50 dark:hover:bg-fin-green-800 transition-colors max-md:top-16"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-fin-green-700 dark:text-fin-green-300" />
      ) : (
        <Sun className="w-5 h-5 text-fin-green-700 dark:text-fin-green-300" />
      )}
    </button>
  );
}
