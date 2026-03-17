import { Box, Card, CardContent, Typography } from '@mui/material';
import PersonalizedFinancialDashboard from './PersonalizedFinancialDashboard';

interface OldUserDashboardProps {
  isHistoryView: boolean;
}

export default function OldUserDashboard({ isHistoryView }: OldUserDashboardProps) {
  if (isHistoryView) {
    return (
      <Box sx={{ maxWidth: 920 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f5132', mb: 1 }}>
          History
        </Typography>
        <Typography sx={{ color: '#0f5132', mb: 2 }}>
          Review your recent financial activity snapshots.
        </Typography>
        <Card>
          <CardContent sx={{ backgroundColor: '#ffffff' }}>
            <Typography variant="body1">
              Last portfolio update: {new Date().toLocaleDateString()}.
            </Typography>
            <Typography variant="body2" sx={{ color: '#0f5132', mt: 1 }}>
              Historical analytics integration can be connected to your backend transaction logs.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return <PersonalizedFinancialDashboard />;
}
