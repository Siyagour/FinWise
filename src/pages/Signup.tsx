import { Box, Button, Container, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { type ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'new' | 'old'>('new');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signup(userType, name, email);
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#ffffff', border: '1px solid #d1fae5' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#0f5132' }}>
          Sign Up
        </Typography>
        <Typography sx={{ color: '#0f5132', mb: 3 }}>
          Create your account and get your financial dashboard ready.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            select
            label="User Type"
            value={userType}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUserType(e.target.value as 'new' | 'old')}
            fullWidth
          >
            <MenuItem value="new">New User</MenuItem>
            <MenuItem value="old">Old User</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" size="large">
            Create Account
          </Button>
        </Box>
        <Typography sx={{ mt: 2, color: '#0f5132' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
}
