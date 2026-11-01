import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Prefix a /public asset with the GitHub Pages base path when one is set. */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith("mailto:");
}
