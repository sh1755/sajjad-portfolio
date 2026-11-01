"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/utils";

/**
 * Muted, looping demo that only autoplays when the visitor has not asked for
 * reduced motion. Otherwise it shows the poster with standard controls.
 */
export function DemoVideo({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const on = () => setReduce(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => undefined);
  }, [reduce]);

  return (
    <video
      ref={ref}
      className={className}
      poster={asset(poster)}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={label}
    >
      <source src={asset(src)} type="video/mp4" />
    </video>
  );
}
