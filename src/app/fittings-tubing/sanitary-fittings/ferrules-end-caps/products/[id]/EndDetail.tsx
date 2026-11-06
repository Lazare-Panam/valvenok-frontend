"use client";

// Single ferrule or end cap model, in the same style as the tri-clamp clamp
// model page: photo + key facts, a picker to switch product, size or tube,
// the parts that complete the joint, full specs and nearby sizes.

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
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { SAN_BRAND, SAN_BRAND_LOGO } from "../../../data";
import { CLAMP_BASE } from "../../../tri-clamp-clamps/clamps";
import { ENDS, ENDS_BASE, END_KINDS, END_SERIES, END_COMMON, MATERIALS, FINISHES, endHref, clampHref, kindSlug, kindPlural, sizeIndex, type EndPart } from "../../ends";
import { endRFQ } from "../EndTable";

const WA = (pn: string) =>
  `https://wa.me/447368137917?text=${encodeURIComponent(`Hello Valvenok, I have a question about ${pn} (https://www.valvenok.com${ENDS_BASE}/products/${pn}).`)}`;
const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

const btn = (primary: boolean) =>
  ({
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1, px: 3, py: 1.4, borderRadius: 999, fontWeight: 700, fontSize: "0.95rem",
    textDecoration: "none", cursor: "pointer", fontFamily: "inherit", transition: "all .2s",
    ...(primary
      ? { border: 0, bgcolor: T.green, color: T.greenDeep, "&:hover": { bgcolor: "#55C93E" } }
      : { bgcolor: "#fff", color: T.ink, border: `1px solid ${T.border}`, "&:hover": { borderColor: T.greenDark, color: T.greenDark } }),
  }) as const;
const option = (on: boolean) => ({
  cursor: "pointer", fontFamily: "inherit", px: 1.5, py: 0.7, borderRadius: "10px", fontSize: "0.85rem", fontWeight: on ? 800 : 600, textDecoration: "none",
  border: `1.5px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenSoft : "#fff", color: on ? T.greenDeep : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark },
});
const plainName = (e: EndPart) =>
  e.slug === "ferrule"
    ? `${SAN_BRAND} tri-clamp ferrule for ${e.tubeOd} × ${e.tubeId} mm tube, ${e.a} mm flange, length ${e.length} mm`
    : e.slug === "blind"
      ? `${SAN_BRAND} tri-clamp blind cover, ${e.size}, thickness ${e.t} mm`
      : `${SAN_BRAND} sight glass end cap, ${e.size}, glass ${e.glass} mm`;
const pickFirst = (list: EndPart[]) => list.sort((a, b) => parseFloat(a.tubeOd ?? "0") - parseFloat(b.tubeOd ?? "0"))[0];

/** Switch product (keeping the size where it exists), clamp size, and for ferrules the tube */
function Picker({ e }: { e: EndPart }) {
  const sameKind = ENDS.filter((x) => x.kind === e.kind);
  const sizes = Array.from(new Set(sameKind.map((x) => x.size))).sort((a, b) => sizeIndex(a) - sizeIndex(b));
  const tubes = sameKind.filter((x) => x.size === e.size).sort((a, b) => parseFloat(a.tubeOd!) - parseFloat(b.tubeOd!) || parseFloat(a.length!) - parseFloat(b.length!));
  const label = { fontSize: "0.78rem", fontWeight: 700, color: T.muted, mb: 0.75 };
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Box>
        <Box sx={label}>Product: <Box component="span" sx={{ color: T.ink }}>{e.kind}</Box></Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {END_KINDS.map((k) => {
            const target = pickFirst(ENDS.filter((x) => x.kind === k && x.size === e.size)) ?? ENDS.find((x) => x.kind === k)!;
            return (
              <Box key={k} component={Link} href={endHref(target)} aria-current={k === e.kind ? "page" : undefined} sx={option(k === e.kind)}>
                {k}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Box sx={label}>Clamp size: <Box component="span" sx={{ color: T.ink }}>{e.size}</Box></Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {sizes.map((s) => {
            const target = s === e.size ? e : pickFirst(sameKind.filter((x) => x.size === s));
            return (
              <Box key={s} component={Link} href={endHref(target)} title={s} aria-current={s === e.size ? "page" : undefined} sx={option(s === e.size)}>
                {target.short}
              </Box>
            );
          })}
        </Box>
      </Box>
      {e.slug === "ferrule" && tubes.length > 1 && (
        <Box>
          <Box sx={label}>Tube at this flange: <Box component="span" sx={{ color: T.ink }}>{e.tubeOd} × {e.tubeId} mm, L {e.length}</Box></Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {tubes.map((x) => (
              <Box key={x.id} component={Link} href={endHref(x)} aria-current={x.id === e.id ? "page" : undefined} sx={option(x.id === e.id)}>
                {x.tubeOd} × {x.tubeId} · L {x.length}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default function EndDetail({ id }: { id: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false); // order code copied
  const [mat, setMat] = useState<string | null>(null);
  const [fin, setFin] = useState<string | null>(null);
  const e = ENDS.find((x) => x.id === id)!;
  const series = END_SERIES[e.slug];
  const isFerrule = e.slug === "ferrule";
  const cover = isFerrule;

  const eq: [string, string][] = [["ISO 2852", e.iso], ["DIN 32676", e.din], ["BS 4825", e.bs]];
  const own: [string, string][] = isFerrule
    ? [["Tube OD", `${e.tubeOd} mm`], ["Tube ID", `${e.tubeId} mm`], ["Length L", `${e.length} mm`], ["Flange diameter A", `${e.a} mm`]]
    : e.slug === "sight"
      ? [["Clamp diameter A", `${e.a} mm`], ["Glass diameter d1", `${e.glass} mm`], ["Thickness T", `${e.t} mm`]]
      : [["Clamp diameter A", `${e.a} mm`], ["Thickness T", `${e.t} mm`]];
  // series specs from the datasheet, minus rows already covered by END_COMMON
  const commonKeys = new Set(END_COMMON.map(([k]) => k).concat(["Sizes"]));
  const fromSeries = series.specs.filter(([k]) => !commonKeys.has(k));
  const specs: [string, string][] = [
    ["Part number", e.partNumber],
    ["Order code", e.orderCode],
    ["Product", e.kind],
    ...own,
    ["Fits clamp", `${e.clampA} mm (${e.single.partNumber} or ${e.double.partNumber})`],
    ...eq.map(([k, v]) => [k, v === "–" ? "Not listed for this size" : v] as [string, string]),
    ...fromSeries,
    ...END_COMMON,
  ];
  const extra = [...(mat ? [{ label: "Material (MX)", value: mat }] : []), ...(fin ? [{ label: "Finish (FX)", value: fin }] : [])];
  const rfq = endRFQ(e, extra);

  const sameKind = ENDS.filter((x) => x.kind === e.kind).sort((a, b) => sizeIndex(a.size) - sizeIndex(b.size) || parseFloat(a.tubeOd ?? "0") - parseFloat(b.tubeOd ?? "0"));
  const idx = sameKind.findIndex((x) => x.id === e.id);
  const others = sameKind.filter((x) => x.id !== e.id);
  const related = [...others.slice(Math.max(0, idx - 2), idx), ...others.slice(idx, idx + 2)].slice(0, 4);
  const blind = ENDS.find((x) => x.slug === "blind" && x.size === e.size);
  const sight = ENDS.find((x) => x.slug === "sight" && x.size === e.size);
  const ferrulesHere = ENDS.filter((x) => x.slug === "ferrule" && x.size === e.size).length;

  const joint: { k: string; code: string; note: string; href: string; img: string }[] = [
    ...(isFerrule ? [] : [{ k: "Ferrule", code: `${ferrulesHere} to choose from`, note: "Pick the one for your tube", href: `${ENDS_BASE}/products?type=ferrule&size=${e.clampA}`, img: ENDS.find((x) => x.slug === "ferrule")!.img }]),
    { k: "Single pin clamp", code: e.single.partNumber, note: e.single.pressure, href: clampHref(e.single), img: e.single.img },
    { k: "Double-bolted clamp", code: e.double.partNumber, note: e.double.pressure, href: clampHref(e.double), img: e.double.img },
    ...(isFerrule && blind ? [{ k: "Blind cover", code: blind.partNumber, note: `T ${blind.t} mm`, href: endHref(blind), img: blind.img }] : []),
    ...(isFerrule && sight ? [{ k: "Sight glass end cap", code: sight.partNumber, note: `Glass ${sight.glass} mm`, href: endHref(sight), img: sight.img }] : []),
  ];

  const schema = {
    "@context": "https://schema.org", "@type": "Product", name: `${SAN_BRAND} ${e.partNumber} ${e.kind.toLowerCase()}`, sku: e.partNumber, mpn: e.partNumber,
    brand: { "@type": "Brand", name: SAN_BRAND }, image: e.img, description: plainName(e), category: "Tri-clamp ferrules and end caps",
    additionalProperty: specs.slice(1, 10).map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
  };
  const imgSx = (w: string) => (cover ? { width: "100%", height: "100%", objectFit: "cover" } : { width: w, height: w, objectFit: "contain" });

  return (
    <Box sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Top: photo + key facts */}
      <Box component="section" sx={{ background: "linear-gradient(180deg, #F6FAF5 0%, #FFFFFF 100%)", pt: { xs: 3, md: 5 }, pb: { xs: 4, md: 5 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box component={Link} href={`${ENDS_BASE}/products?type=${kindSlug(e.kind)}`} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 2.5, fontSize: "0.88rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            <ArrowBackRoundedIcon sx={{ fontSize: 17 }} /> All {kindPlural(e.kind)}
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 3, md: 6 }, alignItems: "start" }}>
            {/* photo */}
            <Box sx={{ position: { md: "sticky" }, top: { md: 150 } }}>
              <Box sx={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden" }}>
                <Box component="img" src={e.img} alt={`${SAN_BRAND} ${e.kind.toLowerCase()}`} sx={{ ...imgSx("72%"), mixBlendMode: "multiply" }} />
                <Box sx={{ position: "absolute", top: 14, left: 14, px: 1.25, py: 0.7, borderRadius: 999, bgcolor: "rgba(255,255,255,0.92)", display: "inline-flex" }}>
                  <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ height: 18, width: "auto", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ position: "absolute", top: 16, right: 16, px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.8rem", fontWeight: 800 }}>{isFerrule ? `Tube ${e.tubeOd} mm` : `${e.clampA} mm`}</Box>
              </Box>
              <Box sx={{ mt: 1, fontSize: "0.78rem", color: T.muted, textAlign: "center" }}>Photo shows the product type; size as listed.</Box>
              <Box sx={{ mt: 1.25, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
                {[
                  { icon: <ShieldOutlinedIcon />, t: "316L / 304 stainless" },
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
                <Box component="span" sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.78rem", fontWeight: 700, color: T.ink }}>{e.kind}</Box>
                <Box component="span" sx={{ fontSize: "0.82rem", fontWeight: 600, color: T.muted }}>Sanitary fittings · {SAN_BRAND}</Box>
              </Box>
              <Box component="h1" sx={{ m: 0, fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: T.ink, fontFamily: `${mono} !important`, wordBreak: "break-word" }}>
                {e.partNumber}
              </Box>
              <Box component="p" sx={{ m: 0, mt: 1.25, fontSize: "1.05rem", lineHeight: 1.6, color: T.body }}>{plainName(e)}.</Box>

              {/* order code: what goes on the purchase order */}
              <Box sx={{ mt: 2.5, p: { xs: 1.75, md: 2 }, borderRadius: "18px", border: `1.5px solid ${T.greenDark}`, bgcolor: T.greenSoft }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.5, flexWrap: "wrap" }}>
                  <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase !important", color: T.greenDark }}>Order code</Box>
                    <Box sx={{ mt: 0.25, fontFamily: `${mono} !important`, fontWeight: 800, fontSize: { xs: "1.1rem", md: "1.3rem" }, color: T.ink, wordBreak: "break-all" }}>
                      {e.partNumber}
                      <Box component="span" sx={{ color: T.greenDark }}>.MX.FX</Box>
                    </Box>
                  </Box>
                  <Box component="button" type="button" onClick={() => { navigator.clipboard?.writeText(e.orderCode); setCopied(true); setTimeout(() => setCopied(false), 1500); }} aria-label="Copy order code"
                    sx={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.75, borderRadius: 999, border: `1px solid ${T.greenDark}`, bgcolor: "#fff", fontFamily: "inherit", fontSize: "0.8rem", fontWeight: 700, color: T.greenDark }}>
                    {copied ? <CheckRoundedIcon sx={{ fontSize: 15 }} /> : <ContentCopyRoundedIcon sx={{ fontSize: 14 }} />} {copied ? "Copied" : "Copy order code"}
                  </Box>
                </Box>
                <Box sx={{ mt: 1.75, pt: 1.75, borderTop: "1px dashed #BFE3B4", display: "grid", gap: 1.5 }}>
                  {([
                    ["MX", "Material", MATERIALS, mat, setMat],
                    ["FX", "Finish", FINISHES, fin, setFin],
                  ] as const).map(([tag, label, opts, v, set]) => (
                    <Box key={label}>
                      <Box sx={{ fontSize: "0.78rem", fontWeight: 700, color: T.body, mb: 0.75 }}>
                        <Box component="span" sx={{ fontFamily: mono, color: T.greenDark, fontWeight: 800 }}>{tag}</Box> · {label}
                        {label === "Finish" && <Box component="span" sx={{ color: T.muted, fontWeight: 600 }}> (electropolishing on request)</Box>}
                      </Box>
                      <Box role="group" aria-label={label} sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                        {opts.map((o) => {
                          const on = v === o;
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
                      ? <>Your order: <b>{e.partNumber}</b> in <b>{mat}</b>, <b>{fin}</b>. We’ll confirm the full code on your quote.</>
                      : <>Pick the material and finish and they’ll be sent with your quote request.</>}
                  </Box>
                </Box>
              </Box>

              {/* key facts */}
              <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" }, gap: 1 }}>
                {(isFerrule
                  ? [["Tube OD × ID", `${e.tubeOd} × ${e.tubeId} mm`], ["Length L", `${e.length} mm`], ["Flange A", `${e.a} mm`], ["Line size", e.short]]
                  : [["Clamp size A", `${e.a} mm`], ["Line size", e.short], e.slug === "sight" ? ["Glass d1", `${e.glass} mm`] : ["Thickness T", `${e.t} mm`], ["Max. pressure", e.pressure]]
                ).map(([k, v]) => (
                  <Box key={k} sx={{ p: 1.5, borderRadius: "14px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                    <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase !important", color: T.muted }}>{k}</Box>
                    <Box sx={{ mt: 0.25, fontSize: "0.92rem", fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{v}</Box>
                  </Box>
                ))}
              </Box>

              {/* picker */}
              <Box sx={{ mt: 3, p: { xs: 2, md: 2.5 }, borderRadius: "20px", bgcolor: T.surface, border: `1px solid ${T.border}` }}>
                <Box sx={{ fontSize: "0.95rem", fontWeight: 800, color: T.ink, mb: 1.5 }}>Choose another product or size</Box>
                <Picker e={e} />
              </Box>

              {/* actions */}
              <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.25 }}>
                <Box component="button" type="button" onClick={() => setModalOpen(true)} sx={btn(true)}>
                  Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box component="a" href={WA(e.partNumber)} target="_blank" rel="noopener" sx={btn(false)}>
                  Ask on WhatsApp
                </Box>
              </Box>
              <Box sx={{ mt: 1.5, fontSize: "0.85rem", color: T.body }}>Price and lead time confirmed on your quote.</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Complete the joint */}
      <Box component="section" aria-labelledby="h2-joint" sx={{ pt: 2, pb: { xs: 5, md: 6 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Box component="h2" id="h2-joint" sx={{ m: 0, mb: 0.75, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.025em", color: T.ink }}>Fits the same {e.clampA} mm flange</Box>
          <Box component="p" sx={{ m: 0, mb: 2, color: T.body, lineHeight: 1.6 }}>Add a gasket for each joint. Everything below fits this part.</Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: `repeat(${Math.min(joint.length, 4)}, 1fr)` }, gap: 1.25 }}>
            {joint.map((x) => (
              <Box key={x.k} component={Link} href={x.href} sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", transition: "all .2s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft } }}>
                <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={x.img} alt="" loading="lazy" sx={{ width: "82%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ fontSize: "0.78rem", color: T.body }}>{x.k}</Box>
                  <Box sx={{ fontFamily: mono, fontWeight: 800, fontSize: "0.9rem", color: T.ink }}>{x.code}</Box>
                  <Box sx={{ fontSize: "0.76rem", color: T.muted }}>{x.note}</Box>
                </Box>
                <ArrowForwardRoundedIcon sx={{ fontSize: 17, color: T.muted }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Specifications */}
      <Box component="section" aria-labelledby="h2-spec" sx={{ pb: { xs: 6, md: 8 } }}>
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
            {specs.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </Box>

          <Box sx={{ mt: 2.5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
            {[
              { k: "Ferrule, blind cover or sight glass?", t: "Compare the three", d: "What each one does at the end of a line, and a finder that lists every part for one joint.", cta: "Ferrules & end caps guide", href: ENDS_BASE, ext: false, bg: "linear-gradient(135deg, #EEF9EA 0%, #EAF4FF 100%)" },
              { k: "Complete the joint", t: "Tri-clamp clamps", d: "Single pin or double-bolted, in every size that fits these flanges.", cta: "Tri-clamp clamps", href: CLAMP_BASE, ext: false, bg: "linear-gradient(135deg, #FFF7E6 0%, #FFFDF5 100%)" },
              { k: "Need help?", t: "Talk to our team", d: "Send your tube size, material and finish and we’ll confirm the right part, or call +44 7368 137917.", cta: "Ask on WhatsApp", href: WA(e.partNumber), ext: true, bg: "linear-gradient(135deg, #F3EEFF 0%, #EAF4FF 100%)" },
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
      {related.length > 0 && (
        <Box component="section" aria-labelledby="h2-rel" sx={{ py: { xs: 6, md: 8 }, bgcolor: T.surface }}>
          <Box sx={{ maxWidth: 1240, mx: "auto", px: { xs: 2, md: 4 } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
              <Box component="h2" id="h2-rel" sx={{ m: 0, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, letterSpacing: "-0.025em", color: T.ink }}>Nearby sizes</Box>
              <Box component={Link} href={`${ENDS_BASE}/products?type=${kindSlug(e.kind)}`} sx={{ fontSize: "0.9rem", fontWeight: 700, color: T.greenDark, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5 }}>
                All {sameKind.length} {kindPlural(e.kind)} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2 } }}>
              {related.map((r) => (
                <Box key={r.id} component={Link} href={endHref(r)} sx={{ display: "block", p: 1.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", transition: "all .2s", "&:hover": { borderColor: "#BFE5B3", transform: "translateY(-3px)", boxShadow: T.shadowHover } }}>
                  <Box sx={{ aspectRatio: "4 / 3", borderRadius: "14px", bgcolor: "#F2F5F8", display: "grid", placeItems: "center", overflow: "hidden" }}>
                    <Box component="img" src={r.img} alt="" loading="lazy" sx={{ ...(cover ? { width: "100%", height: "100%", objectFit: "cover" } : { width: "70%", height: "75%", objectFit: "contain" }), mixBlendMode: "multiply" }} />
                  </Box>
                  <Box sx={{ mt: 1.25, fontFamily: mono, fontWeight: 700, fontSize: "0.86rem", color: T.ink, wordBreak: "break-all" }}>{r.partNumber}</Box>
                  <Box sx={{ mt: 0.25, fontSize: "0.8rem", color: T.body }}>{r.dims}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfq} />
    </Box>
  );
}
