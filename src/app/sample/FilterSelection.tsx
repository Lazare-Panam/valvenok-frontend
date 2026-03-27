import { Box, Typography, Button, Tooltip, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface FilterProps {
  label: string;
  options: any[];
  selectedValue: any;
  available: Set<any>;
  onSelect: (val: any) => void;
  tooltipText?: string; // New prop
}

export const FilterSection = ({
  label,
  options,
  selectedValue,
  available,
  onSelect,
  tooltipText,
}: FilterProps) => (
  <Box sx={{ mb: 3 }}>
    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
      <Typography
        sx={{
          fontSize: "11px",
          fontWeight: 900,
          color: "primary.main",
          textTransform: "uppercase",
        }}
      >
        {label.replace("_", " ")}
      </Typography>

      {tooltipText && (
        <Tooltip title={tooltipText} arrow placement="top">
          <InfoOutlinedIcon
            sx={{ fontSize: 14, color: "text.disabled", cursor: "help" }}
          />
        </Tooltip>
      )}
    </Stack>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {options.map((option) => {
        // Determine if we are dealing with the new object format or the old string format
        const value = typeof option === "object" ? option.code : option;
        const displayLabel = typeof option === "object" ? option.label : option;

        return (
          <Button
            key={value} // ✅ This is now a unique string/number
            disabled={!available.has(value)}
            variant={selectedValue === value ? "contained" : "outlined"}
            onClick={() => onSelect(value)}
            sx={{
              borderRadius: 0,
              fontWeight: 800,
              fontFamily: "Barlow Condensed",
              padding: "4px 12px",
              minWidth: "60px",
            }}
          >
            {displayLabel}
          </Button>
        );
      })}
    </Box>
  </Box>
);
