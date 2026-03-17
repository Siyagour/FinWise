import { Box, Card, CardContent, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar, { type DashboardNavItem } from '../components/Sidebar';
import NewUserDashboard from '../components/NewUserDashboard';
import OldUserDashboard from '../components/OldUserDashboard';
import { useAuth } from '../contexts/AuthContext';

const baseItems: DashboardNavItem[] = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Home', path: '/' },
  { label: 'AI Chat', path: '/ai-chat' },
  { label: 'Stock Insights', path: '/dashboard/stock-insights' },
  { label: 'Investments', path: '/dashboard/investments' },
  { label: 'Philosophical Advisory', path: '/dashboard/philosophical-advisory' },
];

function PlaceholderPanel({ title, text }: { title: string; text: string }) {
  return (
    <Box sx={{ maxWidth: 920 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f5132', mb: 1 }}>
        {title}
      </Typography>
      <Card sx={{ border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
        <CardContent sx={{ color: '#0f5132' }}>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) return null;

  const isOldUser = user?.financialData?.length > 0;
  const navItems = isOldUser
    ? [...baseItems, { label: 'History', path: '/dashboard/history' }]
    : baseItems;

  const currentPath = location.pathname;

  let content = null;
  if (currentPath === '/dashboard') {
    content = isOldUser ? (
      <OldUserDashboard isHistoryView={false} />
    ) : (
      <NewUserDashboard onStartAdvice={() => navigate('/ai-chat')} />
    );
  } else if (currentPath === '/dashboard/stock-insights') {
    content = (
      <PlaceholderPanel
        title="Stock Insights"
        text="Market sentiment, trend breakdowns, and risk indicators will appear here."
      />
    );
  } else if (currentPath === '/dashboard/investments') {
    content = (
      <PlaceholderPanel
        title="Investments"
        text="Track allocations, rebalance recommendations, and watchlists in this section."
      />
    );
  } else if (currentPath === '/dashboard/philosophical-advisory') {
    content = (
      <PlaceholderPanel
        title="Philosophical Advisory"
        text="Strategic mindset guidance for long-term discipline and investor psychology."
      />
    );
  } else if (currentPath === '/dashboard/history' && isOldUser) {
    content = <OldUserDashboard isHistoryView />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#ecfdf5' }}>
      <Sidebar items={navItems} activePath={location.pathname} onNavigate={navigate} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '260px' },
          p: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 8, md: 4 },
        }}
      >
        {content}
      </Box>
    </Box>
  );
}
