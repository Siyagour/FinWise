import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppSidebar from './components/AppSidebar';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Chat from './pages/Chat';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppRoutes() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/dashboard');
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';
  const useClassicSidebar = useMemo(
    () => !isDashboardRoute && !isAuthRoute,
    [isAuthRoute, isDashboardRoute]
  );

  return (
    <div className="flex min-h-screen bg-white dark:bg-fin-green-950">
      {useClassicSidebar && <AppSidebar onCollapseChange={setSidebarCollapsed} />}
      <main
        className={`flex-1 transition-all duration-300 ${
          useClassicSidebar ? (sidebarCollapsed ? 'ml-16' : 'ml-64') : ''
        } max-md:ml-0`}
      >
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ai-chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/stock-insights"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/investments"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/philosophical-advisory"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/history"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
