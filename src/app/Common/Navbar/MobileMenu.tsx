"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CATEGORIES, type Category, type NavItem } from "./Navbardata";

const BRAND_GREEN = "#1c6e2e";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <Box sx={{ pb: 4 }}>
      <Typography
        variant="overline"
        sx={{ px: 2, fontWeight: 800, color: "text.secondary", display: "block", mb: 1 }}
      >
        Shop by Category
      </Typography>

      {CATEGORIES.map((cat: Category) => (
        <Accordion 
          key={cat.id} 
          disableGutters 
          elevation={0} 
          sx={{ 
            "&:before": { display: "none" },
            borderBottom: "1px solid #f0f0f0" 
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: BRAND_GREEN }} />}
            sx={{ px: 2, py: 1 }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
              {cat.label}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0, bgcolor: "#fafafa" }}>
            <List disablePadding>
              {cat.items.map((item: NavItem) => (
                <Box key={item.label}>
                  {item.children && item.children.length > 0 ? (
                    /* Nested Level for Items with Children */
                    <Accordion 
                      disableGutters 
                      elevation={0} 
                      sx={{ bgcolor: "transparent", "&:before": { display: "none" } }}
                    >
                      <AccordionSummary 
                        expandIcon={<ExpandMoreIcon fontSize="small" />}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText 
                          primary={item.label} 
                          primaryTypographyProps={{ fontWeight: 500 }} 
                        />
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0, pl: 4, bgcolor: "#ffffff" }}>
                        {item.children.map((child) => (
                          <ListItemButton 
                            key={child.label} 
                            component="a" 
                            href={child.href}
                            onClick={onClose}
                            sx={{ py: 1.5 }}
                          >
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    /* Direct Link for Items without Children */
                    <ListItemButton 
                      component="a" 
                      href={item.href} 
                      onClick={onClose}
                      sx={{ pl: 4, py: 1.5 }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  )}
                </Box>
              ))}
              
              {/* Optional: "View All" link for the Category */}
              {cat.href && (
                <ListItemButton 
                  component="a" 
                  href={cat.href}
                  onClick={onClose}
                  sx={{ pl: 4, py: 2, color: BRAND_GREEN }}
                >
                  <ListItemText 
                    primary={`View All ${cat.label}`} 
                    primaryTypographyProps={{ fontWeight: 700 }} 
                  />
                </ListItemButton>
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Quick Links Section (Optional) */}
      <Box sx={{ mt: 3, px: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <ListItemButton component="a" href="/account" sx={{ px: 0 }}>
          <ListItemText primary="My Account" />
        </ListItemButton>
        <ListItemButton component="a" href="/quick-order" sx={{ px: 0 }}>
          <ListItemText primary="Quick Order" />
        </ListItemButton>
      </Box>
    </Box>
  );
}