import {
  Accordion, AccordionSummary, AccordionDetails,
  Box, Typography, Chip, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Deal } from '@/src/api/hubspotApi';
import { stageColor } from './stageColor';

export default function DealAccordion({ deal }: { deal: Deal }) {
  return (
    <Accordion
      elevation={0}
      disableGutters
      defaultExpanded
      sx={{
        border: '1.5px solid',
        borderColor: 'divider',
        borderRadius: '0 !important',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ px: 3, py: 1.5, bgcolor: 'background.default' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1, mr: 2, flexWrap: 'wrap' }}>
          <Typography sx={{ fontFamily: 'monospace', fontWeight: 900, fontSize: '1rem' }}>
            {deal.properties.dealName}
          </Typography>
          <Chip
            label={deal.properties.dealStage}
            size="small"
            sx={{
              fontWeight: 800, borderRadius: 0, fontSize: '0.7rem',
              textTransform: 'uppercase', ...stageColor(deal.properties.dealStage),
            }}
          />
          {deal.properties.tracking_number_waybill && (
            <Typography variant="body2" fontWeight={600} color="text.secondary">
              Waybill: <strong>{deal.properties.tracking_number_waybill}</strong>
            </Typography>
          )}
          {deal.properties.delivery_date && (
            <Typography variant="body2" fontWeight={600} color="text.secondary">
              Est. Delivery: <strong>
                {new Date(deal.properties.delivery_date).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'short', year: 'numeric',
                })}
              </strong>
            </Typography>
          )}
          {deal.properties.amount && (
            <Typography fontWeight={900} color="primary.main" sx={{ ml: 'auto' }}>
              £{parseFloat(deal.properties.amount).toFixed(2)}
            </Typography>
          )}
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0 }}>
        {deal.lineItems.length === 0 ? (
          <Typography sx={{ p: 3, color: 'text.secondary', fontWeight: 600 }}>
            No line items found for this order.
          </Typography>
        ) : (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: 'background.default' }}>
                  {['Product', 'Description', 'Qty', 'Unit Price', 'Line Total'].map((h, i) => (
                    <TableCell
                      key={i}
                      align={i >= 2 ? 'right' : 'left'}
                      sx={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 1 }}
                    >
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {deal.lineItems.map((item, idx) => (
                  <TableRow key={idx} hover>
                    <TableCell>
                      <Chip
                        label={item.name}
                        size="small"
                        sx={{
                          fontFamily: 'monospace', fontWeight: 700, borderRadius: 0,
                          bgcolor: 'background.default', border: '1px solid', borderColor: 'divider',
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>{item.description ?? '—'}</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>{item.quantity}</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      {item.unitPrice != null ? `£${item.unitPrice.toFixed(2)}` : '—'}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 900, color: 'primary.main' }}>
                      {item.unitPrice != null ? `£${(item.unitPrice * item.quantity).toFixed(2)}` : '—'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </AccordionDetails>
    </Accordion>
  );
}