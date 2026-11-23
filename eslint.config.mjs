import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Colours live only in src/theme/brand.ts. Anything else must use BRAND.x /
// withAlpha(BRAND.x, a) / theme keys ("primary.main") / var(--vk-x).
const COLOR_MSG =
  "Hard-coded colour. Use a palette name from src/theme/brand.ts (BRAND.main, withAlpha(BRAND.ink, 0.1), …).";
// 3-digit codes only when they look like colours (#fff, #000), not ratings like "#150"
const HEX = "(^|[\\s(,:])#((?=[0-9]*[a-fA-F])[0-9a-fA-F]{3}|(\\d)\\3\\3|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b";
const RGB = "rgba?\\(\\s*\\d";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // For now only the parts already on the new palette (homepage, navbar, theme).
    // Widen this list as each page moves over; the rest still has its old colours.
    files: [
      "src/app/page.tsx",
      "src/app/Landing/modern/**/*.{ts,tsx}",
      "src/app/Common/Navbar/**/*.{ts,tsx}",
      "src/app/about/**/*.{ts,tsx}",
      "src/theme/**/*.{ts,tsx}",
    ],
    ignores: [
      "src/theme/brand.ts",
      // site-wide MUI theme stays green until the other pages move over
      "src/theme/ThemeRegistry.tsx",
      // shared with green pages until they move over
      "src/app/Landing/modern/tokens.ts",
      "src/app/Landing/modern/SectionHeader.tsx",
      "src/app/Landing/modern/Buttons.tsx",
    ],
    rules: {
      "no-restricted-syntax": [
        "error",
        { selector: `Literal[value=/${HEX}/]`, message: COLOR_MSG },
        { selector: `Literal[value=/${RGB}/]`, message: COLOR_MSG },
        { selector: `TemplateElement[value.raw=/${HEX}/]`, message: COLOR_MSG },
        { selector: `TemplateElement[value.raw=/${RGB}/]`, message: COLOR_MSG },
        { selector: `JSXText[value=/${RGB}/]`, message: COLOR_MSG },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
