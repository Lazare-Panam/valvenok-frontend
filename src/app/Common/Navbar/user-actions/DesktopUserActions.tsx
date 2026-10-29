"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  InputBase,
  alpha,
  useTheme,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/src/store/useUserStore";
import { useCartStore } from "@/src/app/cart/hooks/useCartStore";
import { useLogout } from "@/src/app/login/hooks/useLogout";
import { useHydrated } from "./useHydrated";

interface Props {
  barHeight: number;
}

export default function DesktopUserActions({ barHeight }: Props) {
  const router = useRouter();
  const theme = useTheme();
  const onLogout = useLogout();
  const hydrated = useHydrated();
  const { user, isAuthenticated } = useUserStore();
  const totalItems = useCartStore((s) => s.getTotalItems());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const itemSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 1.5,
    py: 1,
    gap: 0.75,
    borderRadius: 999,
    color: "#0E1B12",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      color: "#2E8B1E",
      bgcolor: alpha(theme.palette.primary.main, 0.1),
    },
  };
  const iconSx = { fontSize: 20, flexShrink: 0 };

  const BPMA_LOGO_URL =
    "https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/bpma-logo.jpg";
  const BPMA_PDF_URL =
    "https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/BMPA.pdf";

  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
      {/* JOSCAR REGISTRATION */}
      <Box
        component="a"
        href="/joscar-registered"
        aria-label="JOSCAR registered supplier"
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1.5,
          transition: "opacity 0.2s ease-in-out",
          "&:hover": { opacity: 0.75 },
        }}
      >
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/valvenok-images/joscar-registered.png"
          alt="JOSCAR Registered"
          sx={{ height: Math.min(barHeight - 24, 52), width: "auto", display: "block" }}
        />
      </Box>
      {/* BPMA MEMBERSHIP */}
      <Box
        component="a"
        href={BPMA_PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: barHeight,
          px: 2,
          cursor: "pointer",
          transition: "opacity 0.2s ease-in-out",
          "&:hover": {
            opacity: 0.75,
          },
        }}
      >
        <Box
          component="img"
          src={BPMA_LOGO_URL}
          alt="BPMA Member"
          sx={{
            height: Math.min(barHeight - 40, 30),
            width: "auto",
            display: "block",
          }}
        />
      </Box>

      {/* TRACK ORDER */}
      <Box sx={itemSx} onClick={() => router.push("/track-order")}>
        <LocalShippingOutlinedIcon sx={iconSx} />
        Track Order
      </Box>

      {/* QUICK ORDER */}
      <Box
        sx={{ ...itemSx, color: "#2E8B1E" }}
        onClick={() => router.push("/quick-order")}
      >
        <BoltIcon sx={{ ...iconSx, color: "#2E8B1E" }} />
        Quick Order
      </Box>

      {/* CART */}
      <Box sx={itemSx} onClick={() => router.push("/cart")}>
        <Badge
          badgeContent={hydrated ? totalItems : 0}
          invisible={!hydrated || totalItems === 0}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              fontWeight: 700,
              height: 18,
              minWidth: 18,
              fontSize: "11px",
            },
          }}
        >
          <ShoppingCartIcon sx={iconSx} />
        </Badge>
        Cart
      </Box>

      {/* AUTH */}
      {hydrated && isAuthenticated && user ? (
        <>
          <Box sx={itemSx} onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar
              sx={{
                width: 28,
                height: 28,
                bgcolor: "primary.main",
                color: "white",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              {user.firstName[0]}
              {user.lastName[0]}
            </Avatar>
            Profile
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            slotProps={{
              paper: {
                sx: {
                  borderRadius: 0,
                  minWidth: 220,
                  border: "2px solid",
                  borderColor: "divider",
                  boxShadow: "none",
                  mt: "2px",
                },
              },
            }}
          >
            <Box sx={{ px: 2, py: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontFamily: '"Barlow Condensed"',
                  lineHeight: 1.2,
                }}
              >
                {user.firstName} {user.lastName}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 600 }}
              >
                {user.email}
              </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                router.push("/account");
              }}
              sx={{
                py: 1.5,
                fontWeight: 800,
                fontFamily: '"Barlow Condensed"',
                letterSpacing: "0.05em",
              }}
            >
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: "text.primary" }} />
              </ListItemIcon>
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                onLogout();
              }}
              sx={{
                py: 1.5,
                fontWeight: 800,
                color: "error.main",
                fontFamily: '"Barlow Condensed"',
              }}
            >
              <ListItemIcon>
                <LogoutIcon color="error" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box sx={itemSx} onClick={() => router.push("/login")}>
          <PersonIcon sx={iconSx} />
          Sign In
        </Box>
      )}
    </Box>
  );
}
