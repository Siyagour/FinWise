import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  MessageSquare, 
  Info, 
  HelpCircle, 
  FileText, 
  Shield, 
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavItem {
  path: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/chat', icon: MessageSquare, label: 'AI Chat' },
  { path: '/about', icon: Info, label: 'About Us' },
  { path: '/faqs', icon: HelpCircle, label: 'FAQs' },
  { path: '/disclaimer', icon: FileText, label: 'Disclaimer' },
  { path: '/privacy', icon: Shield, label: 'Privacy Policy' },
];

interface SidebarProps {
  onCollapseChange?: (collapsed: boolean) => void;
}

export default function Sidebar({ onCollapseChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    onCollapseChange?.(isCollapsed);
  }, [isCollapsed, onCollapseChange]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-white dark:bg-fin-green-900 border border-fin-green-200 dark:border-fin-green-800 shadow-lg hover:bg-fin-green-50 dark:hover:bg-fin-green-800 transition-colors md:hidden"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? (
          <X className="w-5 h-5 text-fin-green-700 dark:text-fin-green-300" />
        ) : (
          <Menu className="w-5 h-5 text-fin-green-700 dark:text-fin-green-300" />
        )}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white dark:bg-fin-green-950 border-r border-fin-green-200 dark:border-fin-green-800 transition-all duration-300 z-40 ${
          isCollapsed ? 'w-16' : 'w-64'
        } max-md:w-64 ${
          isMobileOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
        }`}
      >
      <div className="flex flex-col h-full">
        {/* Logo/Brand */}
        <div className={`p-4 border-b border-fin-green-200 dark:border-fin-green-800 ${isCollapsed ? 'px-2' : ''}`}>
          {!isCollapsed && (
            <h1 className="text-xl font-semibold text-fin-green-700 dark:text-fin-green-300">
              FinWise
            </h1>
          )}
          {isCollapsed && (
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-lg bg-fin-green-600 dark:bg-fin-green-500"></div>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-fin-green-100 dark:bg-fin-green-900 text-fin-green-700 dark:text-fin-green-200'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-fin-green-50 dark:hover:bg-fin-green-900/50'
                } ${isCollapsed ? 'justify-center px-2' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Button */}
        <div className="p-4 border-t border-fin-green-200 dark:border-fin-green-800 max-md:hidden">
          <button
            onClick={toggleCollapse}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-fin-green-50 dark:hover:bg-fin-green-900/50 transition-colors"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 mx-auto" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
