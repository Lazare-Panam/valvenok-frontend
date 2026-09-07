'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { FeaturedValve } from './FeaturedValvesData';

interface FeaturedValveCardProps {
  valve: FeaturedValve;
}

export default function FeaturedValveCard({ valve }: FeaturedValveCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const logoH = valve.logoHeight ?? 40;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    setHovered(false);
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
  };

  return (
    <Link href={valve.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <Box
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'relative',
          bgcolor: '#fff',
          border: '1px solid',
          borderColor: hovered ? 'primary.main' : 'divider',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          willChange: 'transform',
          boxShadow: hovered
            ? '0 20px 40px rgba(0,0,0,0.12)'
            : '0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        {/* Brand logo */}
        <Box sx={{
          position: 'absolute',
          top: 14,
          right: 14,
          zIndex: 3,
          height: logoH,
          maxWidth: 140,
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#fff',
          px: 0.5,
        }}>
          <Box
            component="img"
            src={valve.brandLogo}
            alt={valve.brand}
            sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', opacity: 0.75 }}
          />
        </Box>

        {/* Clickable image */}
        <Link href={valve.href} style={{ textDecoration: 'none' }}>
          <Box sx={{
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#fff',
            borderBottom: '1px solid',
            borderColor: 'divider',
            p: 3,
            cursor: 'pointer',
          }}>
            <Box
              component="img"
              src={valve.thumbnail}
              alt={valve.name}
              sx={{
                maxHeight: 240,
                maxWidth: '100%',
                objectFit: 'contain',
                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.35s ease',
              }}
            />
          </Box>
        </Link>

        {/* Content */}
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

          {/* Category tag */}
          <Typography sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '.15em',
            textTransform: 'uppercase',
            color: 'primary.main',
            mb: 0.75,
          }}>
            {valve.category}
          </Typography>

          {/* Clickable title */}
          <Link href={valve.href} style={{ textDecoration: 'none' }}>
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 200,
              fontSize: '1.45rem',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              color: 'text.primary',
              mb: 2,
              cursor: 'pointer',
              '&:hover': { color: 'primary.main' },
              transition: 'color 0.2s ease',
            }}>
              {valve.name}
            </Typography>
          </Link>

          {/* Specs */}
          <Box sx={{ mb: 2.5 }}>
            {valve.specs.map((s, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  py: 0.9,
                  borderBottom: '1px solid',
                  borderColor: 'grey.100',
                }}
              >
                <Typography sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'text.secondary',
                  whiteSpace: 'nowrap',
                  minWidth: 110,
                }}>
                  {s.label}
                </Typography>
                <Typography sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'text.primary',
                }}>
                  {s.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
