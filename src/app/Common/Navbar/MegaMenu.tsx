"use client";

import * as React from "react";
import { Box, Typography, Fade } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { NavGroup, NavItem } from "./Navbardata";
import { brandsFor, BRANDS, type Brand, type ProductType } from "../brandRegistry";
import { BRAND } from "@/src/theme/brand";

const INK = BRAND.ink;
const TEAL = BRAND.hover;
const SOFT = BRAND.tint;
const BORDER = BRAND.border;

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
        color: TEAL,
        fontSize: "0.78rem",
        fontWeight: 600,
        textDecoration: "none",
        "&:hover": { bgcolor: BRAND.tintStrong },
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
        <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: BRAND.subtle }}>
          {kicker}
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize: "1rem", fontWeight: 700, color: INK, textTransform: "capitalize" }}>{title}</Typography>
      </Box>
      <ViewAll href={href} onClose={onClose} />
    </Box>
  );
}

// Row in the first two columns: highlighted when active, arrow on the right
function MenuRow({ label, href, active, onEnter, onClose, accent, external }: { label: string; href?: string; active: boolean; onEnter: () => void; onClose: () => void; accent?: boolean; external?: boolean }) {
  return (
    <Box
      component="a"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
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
        color: active ? TEAL : INK,
        bgcolor: active ? (accent ? SOFT : "#fff") : "transparent",
        boxShadow: active && !accent ? "0 1px 3px rgba(1,40,41,0.08)" : "none",
        borderLeft: accent ? `3px solid ${active ? TEAL : "transparent"}` : "none",
        textDecoration: "none",
        transition: "all .12s",
        "& svg": { color: active ? TEAL : BRAND.faintest, fontSize: 18 },
      }}
    >
      {label}
      {external ? <NorthEastRoundedIcon sx={{ fontSize: "15px !important" }} /> : <ChevronRightRoundedIcon />}
    </Box>
  );
}

// Brand heading inside the category column: logo, name, and the site for group brands
function BrandHead({ name, site, first }: { name: string; site?: string; first: boolean }) {
  const b = BRANDS.find((x) => x.name.toLowerCase() === name.toLowerCase() || x.slug === name.toLowerCase());
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: first ? 0 : 1.75, mb: 0.5, px: 1.75 }}>
      {b && (
        <Box sx={{ flexShrink: 0, width: 30, height: 20, display: "grid", placeItems: "center", overflow: "hidden" }}>
          <Box component="img" src={b.logo} alt="" sx={{ maxWidth: "100%", maxHeight: 18, objectFit: "contain", transform: b.logoScale ? `scale(${Math.min(b.logoScale, 2.4)})` : undefined }} />
        </Box>
      )}
      <Typography sx={{ flexShrink: 0, fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: BRAND.subtle }}>{name}</Typography>
      <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
      {site && <Typography sx={{ flexShrink: 0, fontSize: "0.68rem", color: BRAND.faint, textTransform: "capitalize !important" }}>{site}</Typography>}
    </Box>
  );
}

// Third column for a series sold on a group brand's own site: shown like our own series
function ShowcaseCard({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <Box>
      <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: BRAND.subtle }}>
        Also in our group · {item.brand}
      </Typography>
      <Typography sx={{ mt: 0.5, mb: 2, fontSize: "1rem", fontWeight: 700, color: INK, textTransform: "capitalize" }}>{item.label}</Typography>
      <Box component="a" href={item.href} target="_blank" rel="noopener" onClick={onClose}
        sx={{ display: "flex", gap: 2, alignItems: "center", p: 1.5, border: `1px solid ${BORDER}`, borderRadius: "14px", textDecoration: "none", bgcolor: "#fff", transition: "all .15s", "&:hover": { borderColor: BRAND.hoverBorder, boxShadow: "0 6px 18px rgba(1,40,41,0.08)" }, "&:hover .go": { bgcolor: TEAL, color: "#fff" } }}>
        <Box sx={{ flexShrink: 0, width: 120, height: 96, borderRadius: "10px", bgcolor: BRAND.wash, display: "grid", placeItems: "center", overflow: "hidden" }}>
          {item.image && <Box component="img" src={item.image} alt={item.label} sx={{ display: "block", width: "auto", height: "auto", maxWidth: 108, maxHeight: 84, objectFit: "contain", mixBlendMode: "multiply" }} />}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Box sx={{ fontSize: "0.86rem", color: BRAND.muted, lineHeight: 1.45, mb: 1.25, textTransform: "capitalize" }}>{item.line}</Box>
          <Box className="go" component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.75, borderRadius: 999, bgcolor: SOFT, color: TEAL, fontSize: "0.82rem", fontWeight: 700, transition: "all .15s" }}>
            View on the website <NorthEastRoundedIcon sx={{ fontSize: 15 }} />
          </Box>
          {item.href && (
            <Box sx={{ mt: 0.75, fontSize: "0.74rem", color: BRAND.faint, textTransform: "none" }}>{new URL(item.href).hostname.replace(/^www\./, "")}</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

// Logo tile; brands without a logo file show their initials
function BrandLogo({ brand, w, h }: { brand: Brand; w: number; h: number }) {
  return (
    <Box sx={{ flexShrink: 0, width: w, height: h, borderRadius: "10px", border: `1px solid ${BORDER}`, bgcolor: "#fff", display: "grid", placeItems: "center", overflow: "hidden" }}>
      {brand.logo ? (
        <Box component="img" src={brand.logo} alt="" sx={{ maxWidth: "78%", maxHeight: Math.round(h * 0.54), objectFit: "contain", transform: brand.logoScale ? `scale(${brand.logoScale})` : undefined }} />
      ) : (
        <Box component="span" sx={{ fontSize: "0.72rem", fontWeight: 800, color: TEAL, letterSpacing: "0.04em" }}>{brand.name.split(" ").map((w) => w[0]).join("")}</Box>
      )}
    </Box>
  );
}

// Menu tabs that show a "Shop by brand" row, and the product type they cover
const BRAND_TYPE: Record<string, ProductType> = { actuators: "actuators", valves: "valves", "hydrogen-cryogenic": "hydrogen", "fittings-tubing": "fittings", instrumentation: "instrumentation" };

// Bottom row of the dropdown: every brand that makes this product type, all in the
// same card layout. Brands featured here link to their range on Valvenok ("View range");
// brands with their own website link there ("Visit website ↗"); some have both.
function BrandBar({ type, onClose }: { type: ProductType; onClose: () => void }) {
  const brands = brandsFor(type);
  if (!brands.length) return null;
  const action = { display: "inline-flex", alignItems: "center", gap: 0.4, fontSize: "0.78rem", fontWeight: 700, color: TEAL, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { textDecoration: "underline" } } as const;
  return (
    <Box sx={{ gridColumn: "1 / -1", borderTop: `1px solid ${BORDER}`, background: `linear-gradient(90deg, ${BRAND.tint} 0%, ${BRAND.wash} 45%, ${BRAND.wash} 100%)`, px: 3.5, pt: 2.5, pb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
        <Box sx={{ flexShrink: 0, width: 34, height: 34, borderRadius: "10px", bgcolor: "#fff", border: `1px solid ${BORDER}`, display: "grid", placeItems: "center", color: TEAL }}>
          <StorefrontOutlinedIcon sx={{ fontSize: 19 }} />
        </Box>
        <Typography sx={{ fontSize: "0.95rem", fontWeight: 800, color: INK, lineHeight: 1.2, textTransform: "capitalize !important" }}>Shop by brand</Typography>
        <Typography sx={{ fontSize: "0.76rem", color: BRAND.muted, lineHeight: 1.4, textTransform: "capitalize !important" }}>
          <Box component="span" sx={{ color: TEAL, fontWeight: 800 }}>↗</Box> = the brand’s own website
        </Typography>
        <Box component="a" href="/brands" onClick={onClose}
          sx={{ ml: "auto", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 0.5, px: 2, py: 0.9, borderRadius: 999, bgcolor: TEAL, color: "#fff", fontSize: "0.84rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { bgcolor: BRAND.deep } }}>
          All brands <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>
      {brands.length > 4 ? (
        <Box sx={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 1.25 }}>
          {brands.map(({ brand, text, href, external }) => (
            <Box key={brand.slug} component="a" href={href} onClick={onClose} {...(external ? { target: "_blank", rel: "noopener" } : {})} title={text}
              aria-label={`${brand.name}: ${text}${external ? " (opens their website)" : ""}`}
              sx={{ display: "flex", alignItems: "center", gap: 1.25, p: 1, pr: 1.5, border: `1px solid ${BORDER}`, borderRadius: "14px", bgcolor: "#fff", textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: BRAND.hoverBorder, boxShadow: "0 4px 12px rgba(1,40,41,0.08)" } }}>
              <BrandLogo brand={brand} w={50} h={40} />
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.4, fontSize: "0.8rem", fontWeight: 800, color: INK, lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {brand.name} {external && <NorthEastRoundedIcon sx={{ fontSize: 12, color: TEAL }} />}
                </Box>
                <Box sx={{ mt: 0.25, fontSize: "0.7rem", color: BRAND.muted, lineHeight: 1.35, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", textTransform: "capitalize" }}>{text}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
      <Box sx={{ display: "grid", gridTemplateColumns: `repeat(4, minmax(0, 1fr))`, gap: 2 }}>
        {brands.map(({ brand, text, href, external }) => {
          const site = brand.website;
          return (
            <Box key={brand.slug} sx={{ position: "relative", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 1.5, p: 2, border: `1px solid ${BORDER}`, borderRadius: "14px", bgcolor: "#fff", boxShadow: "0 1px 2px rgba(1,40,41,0.04)", transition: "all .15s", "&:hover": { borderColor: BRAND.hoverBorder, boxShadow: "0 6px 18px rgba(1,40,41,0.08)", transform: "translateY(-1px)" } }}>
              <Box component="a" href={href} onClick={onClose} {...(external ? { target: "_blank", rel: "noopener" } : {})}
                aria-label={`${brand.name}: ${text}${external ? " (opens their website)" : ""}`}
                sx={{ position: "absolute", inset: 0, borderRadius: "14px", zIndex: 0 }} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
                <BrandLogo brand={brand} w={56} h={48} />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Box sx={{ fontSize: "0.9rem", fontWeight: 800, color: INK, lineHeight: 1.25 }}>{brand.name}</Box>
                  <Box sx={{ mt: 0.4, fontSize: "0.74rem", color: BRAND.muted, lineHeight: 1.4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", textTransform: "capitalize" }} title={text}>
                    {text}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: "auto", pt: 1.25, borderTop: `1px solid ${BORDER}` }}>
                <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", columnGap: 2, rowGap: 0.5 }}>
                  {!external && (
                    <Box component="a" href={href} onClick={onClose} sx={action}>
                      View range <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />
                    </Box>
                  )}
                  {site && (
                    <Box component="a" href={site} target="_blank" rel="noopener" onClick={onClose} sx={action}>
                      {external ? "Visit website" : "Website"} <NorthEastRoundedIcon sx={{ fontSize: 12 }} />
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      )}
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
          boxShadow: "0 2px 4px rgba(1,40,41,0.05), 0 24px 56px rgba(1,40,41,0.16)",
          border: `1px solid ${BORDER}`,
          borderRadius: "20px",
          // Short screens: never taller than the space under the header; scroll inside
          maxHeight: "calc(100vh - 210px)",
          overflowY: "auto",
          overflowX: "hidden",
          overscrollBehavior: "contain",
          display: "grid",
          gridTemplateColumns: "260px 1fr 1.25fr",
          alignContent: "start",
          minHeight: 320,
        }}
      >
        {/* Level 1: sections of this menu tab */}
        <Box sx={{ p: 1.5, bgcolor: BRAND.wash, borderRight: `1px solid ${BORDER}` }}>
          {group.columns.map((c, i) => (
            <MenuRow key={c.header} label={c.header} href={c.href} active={i === colIndex} onEnter={() => setColIndex(i)} onClose={onClose} />
          ))}
        </Box>

        {/* Level 2: categories in the section */}
        <Box sx={{ p: 3, borderRight: `1px solid ${BORDER}` }}>
          <ColumnHead kicker="Category" title={col?.header ?? ""} href={col?.href} onClose={onClose} />
          {items.map((it, i) => (
            <React.Fragment key={it.label}>
              {it.external && !items[i - 1]?.external && (
                <Box sx={{ mt: 2.25, pt: 1.75, mx: 1.75, borderTop: `1px solid ${BORDER}` }}>
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: BRAND.muted, textTransform: "capitalize !important", lineHeight: 1.3 }}>
                    Also in our group
                  </Typography>
                </Box>
              )}
              {it.brand && it.brand !== items[i - 1]?.brand && (
                <BrandHead name={it.brand} site={it.external && it.href ? new URL(it.href).hostname.replace(/^www\./, "") : undefined} first={i === 0} />
              )}
              <MenuRow label={it.label} href={it.href} external={it.external} active={i === itemIndex} accent onEnter={() => setItemIndex(i)} onClose={onClose} />
            </React.Fragment>
          ))}
        </Box>

        {/* Level 3: series of the highlighted category */}
        <Box sx={{ p: 3 }}>
          {item?.external && <ShowcaseCard item={item} onClose={onClose} />}
          {item && !item.external && (
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
                        "& svg": { fontSize: 15, color: BRAND.faintest, transition: "all .12s" },
                        "&:hover": { borderColor: BRAND.hoverBorder, bgcolor: SOFT, color: TEAL },
                        "&:hover svg": { color: TEAL, transform: "translateX(2px)" },
                        // No page yet: shown for reference, not clickable
                        ...(!s.href && { cursor: "default", pointerEvents: "none", "& svg": { display: "none" } }),
                      }}
                    >
                      <Box component="span" sx={{ minWidth: 0 }}>
                        {s.brand && (
                          <Box component="span" sx={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: TEAL, mb: 0.25 }}>
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
                    color: TEAL,
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

        {BRAND_TYPE[group.id] && <BrandBar type={BRAND_TYPE[group.id]} onClose={onClose} />}
      </Box>
    </Fade>
  );
}
