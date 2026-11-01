import { Mail } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { Container, SectionLabel } from "./ui";
import { SocialLinks } from "./Footer";
import { Reveal } from "./Reveal";

export function ContactBlock({ id = "contact" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative overflow-hidden bg-ink text-paper">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-signal/10 blur-3xl" aria-hidden />
      <Container className="relative grid gap-12 py-24 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <Reveal>
          <SectionLabel dark>Collaborate</SectionLabel>
          <h2 id={`${id}-title`} className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            Interested in collaborating on intelligent robotics?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            I welcome discussions on research collaboration, academic projects and the development of intelligent robotic systems, particularly in human–robot interaction, embodied AI and robotic manipulation.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:justify-self-end">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-cyan-300"
          >
            <Mail className="h-5 w-5" aria-hidden />
            {siteConfig.email}
          </a>
          <div className="mt-6 flex items-center gap-4">
            <SocialLinks />
            <a href={siteConfig.links.brighton} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 underline-offset-4 hover:text-paper hover:underline">
              University profile
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
