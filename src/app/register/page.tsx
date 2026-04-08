'use client';

import React, { useState } from 'react';
import {
  Box, Container, Typography, TextField, Button,
  Stack, Autocomplete, CircularProgress, Link as MuiLink
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/navigation';
import { alpha, useTheme } from '@mui/material/styles';

const DISPLAY_FONT = 'var(--font-display)';

const countries = [
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'US', label: 'United States',  phone: '1'  },
  { code: 'DE', label: 'Germany',        phone: '49' },
  { code: 'FR', label: 'France',         phone: '33' },
  { code: 'AE', label: 'UAE',            phone: '971'},
  { code: 'AU', label: 'Australia',      phone: '61' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        fontWeight: 800,
        fontSize: '13px',
        letterSpacing: '0.12em',
        color: 'text.primary',
        textTransform: 'uppercase',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        '&::after': {
          content: '""',
          flex: 1,
          height: '1px',
          backgroundColor: 'primary.light',
          ml: 1.5,
        },
      }}
    >
      {children}
    </Typography>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const theme = useTheme();

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: alpha(theme.palette.primary.light, 0.25),
      borderRadius: 0,
      '& fieldset': { borderColor: 'transparent' },
      '&:hover fieldset': { borderColor: theme.palette.primary.main },
      '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
      '&.Mui-error fieldset': { borderColor: theme.palette.error.main },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: 'primary.dark' },
    '& .MuiFormHelperText-root': { fontWeight: 600, ml: 0 },
  };

  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '',
    phoneNumber: '', password: '', confirmPassword: '',
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!formData.email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    setLoading(true);

    const payload = {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: `+${selectedCountry.phone}${formData.phoneNumber}`,
    };
    console.log('Register payload:', payload);

    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">

        {/* ── HEADER ── */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 900,
              fontSize: { xs: '2.8rem', md: '4rem' },
              textTransform: 'uppercase',
              lineHeight: 1,
              color: 'text.primary',
              mb: 1.5,
            }}
          >
            Create Account
          </Typography>
          <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 2.5 }} />
          <Typography sx={{ color: 'text.secondary', fontSize: '1.15rem', fontWeight: 500 }}>
            Join Valvenok to access pricing, stock, and procurement tools.
          </Typography>
        </Box>

        {/* ── FORM CARD ── */}
        <Box
          sx={{
            bgcolor: '#fff',
            border: '1.5px solid',
            borderColor: 'primary.light',
            p: { xs: 3, md: 5 },
            position: 'relative',
          }}
        >
          {loading && (
            <Box sx={{
              position: 'absolute', inset: 0,
              bgcolor: 'rgba(255,255,255,0.85)',
              zIndex: 10, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 2,
            }}>
              <CircularProgress color="primary" />
              <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}>
                Creating your account...
              </Typography>
            </Box>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate>

            {/* EMAIL */}
            <SectionLabel>User ID / Email Address</SectionLabel>
            <TextField
              fullWidth required
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(emailError)}
              helperText={emailError}
              sx={{ ...fieldSx, mb: 5 }}
            />

            {/* PERSONAL */}
            <SectionLabel>Personal Information</SectionLabel>
            <Grid container spacing={3} sx={{ mb: 5 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth required name="firstName" label="First Name"
                  value={formData.firstName} onChange={handleChange} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth required name="lastName" label="Last Name"
                  value={formData.lastName} onChange={handleChange} sx={fieldSx} />
              </Grid>
            </Grid>

            {/* PHONE */}
            <SectionLabel>Contact</SectionLabel>
            <Stack direction="row" sx={{ mb: 5 }}>
              <Autocomplete
                options={countries}
                getOptionLabel={o => `+${o.phone}`}
                value={selectedCountry}
                onChange={(_, val) => val && setSelectedCountry(val)}
                disableClearable
                sx={{
                  width: 130,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    backgroundColor: alpha(theme.palette.primary.light, 0.25),
                    '& fieldset': { borderRight: '1px solid rgba(0,0,0,0.1)', borderColor: 'transparent' },
                    '&:hover fieldset': { borderColor: theme.palette.primary.main },
                  },
                }}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ fontSize: '0.85rem' }} {...props}>
                    <img loading="lazy" width="18"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt="" style={{ marginRight: 8 }} />
                    +{option.phone}
                  </Box>
                )}
                renderInput={params => <TextField {...params} label="Code" />}
              />
              <TextField
                fullWidth required
                name="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                sx={fieldSx}
              />
            </Stack>

            {/* PASSWORD */}
            <SectionLabel>Account Security</SectionLabel>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth required name="password" type="password" label="Password"
                  value={formData.password} onChange={handleChange}
                  error={Boolean(passwordError)} helperText={passwordError} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth required name="confirmPassword" type="password" label="Confirm Password"
                  value={formData.confirmPassword} onChange={handleChange}
                  error={Boolean(passwordError)} sx={fieldSx} />
              </Grid>
            </Grid>

            {/* ACTIONS */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 5 }}>
              <Button
                variant="outlined"
                onClick={() => router.push('/login')}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.dark',
                  borderRadius: 0,
                  px: 6, py: 1.75,
                  fontWeight: 700,
                  fontSize: '15px',
                  letterSpacing: '0.08em',
                  borderWidth: '2px',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.light, 0.25),
                    borderWidth: '2px',
                  },
                }}
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                endIcon={!loading && <ChevronRightIcon />}
                sx={{
                  borderRadius: 0,
                  px: 6, py: 1.75,
                  fontWeight: 800,
                  fontSize: '15px',
                  letterSpacing: '0.08em',
                  boxShadow: 'none',
                  '&:hover': { boxShadow: 'none' },
                  '&:disabled': { bgcolor: alpha(theme.palette.primary.main, 0.5), color: '#fff' },
                }}
              >
                {loading ? 'CREATING...' : 'CREATE ACCOUNT'}
              </Button>
            </Stack>

            {/* TERMS */}
            <Typography
              variant="caption"
              sx={{ display: 'block', mt: 4, color: 'text.secondary', fontStyle: 'italic', textAlign: 'center' }}
            >
              By submitting, I agree to Valvenok's{' '}
              <MuiLink href="/terms" sx={{ color: 'primary.dark', fontWeight: 700, cursor: 'pointer' }}>
                Terms of Use
              </MuiLink>{' '}
              and Privacy Notice.
            </Typography>

          </Box>
        </Box>

        {/* BACK TO LOGIN */}
        <Typography sx={{ mt: 3, textAlign: 'center', color: 'text.secondary', fontSize: '0.95rem' }}>
          Already have an account?{' '}
          <MuiLink
            onClick={() => router.push('/login')}
            sx={{ color: 'primary.dark', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
          >
            Sign in here
          </MuiLink>
        </Typography>

      </Container>
    </Box>
  );
}