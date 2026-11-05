"use client";

import { Box, Tooltip } from "@mui/material";
import { usePathname } from "next/navigation";

// Valvenok sales WhatsApp: +44 7368 137917 (same number as the header and footer)
const NUMBER = "447368137917";
const SITE = "https://www.valvenok.com";
const GREEN = "#25D366";

// wa.me link with a message that names the page the visitor is on, so sales
// can see which product the question is about.
function chatLink(pageName: string, url: string) {
  const text = `Hello Valvenok, I have a question about ${pageName} (${url}).`;
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;
}

function pageName(pathname: string) {
  if (pathname === "/") return "your products";
  return document.title.replace(/\s*\|\s*Valvenok.*$/, "").trim() || "your products";
}

/** Round WhatsApp button, bottom right on every page */
export default function WhatsAppButton() {
  const pathname = usePathname();
  const url = `${SITE}${pathname}`;
  return (
    <Tooltip title="Chat on WhatsApp" placement="left">
      <Box
        component="a"
        href={chatLink("your products", url)}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Valvenok sales on WhatsApp"
        // Rebuild the message on click, when the page title is known
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.currentTarget.href = chatLink(pageName(pathname), url);
        }}
        sx={{
          position: "fixed",
          right: { xs: 16, md: 24 },
          bottom: { xs: 16, md: 24 },
          zIndex: 1250,
          width: { xs: 54, md: 60 },
          height: { xs: 54, md: 60 },
          borderRadius: "50%",
          bgcolor: GREEN,
          color: "#fff",
          display: "grid",
          placeItems: "center",
          boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
          transition: "transform .2s ease",
          "&:hover": { transform: "scale(1.06)" },
          "&:focus-visible": { outline: "3px solid #128C7E", outlineOffset: 3 },
          "@media (prefers-reduced-motion: reduce)": { transition: "none", "&:hover": { transform: "none" } },
          "@media print": { display: "none" },
        }}
      >
        <svg viewBox="0 0 32 32" width="58%" height="58%" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A13 13 0 0 0 16.04 29C23.2 29 29.05 23.17 29.05 16S23.2 3 16.04 3Zm0 23.8c-1.95 0-3.86-.52-5.53-1.51l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.76 10.76 0 0 1 5.24 16c0-5.95 4.85-10.8 10.8-10.8 5.96 0 10.8 4.85 10.8 10.8 0 5.96-4.84 10.8-10.8 10.8Zm5.93-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.84 1.06-1.03 1.27-.19.22-.38.24-.7.08-.33-.16-1.38-.51-2.62-1.62-.97-.86-1.62-1.93-1.81-2.25-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.21-.32.32-.54.11-.21.06-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.57.08-.87.4-.3.33-1.14 1.12-1.14 2.72s1.17 3.16 1.33 3.38c.16.21 2.3 3.5 5.56 4.91.78.33 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.92-.79 2.19-1.55.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
        </svg>
      </Box>
    </Tooltip>
  );
}
