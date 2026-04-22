import {
  Box,
  Stack,
  Typography,
  Chip,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Filters, EMPTY_FILTERS } from "./types";
import { PumpsFilterOptions } from "@/src/api/pumpsApi";

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filterOptions?: PumpsFilterOptions;
  filtersLoading: boolean;
  activeCount: number;
}

function FilterGroup({
  title,
  count,
  children,
}: {
  title: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <Accordion
      defaultExpanded
      disableGutters
      elevation={0}
      sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 1 }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{
          px: 0,
          minHeight: 40,
          "& .MuiAccordionSummary-content": { my: 1 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">
            {title}
          </Typography>
          {count ? (
            <Chip
              label={count}
              size="small"
              color="primary"
              sx={{ height: 16, fontSize: "0.65rem" }}
            />
          ) : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}

function MultiCheckbox<T extends string | number>({
  options,
  selected,
  onChange,
  labelFn,
  loading,
}: {
  options: T[];
  selected: T[];
  onChange: (val: T) => void;
  labelFn?: (v: T) => string;
  loading?: boolean;
}) {
  if (loading) return <Skeleton height={60} />;
  if (options.length === 0)
    return (
      <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>
        No options available
      </Typography>
    );
  return (
    <>
      {options.map((opt) => (
        <FormControlLabel
          key={String(opt)}
          control={
            <Checkbox
              size="small"
              checked={selected.includes(opt)}
              onChange={() => onChange(opt)}
            />
          }
          label={
            <Typography variant="body2">
              {labelFn ? labelFn(opt) : String(opt)}
            </Typography>
          }
        />
      ))}
    </>
  );
}

export function AllPumpsSidebar({
  filters,
  setFilters,
  filterOptions,
  filtersLoading,
  activeCount,
}: Props) {
  const toggle = <T extends string | number>(key: keyof Filters, val: T) => {
    setFilters((prev) => {
      const current = (prev[key] as T[]) ?? [];
      const updated = current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val];
      return { ...prev, [key]: updated };
    });
  };

  return (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        p: 3,
        borderRight: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        maxHeight: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          variant="caption"
          fontWeight={900}
          letterSpacing={1}
          color="text.secondary"
        >
          FIND YOUR PUMP
        </Typography>
        {activeCount > 0 && (
          <Typography
            variant="caption"
            color="primary"
            fontWeight={700}
            sx={{ cursor: "pointer" }}
            onClick={() => setFilters(EMPTY_FILTERS)}
          >
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup
        title="PUMP CATEGORY"
        count={filters.productFamilyIds.length > 0 ? 1 : undefined}
      >
        {filtersLoading ? (
          <Skeleton height={60} />
        ) : (
          filterOptions?.productFamilies
            .filter((f) => f.parentId === null)
            .map((parent) => {
              const childIds = filterOptions.productFamilies
                .filter((f) => f.parentId === parent.id)
                .map((f) => f.id);
              const isSelected = childIds.every((id) =>
                filters.productFamilyIds.includes(id),
              );
              return (
                <FormControlLabel
                  key={parent.id}
                  control={
                    <Checkbox
                      size="small"
                      checked={isSelected}
                      onChange={() => {
                        setFilters((prev) => {
                          if (isSelected) {
                            return {
                              ...prev,
                              productFamilyIds: prev.productFamilyIds.filter(
                                (id) => !childIds.includes(id),
                              ),
                            };
                          } else {
                            return {
                              ...prev,
                              productFamilyIds: [
                                ...new Set([
                                  ...prev.productFamilyIds,
                                  ...childIds,
                                ]),
                              ],
                            };
                          }
                        });
                      }}
                    />
                  }
                  label={<Typography variant="body2">{parent.name}</Typography>}
                />
              );
            })
        )}
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
       <FilterGroup title="PHASE" count={filters.phases.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.phases ?? []}
          selected={filters.phases}
          onChange={(v) => toggle("phases", v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="VOLTAGE" count={filters.voltages.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.voltages ?? []}
          selected={filters.voltages}
          onChange={(v) => toggle("voltages", v)}
          labelFn={(v) => `${v}V`}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="RPM" count={filters.rpms.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.rpms ?? []}
          selected={filters.rpms}
          onChange={(v) => toggle("rpms", v)}
          labelFn={(v) => `${v} rpm`}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup
        title="DELIVERY SIZE (mm)"
        count={filters.deliverySizes.length || undefined}
      >
        <MultiCheckbox
          options={filterOptions?.deliverySizes ?? []}
          selected={filters.deliverySizes}
          onChange={(v) => toggle("deliverySizes", v)}
          labelFn={(v) => `${v}mm`}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup
        title="MAX SOLID SIZE (mm)"
        count={filters.maxSolidSizes.length || undefined}
      >
        <MultiCheckbox
          options={filterOptions?.maxSolidSizes ?? []}
          selected={filters.maxSolidSizes}
          onChange={(v) => toggle("maxSolidSizes", v)}
          labelFn={(v) => `${v}mm`}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

     

      <FilterGroup
        title="AUTO COUPLING"
        count={filters.autoCouplingCodes.length || undefined}
      >
        <MultiCheckbox
          options={filterOptions?.autoCouplingCodes ?? []}
          selected={filters.autoCouplingCodes}
          onChange={(v) => toggle("autoCouplingCodes", v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      
      <FilterGroup
        title="POWER P2 (kW)"
        count={filters.p2Kws.length || undefined}
      >
        <MultiCheckbox
          options={filterOptions?.p2Kws ?? []}
          selected={filters.p2Kws}
          onChange={(v) => toggle("p2Kws", v)}
          labelFn={(v) => `${v} kW`}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />


      <Box sx={{ py: 1 }}>
        <Typography
          variant="caption"
          fontWeight={700}
          color="text.primary"
          display="block"
          mb={1}
        >
          INBUILT TOP
        </Typography>
        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={!!filters.inbuiltTop}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  inbuiltTop: e.target.checked ? true : undefined,
                }))
              }
              color="primary"
            />
          }
          label={<Typography variant="body2">With inbuilt TOP only</Typography>}
        />
      </Box>
    </Box>
  );
}
