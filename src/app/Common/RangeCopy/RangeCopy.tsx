import { Box, Typography } from "@mui/material";
import { getRangeCopy } from "./index";
import PathGate from "./PathGate";

// Server-rendered "about this range" copy shown under listing pages that are
// otherwise mostly tables, so the page has descriptive text for search engines
// and buyers. Renders nothing for paths without an entry.
export default function RangeCopy({ path }: { path: string }) {
  const copy = getRangeCopy(path);
  if (!copy) return null;

  return (
    <PathGate path={path}>
      <Box
        component="section"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 5 },
          py: { xs: 5, md: 7 },
          "& p, & li, & h2": { textTransform: "none" },
        }}
      >
        <Box
          sx={{
            borderTop: "1px solid",
            borderColor: "divider",
            pt: { xs: 4, md: 5 },
            maxWidth: 860,
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.4rem", md: "1.75rem" },
              mb: 2,
            }}
          >
            {copy.heading}
          </Typography>
          {copy.paragraphs.map((p, i) => (
            <Typography
              key={i}
              sx={{ color: "text.secondary", lineHeight: 1.75, mb: 2 }}
            >
              {p}
            </Typography>
          ))}
          {copy.points && copy.points.length > 0 && (
            <Box component="ul" sx={{ pl: 2.5, m: 0, color: "text.secondary" }}>
              {copy.points.map((pt, i) => (
                <Typography
                  key={i}
                  component="li"
                  sx={{ lineHeight: 1.75, mb: 0.75 }}
                >
                  {pt}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </PathGate>
  );
}
