import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = ({ faqs }: { faqs: { q: string; a: string }[] }) => {
  // 1. SEO Schema (Headless)
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <Box sx={{ mt: 4 }}>
      {/* Schema Injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
      />

      {/* Visual UI */}
      <Typography variant="h5" sx={{ fontFamily: 'Barlow Condensed', fontWeight: 900, mb: 2 }}>
        TECHNICAL FAQ
      </Typography>
      
      {faqs.map((faq, i) => (
        <Accordion key={i} elevation={0} variant="outlined" sx={{ borderRadius: 0, mb: -1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 800, fontSize: '14px' }}>{faq.q}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: '#f9f9f9' }}>
            <Typography variant="body2" color="text.secondary">{faq.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;