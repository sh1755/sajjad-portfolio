import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { Container } from "./ui";
import { GitHubIcon, LinkedInIcon, ScholarIcon, Monogram } from "./icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: siteConfig.links.scholar, label: "Google Scholar", Icon: ScholarIcon },
    { href: siteConfig.links.github, label: "GitHub", Icon: GitHubIcon },
    { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  ];
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-300 ring-1 ring-white/15 transition-colors hover:text-signal hover:ring-signal/50"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-slate-400">
      <Container className="grid gap-10 border-t border-white/10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-paper">
            <Monogram className="h-8 w-8 rounded-[7px] ring-1 ring-white/15" />
            <span className="font-semibold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Lecturer in Robotics, Automation and Control Engineering, University of Brighton. Member of the AI Robotics (AIR) Lab.
          </p>
          <SocialLinks className="mt-6" />
        </div>
        <div>
          <p className="label text-slate-500">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.nav.slice(1).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-slate-500">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.links.brighton} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                University research profile
              </a>
            </li>
            <li>
              <a href={siteConfig.links.alphaxiv} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                alphaXiv
              </a>
            </li>
            <li>
              <a href={siteConfig.links.lab} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                AI Robotics (AIR) Lab
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Sajjad Hussain. Views are my own.</p>
        <p>Organisation names identify affiliations and do not imply endorsement.</p>
      </Container>
    </footer>
  );
}
