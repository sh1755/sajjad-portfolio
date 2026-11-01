import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-site px-5 sm:px-8", className)}>{children}</div>;
}

export function SectionLabel({ index, children, dark }: { index?: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className={cn("label flex items-center gap-3", dark ? "text-signal" : "text-signal-deep")}>
      {index && <span className={dark ? "text-slate-400" : "text-slate-muted"}>{index}</span>}
      <span aria-hidden className={cn("h-px w-8", dark ? "bg-signal/60" : "bg-signal-deep/50")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  intro,
  dark,
  className,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <SectionLabel index={index} dark={dark}>
        {label}
      </SectionLabel>
      <h2 className={cn("mt-5 text-3xl font-semibold tracking-tight sm:text-4xl", dark ? "text-paper" : "text-ink")}>{title}</h2>
      {intro && (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>{intro}</p>
      )}
    </div>
  );
}

export function PageHeader({ label, title, intro, children }: { label: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden bg-ink text-paper">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-signal/10 blur-3xl" aria-hidden />
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-40">
        <SectionLabel dark>{label}</SectionLabel>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{intro}</p>}
        {children}
      </Container>
    </header>
  );
}

const badgeTones = {
  cyan: "border-signal-deep/30 bg-signal-soft/60 text-signal-deep",
  green: "border-emerald-600/25 bg-emerald-50 text-emerald-800",
  amber: "border-amber-600/25 bg-amber-50 text-amber-800",
  slate: "border-slate-300 bg-white text-slate-600",
  violet: "border-indigo-500/25 bg-indigo-50 text-indigo-800",
  dark: "border-white/15 bg-white/5 text-slate-200",
} as const;

export type BadgeTone = keyof typeof badgeTones;

export function Badge({ children, tone = "slate", className }: { children: ReactNode; tone?: BadgeTone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.08em]",
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Tag({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md px-2 py-0.5 text-xs",
        dark ? "bg-white/[0.06] text-slate-300 ring-1 ring-white/10" : "bg-paper-2 text-slate-600 ring-1 ring-paper-line",
      )}
    >
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light" | "outline";
  className?: string;
}) {
  const external = isExternal(href);
  const styles = {
    primary: "bg-signal text-ink hover:bg-cyan-300",
    ghost: "text-paper ring-1 ring-white/20 hover:bg-white/10",
    light: "bg-ink text-paper hover:bg-ink-3",
    outline: "text-ink ring-1 ring-slate-300 hover:ring-ink hover:bg-white",
  }[variant];
  const cls = cn(
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200",
    styles,
    className,
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const icon = <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />;
  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {icon}
    </Link>
  );
}

export function TextLink({ href, children, dark, className }: { href: string; children: ReactNode; dark?: boolean; className?: string }) {
  const external = isExternal(href);
  const cls = cn(
    "inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline",
    dark ? "text-signal" : "text-signal-deep",
    className,
  );
  if (external)
    return (
      <a href={href} className={cls} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {children}
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
    </Link>
  );
}
