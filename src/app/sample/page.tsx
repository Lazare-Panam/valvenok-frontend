"use client";

import { useState, useMemo, useRef, MouseEvent } from "react";
import { 
  Box, Container, Typography, Button, Paper, Stack, Divider, 
  Accordion, AccordionSummary, AccordionDetails, Breadcrumbs, Link 
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import ConstructionIcon from "@mui/icons-material/Construction";

// --- DATA ---
const DATA = {
  metadata: {
    category: "Instrumentation Fittings",
    subCategory: "JIC to NPT Male Connectors",
    brand: "Valvenok Engineering",
    description: "Industrial-grade PMC series male connectors designed for high-pressure hydraulic transitions. CNC machined from 316 Stainless Steel for maximum corrosion resistance.",
    commonFeatures: [
      { label: "Material", value: "316 Stainless Steel (ASTM A479)" },
      { label: "Pressure", value: "6,000 PSI (413 bar)" },
      { label: "Compliance", value: "NACE MR0175 / ISO 15156" },
      { label: "Origin", value: "UK Manufactured" }
    ],
    images: [
      { url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1771948480/reducing-hex-couplings-npt_i2twbq.png", alt: "PMC Connector Side View" },
      { url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768296193/5VM-SS-H_-_JPG_qrcujq.jpg", alt: "Technical Drawing" },
      { url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774524013/male-street-tee_orc5ck.png", alt: "Thread Detail" }
    ],
    faqs: [
      { q: "What is the maximum temperature rating?", a: "The standard 316SS fitting is rated from -198°C to +425°C, though pressure de-rating applies above 38°C." },
      { q: "Are these fittings NACE compliant?", a: "Yes, all our PMC series connectors are NACE MR0175 compliant as standard for sour gas service." },
      { q: "Do you provide material trace certificates?", a: "Absolutely. Full 3.1 material traceability certificates are available for every heat number upon request." }
    ]
  },
  products: [
    { partNumber: "PMC-2J-2N-SS", tubeOD: "1/8", tubeOD_mm: 3, jic: "5/16-24", npt: "1/8", price: 3.22 },
    { partNumber: "PMC-3J-2N-SS", tubeOD: "3/16", tubeOD_mm: 4, jic: "3/8-24", npt: "1/8", price: 3.44 },
    { partNumber: "PMC-4J-2N-SS", tubeOD: "1/4", tubeOD_mm: 6, jic: "7/16-20", npt: "1/8", price: 3.44 },
    { partNumber: "PMC-4J-4N-SS", tubeOD: "1/4", tubeOD_mm: 6, jic: "7/16-20", npt: "1/4", price: 4.17 },
    { partNumber: "PMC-4J-8N-SS", tubeOD: "1/4", tubeOD_mm: 6, jic: "7/16-20", npt: "1/2", price: 8.10 },
    { partNumber: "PMC-5J-2N-SS", tubeOD: "5/16", tubeOD_mm: 8, jic: "1/2-20", npt: "1/8", price: 3.96 },
    { partNumber: "PMC-5J-4N-SS", tubeOD: "5/16", tubeOD_mm: 8, jic: "1/2-20", npt: "1/4", price: 4.17 },
    { partNumber: "PMC-6J-2N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "1/8", price: 4.14 },
    { partNumber: "PMC-6J-4N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "1/4", price: 5.42 },
    { partNumber: "PMC-6J-6N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "3/8", price: 5.93 },
    { partNumber: "PMC-6J-8N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "1/2", price: 8.10 },
    { partNumber: "PMC-8J-4N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "1/4", price: 6.12 },
    { partNumber: "PMC-8J-6N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "3/8", price: 6.18 },
    { partNumber: "PMC-8J-8N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "1/2", price: 8.10 },
    { partNumber: "PMC-8J-12N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "3/4", price: 12.04 },
    { partNumber: "PMC-10J-6N-SS", tubeOD: "5/8", tubeOD_mm: 16, jic: "7/8-14", npt: "3/8", price: 9.12 },
    { partNumber: "PMC-10J-8N-SS", tubeOD: "5/8", tubeOD_mm: 16, jic: "7/8-14", npt: "1/2", price: 8.36 },
    { partNumber: "PMC-10J-12N-SS", tubeOD: "5/8", tubeOD_mm: 16, jic: "7/8-14", npt: "3/4", price: 12.30 },
    { partNumber: "PMC-12J-8N-SS", tubeOD: "3/4", tubeOD_mm: 16, jic: "7/8-14", npt: "1/2", price: 13.12 },
    { partNumber: "PMC-12J-12N-SS", tubeOD: "3/4", tubeOD_mm: 18, jic: "1 1/16-12", npt: "3/4", price: 13.42 },
    { partNumber: "PMC-12J-16N-SS", tubeOD: "3/4", tubeOD_mm: 18, jic: "1 1/16-12", npt: "1", price: 17.14 },
    { partNumber: "PMC-14J-12N-SS", tubeOD: "7/8", tubeOD_mm: 22, jic: "1 3/16-12", npt: "3/4", price: 13.65 },
    { partNumber: "PMC-16J-12N-SS", tubeOD: "1", tubeOD_mm: 25, jic: "1 5/16-12", npt: "3/4", price: 13.71 },
    { partNumber: "PMC-16J-16N-SS", tubeOD: "1", tubeOD_mm: 25, jic: "1 5/16-12", npt: "1", price: 17.14 },
    { partNumber: "PMC-20J-16N-SS", tubeOD: "1 1/4", tubeOD_mm: 32, jic: "1 5/8-12", npt: "1", price: 22.07 },
    { partNumber: "PMC-20J-20N-SS", tubeOD: "1 1/4", tubeOD_mm: 32, jic: "1 5/8-12", npt: "1 1/4", price: 33.09 },
    { partNumber: "PMC-24J-20N-SS", tubeOD: "1 1/2", tubeOD_mm: 38, jic: "1 7/8-12", npt: "1 1/4", price: 33.12 },
    { partNumber: "PMC-24J-24N-SS", tubeOD: "1 1/2", tubeOD_mm: 38, jic: "1 7/8-12", npt: "1 1/2", price: 41.70 },


   

    { partNumber: "PMC-32J-32N-SS", tubeOD: "2", tubeOD_mm: 50, jic: "2 1/2-12", npt: "2", price: 117.00 }
  ]
};

// --- PROFESSIONAL ZOOM COMPONENT ---
const GlassMagnifier = ({ src, alt }: { src: string; alt: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <Box
      ref={containerRef}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        cursor: "crosshair",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "white",
        overflow: "hidden"
      }}
    >
      <Box component="img" src={src} alt={alt} sx={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }} />
      {showMagnifier && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: "250%", // High zoom level
            backgroundRepeat: "no-repeat",
            bgcolor: "white"
          }}
        />
      )}
    </Box>
  );
};

// --- FAQ SCHEMA FOR GOOGLE ---
const FAQSchema = ({ faqs }: { faqs: any[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

export default function ProductSelector() {
  const filterKeys = useMemo(() => ["tubeOD", "jic", "npt"], []);
  const [selected, setSelected] = useState<Record<string, any>>({ tubeOD: null, jic: null, npt: null });
  const [activeImg, setActiveImg] = useState(0);

  const match = useMemo(() => DATA.products.find(p => filterKeys.every(k => (p as any)[k] === selected[k])), [selected, filterKeys]);

  const available = useMemo(() => {
    const res: Record<string, Set<any>> = {};
    filterKeys.forEach(key => {
      const others = Object.entries(selected).filter(([k]) => k !== key);
      const filtered = DATA.products.filter(p => others.every(([k, v]) => !v || (p as any)[k] === v));
      res[key] = new Set(filtered.map(p => (p as any)[key]));
    });
    return res;
  }, [selected, filterKeys]);

  return (
    <Box component="main" sx={{ bgcolor: "#fcfcfc", minHeight: "100vh", pb: 10 }}>
      <FAQSchema faqs={DATA.metadata.faqs} />
      
      <Box sx={{ borderColor: 'divider', mb: 5, bgcolor: 'white' }}>
        
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: { md: 'sticky' }, top: 20 }}>
              <Paper variant="outlined" sx={{ borderRadius: 0, overflow: 'hidden', aspectRatio: '1/1' }}>
                <GlassMagnifier src={DATA.metadata.images[activeImg].url} alt={DATA.metadata.images[activeImg].alt} />
              </Paper>
              
              <Stack direction="row" spacing={1} mt={2} mb={4}>
                {DATA.metadata.images.map((img, i) => (
                  <Button key={i} onClick={() => setActiveImg(i)} sx={{ p: 0.5, border: '2px solid', borderColor: activeImg === i ? 'primary.main' : 'divider', borderRadius: 0, minWidth: 0, bgcolor: 'white' }}>
                    <Box component="img" src={img.url} sx={{ width: 60, height: 60, objectFit: 'contain' }} />
                  </Button>
                ))}
              </Stack>

              <Stack spacing={1.5}>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: 0, display: 'flex', gap: 2, alignItems: 'center' }}>
                  <LocalShippingIcon color="primary" sx={{ fontSize: 20 }} />
                  <Typography sx={{ fontSize: '12px', fontWeight: 800 }}>UK NEXT-DAY DISPATCH</Typography>
                </Paper>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: 0, display: 'flex', gap: 2, alignItems: 'center' }}>
                  <VerifiedIcon color="primary" sx={{ fontSize: 20 }} />
                  <Typography sx={{ fontSize: '12px', fontWeight: 800 }}>NACE MR0175 COMPLIANT</Typography>
                </Paper>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h1" sx={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: '3.5rem', lineHeight: 0.9, mb: 1 }}>
              {match ? match.partNumber : "PMC SERIES"}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '1.2rem', mb: 5 }}>{DATA.metadata.subCategory}</Typography>

            <Paper variant="outlined" sx={{ p: 4, borderRadius: 0, borderTop: '5px solid', borderTopColor: 'primary.main', mb: 4 }}>
              {filterKeys.map(key => (
                <Box key={key} sx={{ mb: 3 }}>
                  <Typography sx={{ fontSize: '11px', fontWeight: 900, color: 'primary.main', textTransform: 'uppercase', mb: 1 }}>{key.replace('_', ' ')}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {[...new Set(DATA.products.map(p => (p as any)[key]))].map(val => (
                      <Button
                        key={val}
                        disabled={!available[key].has(val)}
                        variant={selected[key] === val ? "contained" : "outlined"}
                        onClick={() => setSelected(prev => ({ ...prev, [key]: prev[key] === val ? null : val }))}
                        sx={{ borderRadius: 0, fontWeight: 800, fontFamily: 'Barlow Condensed', minWidth: '80px' }}
                      >
                        {val}
                      </Button>
                    ))}
                  </Box>
                </Box>
              ))}

              <Divider sx={{ my: 4 }} />

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography sx={{ fontFamily: 'Barlow Condensed', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>
                    {match ? `£${match.price.toFixed(2)}` : "—"}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700 }}>EX. VAT & SHIPPING</Typography>
                </Box>
                <Button variant="contained" disabled={!match} size="large" sx={{ borderRadius: 0, px: 5, py: 2, fontWeight: 900 }}>
                  ADD TO QUOTE
                </Button>
              </Stack>
            </Paper>

            <Typography variant="h5" sx={{ fontFamily: 'Barlow Condensed', fontWeight: 900, mt: 6, mb: 2 }}>PRODUCT OVERVIEW</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>{DATA.metadata.description}</Typography>
            
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {DATA.metadata.commonFeatures.map((f, i) => (
                <Grid size={{ xs: 6 }} key={i}>
                  <Stack direction="row" spacing={1.5}>
                    <ConstructionIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                    <Box>
                      <Typography sx={{ fontSize: '10px', fontWeight: 800, color: 'text.disabled', textTransform: 'uppercase' }}>{f.label}</Typography>
                      <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>{f.value}</Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" sx={{ fontFamily: 'Barlow Condensed', fontWeight: 900, mb: 2 }}>TECHNICAL FAQ</Typography>
            {DATA.metadata.faqs.map((faq, i) => (
              <Accordion key={i} elevation={0} variant="outlined" sx={{ borderRadius: 0, mb: -1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 800, fontSize: '14px' }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#f9f9f9' }}>
                  <Typography variant="body2" color="text.secondary">{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}