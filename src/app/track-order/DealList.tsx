import { Box } from '@mui/material';
import { Deal } from '@/src/api/hubspotApi';
import DealAccordion from './DealAccordion';

export default function DealList({ deals }: { deals: Deal[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {deals.map((deal) => (
        <DealAccordion key={deal.id} deal={deal} />
      ))}
    </Box>
  );
}