"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  type Publication,
  type PubStatus,
  pubFilters,
  pubStatusLabel,
  pubTypeLabel,
} from "@/content/publications";
import { Badge, type BadgeTone } from "./ui";
import { cn, isExternal } from "@/lib/utils";

const statusTone: Record<PubStatus, BadgeTone> = {
  published: "green",
  presented: "green",
  awarded: "green",
  accepted: "cyan",
  preprint: "amber",
  abstract: "violet",
  "working-paper": "slate",
};

export function PublicationItem({ p, compact, showYear = true }: { p: Publication; compact?: boolean; showYear?: boolean }) {
  return (
    <article id={p.id} className="group grid gap-3 py-7 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
      <div className="flex items-center gap-3 sm:block">
        {showYear && <p className="font-mono text-sm text-slate-500">{p.year}</p>}
        <p className={showYear ? "mt-0 text-xs text-slate-400 sm:mt-1" : "text-xs text-slate-500"}>{pubTypeLabel[p.type]}</p>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={statusTone[p.status]}>{pubStatusLabel[p.status]}</Badge>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink">{p.title}</h3>
        <p className="mt-1 text-sm text-slate-500">
          <span className="italic">{p.venue}</span>
          {p.venueDetail && <span> · {p.venueDetail}</span>}
        </p>
        {!compact && p.summary && <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-slate-700">{p.summary}</p>}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.links.map((l) =>
            isExternal(l.href) ? (
              <a
                key={l.label + l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper transition-colors hover:bg-signal-deep"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3" aria-hidden />
                <span className="sr-only"> for {p.title} (opens in a new tab)</span>
              </a>
            ) : (
              <Link key={l.label} href={l.href} className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper hover:bg-signal-deep">
                {l.label}
              </Link>
            ),
          )}
          {p.projectSlug && (
            <Link
              href={`/research/${p.projectSlug}/`}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-signal-deep ring-1 ring-signal-deep/30 hover:bg-signal-soft/50"
            >
              Case study
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function PublicationBrowser({ items }: { items: Publication[] }) {
  const [filter, setFilter] = useState<(typeof pubFilters)[number]["key"]>("all");
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: items.length };
    for (const p of items) c[p.type] = (c[p.type] || 0) + 1;
    return c;
  }, [items]);
  const shown = filter === "all" ? items : items.filter((p) => p.type === filter);
  const years = Array.from(new Set(shown.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <div>
      <div role="group" aria-label="Filter publications by type" className="flex flex-wrap gap-2">
        {pubFilters
          .filter((f) => counts[f.key])
          .map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                filter === f.key ? "bg-ink text-paper" : "bg-white text-slate-600 ring-1 ring-paper-line hover:text-ink hover:ring-slate-300",
              )}
            >
              {f.label}
              <span className={cn("ml-2 font-mono text-xs", filter === f.key ? "text-signal" : "text-slate-400")}>{counts[f.key]}</span>
            </button>
          ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} publications
      </p>
      <div className="mt-10">
        {years.map((y) => (
          <section key={y} aria-labelledby={`y-${y}`} className="relative">
            <h2 id={`y-${y}`} className="sticky top-16 z-10 -mx-1 bg-paper/95 px-1 py-2 font-mono text-sm text-slate-400 backdrop-blur">
              {y}
            </h2>
            <div className="divide-y divide-paper-line border-t border-paper-line">
              {shown
                .filter((p) => p.year === y)
                .map((p) => (
                  <PublicationItem key={p.id} p={p} showYear={false} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
