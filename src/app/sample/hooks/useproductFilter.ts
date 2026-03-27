import { useState, useMemo } from "react";

export function useProductFilter(products: any[], filterKeys: string[]) {
  const [selected, setSelected] = useState<Record<string, any>>(
    Object.fromEntries(filterKeys.map((key) => [key, null]))
  );

  const match = useMemo(() => {
    return products.find(p => filterKeys.every(k => p[k] === selected[k]));
  }, [selected, products, filterKeys]);

  const availableOptions = useMemo(() => {
    const available: Record<string, Set<any>> = {};
    for (const currentKey of filterKeys) {
      const validProducts = products.filter((product) => {
        for (const otherKey of filterKeys) {
          if (otherKey === currentKey) continue;
          if (selected[otherKey] === null) continue;
          if (product[otherKey] !== selected[otherKey]) return false;
        }
        return true;
      });
      const possibleValues = validProducts.map((p) => p[currentKey]);
      available[currentKey] = new Set(possibleValues);
    }
    return available;
  }, [selected, products, filterKeys]);

  // 4. Update state when a button is clicked
  const toggleFilter = (key: string, value: any) => {
    setSelected((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  return { selected, match, availableOptions, toggleFilter };
}