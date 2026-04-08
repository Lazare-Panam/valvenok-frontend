// components/layout/DashboardLayout.tsx
'use client';

import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserStore } from '@/src/store/useUserStore';
import { useRouter } from 'next/navigation';

const SIDEBAR_WIDTH = 280;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* ── SIDEBAR ── */}
      <Box
        sx={{
          width: SIDEBAR_WIDTH,
          borderRight: '1px solid',
          borderColor: 'divider',
          bgcolor: '#fff',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          position: 'fixed',
          height: '100vh'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 1 }}>
            VALVENOK
          </Typography>
        </Box>

        <List sx={{ flex: 1, px: 2 }}>
          <ListItem disablePadding>
            <ListItemButton selected sx={{ borderRadius: 0 }}>
              <ListItemIcon><PersonIcon sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Account Details" primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: 0 }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Preferences" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        
        <Box sx={{ p: 2 }}>
          <ListItemButton onClick={handleLogout} sx={{ borderRadius: 0, color: 'error.main' }}>
            <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
            <ListItemText primary="Sign Out" primaryTypographyProps={{ fontWeight: 700 }} />
          </ListItemButton>
        </Box>
      </Box>

      {/* ── MAIN CONTENT ── */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          ml: { md: `${SIDEBAR_WIDTH}px` }, 
          p: { xs: 3, md: 6 } 
        }}
      >
        {children}
      </Box>
    </Box>
  );
}