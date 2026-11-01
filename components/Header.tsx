"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/content/siteConfig";
import { Monogram } from "./icons";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    const strip = (s: string) => s.replace(/\/$/, "") || "/";
    const p = strip(pathname.replace(process.env.NEXT_PUBLIC_BASE_PATH || "", "") || "/");
    const h = strip(href);
    return h === "/" ? p === "/" : p === h || p.startsWith(h + "/");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open || isActive("/teaching/") ? "border-b border-white/10 bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-paper focus:px-3 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-paper">
          <Monogram className="h-8 w-8 ring-1 ring-white/15 rounded-[7px]" />
          <span className="text-sm font-semibold tracking-tight">
            Sajjad Hussain
            <span className="hidden font-normal text-slate-400 sm:inline"> · Robotics & AI</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm transition-colors",
                  isActive(item.href) ? "text-paper" : "text-slate-400 hover:text-paper",
                )}
              >
                {item.label}
                {isActive(item.href) && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-signal" aria-hidden />}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-signal"
            >
              <Mail className="h-4 w-4" aria-hidden /> Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-paper ring-1 ring-white/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id="mobile-menu"
          className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          initial={reduce ? false : { height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="mx-auto max-w-site px-5 py-4 sm:px-8">
            {[...siteConfig.nav, { href: "/contact/", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between border-b border-white/5 py-3.5 text-base",
                    isActive(item.href) ? "text-signal" : "text-slate-200",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
