'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

const CATEGORIES = [
  {
    name: 'Fittings & Tubings',
    img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1771948480/reducing-hex-couplings-npt_i2twbq.png", // replace with Cloudinary URL
    href: '/collections/fittings-tubings',
    subs: [
      'Compression Fittings', 'Instrumentation Fittings', 'Stainless Tube Fittings',
      'Bulkhead Fittings', 'Push-to-Connect', 'Straight Union',
      'Elbow & Tee Fittings', 'Stainless Tubing', 'Plastic Tubing',
    ],
  },
  {
    name: 'Pneumatic Systems',
    img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774007615/DSC_7050_ESNC-100x100_jjj5g6-removebg-preview_apf6ug.png",
    href: '/collections/pneumatics',
    subs: [
      'Pneumatic Cylinders', 'Solenoid Valves', 'FRL Units',
      'Air Preparation', 'Pneumatic Hose', 'Quick Couplings',
      'Pressure Switches', 'Flow Controls', 'Mufflers',
    ],
  },
  {
    name: 'Hydrogen Application',
    img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768569088/HP_Ball_Valve_2_aybek4.webp",
    href: '/collections/hydrogen-application',
    subs: [
      'H₂ Rated Valves', 'H₂ Regulators', 'Hydrogen Tubing',
      'High-Purity Fittings', 'Stainless Steel Valves', 'Check Valves', 'Relief Valves',
    ],
  },
  {
    name: 'Batu Valves',
    img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774523763/steel-ball-valve_mqpk70.jpg",
    href: '/collections/batu-valve',
    subs: [
      'Ball Valves', 'Gate Valves', 'Globe Valves', 'Check Valves',
      'Butterfly Valves', 'Steam Rated Valves', 'High-Temp Valves', 'Forged Steel Valves',
    ],
  },
  {
    name: 'Tormac Pumps',
    img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774524120/08-TEP-Peripheral-pumps-1-259x300_fstbrp.png",
    href: '/collections/tormac-pumps',
    subs: [
      'Centrifugal Pumps', 'Self-Priming Pumps', 'Chemical Pumps',
      'Agricultural Pumps', 'Booster Pumps', 'Submersible Pumps', 'Pump Accessories',
    ],
  },
  {
    name: 'Manifolds',
    img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768296193/5VM-SS-H_-_JPG_qrcujq.jpg",
    href: '/collections/manifolds',
    subs: [
      'Instrument Manifolds', 'Distribution Blocks', '2-Valve Manifolds',
      '3-Valve Manifolds', '5-Valve Manifolds', 'Hydraulic Manifolds', 'Pneumatic Manifolds',
    ],
  },
  {
    name: 'Pipe & Weld Fittings',
    img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774524013/male-street-tee_orc5ck.png",
    href: '/collections/pipe-fittings',
    subs: [
      'NPT Fittings', 'BSP Fittings', 'Socket Weld Fittings',
      'Butt Weld Fittings', 'Flanges', 'Elbows & Tees', 'Reducers', 'Caps & Plugs',
    ],
  },
  {
    name: 'Browse All Products',
    img: null,
    href: '/collections',
    subs: ['View All Categories', 'New Arrivals', 'Featured Products', 'Clearance Items'],
  },
];

export default function Categories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">

        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 1,
            }}
          >
            Browse by Category
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: '2.8rem', md: '4rem' },
              fontWeight: 900,
              textTransform: 'uppercase',
              color: 'text.primary',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            Explore Our Catalog
          </Typography>
        </Box>

        {/* Category Grid */}
        <Box
          sx={{
            display: 'grid',
            // Changed to 1 column on mobile, 2 on small tablets, 4 on desktop
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            // Added significant spacing between cards
            gap: { xs: 2, md: 3 },
          }}
        >
          {CATEGORIES.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <Box
                key={cat.href}
                sx={{
                  bgcolor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
    
                  border: '1px solid',
                  borderColor: isOpen ? 'primary.main' : 'divider',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  // Card-like shadow and lift effect on hover
                  '&:hover': { 
                    bgcolor: 'background.paper',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    transform: 'translateY(-5px)',
                    borderColor: 'primary.main'
                  },
                }}
              >
                {/* Card Header (Clickable Area) */}
                <Box
                  onClick={() => toggle(i)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stacked image and text for more "size"
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 2,
                    p: 4, // Increased padding to make the card feel larger
                    cursor: 'pointer',
                  }}
                >
                  {/* Image / Placeholder */}
                  <Box
                    sx={{
                      width: 200, // Bigger image size
                      height: 180,
                      flexShrink: 0,

                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {cat.img ? (
                      <Box
                        component="img"
                        src={cat.img}
                        alt={cat.name}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          bgcolor: 'grey.200',
                        }}
                      />
                    )}
                  </Box>

                  {/* Name + Toggle Text */}
                  <Box sx={{ width: '100%' }}>
                    <Typography
                      sx={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        fontSize: '1.25rem', // Larger font
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        color: 'text.primary',
                        lineHeight: 1.2,
                        mb: 1
                      }}
                    >
                      {cat.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '13px',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontWeight: 600,
                      }}
                    >
                      {isOpen ? 'Hide' : 'View'} {cat.subs.length} Items
                      <Box
                        component="span"
                        sx={{
                          display: 'inline-block',
                          fontSize: '10px',
                          transition: 'transform 0.3s',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        ▼
                      </Box>
                    </Typography>
                  </Box>
                </Box>

                {/* Subcategory Dropdown */}
                <Collapse in={isOpen}>
                  <Box
                    sx={{
                      bgcolor: 'grey.50',
                      borderTop: '1px solid',
                      borderColor: 'divider',
                      py: 2,
                      px: 1,
                    }}
                  >
                    {cat.subs.map((sub) => (
                      <Box
                        key={sub}
                        component="a"
                        href={cat.href}
                        sx={{
                          display: 'block',
                          px: 2,
                          py: 1,
                          fontSize: '14px',
                          color: 'text.secondary',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                            pl: 3, // Slight indent on hover
                          },
                        }}
                      >
                        {sub}
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
}