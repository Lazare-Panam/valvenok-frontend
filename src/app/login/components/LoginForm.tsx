'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useLogin } from '../hooks/useLogin';

export default function LoginForm() {
  const router = useRouter();
  const { mutate: login, isPending } = useLogin();

  // State for controlled inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    
    login(formData);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 900, 
          mb: 1, 
          textTransform: 'uppercase', 
          letterSpacing: 2, 
          color: 'primary.main' 
        }}
      >
        Sign In
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
        Access your Valvenok account.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          label="EMAIL ADDRESS"
          name="email"
          autoFocus
          value={formData.email}
          onChange={handleChange}
          disabled={isPending}
          slotProps={{
            input: { sx: { borderRadius: 0 } }
          }}
        />
        <TextField
          margin="normal"
          fullWidth
          label="PASSWORD"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          disabled={isPending}
          slotProps={{
            input: { sx: { borderRadius: 0 } }
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isPending}
          sx={{ 
            mt: 3, 
            mb: 2, 
            borderRadius: 0, 
            bgcolor: 'primary.main', 
            py: 1.8,
            fontWeight: 'bold',
            letterSpacing: 1,
            boxShadow: 'none',
            '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
            '&:disabled': { bgcolor: 'primary.light', color: 'white' }
          }}
        >
          {isPending ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            'Sign In'
          )}
        </Button>
      </Box>

      <Typography variant="caption" sx={{ display: "block", mt: 4, color: "text.secondary", lineHeight: 1.6 }}>
        By signing in, you agree to the Valvenok{' '}
        <Link href="/terms" sx={{ color: 'primary.dark', fontWeight: 700 }}>
          Terms of Use
        </Link>{' '}
        and Privacy Notice.
      </Typography>
      
      <Typography variant="caption" sx={{ display: "block", mt: 2, color: "text.secondary", opacity: 0.6 }}>
        Authorized access only.{' '}
        <Link 
          onClick={() => router.push('/adminLogin')}
          sx={{ color: 'inherit', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
        >
          Admin Gateway
        </Link>
      </Typography>

     
    </Box>
  );
}