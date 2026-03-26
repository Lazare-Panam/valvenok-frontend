import { Box, Paper, Stack, Button } from "@mui/material";
import GlassMagnifier from "./GlassMagnifier";

export const ImageGallery = ({ images, activeIdx, onSelect }: { images: any[], activeIdx: number, onSelect: (i: number) => void }) => (
  <Box sx={{ position: { md: 'sticky' }, top: 20 }}>
    <Paper variant="outlined" sx={{ borderRadius: 0, overflow: 'hidden', aspectRatio: '1/1' }}>
      <GlassMagnifier src={images[activeIdx].url} alt={images[activeIdx].alt} />
    </Paper>
    <Stack direction="row" spacing={1} mt={2}>
      {images.map((img, i) => (
        <Button 
          key={i} 
          onClick={() => onSelect(i)} 
          sx={{ p: 0.5, border: '2px solid', borderColor: activeIdx === i ? 'primary.main' : 'divider', borderRadius: 0, minWidth: 0 }}
        >
          <Box component="img" src={img.url} sx={{ width: 60, height: 60, objectFit: 'contain' }} />
        </Button>
      ))}
    </Stack>
  </Box>
);