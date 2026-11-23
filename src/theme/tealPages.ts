// Pages already on the new teal palette (23 Nov 2026). Shared parts (footer, floating
// quote button, scroll bar) turn teal on these and stay green elsewhere. Add a path here
// as each page moves over.
export const TEAL_PAGES = ["/", "/about"];

export const isTealPage = (pathname: string | null) => TEAL_PAGES.includes(pathname ?? "");
