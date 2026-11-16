// Phones: a card grid becomes one swipeable row (each card 82% wide, snapping, the
// next card peeking in so it is clear there is more). From `sm` up it is the normal grid.
export const swipeRow = (columns: Record<string, string>, gap = 2.5) =>
  ({
    display: { xs: "flex", sm: "grid" },
    gridTemplateColumns: columns,
    gap,
    overflowX: { xs: "auto", sm: "visible" },
    scrollSnapType: { xs: "x mandatory", sm: "none" },
    mx: { xs: -2, sm: 0 },
    px: { xs: 2, sm: 0 },
    pb: { xs: 1.5, sm: 0 },
    scrollPaddingLeft: { xs: 16, sm: 0 },
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    "& > *": { flex: { xs: "0 0 82%", sm: "initial" }, scrollSnapAlign: "start", minWidth: 0 },
  }) as const;
