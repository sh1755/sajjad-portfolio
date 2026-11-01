"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X, Maximize2 } from "lucide-react";
import { asset, cn } from "@/lib/utils";

/** Image with a restrained full-screen lightbox built on the native <dialog>. */
export function ZoomImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  caption?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === d) d.close();
    };
    d.addEventListener("click", onClick);
    return () => d.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className={cn("group relative block w-full overflow-hidden text-left", className)}
        aria-label={`Enlarge image: ${alt}`}
      >
        <Image src={asset(src)} alt={alt} width={width} height={height} className={cn("h-full w-full", imgClassName)} sizes="(min-width: 1024px) 50vw, 100vw" />
        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-4 w-4" aria-hidden />
        </span>
      </button>
      <dialog
        ref={dialog}
        className="m-auto max-h-[92vh] w-[min(1200px,94vw)] rounded-xl bg-ink p-0 text-paper backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
        aria-label={alt}
      >
        <div className="relative">
          <Image src={asset(src)} alt={alt} width={width} height={height} className="max-h-[82vh] w-full object-contain" sizes="94vw" />
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-paper ring-1 ring-white/20"
            aria-label="Close image"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {caption && <p className="px-5 py-3 text-sm text-slate-300">{caption}</p>}
      </dialog>
    </>
  );
}
