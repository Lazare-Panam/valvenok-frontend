"use client";

import * as React from "react";
import { Box, Typography, Fade } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { NavGroup, NavItem } from "./Navbardata";

const INK = "#0E1B12";
const GREEN = "#2E8B1E";
const SOFT = "#EEF9EA";
const BORDER = "#E5EBE6";

interface Props {
  group: NavGroup;
  onClose: () => void;
}

// "View All …" entries become the column's View all link instead of a tile
const isViewAll = (it: NavItem) => /^view all/i.test(it.label);

function ViewAll({ href, onClose }: { href?: string; onClose: () => void }) {
  if (!href) return null;
  return (
    <Box
      component="a"
      href={href}
      onClick={onClose}
      sx={{
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        px: 1.25,
        py: 0.5,
        borderRadius: 999,
        bgcolor: SOFT,
        color: GREEN,
        fontSize: "0.78rem",
        fontWeight: 600,
        textDecoration: "none",
        "&:hover": { bgcolor: "#DDF3D6" },
      }}
    >
      View all <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
    </Box>
  );
}

function ColumnHead({ kicker, title, href, onClose }: { kicker: string; title: string; href?: string; onClose: () => void }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2, mb: 2 }}>
      <Box>
        <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: "#7A877F" }}>
          {kicker}
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize: "1rem", fontWeight: 700, color: INK, textTransform: "none" }}>{title}</Typography>
      </Box>
      <ViewAll href={href} onClose={onClose} />
    </Box>
  );
}

// Row in the first two columns: highlighted when active, arrow on the right
function MenuRow({ label, href, active, onEnter, onClose, accent }: { label: string; href?: string; active: boolean; onEnter: () => void; onClose: () => void; accent?: boolean }) {
  return (
    <Box
      component="a"
      href={href}
      onClick={href ? onClose : (e: React.MouseEvent) => e.preventDefault()}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        px: 1.75,
        py: 1,
        borderRadius: "10px",
        fontSize: "0.9rem",
        fontWeight: active ? 600 : 500,
        color: active ? GREEN : INK,
        bgcolor: active ? (accent ? SOFT : "#fff") : "transparent",
        boxShadow: active && !accent ? "0 1px 3px rgba(14,27,18,0.08)" : "none",
        borderLeft: accent ? `3px solid ${active ? GREEN : "transparent"}` : "none",
        textDecoration: "none",
        transition: "all .12s",
        "& svg": { color: active ? GREEN : "#B5C0B8", fontSize: 18 },
      }}
    >
      {label}
      <ChevronRightRoundedIcon />
    </Box>
  );
}

export default function MegaMenu({ group, onClose }: Props) {
  const [colIndex, setColIndex] = React.useState(0);
  const col = group.columns[colIndex];
  const items = col?.items ?? [];

  // The middle column opens on the first item that has series, so the third column starts filled
  const firstWithSeries = Math.max(0, items.findIndex((it) => it.children?.some((c) => !isViewAll(c))));
  const [itemIndex, setItemIndex] = React.useState(firstWithSeries);
  React.useEffect(() => setItemIndex(firstWithSeries), [colIndex, firstWithSeries]);

  const item = items[itemIndex];
  const series = (item?.children ?? []).filter((c) => !isViewAll(c));
  const seriesAll = item?.children?.find(isViewAll)?.href ?? item?.href;

  return (
    <Fade in>
      <Box
        sx={{
          mt: 1,
          width: "min(1240px, calc(100vw - 32px))",
          bgcolor: "white",
          boxShadow: "0 2px 4px rgba(14,27,18,0.05), 0 24px 56px rgba(14,27,18,0.16)",
          border: `1px solid ${BORDER}`,
          borderRadius: "20px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "260px 1fr 1.25fr",
          minHeight: 320,
        }}
      >
        {/* Level 1: sections of this menu tab */}
        <Box sx={{ p: 1.5, bgcolor: "#F5F8F5", borderRight: `1px solid ${BORDER}` }}>
          {group.columns.map((c, i) => (
            <MenuRow key={c.header} label={c.header} href={c.href} active={i === colIndex} onEnter={() => setColIndex(i)} onClose={onClose} />
          ))}
        </Box>

        {/* Level 2: categories in the section */}
        <Box sx={{ p: 3, borderRight: `1px solid ${BORDER}` }}>
          <ColumnHead kicker="Category" title={col?.header ?? ""} href={col?.href} onClose={onClose} />
          {items.map((it, i) => (
            <MenuRow key={it.label} label={it.label} href={it.href} active={i === itemIndex} accent onEnter={() => setItemIndex(i)} onClose={onClose} />
          ))}
        </Box>

        {/* Level 3: series of the highlighted category */}
        <Box sx={{ p: 3 }}>
          {item && (
            <>
              <ColumnHead kicker="Series" title={item.label} href={seriesAll} onClose={onClose} />
              {series.length ? (
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.25 }}>
                  {series.map((s) => (
                    <Box
                      key={s.href ?? s.label}
                      component={s.href ? "a" : "div"}
                      href={s.href}
                      onClick={s.href ? onClose : undefined}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1,
                        px: 1.75,
                        py: 1.25,
                        border: `1px solid ${BORDER}`,
                        borderRadius: "10px",
                        fontSize: "0.86rem",
                        fontWeight: 500,
                        color: INK,
                        textDecoration: "none",
                        transition: "all .12s",
                        "& svg": { fontSize: 15, color: "#B5C0B8", transition: "all .12s" },
                        "&:hover": { borderColor: "#BFE3B4", bgcolor: SOFT, color: GREEN },
                        "&:hover svg": { color: GREEN, transform: "translateX(2px)" },
                        // No page yet: shown for reference, not clickable
                        ...(!s.href && { cursor: "default", pointerEvents: "none", "& svg": { display: "none" } }),
                      }}
                    >
                      <Box component="span" sx={{ minWidth: 0 }}>
                        {s.brand && (
                          <Box component="span" sx={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: GREEN, mb: 0.25 }}>
                            {s.brand}
                          </Box>
                        )}
                        {s.label}
                      </Box>
                      <ArrowForwardRoundedIcon sx={{ flexShrink: 0 }} />
                    </Box>
                  ))}
                </Box>
              ) : (
                // No series listed for this category yet: one clear link to its page
                <Box
                  component="a"
                  href={seriesAll}
                  onClick={onClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 1.5,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "10px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: GREEN,
                    textDecoration: "none",
                    "&:hover": { bgcolor: SOFT },
                  }}
                >
                  View all models <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Fade>
  );
}
