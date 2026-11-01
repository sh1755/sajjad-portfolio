import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { themes, caseStudies, researchFocusGroups } from "@/content/research";
import { events } from "@/content/events";
import { siteConfig } from "@/content/siteConfig";
import { Container, PageHeader, SectionHeading, TextLink, Badge, ButtonLink } from "@/components/ui";
import { ThemeVisual } from "@/components/ThemeVisual";
import { CaseStudyCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes: human–robot interaction and multimodal control, language models and embodied AI, robot learning and motion planning, and sustainable robotics.",
  alternates: { canonical: "/research/" },
};

export default function ResearchPage() {
  const featured = events.find((e) => e.featured)!;
  const rest = events.filter((e) => !e.featured);
  return (
    <>
      <PageHeader
        label="Research"
        title="Robots that perceive people, understand instructions and act safely."
        intro="Four connected themes, six research contributions, and a clear line between what has been validated on hardware and what is still in development."
      >
        <nav aria-label="Research themes" className="mt-10 flex flex-wrap gap-2">
          {themes.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="rounded-full px-4 py-2 text-sm text-slate-300 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-paper">
              <span className="mr-2 font-mono text-signal">{t.index}</span>
              {t.title.split(" & ")[0].split(",")[0]}
            </a>
          ))}
        </nav>
      </PageHeader>

      {/* Themes */}
      <section aria-label="Research themes" className="bg-paper">
        <Container className="divide-y divide-paper-line py-10">
          {themes.map((t, i) => (
            <article key={t.id} id={t.id} className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
              <Reveal className={i % 2 ? "lg:order-2" : undefined}>
                <ThemeVisual kind={t.visual} className="h-auto w-full max-w-md" />
              </Reveal>
              <Reveal delay={0.05}>
                <p className="font-mono text-sm text-signal-deep">Theme {t.index}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t.title}</h2>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-slate-700">{t.body}</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="label text-slate-500">Established work</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {t.established.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="label text-slate-500">Current & emerging</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {t.emerging.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full border border-signal-deep" aria-hidden />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                  {t.related.map((r) => (
                    <TextLink key={r.href} href={r.href}>
                      {r.label}
                    </TextLink>
                  ))}
                </div>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      {/* Research subtopics — grouped without adding repetitive theme cards. */}
      <section aria-labelledby="research-focus" className="border-t border-paper-line bg-paper-2">
        <Container className="py-16 lg:py-20">
          <SectionHeading label="Expertise" title={<span id="research-focus">Research areas & technical foundations</span>} intro="The robotics, learning and control methods underpinning my research and teaching." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {researchFocusGroups.map((group) => (
              <div key={group.title} className="rounded-2xl bg-white p-7 ring-1 ring-paper-line">
                <h3 className="font-semibold tracking-tight text-ink">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.topics.map((topic) => (
                    <li key={topic} className="rounded-full bg-paper-2 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-paper-line">{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contributions */}
      <section id="contributions" aria-labelledby="contrib-title" className="bg-ink text-paper">
        <Container className="py-24 lg:py-28">
          <Reveal>
            <SectionHeading
              dark
              label="Research contributions"
              title={<span id="contrib-title">Six contributions, from published systems to active prototypes</span>}
              intro="Each case study sets out the problem, the approach, the evidence and the limits of the work."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.06}>
                <CaseStudyCard c={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Talks */}
      <section id="talks" aria-labelledby="talks-title" className="bg-paper">
        <Container className="py-24 lg:py-28">
          <Reveal>
            <SectionHeading label="Talks & academic activities" title={<span id="talks-title">Selected talks and conference activity</span>} />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <article className="relative h-full overflow-hidden rounded-2xl bg-ink p-8 text-paper sm:p-10">
                <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
                <div className="relative">
                  <Badge tone="dark">{featured.role}</Badge>
                  <p className="mt-6 font-mono text-xs text-slate-400">{featured.date}</p>
                  <p className="mt-2 text-sm text-signal">{featured.event}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">“{featured.title}”</h3>
                  <p className="mt-4 leading-relaxed text-slate-300">{featured.description}</p>
                  <p className="mt-6 flex items-center gap-1.5 text-sm text-slate-400">
                    <MapPin className="h-4 w-4" aria-hidden /> {featured.location}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {featured.links.map((l) => (
                      <TextLink key={l.href} href={l.href} dark>
                        {l.label}
                      </TextLink>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
            <ol className="divide-y divide-paper-line rounded-2xl bg-white px-6 ring-1 ring-paper-line">
              {rest.map((e) => (
                <li key={e.id} className="py-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="slate">{e.role}</Badge>
                    <span className="font-mono text-xs text-slate-500">{e.date}</span>
                  </div>
                  <p className="mt-3 font-semibold">{e.event}</p>
                  <p className="text-sm text-slate-500">{e.location}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{e.description}</p>
                  {e.links.map((l) => (
                    <TextLink key={l.href} href={l.href} className="mt-3">
                      {l.label}
                    </TextLink>
                  ))}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Collaboration */}
      <section id="collaboration" aria-labelledby="collab-title" className="border-t border-paper-line bg-paper-2">
        <Container className="grid gap-12 py-24 lg:grid-cols-[1fr_1fr] lg:py-28">
          <Reveal>
            <SectionHeading label="Research & collaboration" title={<span id="collab-title">Where the work happens</span>} />
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              My research is based in the <strong className="font-semibold text-ink">AI Robotics (AIR) Lab</strong> at the University of Brighton, where I have worked on multimodal control for robotic devices. I am interested in research partnerships that connect human-centred interfaces, robot learning and safe physical manipulation.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              I am keen to work with academic and industrial partners on human–robot interaction, embodied AI, robotic manipulation and intelligent automation — including student projects, joint proposals and applied research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.links.lab} variant="light">
                AIR Lab
              </ButtonLink>
              <ButtonLink href="/contact/" variant="outline">
                Start a conversation
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-white p-8 ring-1 ring-paper-line sm:p-10">
              <p className="label text-signal-deep">Collaborate on robotics research</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">From ideas to robot demonstrations.</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                I welcome conversations about joint research, applied projects and teaching collaborations involving intelligent robotic systems.
              </p>
              <div className="mt-7">
                <TextLink href="/contact/">Get in touch</TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
