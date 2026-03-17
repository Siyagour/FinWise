import { Box, Button, Card, CardContent, Typography } from '@mui/material';

interface NewUserDashboardProps {
  onStartAdvice: () => void;
}

const quotes = [
  {
    text: 'Do not save what is left after spending; spend what is left after saving.',
    author: 'Warren Buffett',
  },
  {
    text: 'A budget is telling your money where to go instead of wondering where it went.',
    author: 'Dave Ramsey',
  },
  {
    text: 'Know what you own, and know why you own it.',
    author: 'Peter Lynch',
  },
  {
    text: 'The stock market is a device for transferring money from the impatient to the patient.',
    author: 'Warren Buffett',
  },
  {
    text: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin',
  },
];

export default function NewUserDashboard({ onStartAdvice }: NewUserDashboardProps) {
  return (
    <Box sx={{ maxWidth: 980, mx: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f5132', mb: 1 }}>
        Welcome to FinWise
      </Typography>
      <Typography variant="body1" sx={{ color: '#0f5132', mb: 3 }}>
        Build momentum with ideas from proven investors and timeless financial thinking.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2,
          mb: 4,
        }}
      >
        {quotes.map((quote) => (
          <Card key={quote.text} sx={{ borderRadius: 2, border: '1px solid #d1fae5', backgroundColor: '#ffffff' }}>
            <CardContent sx={{ color: '#0f5132' }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1.5 }}>
                "{quote.text}"
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#0f5132', fontWeight: 700 }}>
                {quote.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          size="large"
          variant="contained"
          onClick={onStartAdvice}
          sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
        >
          Start getting advice from your personal financial advisor
        </Button>
      </Box>
    </Box>
  );
}
