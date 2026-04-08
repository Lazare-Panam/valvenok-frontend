'use client';

import React from 'react';
import { Box, Container, Divider } from '@mui/material';
// Change the import to Grid2 specifically
import Grid from '@mui/material/Grid'; 
import LoginForm from './components/LoginForm';
import RegisterInfo from './components/RegisterInfo';

export default function AuthPage() {
  return (
    <Box sx={{ 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center', 
      bgcolor: 'background.default',
    }}>
      <Container maxWidth="xl">
        {/* Grid container handles the wrap */}
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'stretch', flexWrap: 'nowrap' }}>
          
          {/* LEFT COLUMN - Takes up 5 units on desktop */}
          <Grid size={{ xs: 12, md: 5 }}>
            <LoginForm />
          </Grid>

          {/* DIVIDER COLUMN - Hidden on Mobile, takes 0.5 units on desktop */}
          <Grid size={{ xs: 0,md: 0.5 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Divider 
              orientation="vertical" 
              flexItem 
              sx={{ borderColor: '#c8e8c0', borderWidth: 1 }} 
            />
          </Grid>

          {/* RIGHT COLUMN - Takes up 6.5 units on desktop */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <RegisterInfo />
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}