'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useLogin } from '../hooks/useLogin';
import { Field, PasswordField, OrDivider, primaryBtnSx, secondaryBtnSx, linkSx } from '@/src/app/Common/AuthShell';
import { T } from '@/src/app/Landing/modern/tokens';

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    login(formData);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'grid', gap: 2.25 }}>
        <Field
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@company.com"
          autoFocus
          value={formData.email}
          onChange={handleChange}
          disabled={isPending}
        />
        <PasswordField
          label="Password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          disabled={isPending}
          extra={
            <Box component={NextLink} href="/contact" sx={{ ...linkSx, fontSize: '0.82rem', fontWeight: 600 }}>
              Forgot password?
            </Box>
          }
        />
        <Button type="submit" fullWidth variant="contained" disableElevation disabled={isPending} sx={{ ...primaryBtnSx, mt: 0.5 }}>
          {isPending ? <CircularProgress size={24} color="inherit" /> : 'Sign in'}
        </Button>
      </Box>

      <OrDivider label="New to Valvenok?" />
      <Button component={NextLink} href="/register" fullWidth variant="outlined" sx={secondaryBtnSx}>
        Create an account
      </Button>

      <Typography sx={{ mt: 3, fontSize: '0.78rem', lineHeight: 1.6, color: T.muted, textAlign: 'center' }}>
        By signing in, you agree to the Valvenok{' '}
        <Box component={NextLink} href="/terms" sx={linkSx}>Terms of Use</Box> and{' '}
        <Box component={NextLink} href="/privacy" sx={linkSx}>Privacy Notice</Box>.
        <br />
        <Box component={NextLink} href="/adminLogin" sx={{ color: 'inherit', textDecoration: 'none', opacity: 0.75, '&:hover': { color: T.greenDark } }}>
          Admin gateway
        </Box>
      </Typography>
    </>
  );
}
