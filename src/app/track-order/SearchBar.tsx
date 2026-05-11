import { Box, Paper, TextField, Button, CircularProgress, InputAdornment } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
  loading: boolean;
  placeholder: string;
  icon: ReactNode;
}

export default function SearchBar({ value, onChange, onSearch, loading, placeholder, icon }: Props) {
  return (
    <Paper elevation={0} sx={{ p: 3, border: '1.5px solid', borderColor: 'primary.light', borderRadius: 0, mb: 2 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && value.trim()) onSearch(); }}
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
            sx: { borderRadius: 0, fontWeight: 700 },
          }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
        />
        <Button
          variant="contained"
          onClick={onSearch}
          disabled={loading || !value.trim()}
          sx={{ borderRadius: 0, fontWeight: 800, textTransform: 'uppercase', px: 4, whiteSpace: 'nowrap' }}
        >
          {loading ? <CircularProgress size={20} sx={{ color: '#fff' }} /> : 'Track'}
        </Button>
      </Box>
    </Paper>
  );
}