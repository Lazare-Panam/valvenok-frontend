'use client';

import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails,
  Box, Typography, Chip, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Deal } from '@/src/api/hubspotApi';
import { stageColor } from './stageColor';

const PIPELINE_STAGES = [
  'Order Received',
  'Purchase Order',
  'Invoice',
  'Shipped on Credit',
  'Part Paid',
  'Fully Paid',
];

function PipelineTracker({ currentStage }: { currentStage: string }) {
  const currentIndex = PIPELINE_STAGES.indexOf(currentStage);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', py: 2 }}>
      {PIPELINE_STAGES.map((stage, i) => {
        const isCompleted = i < currentIndex;
        const isCurrent = i === currentIndex;

        return (
          <React.Fragment key={stage}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
              <Box sx={{
                width: 28, height: 28,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                bgcolor: isCompleted ? 'primary.main' : isCurrent ? '#1c2e1a' : 'grey.200',
                border: '2px solid',
                borderColor: isCompleted ? 'primary.main' : isCurrent ? 'primary.main' : 'transparent',
                transition: 'all 0.2s',
              }}>
                <Typography sx={{
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  color: isCompleted ? '#fff' : isCurrent ? 'primary.main' : 'grey.400',
                  lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
              </Box>
              <Typography sx={{
                mt: 0.75,
                fontWeight: isCurrent ? 800 : isCompleted ? 700 : 500,
                color: isCompleted ? 'primary.main' : isCurrent ? '#1c2e1a' : 'grey.400',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                textAlign: 'center',
                maxWidth: 64,
                lineHeight: 1.2,
              }}>
                {stage}
              </Typography>
            </Box>

            {i < PIPELINE_STAGES.length - 1 && (
              <Box sx={{
                flex: 1,
                height: 2,
                mt: '13px',
                mx: 0.5,
                bgcolor: i < currentIndex ? 'primary.main' : 'grey.200',
                transition: 'background-color 0.2s',
              }} />
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
}

export default function DealAccordion({ deal }: { deal: Deal }) {
  const stageInPipeline = PIPELINE_STAGES.includes(deal.properties.dealStage);

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

        {/* ── Pipeline tracker ── */}
        {stageInPipeline && (
          <Box sx={{ px: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
            <PipelineTracker currentStage={deal.properties.dealStage} />
          </Box>
        )}

        {/* ── Line items ── */}
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