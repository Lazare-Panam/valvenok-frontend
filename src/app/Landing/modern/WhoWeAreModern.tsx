'use client'

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import { T, textReset } from "./tokens";

// Same copy as the original MarsSection; the photo is the MARS process-valve
// banner already used on the site.
const PHOTO = "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/Mars.jpeg";

export default function WhoWeAreModern() {
  const body = { fontSize: "1.05rem", lineHeight: 1.8, color: T.body };
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 11 } }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        {/* Photo */}
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "relative", aspectRatio: "4 / 3", borderRadius: "26px", overflow: "hidden", boxShadow: T.shadowHover }}>
            <Image src={PHOTO} alt="MARS industrial process valves" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(10,32,14,0.55) 100%)" }} />
          </Box>
        </Box>

        {/* Copy */}
        <Box>
          <Box sx={{ width: 48, height: 4, borderRadius: 2, bgcolor: T.green, mb: 2.5 }} />
          <Typography component="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.75rem" }, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
            Who we are
          </Typography>
          <Typography sx={{ ...body, mt: 2.5 }}>
            We&apos;re{" "}
            <Box component="span" sx={{ fontWeight: 700, color: T.ink }}>
              Valvenok
            </Box>{" "}
            — and we&apos;re now also an official authorised distributor of genuine MARS industrial valves, supplying authentic products
            backed by full manufacturer documentation, certification, and technical support.
          </Typography>
          <Typography sx={{ ...body, mt: 2 }}>
            We work closely with manufacturers to deliver valves that meet demanding industry standards, with documentation and traceability
            available on request — certification varies by model.
          </Typography>

          <Box
            sx={{
              mt: 4,
              p: { xs: 3, md: 3.5 },
              display: "flex",
              gap: 2.5,
              alignItems: "flex-start",
              borderRadius: "20px",
              border: "1px solid rgba(46,139,30,0.18)",
              background: `linear-gradient(135deg, ${T.greenSoft} 0%, #fff 100%)`,
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                width: 52,
                height: 52,
                borderRadius: "14px",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                background: `linear-gradient(140deg, #3FAE2C 0%, ${T.greenDark} 100%)`,
                boxShadow: "0 10px 22px rgba(46,139,30,0.3)",
              }}
            >
              <HandshakeRoundedIcon />
            </Box>
            <Box>
              <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.25rem", color: T.ink }}>
                Why buy from us?
              </Typography>
              <Typography sx={{ ...body, mt: 1, fontSize: "1rem" }}>
                Whether you need a single valve or a complete project supply, we offer competitive pricing and expert technical guidance — with
                knowledgeable support from enquiry through to delivery.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
