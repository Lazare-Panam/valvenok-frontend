"use client";

// Single tri-clamp clamp model, in the same style as the needle valve model
// page: photo + key facts, a picker to switch type or size, full specs,
// help cards and the other clamps of the same type.

import { useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { type ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { SAN_BRAND, SAN_BRAND_LOGO, SAN_BASE } from "../../../data";
import { CLAMPS, CLAMP_TYPES, CLAMP_BASE, CLAMP_COMMON, typeSlug, type Clamp } from "../../clamps";

const WA = (pn: string) =>
  `https://wa.me/447368137917?text=${encodeURIComponent(`Hello Valvenok, I have a question about tri-clamp ${pn} (https://www.valvenok.com${CLAMP_BASE}/products/${pn}).`)}`;
const href = (c: Clamp) => `${CLAMP_BASE}/products/${c.id}`;

const btn = (primary: boolean) =>
  ({
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1, px: 3, py: 1.4, borderRadius: 999, fontWeight: 700, fontSize: "0.95rem",
    textDecoration: "none", cursor: "pointer", fontFamily: "inherit", transition: "all .2s",
    ...(primary
      ? { border: 0, bgcolor: T.green, color: T.greenDeep, "&:hover": { bgcolor: "#55C93E" } }
      : { bgcolor: "#fff", color: T.ink, border: `1px solid ${T.border}`, "&:hover": { borderColor: T.greenDark, color: T.greenDark } }),
  }) as const;

// Options from the Adaptix datasheets; the letter codes for MX / FX aren't published there
const MATERIALS = ["304", "304L", "316", "316L", "Duplex"] as const;
const FINISHES = ["Mechanically polished", "Electropolished", "Mirror polished"] as const;
const plainName = (c: Clamp) => `${SAN_BRAND} ${c.type.toLowerCase()} heavy-duty tri-clamp (${c.typeCode}), ${c.size}`;
const option = (on: boolean) => ({
  cursor: "pointer", fontFamily: "inherit", px: 1.5, py: 0.7, borderRadius: "10px", fontSize: "0.85rem", fontWeight: on ? 800 : 600, textDecoration: "none",
  border: `1.5px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenSoft : "#fff", color: on ? T.greenDeep : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark },
});

/** Switch type (keeping the size) or size (keeping the type) */
function Picker({ c }: { c: Clamp }) {
  const sameType = CLAMPS.filter((x) => x.type === c.type);
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Box>
        <Box sx={{ fontSize: "0.78rem", fontWeight: 700, color: T.muted, mb: 0.75 }}>
          Type: <Box component="span" sx={{ color: T.ink }}>{c.type} ({c.typeCode})</Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {CLAMP_TYPES.map((t) => {
            const target = CLAMPS.find((x) => x.type === t && x.a === c.a)!;
            return (
              <Box key={t} component={Link} href={href(target)} aria-current={t === c.type ? "page" : undefined} sx={option(t === c.type)}>
                {t}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Box sx={{ fontSize: "0.78rem", fontWeight: 700, color: T.muted, mb: 0.75 }}>
          Size: <Box component="span" sx={{ color: T.ink }}>{c.size}</Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {sameType.map((x) => (
            <Box key={x.id} component={Link} href={href(x)} title={x.size} aria-current={x.id === c.id ? "page" : undefined} sx={option(x.id === c.id)}>
              {x.short}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function ClampDetail({ id }: { id: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedOrder, setCopiedOrder] = useState(false);
  const [mat, setMat] = useState<string | null>(null);
  const [fin, setFin] = useState<string | null>(null);
  const c = CLAMPS.find((x) => x.id === id)!;

  const eq: [string, string][] = [["ISO 2852", c.iso], ["DIN 32676", c.din], ["BS 4825", c.bs]];
  const specs: [string, string][] = [
    ["Part number", c.partNumber],
    ["Order code", c.orderCode],
    ["Type", `${c.type} heavy-duty clamp (${c.typeCode})`],
    ["Clamp diameter A", `${c.a} mm`],
    [c.dimLabel === "T" ? "Thickness T" : "Width W", `${c.dim} mm`],
    ...eq.map(([k, v]) => [k, v === "–" ? "Not listed for this size" : v] as [string, string]),
    ["Max. working pressure", `${c.pressure} (depends on size)`],
    ["Closes with", c.closes],
    ["Options", c.options],
    ...CLAMP_COMMON,
  ];
  const rfq: ProductForRFQ = {
    id: c.orderCode, name: `${c.type} tri-clamp ${c.partNumber}`, brand: SAN_BRAND, category: "Tri-Clamp Clamps", categoryId: "tri-clamp-clamps",
    subCategory: `${c.type} (${c.typeCode})`, thumbnail: c.img, description: plainName(c), keySpecs: specs.slice(0, 8).map(([label, value]) => ({ label, value })),
    variantInfo: { count: 1, sizeRange: c.size },
  };
  if (mat) rfq.keySpecs.unshift({ label: "Material (MX)", value: mat });
  if (fin) rfq.keySpecs.unshift({ label: "Finish (FX)", value: fin });
  const sameType = CLAMPS.filter((x) => x.type === c.type && x.id !== c.id);
  const idx = CLAMPS.filter((x) => x.type === c.type).findIndex((x) => x.id === c.id);
  const related = [...sameType.slice(Math.max(0, idx - 2), idx), ...sameType.slice(idx, idx + 2)].slice(0, 4);
  const schema = {
    "@context": "https://schema.org", "@type": "Product", name: `${SAN_BRAND} ${c.partNumber} tri-clamp`, sku: c.partNumber, mpn: c.partNumber,
    brand: { "@type": "Brand", name: SAN_BRAND }, image: c.img, description: plainName(c), category: "Tri-clamp clamps",
    additionalProperty: specs.slice(2, 11).map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
  };

  return (
    <Box sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Top: photo + key facts */}
      <Box component="section" sx={{ background: "linear-gradient(180deg, #F6FAF5 0%, #FFFFFF 100%)", pt: { xs: 3, md: 5 }, pb: { xs: 4, md: 5 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box component={Link} href={`${CLAMP_BASE}/products?type=${typeSlug(c.type)}`} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 2.5, fontSize: "0.88rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            <ArrowBackRoundedIcon sx={{ fontSize: 17 }} /> All {c.type.toLowerCase()} clamps
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 3, md: 6 }, alignItems: "start" }}>
            {/* photo */}
            <Box sx={{ position: { md: "sticky" }, top: { md: 150 } }}>
              <Box sx={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden" }}>
                <Box component="img" src={c.img} alt={`${SAN_BRAND} ${c.partNumber} tri-clamp`} sx={{ width: "72%", height: "72%", objectFit: "contain", mixBlendMode: "multiply" }} />
                <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ position: "absolute", top: 18, left: 18, height: 22, width: "auto", mixBlendMode: "multiply" }} />
                <Box sx={{ position: "absolute", top: 16, right: 16, px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.8rem", fontWeight: 800 }}>{c.a} mm</Box>
              </Box>
              <Box sx={{ mt: 1.5, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
                {[
                  { icon: <ShieldOutlinedIcon />, t: "304 / 316L stainless" },
                  { icon: <VerifiedOutlinedIcon />, t: "3.1 certificate" },
                  { icon: <SupportAgentOutlinedIcon />, t: "UK support" },
                ].map((x) => (
                  <Box key={x.t} sx={{ display: "flex", alignItems: "center", gap: 0.75, p: 1.25, borderRadius: "14px", bgcolor: T.surface, fontSize: "0.78rem", fontWeight: 700, color: T.ink, "& svg": { fontSize: 18, color: T.greenDark } }}>
                    {x.icon}{x.t}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* facts + picker + actions */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 1.5 }}>
                <Box component="span" sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.78rem", fontWeight: 700, color: T.ink }}>{c.typeCode}</Box>
                <Box component="span" sx={{ fontSize: "0.82rem", fontWeight: 600, color: T.muted }}>Tri-clamp clamp · {SAN_BRAND}</Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexWrap: "wrap" }}>
                <Box component="h1" sx={{ m: 0, fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: T.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace !important" }}>
                  {c.partNumber}
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, mt: 1.25, fontSize: "1.05rem", lineHeight: 1.6, color: T.body }}>{plainName(c)}.</Box>

              {/* order code: what goes on the purchase order */}
              <Box sx={{ mt: 2.5, p: { xs: 1.75, md: 2 }, borderRadius: "18px", border: `1.5px solid ${T.greenDark}`, bgcolor: T.greenSoft }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.5, flexWrap: "wrap" }}>
                  <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase !important", color: T.greenDark }}>Order code</Box>
                    <Box sx={{ mt: 0.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace !important", fontWeight: 800, fontSize: { xs: "1.1rem", md: "1.3rem" }, color: T.ink, wordBreak: "break-all" }}>
                      {c.partNumber}
                      <Box component="span" sx={{ color: T.greenDark }}>.MX.FX.{c.orderCode.split(".").pop()}</Box>
                    </Box>
                  </Box>
                  <Box component="button" type="button" onClick={() => { navigator.clipboard?.writeText(c.orderCode); setCopiedOrder(true); setTimeout(() => setCopiedOrder(false), 1500); }} aria-label="Copy order code"
                    sx={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.75, borderRadius: 999, border: `1px solid ${T.greenDark}`, bgcolor: "#fff", fontFamily: "inherit", fontSize: "0.8rem", fontWeight: 700, color: T.greenDark }}>
                    {copiedOrder ? <CheckRoundedIcon sx={{ fontSize: 15 }} /> : <ContentCopyRoundedIcon sx={{ fontSize: 14 }} />} {copiedOrder ? "Copied" : "Copy order code"}
                  </Box>
                </Box>
                {/* build the order: material (MX) and finish (FX) */}
                <Box sx={{ mt: 1.75, pt: 1.75, borderTop: "1px dashed #BFE3B4", display: "grid", gap: 1.5 }}>
                  {([
                    ["MX", "Material", MATERIALS, mat, setMat],
                    ["FX", "Finish", FINISHES, fin, setFin],
                  ] as const).map(([tag, label, opts, val, set]) => (
                    <Box key={tag}>
                      <Box sx={{ fontSize: "0.78rem", fontWeight: 700, color: T.body, mb: 0.75 }}>
                        <Box component="span" sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", color: T.greenDark, fontWeight: 800 }}>{tag}</Box> · {label}
                        {tag === "MX" && <Box component="span" sx={{ color: T.muted, fontWeight: 600 }}> (1.4301 / 304 is standard)</Box>}
                      </Box>
                      <Box role="group" aria-label={label} sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                        {opts.map((o) => {
                          const on = val === o;
                          return (
                            <Box key={o} component="button" type="button" aria-pressed={on} onClick={() => set(on ? null : o)}
                              sx={{ cursor: "pointer", fontFamily: "inherit", px: 1.4, py: 0.6, borderRadius: "10px", fontSize: "0.84rem", fontWeight: on ? 800 : 600, border: `1.5px solid ${on ? T.greenDark : "#CFE6C8"}`, bgcolor: on ? T.greenDark : "#fff", color: on ? "#fff" : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark } }}>
                              {o}
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  ))}
                  <Box sx={{ fontSize: "0.82rem", color: T.body, lineHeight: 1.5 }}>
                    {mat && fin
                      ? <>Your order: <b>{c.partNumber}</b> in <b>{mat}</b>, <b>{fin}</b>. We’ll confirm the full code on your quote.</>
                      : <>Pick the material and finish and they’ll be sent with your quote request.</>}
                  </Box>
                </Box>
              </Box>

              {/* key facts */}
              <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" }, gap: 1 }}>
                {[
                  ["Clamp size A", `${c.a} mm`],
                  ["Line size", c.short],
                  [c.dimLabel === "T" ? "Thickness T" : "Width W", `${c.dim} mm`],
                  ["Working pressure", c.pressure],
                ].map(([k, val]) => (
                  <Box key={k} sx={{ p: 1.5, borderRadius: "14px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                    <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase !important", color: T.muted }}>{k}</Box>
                    <Box sx={{ mt: 0.25, fontSize: "0.92rem", fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{val}</Box>
                  </Box>
                ))}
              </Box>

              {/* picker */}
              <Box sx={{ mt: 3, p: { xs: 2, md: 2.5 }, borderRadius: "20px", bgcolor: T.surface, border: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: "0.95rem", fontWeight: 800, color: T.ink, mb: 1.5 }}>Choose another type or size</Box>
                <Picker c={c} />
              </Box>

              {/* actions */}
              <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.25 }}>
                <Box component="button" type="button" onClick={() => setModalOpen(true)} sx={btn(true)}>
                  Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box component="a" href={WA(c.partNumber)} target="_blank" rel="noopener" sx={btn(false)}>
                  Ask on WhatsApp
                </Box>
              </Box>
              <Box sx={{ mt: 1.5, fontSize: "0.85rem", color: T.body }}>Price and lead time confirmed on your quote.</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Specifications */}
      <Box component="section" aria-labelledby="h2-spec" sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box component="h2" id="h2-spec" sx={{ m: 0, mb: 2, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.025em", color: T.ink }}>Specifications</Box>
          <Box component="dl" sx={{
            m: 0, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, borderRadius: "18px", border: `1px solid ${T.border}`, overflow: "hidden", bgcolor: "#fff",
            "& > div": { display: "grid", gridTemplateColumns: { xs: "140px 1fr", sm: "200px 1fr" }, borderTop: `1px solid ${T.border}` },
            "& > div:nth-of-type(1), & > div:nth-of-type(2)": { borderTop: { md: 0 } },
            "& > div:nth-of-type(1)": { borderTop: 0 },
            "& > div:nth-of-type(odd)": { borderRight: { md: `1px solid ${T.border}` }, bgcolor: { xs: "#FAFCFA", md: "transparent" } },
            "& > div:nth-of-type(4n+1), & > div:nth-of-type(4n+2)": { bgcolor: { md: "#FAFCFA" } },
            "& dt": { px: 2.25, py: 1.5, fontSize: "0.85rem", fontWeight: 600, color: T.body },
            "& dd": { m: 0, px: 2.25, py: 1.5, fontSize: "0.92rem", fontWeight: 700, color: T.ink },
          }}>
            {specs.map(([k, val]) => (
              <div key={k}><dt>{k}</dt><dd>{val}</dd></div>
            ))}
          </Box>

          <Box sx={{ mt: 2.5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
            {[
              { k: "Single pin or double-bolted?", t: "Compare the two clamp types", d: "How each one closes, its working pressure and the options, side by side.", cta: "Tri-clamp clamps guide", href: CLAMP_BASE, ext: false, bg: "linear-gradient(135deg, #EEF9EA 0%, #EAF4FF 100%)" },
              { k: "Complete the joint", t: "Ferrules and caps", d: "Every joint needs two ferrules and a gasket as well as the clamp. Find the ferrule for your tube.", cta: "Ferrules & end caps", href: `${SAN_BASE}/ferrules-end-caps`, ext: false, bg: "linear-gradient(135deg, #FFF7E6 0%, #FFFDF5 100%)" },
              { k: "Need help?", t: "Talk to our team", d: "Send your line size, material and finish and we’ll confirm the right clamp, or call +44 7368 137917.", cta: "Ask on WhatsApp", href: WA(c.partNumber), ext: true, bg: "linear-gradient(135deg, #F3EEFF 0%, #EAF4FF 100%)" },
            ].map((x) => (
              <Box key={x.k} sx={{ display: "flex", flexDirection: "column", p: 3, borderRadius: "22px", background: x.bg, border: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark, mb: 1 }}>{x.k}</Box>
                <Box sx={{ fontSize: "1.08rem", fontWeight: 800, color: T.ink, mb: 0.75 }}>{x.t}</Box>
                <Box component="p" sx={{ m: 0, mb: 2, flex: 1, fontSize: "0.9rem", lineHeight: 1.6, color: T.body }}>{x.d}</Box>
                <Box component={x.ext ? "a" : Link} href={x.href} {...(x.ext ? { target: "_blank", rel: "noopener" } : {})} sx={{ ...btn(false), alignSelf: "flex-start", py: 1 }}>
                  {x.cta} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Related */}
      <Box component="section" aria-labelledby="h2-rel" sx={{ py: { xs: 6, md: 8 }, bgcolor: T.surface }}>
        <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
            <Box component="h2" id="h2-rel" sx={{ m: 0, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.025em", color: T.ink }}>Nearby sizes</Box>
            <Box component={Link} href={`${CLAMP_BASE}/products?type=${typeSlug(c.type)}`} sx={{ fontSize: "0.9rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5 }}>
              All {sameType.length + 1} {c.type.toLowerCase()} clamps <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
            </Box>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2 } }}>
            {related.map((r) => (
              <Box key={r.id} component={Link} href={href(r)} sx={{ display: "block", p: 1.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", transition: "all .2s", "&:hover": { borderColor: "#BFE5B3", transform: "translateY(-3px)", boxShadow: T.shadowHover } }}>
                <Box sx={{ aspectRatio: "4 / 3", borderRadius: "14px", bgcolor: "#F2F5F8", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={r.img} alt="" loading="lazy" sx={{ width: "70%", height: "75%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ mt: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontWeight: 700, fontSize: "0.86rem", color: T.ink }}>{r.partNumber}</Box>
                <Box sx={{ mt: 0.25, fontSize: "0.8rem", color: T.body }}>{r.size}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfq} />
    </Box>
  );
}
