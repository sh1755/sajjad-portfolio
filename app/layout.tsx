import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: "Dr Sajjad Hussain | Robotics & AI",
  creator: "Dr Sajjad Hussain",
  publisher: "Dr Sajjad Hussain",
  authors: [{ name: "Dr Sajjad Hussain" }],
  keywords: [
    "Sajjad Hussain",
    "University of Brighton",
    "robotics",
    "human-robot interaction",
    "Franka Emika Panda",
    "embodied AI",
    "robot manipulation",
    "gesture recognition",
    "large language models",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/og.png`, width: 1200, height: 630, alt: "Dr Sajjad Hussain — Robotics & AI, University of Brighton" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/og.png`] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sajjad Hussain",
  honorificPrefix: "Dr",
  jobTitle: "Lecturer in Robotics, Automation and Control Engineering",
  affiliation: { "@type": "CollegeOrUniversity", name: "University of Brighton" },
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.scholar, siteConfig.links.brighton],
  knowsAbout: ["Robotics", "Human–robot interaction", "Embodied AI", "Robot manipulation", "Machine learning"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen font-sans">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
