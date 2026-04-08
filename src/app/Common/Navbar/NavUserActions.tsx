"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/src/store/useUserStore";
import { useCartStore } from "@/src/app/cart/hooks/useCartStore";
import { useLogout } from "../../login/hooks/useLogout";

interface Props {
  barHeight: number;
}

export default function NavUserActions({ barHeight }: Props) {
  const onLogout = useLogout();
  const theme = useTheme();
  const router = useRouter();
  
  // 1. ADD MOUNTED STATE
  const [mounted, setMounted] = useState(false);
  
  const { user, isAuthenticated } = useUserStore();
  const totalItems = useCartStore((state) => state.getTotalItems());

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // 2. TRIGGER MOUNT ON CLIENT
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: barHeight,
    px: 2.5,
    color: "text.primary",
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: "18px",
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

  const iconStyle = {
    fontSize: "28px",
    flexShrink: 0,
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
      {/* ── CART ── */}
      <Box
        sx={{ ...navItemStyle, gap: 1.5 }}
        onClick={() => router.push("/cart")}
      >
        <Badge
          // 3. ONLY SHOW CONTENT IF MOUNTED
          badgeContent={mounted ? totalItems : 0}
          invisible={!mounted || totalItems === 0}
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
          <ShoppingCartIcon sx={iconStyle} />
        </Badge>
        CART
      </Box>

      {/* ── AUTH ── */}
      {/* 4. ONLY SHOW AUTHED UI IF MOUNTED */}
      {mounted && isAuthenticated && user ? (
        <>
          <Box
            sx={{ ...navItemStyle, gap: 1.5 }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                bgcolor: "primary.main",
                color: "white",
                fontSize: "13px",
                fontWeight: 900,
                borderRadius: 0,
                border: "2px solid transparent",
              }}
            >
              {user.firstName[0]}
              {user.lastName[0]}
            </Avatar>
            PROFILE
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
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
              MY ACCOUNT
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
              LOGOUT
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box
          sx={{ ...navItemStyle, gap: 1.5 }}
          onClick={() => router.push("/login")}
        >
          <PersonIcon sx={iconStyle} />
          SIGN IN
        </Box>
      )}
    </Box>
  );
}