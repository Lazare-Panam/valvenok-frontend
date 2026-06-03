"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NAV_GROUPS, NAV_LINKS, NavItem } from "./Navbardata";
import MobileUserActions from "./user-actions/MobileUserActions";

const BRAND_GREEN = "#61D649";
const HEADER_COLOR = "#1c6e2e";

interface Props {
  onClose: () => void;
}

function MobileNavItems({ items, onClose, depth = 0 }: { items: NavItem[]; onClose: () => void; depth?: number }) {
  return (
    <>
      {items.map((item) =>
        item.children?.length ? (
          <Accordion
            key={item.label}
            disableGutters
            elevation={0}
            sx={{ bgcolor: "transparent", "&:before": { display: "none" } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon fontSize="small" />}
              sx={{ pl: 4 + depth * 2 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 500, fontSize: "0.9rem" }}
              />
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0, bgcolor: "#fafafa" }}>
              <MobileNavItems items={item.children} onClose={onClose} depth={depth + 1} />
            </AccordionDetails>
          </Accordion>
        ) : (
          <ListItemButton
            key={item.label}
            component="a"
            href={item.href}
            onClick={onClose}
            sx={{ pl: 4 + depth * 2, py: 1 }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: "0.875rem" }}
            />
          </ListItemButton>
        )
      )}
    </>
  );
}

export default function MobileMenu({ onClose }: Props) {
  return (
    <Box sx={{ pb: 4 }}>
      <MobileUserActions onClose={onClose} />
      <Divider sx={{ my: 1 }} />

      <Typography
        variant="overline"
        sx={{ px: 2, fontWeight: 800, color: "text.secondary", display: "block", mb: 1 }}
      >
        Browse Products
      </Typography>

      {NAV_GROUPS.map((group) => (
        <Accordion
          key={group.id}
          disableGutters
          elevation={0}
          sx={{ "&:before": { display: "none" }, borderBottom: "1px solid #f0f0f0" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: HEADER_COLOR }} />}
            sx={{ px: 2, py: 1 }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: HEADER_COLOR }}>
              {group.label}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0, bgcolor: "#fafafa" }}>
            {group.columns.map((col) => (
              <Box key={col.header}>
                <Typography
                  sx={{
                    px: 3,
                    pt: 1.5,
                    pb: 0.5,
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: BRAND_GREEN,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {col.header}
                </Typography>
                <List disablePadding>
                  <MobileNavItems items={col.items} onClose={onClose} />
                </List>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}

      <Divider sx={{ my: 2 }} />

      {NAV_LINKS.map((link) => (
        <ListItemButton key={link.label} component="a" href={link.href} onClick={onClose} sx={{ px: 2 }}>
          <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
        </ListItemButton>
      ))}
    </Box>
  );
}