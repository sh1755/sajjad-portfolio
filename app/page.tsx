import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/siteConfig";
import { themes, caseStudies, flagshipSlugs, researchFocusGroups } from "@/content/research";
import { publications } from "@/content/publications";
import { events } from "@/content/events";
import { Container, SectionHeading, ButtonLink, TextLink, Badge } from "@/components/ui";
import { ArmIllustration } from "@/components/ArmIllustration";
import { ThemeVisual } from "@/components/ThemeVisual";
import { CaseStudyCard } from "@/components/Cards";
import { PublicationItem } from "@/components/Publications";
import { ContactBlock } from "@/components/ContactBlock";
import { SocialLinks } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/utils";

export default function HomePage() {
  const flagships = flagshipSlugs.map((s) => caseStudies.find((c) => c.slug === s)!);
  const selected = publications.filter((p) => p.featured && p.type !== "thesis").slice(0, 5);
  const airoc = events.find((e) => e.featured)!;
  const otherEvents = events.filter((e) => !e.featured);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="absolute -right-24 top-24 h-[34rem] w-[34rem] rounded-full bg-signal/[0.08] blur-3xl" aria-hidden />
        <Container className="relative grid gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-10 lg:pb-28 lg:pt-40">
          <div>
            <Reveal>
              <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400">
                <span className="text-signal">{profile.institution}</span>
                <span aria-hidden className="h-px w-6 bg-slate-600" />
                AI Robotics Lab
              </p>
              <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                Building robots that <span className="text-signal">understand</span> people.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={asset(profile.portrait.src)}
                  alt={profile.portrait.alt}
                  width={72}
                  height={72}
                  priority
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-white/15 sm:h-[72px] sm:w-[72px]"
                />
                <div>
                  <p className="text-lg font-semibold">{profile.name}</p>
                  <p className="text-sm text-slate-400">{profile.role}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" aria-hidden /> {profile.location}
                  </p>
                </div>
              </div>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">{profile.intro}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="/research/">Explore research</ButtonLink>
                <ButtonLink href="/publications/" variant="ghost">
                  Publications
                </ButtonLink>
                <ButtonLink href={siteConfig.links.github} variant="ghost">
                  GitHub
                </ButtonLink>
                {siteConfig.cvPath && (
                  <ButtonLink href={asset(siteConfig.cvPath)} variant="ghost">
                    CV
                  </ButtonLink>
                )}
              </div>
              <SocialLinks className="mt-7" />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative rounded-2xl bg-ink-2/80 p-4 ring-1 ring-ink-line sm:p-6">
              <div className="flex items-center justify-between border-b border-ink-line pb-3">
                <span className="label text-slate-500">Perception → control</span>
                <span className="flex items-center gap-2 font-mono text-[0.65rem] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden /> research loop
                </span>
              </div>
              <ArmIllustration className="mt-2 h-auto w-full" />
              <p className="border-t border-ink-line pt-3 text-xs leading-relaxed text-slate-500">
                Hand landmarks are tracked, interpreted and turned into motion on a 7-DoF arm — the loop behind AI-RTGM and my body-pose control work.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────── Research overview ───────── */}
      <section aria-labelledby="overview" className="bg-paper">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading index="01" label="Research" title={<span id="overview">Perception, language and control — in one loop.</span>} />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-slate-700">{profile.researchStatement}</p>
              <TextLink href="/research/" className="mt-6">
                Research themes and case studies
              </TextLink>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05}>
                <Link
                  href={`/research/#${t.id}`}
                  className="group block h-full rounded-2xl bg-white p-4 ring-1 ring-paper-line transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_-24px_rgba(11,16,32,0.35)]"
                >
                  <ThemeVisual kind={t.visual} className="h-auto w-full" />
                  <p className="mt-4 font-mono text-xs text-signal-deep">Theme {t.index}</p>
                  <h3 className="mt-1 font-semibold leading-snug tracking-tight">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-slate-500">Research expertise</span>
              {researchFocusGroups.flatMap((group) => group.topics).filter((topic) => [
                "Robot kinematics", "Robot dynamics", "Control systems", "Robot simulation", "Large language models (LLMs)",
                "Vision–language models (VLMs)", "Reinforcement learning (RL)", "Robot manipulation",
              ].includes(topic)).map((topic) => (
                <span key={topic} className="rounded-full bg-white px-3 py-1.5 text-xs text-slate-600 ring-1 ring-paper-line">{topic}</span>
              ))}
              <TextLink href="/research/#research-focus">View all areas</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────── Flagship research ───────── */}
      <section aria-labelledby="flagship" className="bg-ink text-paper">
        <Container className="py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                dark
                index="02"
                label="Flagship work"
                title={<span id="flagship">From papers to working systems.</span>}
                intro="Each project links the published result to the system that produced it — and says plainly whether it ran on a physical robot or in simulation."
              />
            </Reveal>
            <TextLink href="/research/#contributions" dark>
              All six research contributions
            </TextLink>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {flagships.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.07}>
                <CaseStudyCard c={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────── Selected publications ───────── */}
      <section aria-labelledby="selected-pubs" className="bg-paper">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
            <Reveal>
              <SectionHeading index="03" label="Publications" title={<span id="selected-pubs">Selected publications</span>} intro="Journal articles, conference papers and preprints in human–robot interaction, language-driven manipulation and motion planning." />
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/publications/" variant="light">
                  Full bibliography
                </ButtonLink>
                <ButtonLink href={siteConfig.links.scholar} variant="outline">
                  Google Scholar
                </ButtonLink>
              </div>
            </Reveal>
            <div className="divide-y divide-paper-line border-y border-paper-line">
              {selected.map((p) => (
                <PublicationItem key={p.id} p={p} compact />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── Highlights ───────── */}
      <section aria-labelledby="highlights" className="border-t border-paper-line bg-paper-2">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeading index="04" label="Highlights" title={<span id="highlights">Recent milestones</span>} />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink p-8 text-paper sm:p-10">
                <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="dark">{airoc.role}</Badge>
                    <span className="font-mono text-xs text-slate-400">{airoc.date}</span>
                  </div>
                  <p className="mt-8 text-sm text-signal">{airoc.event}</p>
                  <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">“{airoc.title}”</h3>
                  <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">{airoc.description}</p>
                </div>
                <div className="relative mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-10">
                  <p className="flex items-center gap-1.5 text-sm text-slate-400">
                    <MapPin className="h-4 w-4" aria-hidden /> {airoc.location}
                  </p>
                  {airoc.links.map((l) => (
                    <TextLink key={l.href} href={l.href} dark>
                      {l.label}
                    </TextLink>
                  ))}
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="h-full rounded-2xl bg-white p-7 ring-1 ring-paper-line">
                <Badge tone="green">PhD awarded</Badge>
                <h3 className="mt-5 text-lg font-semibold leading-snug">Machine Learning Driven Multimodal Control for Human-Robot Interaction</h3>
                <p className="mt-2 text-sm text-slate-600">University of Brighton · June 2026</p>
                <TextLink href="/research/phd-multimodal-framework/" className="mt-5">
                  About the thesis
                </TextLink>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="h-full rounded-2xl bg-white p-7 ring-1 ring-paper-line">
                <Badge tone="cyan">New appointment</Badge>
                <h3 className="mt-5 text-lg font-semibold leading-snug">Lecturer in Robotics, Automation and Control Engineering</h3>
                <p className="mt-2 text-sm text-slate-600">University of Brighton · from September 2026</p>
                <TextLink href="/teaching/" className="mt-5">
                  Teaching
                </TextLink>
              </article>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ul className="mt-5 grid gap-5 md:grid-cols-3">
              {otherEvents.map((e) => (
                <li key={e.id} className="rounded-2xl bg-white p-6 ring-1 ring-paper-line">
                  <p className="font-mono text-xs text-slate-500">{e.date}</p>
                  <p className="mt-2 font-semibold">{e.event}</p>
                  <p className="text-sm text-slate-500">{e.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{e.title}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-10">
            <Link href="/about/" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-signal-deep">
              Career and background <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <ContactBlock />
    </>
  );
}
