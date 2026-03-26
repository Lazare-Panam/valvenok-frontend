"use client";

import { useState, useMemo } from "react";

// Reserved keys — output only, never used as filters
const RESERVED = new Set(["partNumber", "price"]);

type FilterValue = string | number;

type Product = {
  partNumber: string;
  price: number;
  [key: string]: FilterValue;
};

type Selected = Record<string, FilterValue | null>;

// --- Sample payload — swap this for your backend fetch ---
const PRODUCTS: Product[] = [
  { partNumber: "PMC-2J-2N-SS", tubeOD: "1/8", tubeOD_mm: 3, jic: "5/16-24", npt: "1/8", price: 3.22 },
  { partNumber: "PMC-3J-2N-SS", tubeOD: "3/16", tubeOD_mm: 4, jic: "3/8-24", npt: "1/8", price: 3.44 },
  { partNumber: "PMC-4J-2N-SS", tubeOD: "1/4", tubeOD_mm: 6, jic: "7/16-20", npt: "1/8", price: 3.44 },

{ partNumber: "PMC-4J-2N-SS", tubeOD: "1/4", tubeOD_mm: 6, jic: "1/2-20", npt: "1/8", price: 3.44 },

  { partNumber: "PMC-4J-4N-SS", tubeOD: "1/4", tubeOD_mm: 6, jic: "7/16-20", npt: "1/4", price: 4.17 },
  { partNumber: "PMC-4J-8N-SS", tubeOD: "1/4", tubeOD_mm: 6, jic: "7/16-20", npt: "1/2", price: 8.10 },
  { partNumber: "PMC-5J-2N-SS", tubeOD: "5/16", tubeOD_mm: 8, jic: "1/2-20", npt: "1/8", price: 3.96 },
  { partNumber: "PMC-5J-4N-SS", tubeOD: "5/16", tubeOD_mm: 8, jic: "1/2-20", npt: "1/4", price: 4.17 },
  { partNumber: "PMC-6J-2N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "1/8", price: 4.14 },
  { partNumber: "PMC-6J-4N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "1/4", price: 5.42 },
  { partNumber: "PMC-6J-6N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "3/8", price: 5.93 },
  { partNumber: "PMC-6J-8N-SS", tubeOD: "3/8", tubeOD_mm: 10, jic: "9/16-18", npt: "1/2", price: 8.10 },
  { partNumber: "PMC-8J-4N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "1/4", price: 6.12 },
  { partNumber: "PMC-8J-6N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "3/8", price: 6.18 },
  { partNumber: "PMC-8J-8N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "1/2", price: 8.10 },
  { partNumber: "PMC-8J-12N-SS", tubeOD: "1/2", tubeOD_mm: 12, jic: "3/4-16", npt: "3/4", price: 12.04 },
  { partNumber: "PMC-10J-6N-SS", tubeOD: "5/8", tubeOD_mm: 16, jic: "7/8-14", npt: "3/8", price: 9.12 },
  { partNumber: "PMC-10J-8N-SS", tubeOD: "5/8", tubeOD_mm: 16, jic: "7/8-14", npt: "1/2", price: 8.36 },
  { partNumber: "PMC-10J-12N-SS", tubeOD: "5/8", tubeOD_mm: 16, jic: "7/8-14", npt: "3/4", price: 12.30 },
  { partNumber: "PMC-12J-8N-SS", tubeOD: "3/4", tubeOD_mm: 16, jic: "7/8-14", npt: "1/2", price: 13.12 },
  { partNumber: "PMC-12J-12N-SS", tubeOD: "3/4", tubeOD_mm: 18, jic: "1 1/16-12", npt: "3/4", price: 13.42 },
  { partNumber: "PMC-12J-16N-SS", tubeOD: "3/4", tubeOD_mm: 18, jic: "1 1/16-12", npt: "1", price: 17.14 },
  { partNumber: "PMC-14J-12N-SS", tubeOD: "7/8", tubeOD_mm: 22, jic: "1 3/16-12", npt: "3/4", price: 13.65 },
  { partNumber: "PMC-16J-12N-SS", tubeOD: "1", tubeOD_mm: 25, jic: "1 5/16-12", npt: "3/4", price: 13.71 },
  { partNumber: "PMC-16J-16N-SS", tubeOD: "1", tubeOD_mm: 25, jic: "1 5/16-12", npt: "1", price: 17.14 },
  { partNumber: "PMC-20J-16N-SS", tubeOD: "1 1/4", tubeOD_mm: 32, jic: "1 5/8-12", npt: "1", price: 22.07 },
  { partNumber: "PMC-20J-20N-SS", tubeOD: "1 1/4", tubeOD_mm: 32, jic: "1 5/8-12", npt: "1 1/4", price: 33.09 },
  { partNumber: "PMC-24J-20N-SS", tubeOD: "1 1/2", tubeOD_mm: 38, jic: "1 7/8-12", npt: "1 1/4", price: 33.12 },
  { partNumber: "PMC-24J-24N-SS", tubeOD: "1 1/2", tubeOD_mm: 38, jic: "1 7/8-12", npt: "1 1/2", price: 41.70 },
  { partNumber: "PMC-32J-32N-SS", tubeOD: "2", tubeOD_mm: 50, jic: "2 1/2-12", npt: "2", price: 117.00 },
];

const getFilterKeys = (products: Product[]): string[] =>
  products.length ? Object.keys(products[0]).filter((k) => !RESERVED.has(k)) : [];

interface ProductSelectorProps {
  products?: Product[];
}

export default function ProductPage({ products = PRODUCTS }: ProductSelectorProps) {
  const filterKeys = useMemo(() => getFilterKeys(products), [products]);

  const [selected, setSelected] = useState<Selected>(() =>
    Object.fromEntries(filterKeys.map((k) => [k, null]))
  );

  const toggle = (key: string, value: FilterValue) =>
    setSelected((prev) => ({ ...prev, [key]: prev[key] === value ? null : value }));

  // For each key, compute available values given selections on all OTHER keys
  const available = useMemo(() => {
    const result: Record<string, Set<FilterValue>> = {};
    for (const key of filterKeys) {
      const otherSelected = Object.entries(selected).filter(([k]) => k !== key);
      const filtered = products.filter((p) =>
        otherSelected.every(([k, v]) => !v || p[k] === v)
      );
      result[key] = new Set(
        filtered.map((p) => p[key]).filter((v): v is FilterValue => v !== undefined)
      );
    }
    return result;
  }, [selected, filterKeys, products]);

  // Exact match only when all filter keys have a selection
  const exactMatch = useMemo((): Product | null => {
    const allSelected = filterKeys.every((k) => selected[k] !== null);
    if (!allSelected) return null;
    return products.find((p) => filterKeys.every((k) => p[k] === selected[k])) ?? null;
  }, [selected, filterKeys, products]);

  const hasAnySelection = filterKeys.some((k) => selected[k] !== null);

  const resetAll = () =>
    setSelected(Object.fromEntries(filterKeys.map((k) => [k, null])));

  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif", maxWidth: "800px" }}>
      <h2>Product Selector</h2>

      {filterKeys.map((key) => {
        const allValues = [...new Set(
          products.map((p) => p[key]).filter((v): v is FilterValue => v !== undefined)
        )];

        return (
          <div key={key} style={{ marginTop: "24px" }}>
            <strong style={{ textTransform: "capitalize" }}>{key}</strong>
            <div style={{ marginTop: "8px" }}>
              {allValues.map((val) => {
                const isActive = selected[key] === val;
                const isDisabled = !available[key]?.has(val);
                return (
                  <button
                    key={String(val)}
                    onClick={() => !isDisabled && toggle(key, val)}
                    disabled={isDisabled}
                    style={{
                      padding: "6px 12px",
                      margin: "4px",
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      opacity: isDisabled ? 0.3 : 1,
                      fontWeight: isActive ? "bold" : "normal",
                      border: isActive ? "2px solid black" : "1px solid #ccc",
                      borderRadius: "4px",
                      background: isActive ? "#f0f0f0" : "white",
                    }}
                  >
                    {String(val)}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div style={{ marginTop: "32px", padding: "16px", border: "1px solid #ccc", borderRadius: "4px" }}>
        {exactMatch ? (
          <>
            <p><strong>Part:</strong> {exactMatch.partNumber}</p>
            <p><strong>Price:</strong> £{exactMatch.price.toFixed(2)}</p>
          </>
        ) : (
          <p style={{ color: "#888" }}>
            {hasAnySelection
              ? "Keep narrowing to get an exact match."
              : "Select filters to see part and price."}
          </p>
        )}
      </div>

      {hasAnySelection && (
        <button onClick={resetAll} style={{ marginTop: "12px", cursor: "pointer" }}>
          Reset
        </button>
      )}
    </div>
  );
}