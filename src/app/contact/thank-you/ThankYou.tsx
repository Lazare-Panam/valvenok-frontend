"use client";

// Thank-you page after the contact form: confirms the message was sent, says
// what happens next, and points to useful places on the site.

import Link from "next/link";
import { Box } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { wrap, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const NEXT = [
  { icon: MarkEmailReadOutlinedIcon, t: "We’ve got your message", b: "It has gone straight to our sales team at sales@valvenok.com." },
  { icon: ScheduleOutlinedIcon, t: "We reply within 24 hours", b: "On working days, usually much sooner, with availability, pricing or the answer to your question." },
  { icon: PhoneOutlinedIcon, t: "Need it sooner?", b: "Call +44 7368 137917, or message us on WhatsApp." },
];

const LINKS = [
  { label: "Valves & manifolds", href: "/valves" },
  { label: "Actuators", href: "/actuators" },
  { label: "Hydrogen & high pressure", href: "/hydrogen-cryogenic" },
  { label: "News & guides", href: "/news" },
];

export default function ThankYou() {
  return (
    <Box sx={{ ...textReset, bgcolor: "#fff" }}>
      <Box component="section" sx={{ background: "linear-gradient(180deg, #F3FAF1 0%, #FFFFFF 100%)", py: { xs: 7, md: 11 } }}>
        <Box sx={{ ...wrap, maxWidth: 820, textAlign: "center" }}>
          <Box sx={{ mx: "auto", width: 76, height: 76, borderRadius: "50%", bgcolor: T.green, color: "#fff", display: "grid", placeItems: "center", boxShadow: `0 0 0 10px ${T.greenSoft}` }}>
            <CheckRoundedIcon sx={{ fontSize: 42 }} />
          </Box>
          <Box component="h1" sx={{ m: 0, mt: 3.5, fontSize: { xs: "2.2rem", md: "3.2rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, color: T.ink }}>
            Thank you, your message is sent
          </Box>
          <Box component="p" sx={{ m: 0, mt: 2, mx: "auto", maxWidth: 560, fontSize: { xs: "1.02rem", md: "1.1rem" }, lineHeight: 1.7, color: T.body }}>
            Thanks for getting in touch with Valvenok. One of our team will come back to you shortly.
          </Box>

          <Box sx={{ mt: 5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 1.5, textAlign: "left" }}>
            {NEXT.map(({ icon: Icon, t, b }) => (
              <Box key={t} sx={{ p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
                <Box sx={{ width: 42, height: 42, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}><Icon /></Box>
                <Box component="h2" sx={{ m: 0, mt: 1.5, fontSize: "1rem", fontWeight: 800, color: T.ink }}>{t}</Box>
                <Box component="p" sx={{ m: 0, mt: 0.5, fontSize: "0.9rem", lineHeight: 1.6, color: T.body }}>{b}</Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 4.5, display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            <Box component={Link} href="/" sx={pillBtn(true)}>Back to the home page <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} /></Box>
            <Box component="a" href="https://wa.me/447368137917" target="_blank" rel="noopener" sx={pillBtn(false)}><WhatsAppIcon sx={{ fontSize: 18 }} /> WhatsApp us</Box>
          </Box>

          <Box sx={{ mt: 5, pt: 4, borderTop: `1px solid ${T.border}` }}>
            <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.muted, mb: 1.5 }}>While you wait, browse</Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
              {LINKS.map((l) => (
                <Box key={l.href} component={Link} href={l.href} sx={{ px: 1.75, py: 0.8, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", fontSize: "0.88rem", fontWeight: 700, color: T.ink, textDecoration: "none", "&:hover": { borderColor: T.greenDark, color: T.greenDark } }}>
                  {l.label}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
