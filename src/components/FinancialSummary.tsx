import { Box, Card, CardContent, Typography } from '@mui/material';
import { LineChart, PieChart } from '@mui/x-charts';
import type { FinancialDatum } from '../contexts/AuthContext';

interface FinancialSummaryProps {
  financialData: FinancialDatum[];
  userName: string;
}

export default function FinancialSummary({ financialData, userName }: FinancialSummaryProps) {
  const portfolioValue = financialData.reduce((sum, item) => sum + item.value, 0);
  const investedAmount = portfolioValue * 0.88;
  const gains = portfolioValue - investedAmount;
  const gainPercent = investedAmount > 0 ? (gains / investedAmount) * 100 : 0;

  const growthMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const growthSeries = [58, 61, 65, 69, 73, 79];
  const stockPerformance = [44, 46, 51, 50, 55, 59];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f5132', mb: 1 }}>
        Financial Summary
      </Typography>
      <Typography variant="body1" sx={{ color: '#0f5132', mb: 3 }}>
        Welcome back, {userName}. Here is your latest portfolio snapshot.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 2,
          mb: 3,
        }}
      >
        <Card sx={{ border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography variant="body2" sx={{ color: '#0f5132' }}>
              Portfolio Value
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f5132' }}>
              ${portfolioValue.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography variant="body2" sx={{ color: '#0f5132' }}>
              Invested Amount
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f5132' }}>
              ${investedAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography variant="body2" sx={{ color: '#0f5132' }}>
              Total Gain
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f766e' }}>
              {gains >= 0 ? '+' : ''}
              ${gains.toLocaleString(undefined, { maximumFractionDigits: 0 })} ({gainPercent.toFixed(1)}%)
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: 2,
        }}
      >
        <Card sx={{ border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Portfolio Growth
            </Typography>
            <LineChart
              xAxis={[{ scaleType: 'point', data: growthMonths }]}
              series={[{ data: growthSeries, label: 'Portfolio ($k)' }]}
              height={260}
            />
          </CardContent>
        </Card>

        <Card sx={{ border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Asset Allocation
            </Typography>
            <PieChart
              series={[
                {
                  data: financialData.map((item, index) => ({
                    id: index,
                    label: item.label,
                    value: item.value,
                  })),
                  innerRadius: 42,
                  outerRadius: 110,
                },
              ]}
              height={260}
            />
          </CardContent>
        </Card>

        <Card sx={{ gridColumn: { xs: 'span 1', lg: 'span 2' }, border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Stock Performance
            </Typography>
            <LineChart
              xAxis={[{ scaleType: 'point', data: growthMonths }]}
              series={[{ data: stockPerformance, label: 'Stocks ($k)' }]}
              height={280}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
