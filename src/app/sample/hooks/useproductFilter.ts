import { useState, useMemo } from "react";

export function useProductFilter(products: any[], filterKeys: string[]) {
  const [selected, setSelected] = useState<Record<string, any>>(
    Object.fromEntries(filterKeys.map((key) => [key, null]))
  );

  const match = useMemo(() => {
    return products.find(p => filterKeys.every(k => p.attributes?.[k] === selected[k]));
  }, [selected, products, filterKeys]);

  const availableOptions = useMemo(() => {
    const available: Record<string, Set<any>> = {};
    for (const currentKey of filterKeys) {
      const validProducts = products.filter((product) => {
        for (const otherKey of filterKeys) {
          if (otherKey === currentKey) continue;
          if (selected[otherKey] === null) continue;
          if (product.attributes?.[otherKey] !== selected[otherKey]) return false;
        }
        return true;
      });
      available[currentKey] = new Set(validProducts.map((p) => p.attributes?.[currentKey]));
    }
    return available;
  }, [selected, products, filterKeys]);

  const toggleFilter = (key: string, value: any) => {
    setSelected((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  return { selected, match, availableOptions, toggleFilter };
}