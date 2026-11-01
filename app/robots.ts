import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "") + (process.env.NEXT_PUBLIC_BASE_PATH || "");
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${base}/sitemap.xml` };
}
