import { Paper, Typography } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

interface Props {
  term: string;
  isError?: boolean;
}

export default function EmptyState({ term, isError }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 8, border: '1.5px solid',
        borderColor: isError ? 'error.light' : 'divider',
        borderRadius: 0, textAlign: 'center',
      }}
    >
      <ReceiptLongIcon sx={{ fontSize: 52, color: isError ? 'error.light' : 'text.disabled', mb: 2 }} />
      <Typography fontWeight={900} textTransform="uppercase" sx={{ mb: 1 }}>
        {isError ? 'Unable to retrieve orders' : 'No orders found'}
      </Typography>
      <Typography color="text.secondary">
        {isError
          ? <>We couldn't fetch orders for <strong>{term}</strong>. Check the reference and try again.</>
          : <>Nothing matched <strong>{term}</strong>. Double-check and try again.</>
        }
      </Typography>
    </Paper>
  );
}