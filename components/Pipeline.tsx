import { cn } from "@/lib/utils";

/** Horizontal (desktop) / vertical (mobile) stage diagram for a system pipeline. */
export function Pipeline({ steps, dark, className, caption }: { steps: string[]; dark?: boolean; className?: string; caption?: string }) {
  return (
    <figure className={className}>
      <ol className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0" aria-label={caption || "System pipeline"}>
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center md:flex-col md:items-stretch">
            <div className="flex w-full items-center md:flex-row">
              <div
                className={cn(
                  "relative flex min-h-[64px] w-full flex-col justify-center rounded-lg px-3 py-2.5 text-sm",
                  dark ? "bg-white/[0.04] text-slate-100 ring-1 ring-white/10" : "bg-white text-ink ring-1 ring-paper-line",
                  i === steps.length - 1 && (dark ? "ring-signal/50" : "ring-signal-deep/40"),
                )}
              >
                <span className={cn("font-mono text-[0.65rem]", dark ? "text-signal" : "text-signal-deep")}>{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-0.5 font-medium leading-snug">{s}</span>
              </div>
              {i < steps.length - 1 && (
                <span aria-hidden className={cn("hidden h-px w-4 shrink-0 md:block", dark ? "bg-signal/50" : "bg-signal-deep/40")} />
              )}
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className={cn("ml-6 h-3 w-px md:hidden", dark ? "bg-signal/50" : "bg-signal-deep/40")} />
            )}
          </li>
        ))}
      </ol>
      {caption && <figcaption className={cn("mt-3 text-xs", dark ? "text-slate-400" : "text-slate-500")}>{caption}</figcaption>}
    </figure>
  );
}
