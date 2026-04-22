import { Stack, Chip, Typography } from "@mui/material";
import { Filters } from "./types";
import { PumpsFilterOptions } from "@/src/api/pumpsApi";

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filterOptions?: PumpsFilterOptions;
}

export function AllPumpsActiveFilters({
  filters,
  setFilters,
  filterOptions,
}: Props) {
  const chips: { key: keyof Filters; label: string; value: any }[] = [];

  const parents =
    filterOptions?.productFamilies.filter((f) => f.parentId === null) ?? [];
  parents.forEach((parent) => {
    const childIds =
      filterOptions?.productFamilies
        .filter((f) => f.parentId === parent.id)
        .map((f) => f.id) ?? [];
    const isSelected =
      childIds.length > 0 &&
      childIds.every((id) => filters.productFamilyIds.includes(id));
    if (isSelected)
      chips.push({
        key: "productFamilyIds",
        label: parent.name,
        value: childIds,
      });
  });

  filters.p2Kws.forEach((v) =>
    chips.push({ key: "p2Kws", label: `${v} kW`, value: v }),
  );
  filters.voltages.forEach((v) =>
    chips.push({ key: "voltages", label: `${v}V`, value: v }),
  );
  filters.rpms.forEach((v) =>
    chips.push({ key: "rpms", label: `${v} rpm`, value: v }),
  );
  filters.deliverySizes.forEach((v) =>
    chips.push({ key: "deliverySizes", label: `Delivery: ${v}mm`, value: v }),
  );
  filters.maxSolidSizes.forEach((v) =>
    chips.push({ key: "maxSolidSizes", label: `Max Solid: ${v}mm`, value: v }),
  );
  filters.phases.forEach((v) =>
    chips.push({ key: "phases", label: `Phase: ${v}`, value: v }),
  );
  filters.autoCouplingCodes.forEach((v) =>
    chips.push({ key: "autoCouplingCodes", label: `Coupling: ${v}`, value: v }),
  );
  if (filters.inbuiltTop)
    chips.push({ key: "inbuiltTop", label: "Inbuilt TOP", value: true });

  if (chips.length === 0) return null;

  const remove = (key: keyof Filters, value: any) => {
    setFilters((prev) => {
      if (key === "productFamilyIds" && Array.isArray(value)) {
        return {
          ...prev,
          productFamilyIds: prev.productFamilyIds.filter(
            (id) => !value.includes(id),
          ),
        };
      }
      const current = prev[key];
      if (Array.isArray(current))
        return { ...prev, [key]: current.filter((v) => v !== value) };
      return { ...prev, [key]: undefined };
    });
  };

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>
        ACTIVE FILTERS:
      </Typography>
      {chips.map((f, i) => (
        <Chip
          key={`${f.key}-${String(f.value)}-${i}`}
          label={f.label}
          size="small"
          color="primary"
          variant="outlined"
          onDelete={() => remove(f.key, f.value)}
        />
      ))}
    </Stack>
  );
}
