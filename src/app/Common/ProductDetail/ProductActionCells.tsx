'use client'

import { TableCell, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const GREEN = '#61D649'

const baseBtn = {
  fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px',
  textTransform: 'capitalize' as const, whiteSpace: 'nowrap' as const, boxShadow: 'none',
}

/**
 * Two trailing table cells: a green "View Details" button that inverts to white
 * on hover and navigates to `detailHref`, plus a configurable secondary action
 * (e.g. "Request Quote" or "Add to Cart"). Render as the last children of a TableRow.
 */
export default function ProductActionCells({
  detailHref,
  secondaryLabel,
  onSecondary,
  secondaryBg = GREEN,
  secondaryHoverBg = '#50c23a',
}: {
  detailHref: string
  secondaryLabel: string
  onSecondary: (e: React.MouseEvent) => void
  secondaryBg?: string
  secondaryHoverBg?: string
}) {
  const router = useRouter()
  return (
    <>
      <TableCell sx={{ py: 1 }}>
        <Button size="small" variant="contained"
          onClick={e => { e.stopPropagation(); router.push(detailHref) }}
          sx={{ ...baseBtn, bgcolor: GREEN, color: '#fff', border: `1px solid ${GREEN}`, '&:hover': { bgcolor: '#fff', color: GREEN, borderColor: GREEN, boxShadow: 'none' } }}>
          View Details
        </Button>
      </TableCell>
      <TableCell sx={{ py: 1 }}>
        <Button size="small" variant="contained"
          onClick={onSecondary}
          sx={{ ...baseBtn, bgcolor: secondaryBg, color: '#fff', '&:hover': { bgcolor: secondaryHoverBg, boxShadow: 'none' } }}>
          {secondaryLabel}
        </Button>
      </TableCell>
    </>
  )
}
