import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";
import { caseStudies } from "@/content/research";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "") + (process.env.NEXT_PUBLIC_BASE_PATH || "");
  const pages = ["", "research/", "publications/", "projects/", "teaching/", "about/", "contact/"];
  return [
    ...pages.map((p) => ({ url: `${base}/${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...caseStudies.map((c) => ({ url: `${base}/research/${c.slug}/`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
