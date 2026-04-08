'use client';

import React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase', letterSpacing: 2, color: 'primary.main' }}>
        Sign In
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
        Access your Valvenok account.
      </Typography>

      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          label="EMAIL ADDRESS"
          autoFocus
          slotProps={{
            input: { sx: { borderRadius: 0 } }
          }}
        />
        <TextField
          margin="normal"
          fullWidth
          label="PASSWORD"
          type="password"
          slotProps={{
            input: { sx: { borderRadius: 0 } }
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ 
            mt: 3, 
            mb: 2, 
            borderRadius: 0, 
            bgcolor: 'primary.main', 
            py: 1.8,
            fontWeight: 'bold',
            letterSpacing: 1,
            boxShadow: 'none',
            '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' }
          }}
        >
          Sign In
        </Button>
      </Box>

      <Typography variant="caption" sx={{ display: "block", mt: 4, color: "#4a6b45", lineHeight: 1.6 }}>
        By signing in, you agree to the Valvenok <Link href="#" sx={{ color: '#4a9a3a', fontWeight: 700 }}>Terms of Use</Link> and Privacy Notice.
      </Typography>
      
      <Typography variant="caption" sx={{ display: "block", mt: 2, color: "#bbb" }}>
        Authorized access only. <Link href="/adminLogin" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#4a9a3a' } }}>Admin Gateway</Link>
      </Typography>
    </Box>
  );
}