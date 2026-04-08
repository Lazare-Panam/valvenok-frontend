'use client';

import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import SquareIcon from "@mui/icons-material/Square";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from 'next/navigation';

export default function RegisterInfo() {
  const router = useRouter();

  const benefits = [
    "Expedited procurement and inventory tracking",
    "Direct access to technical CAD data",
    "Streamlined project management tools",
    "Priority engineering network access",

  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3" sx={{ color: '#61D649', fontWeight: 900, mb: 2, textTransform: 'uppercase' }}>
        New Customer
      </Typography>
      
      <Typography variant="body1" sx={{ color: '#4a6b45', fontSize: "1.1rem", mb: 4 }}>
        Join the Valvenok ecosystem for industrial excellence:
      </Typography>

      <List sx={{ mb: 4 }}>
        {benefits.map((text, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start", px: 0, py: 1 }}>
            <ListItemIcon sx={{ minWidth: "28px", mt: 1 }}>
              <SquareIcon sx={{ fontSize: 8, color: '#61D649' }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ color: '#1c2e1a', fontSize: "1.05rem", fontWeight: 500 }}>
                  {text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        endIcon={<ChevronRightIcon />}
        onClick={() => router.push("/register")}
        sx={{
          backgroundColor: 'primary.main',
          color: '#fff',
          "&:hover": { backgroundColor: 'primary.dark' },
          py: 2, px: 6, fontWeight: 800, borderRadius: 0, boxShadow: "none", letterSpacing: 2
        }}
      >
        CREATE ACCOUNT
      </Button>
    </Box>
  );
}