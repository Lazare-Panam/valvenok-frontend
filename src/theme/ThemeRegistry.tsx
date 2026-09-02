"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#61D649",
      dark: "#4a9a3a",
      light: "#c8e8c0",
      contrastText: "#fff",
    },
    background: {
      default: "#f7faf6",
    },
    text: {
      primary: "#000000",
      secondary: "#4a6b45",
    },
  },
  typography: {
    fontFamily: "var(--font-body), sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          textTransform: "capitalize",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
