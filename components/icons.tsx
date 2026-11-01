import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function GitHubIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function ScholarIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2 1 9l4 2.55V17c0 .3.16.58.42.73C7.6 19.1 9.76 19.8 12 19.8s4.4-.7 6.58-2.07A.85.85 0 0 0 19 17v-5.45l2-1.27V16h2V9L12 2Zm0 2.3 7.66 4.88L12 14.06 4.34 9.18 12 4.3Z" />
    </svg>
  );
}

/** SH monogram used for the favicon and header. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#0B1020" />
      <path d="M7 22.5c1.3 1 2.9 1.5 4.6 1.5 2.6 0 4.2-1.3 4.2-3.3 0-4.2-8-2.8-8-7.3C7.8 11.3 9.4 10 12 10c1.4 0 2.8.4 3.8 1.1" fill="none" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 10v14M25 10v14M19 17h6" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
