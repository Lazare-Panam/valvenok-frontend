import { Box, Typography } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T, textReset } from "./homeTokens";
import { Eyebrow } from "./HomeSectionHeader";
import { BRAND } from "@/src/theme/brand";

// "Find us" section: contact details next to an embedded Google map of the
// Bicester office. Same address, phone and email as the footer and Contact page.
const ADDRESS = "St. Edburgs Hall, Priory Road, Bicester, OX26 6BL, United Kingdom";
// Street + postcode (not the building name): the building search pins another business by name
const MAP_QUERY = encodeURIComponent("Priory Road, Bicester OX26 6BL, UK");
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

function Row({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
      <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "14px", bgcolor: T.brandSoft, color: T.brandDark, display: "grid", placeItems: "center" }}>{icon}</Box>
      <Box sx={{ pt: 0.25, minWidth: 0 }}>{children}</Box>
    </Box>
  );
}

const linkSx = { color: T.ink, fontWeight: 600, textDecoration: "none", "&:hover": { color: T.brandDark } } as const;

export default function FindUsModern() {
  return (
    <Box component="section" aria-labelledby="find-us" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 11 } }}>
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Eyebrow>Find us</Eyebrow>
        <Typography id="find-us" component="h2" sx={{ mt: 2, fontWeight: 700, fontSize: { xs: "2rem", md: "2.75rem" }, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
          Visit our UK office
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(320px, 0.8fr) 1.6fr" },
          borderRadius: "26px",
          overflow: "hidden",
          border: `1px solid ${T.border}`,
          boxShadow: T.shadow,
          bgcolor: BRAND.white,
        }}
      >
        {/* Details */}
        <Box sx={{ p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", gap: 3, justifyContent: "center" }}>
          <Row icon={<PlaceOutlinedIcon />}>
            <Typography sx={{ fontWeight: 700, color: T.ink, mb: 0.5 }}>Bicester, UK</Typography>
            <Typography component="address" sx={{ fontStyle: "normal", color: T.body, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Valvenok Ltd.
              <br />
              St. Edburgs Hall, Priory Road
              <br />
              Bicester, OX26 6BL
              <br />
              United Kingdom
            </Typography>
          </Row>
          <Row icon={<PhoneOutlinedIcon />}>
            <Box component="a" href="tel:+447368137917" sx={{ ...linkSx, fontSize: "1.05rem" }}>
              +44 7368 137917
            </Box>
          </Row>
          <Row icon={<MailOutlineRoundedIcon />}>
            <Box component="a" href="mailto:sales@valvenok.com" sx={{ ...linkSx, fontSize: "1.05rem", wordBreak: "break-word" }}>
              sales@valvenok.com
            </Box>
          </Row>
          <Box
            component="a"
            href={DIRECTIONS}
            target="_blank"
            rel="noopener"
            sx={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mt: 1,
              px: 2.5,
              py: 1.25,
              borderRadius: 999,
              border: `1px solid ${T.border}`,
              color: T.ink,
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "all .15s",
              "&:hover": { borderColor: T.brandDark, color: T.brandDark, bgcolor: T.brandSoft },
              "&:hover svg": { transform: "translateX(3px)" },
              "& svg": { transition: "transform .15s" },
            }}
          >
            Get directions <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>

        {/* Map */}
        <Box sx={{ position: "relative", minHeight: { xs: 300, md: 440 }, bgcolor: T.surface, borderLeft: { md: `1px solid ${T.border}` }, borderTop: { xs: `1px solid ${T.border}`, md: "none" } }}>
          <Box
            component="iframe"
            title={`Map: ${ADDRESS}`}
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
