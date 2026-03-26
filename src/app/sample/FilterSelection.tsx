import { Box, Typography, Button } from "@mui/material";

export const FilterSection = ({ label, options, selectedValue, available, onSelect }: any) => (
  <Box sx={{ mb: 3 }}>
    <Typography sx={{ fontSize: '11px', fontWeight: 900, color: 'primary.main', textTransform: 'uppercase', mb: 1 }}>
      {label.replace('_', ' ')}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {options.map((val: any) => (
        <Button
          key={val}
          disabled={!available.has(val)}
          variant={selectedValue === val ? "contained" : "outlined"}
          onClick={() => onSelect(val)}
          sx={{ borderRadius: 0, fontWeight: 800, fontFamily: 'Barlow Condensed', minWidth: '80px' }}
        >
          {val}
        </Button>
      ))}
    </Box>
  </Box>
);