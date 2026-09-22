# Learning Log

## Confusion Log
<!-- - [ ] YYYY-MM-DD — <the exact moment of confusion> — <file/context> -->

## Concepts To Learn Next
- [ ] 2026-09-16 — The existing `labelMap` prop on `<Breadcrumbs />` (src/components/Common/BreadCrumbs.tsx) — it's a built-in, per-segment override designed for exactly cases like "ag" → "AG". We fixed it in `humanize` with an acronym set, but `labelMap` is the more surgical alternative for one-off labels without touching the site-wide title-casing logic. Worth knowing which to reach for next time.
