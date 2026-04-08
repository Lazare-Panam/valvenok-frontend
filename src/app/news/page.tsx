'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea, 
  Stack, 
  Chip 
} from '@mui/material';
import Grid from '@mui/material/Grid'; 
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const POSTS = [
  {
    title: "Industrial Mechanical Seals Guide: Engineering Specs & Selection",
    desc: "A comprehensive engineer's guide to Valvenok mechanical seals. Learn about material selection, API flush plans, and performance specs for high-pressure industrial systems",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1775564688/28788ab3-a6d7-4876-b8a3-8e4afd5ac9da_dyi0qw.jpg",
    author: "Sejal Raina",
    date: "April 4, 2026",
    category: "Engineering",
    link: "/news/mechanical-seals-guide"
  },
  {
  title: "Ball Valve vs Gate Valve: Technical Guide to Key Differences & How to Choose",
  desc: "A technical breakdown of ball valves and gate valves — covering sealing performance, pressure ratings, industry applications, and a clear decision framework for engineers and procurement teams.",
  thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1775652608/batu-43_xwieor.jpg", // add your image here
  author: "Kanchan Rajput",
  date: "April 8, 2026",
  category: "Technical Guide",
  link: "/news/ball-valve-vs-gate-valve"
}
];

export default function BlogPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      
      {/* --- HERO SECTION --- */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 12, pb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: '0.4em', opacity: 0.8 }}>
            Knowledge Base
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: '"Barlow Condensed"', fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9 }}>
            Engineering <br /> Insights
          </Typography>
        </Container>
      </Box>

      {/* --- BLOG GRID --- */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%', 
                  borderRadius: 0, 
                  border: '1px solid', 
                  borderColor: 'divider',
                  transition: '0.3s',
                  '&:hover': { borderColor: 'primary.main', boxShadow: '0 12px 24px rgba(0,0,0,0.05)' }
                }}
              >
                <CardActionArea href={post.link} sx={{ height: '100%' }}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200" // Reduced image height slightly
                      image={post.thumbnail}
                      alt={post.title}
                    />
                    <Chip 
                      label={post.category} 
                      size="small" // Smaller Chip
                      sx={{ 
                        position: 'absolute', top: 12, left: 12, 
                        bgcolor: 'primary.main', color: 'white',
                        fontWeight: 800, borderRadius: 0, fontSize: '0.6rem',
                        height: 20, textTransform: 'uppercase'
                      }} 
                    />
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    {/* Small Metadata Area */}
                    <Stack direction="row" spacing={1.5} sx={{ mb: 1.5, opacity: 0.5 }}>
                      <Stack direction="row" alignItems="center" spacing={0.3}>
                        <PersonOutlineIcon sx={{ fontSize: 12 }} />
                        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>
                          {post.author}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.3}>
                        <AccessTimeIcon sx={{ fontSize: 12 }} />
                        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>
                          {post.date}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      sx={{ 
                        fontFamily: '"Barlow Condensed"', 
                        fontWeight: 800, 
                        lineHeight: 1.1,
                        mb: 1.5
                      }}
                    >
                      {post.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary', 
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2, // Shorter description preview
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontSize: '0.85rem'
                      }}
                    >
                      {post.desc}
                    </Typography>

                    <Typography 
                      sx={{ 
                        mt: 2, 
                        color: 'primary.main', 
                        fontWeight: 900, 
                        fontSize: '0.65rem', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}
                    >
                      Read Full Article
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}