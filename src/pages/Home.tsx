import { Avatar, AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/**
 * Home page is now marketing-only.
 * Financial summary has moved to /dashboard for old users.
 */
export default function Home() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleGetStarted = () => {
    navigate(isAuthenticated ? '/dashboard' : '/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fin-green-50 via-white to-fin-green-50/50 dark:from-fin-green-950 dark:via-fin-green-950 dark:to-fin-green-900">
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          color: 'inherit',
          borderBottom: '1px solid rgba(15, 81, 50, 0.14)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f5132' }}>
            FinWise
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            {isAuthenticated ? (
              <>
                <Avatar sx={{ width: 34, height: 34, bgcolor: '#0f5132' }}>
                  {user?.name?.charAt(0).toUpperCase() ?? 'U'}
                </Avatar>
                <Typography sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 600 }}>
                  {user?.name}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ borderColor: '#0f5132', color: '#0f5132' }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outlined" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button variant="contained" onClick={() => navigate('/signup')}>
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-fin-green-900 dark:text-fin-green-100 mb-6 leading-tight">
            Your AI-Powered
            <span className="block text-fin-green-600 dark:text-fin-green-400">Financial Advisor</span>
          </h1>
          <p className="text-xl sm:text-2xl text-fin-green-800 dark:text-fin-green-200 mb-8 font-medium">
            Make smarter financial decisions with intelligent guidance tailored to your goals with your personal Wealth Manager
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-2 px-8 py-4 bg-fin-green-600 hover:bg-fin-green-700 text-white rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-fin-green-900 dark:text-fin-green-100 mb-12">
            Why Choose FinWise?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Ai Financial Insights',
                description: 'Get personalized financial advice powered by AI.',
              },
              {
                icon: TrendingUp,
                title: 'Smart Expense Tracking',
                description: 'Automatically categorize and track your expenses',
              },
              {
                icon: Shield,
                title: 'Secure & Private',
                description: 'Your financial data is encrypted and protected with bank-level security',
              },
              {
                icon: BarChart3,
                title: 'Seamless Data Integration',
                description: 'Connect Splitwise, bank statements, and other financial sources effortlessly',
              },
              {
                icon: Users,
                title: 'Interactive Financial Analytics',
                description: 'Visualize your finances with powerful dashboards',
              },
              {
                icon: Zap,
                title: '24/7 Availability',
                description: 'Get financial guidance whenever you need it, day or night',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-fin-green-900 rounded-xl border border-fin-green-200 dark:border-fin-green-800 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-fin-green-100 dark:bg-fin-green-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-fin-green-600 dark:text-fin-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-fin-green-900 dark:text-fin-green-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-fin-green-700 dark:text-fin-green-300 font-medium">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-fin-green-600 dark:bg-fin-green-800 rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-fin-green-100 mb-8 font-medium">
            Start your journey to financial wisdom today
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-fin-green-600 rounded-lg font-semibold text-lg hover:bg-fin-green-50 transition-colors"
          >
            Start Chatting
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-fin-green-200 dark:border-fin-green-800">
        <div className="max-w-6xl mx-auto text-center text-fin-green-700 dark:text-fin-green-300">
          <p className="font-medium">© 2026 FinWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
