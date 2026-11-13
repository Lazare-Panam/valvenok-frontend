"use client";

import {
  Avatar,
  Badge,
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/src/store/useUserStore";
import { useCartStore } from "@/src/app/cart/hooks/useCartStore";
import { useLogout } from "@/src/app/login/hooks/useLogout";
import { useHydrated } from "./useHydrated";

interface Props {
  onClose: () => void;
}

export default function MobileUserActions({ onClose }: Props) {
  const router = useRouter();
  const onLogout = useLogout();
  const hydrated = useHydrated();
  const { user, isAuthenticated } = useUserStore();
  const totalItems = useCartStore((s) => s.getTotalItems());

  const isAuthed = hydrated && isAuthenticated && user;

  const rowSx = {
    px: 2,
    py: 1.75,
    display: "flex",
    alignItems: "center",
    gap: 2,
    width: "100%",
  };

  const labelSx = {
    fontFamily: '"Barlow Condensed"',
    fontWeight: 800,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    fontSize: "16px",
  };

  const go = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Box>
      {/* USER HEADER (authed only) */}
      {isAuthed && (
        <Box sx={{ px: 2, py: 2, bgcolor: "#FAFAFA", display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "primary.main",
              color: "white",
              fontSize: "14px",
              fontWeight: 900,
              borderRadius: 0,
            }}
          >
            {user.firstName[0]}
            {user.lastName[0]}
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontWeight: 900,
                textTransform: "uppercase",
                fontFamily: '"Barlow Condensed"',
                fontSize: "1rem",
                lineHeight: 1.2,
              }}
            >
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
              {user.email}
            </Typography>
          </Box>
        </Box>
      )}

      {/* QUICK ORDER */}
      <ListItemButton onClick={() => go("/quick-order")} sx={{ ...rowSx, color: "primary.main" }}>
        <BoltIcon sx={{ fontSize: 26, color: "primary.main" }} />
        <ListItemText primary="Quick Order" primaryTypographyProps={labelSx} />
      </ListItemButton>

      {/* CART */}
      <ListItemButton onClick={() => go("/cart")} sx={rowSx}>
        <Badge
          badgeContent={hydrated ? totalItems : 0}
          invisible={!hydrated || totalItems === 0}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              borderRadius: 0,
              fontWeight: 900,
              height: 18,
              minWidth: 18,
              fontSize: "11px",
            },
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 26 }} />
        </Badge>
        <ListItemText primary="Cart" primaryTypographyProps={labelSx} />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      {/* AUTH */}
      {isAuthed ? (
        <>
          <ListItemButton onClick={() => go("/account")} sx={rowSx}>
            <AccountCircleIcon sx={{ fontSize: 26 }} />
            <ListItemText primary="My Account" primaryTypographyProps={labelSx} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              onLogout();
              onClose();
            }}
            sx={{ ...rowSx, color: "error.main" }}
          >
            <LogoutIcon sx={{ fontSize: 26, color: "error.main" }} />
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ ...labelSx, color: "error.main" }}
            />
          </ListItemButton>
        </>
      ) : (
        <ListItemButton onClick={() => go("/login")} sx={rowSx}>
          <PersonIcon sx={{ fontSize: 26 }} />
          <ListItemText primary="Sign In" primaryTypographyProps={labelSx} />
        </ListItemButton>
      )}

      {/* ACCREDITATIONS: the header logos are desktop-only */}
      <Divider sx={{ my: 1 }} />
      <Box sx={{ px: 2, py: 1.5, display: "flex", alignItems: "center", gap: 3 }}>
        {[
          { href: "/joscar-registered", src: "https://pblol2.blob.core.windows.net/valvenok-images/joscar-registered.png", alt: "JOSCAR registered supplier", h: 44 },
          { href: "/bvaa-member", src: "https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/bvaa-logo.png", alt: "BVAA member", h: 24 },
        ].map((l) => (
          <Box key={l.href} component="button" type="button" onClick={() => go(l.href)} aria-label={l.alt}
            sx={{ border: 0, bgcolor: "transparent", p: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <Box component="img" src={l.src} alt={l.alt} sx={{ height: l.h, width: "auto", display: "block" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}