import { useState, useMemo } from "react";

export function useProductFilter(products: any[], filterKeys: string[]) {
  const [selected, setSelected] = useState<Record<string, any>>(
    Object.fromEntries(filterKeys.map((key) => [key, null]))
  );

  // The final matching product
  const match = useMemo(() => 
    products.find(p => filterKeys.every(k => p[k] === selected[k])), 
    [selected, products, filterKeys]
  );

  // Logic to determine which options are still valid (not disabled)
  const availableOptions = useMemo(() => {
    const res: Record<string, Set<any>> = {};
    filterKeys.forEach(key => {
      const otherActiveFilters = Object.entries(selected).filter(([k]) => k !== key && selected[k] !== null);
      const filtered = products.filter(p => 
        otherActiveFilters.every(([k, v]) => p[k] === v)
      );
      res[key] = new Set(filtered.map(p => p[key]));
    });
    return res;
  }, [selected, products, filterKeys]);

  const toggleFilter = (key: string, value: any) => {
    setSelected(prev => ({ 
      ...prev, 
      [key]: prev[key] === value ? null : value 
    }));
  };

  return { selected, match, availableOptions, toggleFilter };
}