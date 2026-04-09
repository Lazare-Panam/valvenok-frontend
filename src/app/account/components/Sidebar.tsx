"use client";

import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUserStore } from "@/src/store/useUserStore";
import { useRouter, usePathname } from "next/navigation";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const SIDEBAR_WIDTH = 280;

const NAV_ITEMS = [
  { label: "Account Details", icon: <PersonIcon />, href: "/account" },
  { label: "Saved Cart", icon: <ShoppingCartIcon />, href: "/account/cart" },
  {
    label: "Order History",
    icon: <ReceiptLongIcon />,
    href: "/account/orders",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* ── SIDEBAR ── */}
      <Box
        sx={{
          width: SIDEBAR_WIDTH,
          borderRight: "1px solid",
          borderColor: "divider",
          bgcolor: "#fff",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          position: "fixed",
          height: "100vh",
        }}
      >
        {/* Brand */}
        <Box
          sx={{
            p: 3,
            borderBottom: "1px solid",
            borderColor: "divider",
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              color: "primary.main",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Valvenok
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600, letterSpacing: 1 }}
          >
            Customer Portal
          </Typography>
        </Box>

        {/* Nav */}
        <List sx={{ flex: 1, px: 2, pt: 2 }}>
          {NAV_ITEMS.map(({ label, icon, href }) => {
            const isActive = pathname === href;
            return (
              <ListItem key={href} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  selected={isActive}
                  onClick={() => router.push(href)}
                  sx={{
                    borderRadius: 0,
                    borderLeft: isActive
                      ? "3px solid"
                      : "3px solid transparent",
                    borderColor: isActive ? "primary.main" : "transparent",
                    bgcolor: isActive ? "primary.50" : "transparent",
                    "&:hover": { bgcolor: "action.hover" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? "primary.main" : "text.secondary",
                      minWidth: 40,
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 800 : 600,
                      fontSize: "0.875rem",
                      color: isActive ? "primary.main" : "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider />

        {/* Sign Out */}
        <Box sx={{ p: 2 }}>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              borderRadius: 0,
              color: "error.main",
              "&:hover": { bgcolor: "error.50" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <LogoutIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Sign Out"
              primaryTypographyProps={{ fontWeight: 700, fontSize: "0.875rem" }}
            />
          </ListItemButton>
        </Box>
      </Box>

      {/* ── MAIN CONTENT ── */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: `${SIDEBAR_WIDTH}px` },
          p: { xs: 3, md: 6 },
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
