import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Monitor, Bot, Layers } from "lucide-react";
import type { CaseStudy } from "@/content/research";
import { maturityLabel } from "@/content/research";
import type { Repo } from "@/content/projects";
import { repoModeLabel } from "@/content/projects";
import { Badge, Tag, type BadgeTone } from "./ui";
import { Pipeline } from "./Pipeline";
import { DemoVideo } from "./DemoVideo";
import { GitHubIcon } from "./icons";
import { asset, cn } from "@/lib/utils";

export const maturityTone: Record<CaseStudy["maturity"], BadgeTone> = {
  "published-physical": "green",
  "published-simulation": "violet",
  "preprint-simulation": "amber",
  "active-prototype": "cyan",
  milestone: "slate",
};

/** Flagship card used on Home and Research. Dark, editorial, with the system pipeline as its visual. */
export function CaseStudyCard({ c, dark = true }: { c: CaseStudy; dark?: boolean }) {
  return (
    <Link
      href={`/research/${c.slug}/`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300",
        dark
          ? "bg-ink-2 ring-1 ring-ink-line hover:-translate-y-1 hover:ring-signal/40"
          : "bg-white ring-1 ring-paper-line hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(11,16,32,0.35)]",
      )}
    >
      <div className={cn("relative border-b p-5", dark ? "border-ink-line bg-ink grid-lines" : "border-paper-line bg-paper-2 grid-lines-light")}>
        {c.image ? (
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image src={asset(c.image.src)} alt={c.image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, 100vw" />
          </div>
        ) : (
          <div className="flex aspect-[16/9] flex-col justify-center gap-1.5">
            {(c.pipeline || []).slice(0, 5).map((s, i, arr) => (
              <div key={s} className="flex items-center gap-2">
                <span className={cn("font-mono text-[0.6rem]", dark ? "text-slate-500" : "text-slate-400")}>{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={cn(
                    "rounded-md px-2 py-1 text-xs",
                    i === arr.length - 1
                      ? dark
                        ? "bg-signal/15 text-signal ring-1 ring-signal/30"
                        : "bg-signal-soft text-signal-deep"
                      : dark
                        ? "bg-white/[0.04] text-slate-300 ring-1 ring-white/10"
                        : "bg-white text-slate-600 ring-1 ring-paper-line",
                  )}
                  style={{ marginLeft: `${i * 14}px` }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className={cn("font-mono text-xs", dark ? "text-signal" : "text-signal-deep")}>Research {c.number}</span>
          <Badge tone={dark ? "dark" : maturityTone[c.maturity]}>{maturityLabel[c.maturity]}</Badge>
        </div>
        <h3 className={cn("mt-4 text-xl font-semibold tracking-tight", dark ? "text-paper" : "text-ink")}>{c.title}</h3>
        <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-slate-400" : "text-slate-600")}>{c.oneLiner}</p>
        <p className={cn("mt-4 text-xs", dark ? "text-slate-500" : "text-slate-500")}>{c.venue}</p>
        <span className={cn("mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium", dark ? "text-paper" : "text-ink")}>
          Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

const modeIcon = { physical: Bot, simulation: Monitor, software: Cpu, mixed: Layers };
const modeTone: Record<Repo["mode"], BadgeTone> = { physical: "green", simulation: "violet", software: "slate", mixed: "cyan" };

export function RepoCard({ r, large }: { r: Repo; large?: boolean }) {
  const Icon = modeIcon[r.mode];
  return (
    <article
      id={r.id}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-paper-line transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(11,16,32,0.4)]",
        large && "lg:flex-row",
      )}
    >
      {(r.image || r.video) && (
        <div className={cn("relative overflow-hidden bg-ink", large ? "lg:w-[42%] lg:shrink-0" : "aspect-[16/10]")}>
          {r.video ? (
            <DemoVideo
              src={r.video.src}
              poster={r.video.poster}
              label={`Demonstration recording: ${r.title}`}
              className={cn("h-full w-full object-cover", large ? "aspect-[9/12] lg:aspect-auto" : "")}
            />
          ) : r.image ? (
            <Image
              src={asset(r.image.src)}
              alt={r.image.alt}
              fill
              className={cn(r.image.fit === "contain" ? "object-contain bg-white p-2" : "object-cover", "transition-transform duration-500 group-hover:scale-[1.03]")}
              sizes="(min-width:1024px) 40vw, 100vw"
            />
          ) : null}
        </div>
      )}
      <div className={cn("flex flex-1 flex-col p-6", large && "lg:p-10")}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={modeTone[r.mode]}>
            <Icon className="h-3 w-3" aria-hidden />
            {repoModeLabel[r.mode]}
          </Badge>
        </div>
        <h3 className={cn("mt-4 font-semibold tracking-tight text-ink", large ? "text-2xl" : "text-lg")}>{r.title}</h3>
        <p className="mt-1 font-mono text-xs text-slate-400 break-all">sh1755/{r.name}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-700">
          <span className="font-medium text-ink">Problem. </span>
          {r.problem}
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-700">
          <span className="font-medium text-ink">Approach. </span>
          {r.solution}
        </p>
        {large && r.highlights && (
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            {r.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-deep" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {r.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">Status: {r.status}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-3"
          >
            <GitHubIcon className="h-4 w-4" /> Code
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {r.links?.map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 text-sm font-medium text-signal-deep hover:underline">
              {l.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

export { Pipeline };
