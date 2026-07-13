"use client";

import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const bodyText = {
  color: "text.secondary",
  fontSize: "1.125rem",
  lineHeight: 1.8,
  mb: 2.5,
} as const;

const heading = {
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "primary.main",
  mt: 4,
  mb: 1.5,
} as const;

export default function MarsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: { xs: 3, md: 8 } }}>
        <Divider sx={{ mb: { xs: 5, md: 8 } }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 8 },
            alignItems: "flex-start",
          }}
        >
          {/* left: copy */}
          <Box sx={{ flex: 1 }}>
            <Typography component="h2" sx={{ ...heading, mt: 0 }}>
              Who we are
            </Typography>

            <Typography sx={bodyText}>
              We're{" "}
              <Box component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                Valvenok
              </Box>{" "}
              — and we're now also an official authorised distributor of
              genuine MARS industrial valves, supplying authentic products
              backed by full manufacturer documentation, certification, and
              technical support.
            </Typography>

            <Typography sx={bodyText}>
              We work closely with manufacturers to deliver valves that meet
              demanding industry standards. Every product we supply is
              traceable and quality-assured, with the documentation engineers
              and procurement teams expect.
            </Typography>

            <Typography component="h3" sx={heading}>
              Why buy from us?
            </Typography>

            <Typography sx={bodyText}>
              Whether you need a single valve or a complete project supply, we
              offer competitive pricing, fast delivery, and expert technical
              guidance — with knowledgeable support from enquiry through to
              delivery.
            </Typography>
          </Box>

          {/* right: static image */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                pt: "75%",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                bgcolor: "#fff",
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.08)",
              }}
            >
              <Link
                href="https://pblol2.blob.core.windows.net/mars-valves/home/Trust-Certfilicate.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://pblol2.blob.core.windows.net/mars-valves/home/Trust-Certfilicate.jpeg"
                  alt="MARS fire-safe ball valve, API 607 certified"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mt: { xs: 5, md: 8 } }} />
      </Box>
    </Box>
  );
}