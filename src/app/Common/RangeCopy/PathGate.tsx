'use client'

import { usePathname } from 'next/navigation'

// RangeCopy is mounted from route layouts, and a layout also wraps every
// nested route below it. Only show the copy on the exact page it was written for.
export default function PathGate({ path, children }: { path: string; children: React.ReactNode }) {
  const pathname = usePathname()
  if ((pathname ?? '').replace(/\/$/, '') !== path) return null
  return <>{children}</>
}
