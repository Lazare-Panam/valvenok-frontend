"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import { Category } from "../../Common/Products_Page/ProductCard";
import { CardGroupLinks } from "@/src/app/Common/GroupVisitLinks";

export default function PneumaticValvesGrid({ families }: { families: Category[] }) {
  return (
    <Box sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 5 } }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            maxWidth: 760,
            mb: 6,
            lineHeight: 1.75,
            borderLeft: "3px solid",
            borderColor: "primary.main",
            pl: 2,
          }}
        >
          Valvenok supplies a complete range of pneumatic solenoid and foot
          pedal valves for industrial automation, machine building and process
          control. FG and TG series solenoid valves in 2/2, 3/2, 5/2 and 5/3
          way configurations — plus heavy-duty foot pedal valves for hands-free
          operation in safety-critical environments.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 4,
          }}
        >
          {families.map((family) => (
            <Card
              key={family.code}
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-6px)",
                  boxShadow: (theme) =>
                    `0 20px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
                },
              }}
            >
              <Box
                sx={{
                  p: 3,
                  bgcolor: "#fff",
                  textAlign: "center",
                  position: "relative",
                  height: 220,
                }}
              >
                <Image
                  src={family.image}
                  alt={family.title}
                  fill
                  style={{ objectFit: "contain", padding: "24px" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  px: 3,
                  pt: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: "text.primary",
                    }}
                  >
                    {family.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "primary.main",
                      bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                      px: 1,
                      py: 0.2,
                    }}
                  >
                    {family.code}
                  </Typography>
                </Box>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={600}
                  sx={{ mb: 1.5, display: "block" }}
                >
                  {family.subtitle}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.65 }}
                >
                  {family.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 3 }}>
                  {family.specs.map((spec) => (
                    <Typography
                      key={spec}
                      sx={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "text.secondary",
                        border: "1px solid",
                        borderColor: "divider",
                        px: 1,
                        py: 0.3,
                      }}
                    >
                      {spec}
                    </Typography>
                  ))}
                </Box>

                <CardGroupLinks family={family} all={families} />
                <Button
                  fullWidth
                  variant="outlined"
                  href={family.href}
                  rel="noopener noreferrer"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: "auto",
                    borderRadius: 0,
                    borderWidth: "2px",
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 800,
                    textTransform: "uppercase",
                    "&:hover": {
                      borderWidth: "2px",
                      bgcolor: "primary.main",
                      color: "#fff",
                    },
                  }}
                >
                  Explore Range
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}