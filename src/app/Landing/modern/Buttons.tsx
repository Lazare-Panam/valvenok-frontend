'use client'

import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T } from "./tokens";

type Variant = "primary" | "secondary" | "ghostDark" | "light";

const styles: Record<Variant, object> = {
  primary: {
    bgcolor: T.green,
    color: T.greenDeep,
    border: `1px solid ${T.green}`,
    "&:hover": { bgcolor: "#55C93E" },
  },
  secondary: {
    bgcolor: "#fff",
    color: T.ink,
    border: `1px solid ${T.border}`,
    "&:hover": { borderColor: T.ink },
  },
  ghostDark: {
    bgcolor: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.35)",
    "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.06)" },
  },
  light: {
    bgcolor: "#fff",
    color: T.greenDeep,
    border: "1px solid #fff",
    "&:hover": { bgcolor: "#F2FBEF" },
  },
};

export default function PillButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
}) {
  return (
    <Box
      component={Link}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 2.5,
        py: 1.25,
        borderRadius: 999,
        fontFamily: T.font,
        fontWeight: 600,
        fontSize: "0.95rem",
        textDecoration: "none",
        textTransform: "capitalize",
        whiteSpace: "nowrap",
        transition: "all .2s ease",
        "& svg": { fontSize: 18, transition: "transform .2s ease" },
        "&:hover svg": { transform: "translateX(3px)" },
        ...styles[variant],
      }}
    >
      {children}
      {arrow && <ArrowForwardRoundedIcon />}
    </Box>
  );
}
