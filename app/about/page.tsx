import type { Metadata } from "next";
import Image from "next/image";
import { profile, education, skills } from "@/content/profile";
import { experience, journey } from "@/content/experience";
import { awards, memberships, invitations, development } from "@/content/awards";
import { siteConfig } from "@/content/siteConfig";
import { Container, SectionHeading, SectionLabel, Tag, Badge, ButtonLink } from "@/components/ui";
import { Timeline } from "@/components/Timeline";
import { SocialLinks } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience and education of Dr Sajjad Hussain — from mechanical engineering and industrial simulation to robotics and AI research.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const shownExperience = experience.filter((e) => !e.hidden);
  const recognition = [
    { heading: "Awards", items: awards },
    { heading: "Invitations", items: invitations },
    { heading: "Memberships", items: memberships },
    { heading: "Professional development", items: development },
  ]
    .map((g) => ({ ...g, items: g.items.filter((i) => i.confirmed) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <header className="relative overflow-hidden bg-ink text-paper">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <Container className="relative grid gap-12 pb-20 pt-32 sm:pt-40 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <SectionLabel dark>About</SectionLabel>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{profile.name}</h1>
            <p className="mt-4 text-lg text-slate-300">
              {profile.role}, {profile.institution}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <Tag key={i} dark>
                  {i}
                </Tag>
              ))}
            </div>
            <SocialLinks className="mt-8" />
          </div>
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-3 rounded-[1.6rem] border border-signal/30" aria-hidden />
            <Image
              src={asset(profile.portrait.src)}
              alt={profile.portrait.alt}
              width={500}
              height={500}
              priority
              className="relative aspect-square w-full rounded-2xl object-cover"
            />
          </div>
        </Container>
      </header>

      <section aria-labelledby="bio" className="bg-paper">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-24">
          <Reveal>
            <SectionHeading label="Biography" title={<span id="bio">From engineering to intelligent robotics</span>} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="prose-site text-[1.05rem] leading-relaxed text-slate-700">
              {profile.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact/" variant="light">
                Get in touch
              </ButtonLink>
              {siteConfig.cvPath && (
                <ButtonLink href={asset(siteConfig.cvPath)} variant="outline">
                  Download CV
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="journey" className="bg-ink text-paper">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-24">
          <Reveal>
            <SectionHeading dark label="My journey" title={<span id="journey">Key transitions</span>} intro="The turning points — the full record of roles is below." />
          </Reveal>
          <Reveal delay={0.05}>
            <Timeline items={journey} dark />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="experience" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <Reveal>
            <SectionHeading label="Experience" title={<span id="experience">Professional experience</span>} />
          </Reveal>
          <ol className="mt-12 space-y-5">
            {shownExperience.map((org, i) => (
              <Reveal key={org.id} delay={i * 0.04}>
                <li className="grid gap-6 rounded-2xl bg-white p-7 ring-1 ring-paper-line md:grid-cols-[1fr_1.6fr] md:gap-12">
                  <div>
                    <div className="flex items-start gap-4">
                      {org.logo ? (
                        <Image src={asset(org.logo)} alt="" width={48} height={48} className="h-12 w-12 rounded-lg object-contain ring-1 ring-paper-line" />
                      ) : (
                        <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-paper-2 font-semibold text-slate-500 ring-1 ring-paper-line">
                          {org.name
                            .split(" ")
                            .filter((w) => /^[A-Z]/.test(w))
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")}
                        </span>
                      )}
                      <div>
                        <h3 className="font-semibold leading-snug">{org.name}</h3>
                        <p className="text-sm text-slate-500">{org.location}</p>
                        <div className="mt-2">
                          <Badge tone={org.kind === "Industry" ? "violet" : "cyan"}>{org.kind}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {org.roles
                        .filter((r) => !r.hidden)
                        .map((r) => (
                          <li key={r.title} className="flex flex-col justify-between gap-1 border-b border-paper-line pb-2 last:border-0 sm:flex-row sm:items-baseline">
                            <span className="font-medium">{r.title}</span>
                            <span className="shrink-0 font-mono text-xs text-slate-500">{r.period}</span>
                          </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{org.summary}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="education" className="border-t border-paper-line bg-paper-2">
        <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <SectionHeading label="Education" title={<span id="education">Academic background</span>} />
            <ol className="mt-10 space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="rounded-xl bg-white p-6 ring-1 ring-paper-line">
                  <p className="font-mono text-xs text-signal-deep">{e.period}</p>
                  <p className="mt-1 font-semibold">{e.degree}</p>
                  <p className="text-sm text-slate-500">{e.institution}</p>
                  {e.detail && <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.detail}</p>}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading label="Tools & methods" title="Technical expertise" />
            <div className="mt-10 space-y-6">
              {skills.map((g) => (
                <div key={g.group}>
                  <p className="label text-slate-500">{g.group}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {recognition.length > 0 && (
        <section aria-labelledby="recognition" className="bg-paper">
          <Container className="py-20">
            <SectionHeading label="Recognition" title={<span id="recognition">Awards, invitations and memberships</span>} />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recognition.map((g) => (
                <div key={g.heading}>
                  <p className="label text-slate-500">{g.heading}</p>
                  <ul className="mt-3 space-y-3">
                    {g.items.map((a) => (
                      <li key={a.title + a.issuer} className="rounded-xl bg-white p-5 ring-1 ring-paper-line">
                        <p className="font-semibold">{a.title}</p>
                        <p className="text-sm text-slate-500">
                          {a.issuer}
                          {a.year ? ` · ${a.year}` : ""}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
