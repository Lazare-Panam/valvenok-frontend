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
import SearchIcon from "@mui/icons-material/Search";
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
    height: barHeight,
    px: 2,
    gap: 1,
    color: "text.primary",
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: "16px",
    fontWeight: 800,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      color: "primary.main",
      bgcolor: alpha(theme.palette.primary.main, 0.06),
    },
  };

  const iconSx = { fontSize: 24, flexShrink: 0 };

  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>

     

      {/* SEARCH BAR */}
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 38,
          px: 2,
          mx: 1,
          border: "1.5px solid",
          borderColor: "divider",
          borderRadius: "24px",
          width: 220,
          gap: 1,
          transition: "border-color 0.2s",
          "&:hover": { borderColor: "#4a9a3a" },
          "&:focus-within": { borderColor: "#4a9a3a" },
        }}
      >
        <SearchIcon sx={{ fontSize: 18, color: "#999", flexShrink: 0 }} />
        <InputBase
          placeholder="Search products..."
          sx={{
            fontSize: "0.82rem",
            flex: 1,
            "& input": { p: 0 },
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const val = (e.target as HTMLInputElement).value;
              if (val) router.push(`/search?q=${encodeURIComponent(val)}`);
            }
          }}
        />
      </Box> */}
       {/* QUICK ORDER */}
      <Box sx={{ ...itemSx, color: "primary.main" }} onClick={() => router.push("/quick-order")}>
        <BoltIcon sx={{ ...iconSx, color: "primary.main" }} />
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
              borderRadius: 0,
              fontWeight: 900,
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
                fontWeight: 900,
                borderRadius: 0,
              }}
            >
              {user.firstName[0]}{user.lastName[0]}
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
                sx={{ fontWeight: 900, textTransform: "uppercase", fontFamily: '"Barlow Condensed"', lineHeight: 1.2 }}
              >
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
                {user.email}
              </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <MenuItem
              onClick={() => { setAnchorEl(null); router.push("/account"); }}
              sx={{ py: 1.5, fontWeight: 800, fontFamily: '"Barlow Condensed"', letterSpacing: "0.05em" }}
            >
              <ListItemIcon><AccountCircleIcon sx={{ color: "text.primary" }} /></ListItemIcon>
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => { setAnchorEl(null); onLogout(); }}
              sx={{ py: 1.5, fontWeight: 800, color: "error.main", fontFamily: '"Barlow Condensed"' }}
            >
              <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
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