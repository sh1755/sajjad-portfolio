import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Timeline({ items, dark }: { items: { period: string; title: string; text?: ReactNode }[]; dark?: boolean }) {
  return (
    <ol className={cn("relative border-l", dark ? "border-ink-line" : "border-paper-line")}>
      {items.map((it, i) => (
        <li key={it.title} className="relative pb-10 pl-8 last:pb-0">
          <span
            aria-hidden
            className={cn(
              "absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ring-4",
              i === items.length - 1 ? "bg-signal" : dark ? "bg-slate-500" : "bg-slate-400",
              dark ? "ring-ink" : "ring-paper",
            )}
          />
          <p className={cn("font-mono text-xs", dark ? "text-signal" : "text-signal-deep")}>{it.period}</p>
          <h3 className={cn("mt-1 text-base font-semibold", dark ? "text-paper" : "text-ink")}>{it.title}</h3>
          {it.text && <p className={cn("mt-1 max-w-xl text-sm leading-relaxed", dark ? "text-slate-400" : "text-slate-600")}>{it.text}</p>}
        </li>
      ))}
    </ol>
  );
}
