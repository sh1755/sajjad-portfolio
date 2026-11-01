import type { Metadata } from "next";
import { GraduationCap, FlaskConical, Code2, MessageSquareText, Award } from "lucide-react";
import { teachingPhilosophy, currentTeaching, pastTeaching, practice, workshops } from "@/content/teaching";
import { repos } from "@/content/projects";
import { awards } from "@/content/awards";
import { Container, SectionHeading, SectionLabel, Tag } from "@/components/ui";
import { RepoCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching in robotics, machine learning and programming at the University of Brighton, with research-led ROS 2 teaching resources.",
  alternates: { canonical: "/teaching/" },
};

const practiceIcons = [GraduationCap, FlaskConical, Code2, MessageSquareText];

export default function TeachingPage() {
  const teachingRepos = repos.filter((r) => r.category === "teaching");
  const confirmedAwards = awards.filter((a) => a.confirmed);
  return (
    <>
      {/* Light header gives Teaching its own identity */}
      <header className="relative overflow-hidden border-b border-paper-line bg-paper">
        <div className="grid-lines-light absolute inset-0" aria-hidden />
        <Container className="relative grid gap-12 pb-20 pt-32 sm:pt-40 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Teaching</SectionLabel>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">From equations to running robots.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
              Lecturer in Robotics, Automation and Control Engineering at the University of Brighton, teaching across robotics, machine learning and programming.
            </p>
          </div>
          <blockquote className="rounded-2xl bg-ink p-8 text-paper">
            <p className="text-lg leading-relaxed">“{teachingPhilosophy.quote}”</p>
            <footer className="mt-4 font-mono text-xs text-signal">Teaching philosophy</footer>
          </blockquote>
        </Container>
      </header>

      <section aria-labelledby="approach" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <Reveal>
            <SectionHeading label="Approach" title={<span id="approach">How I teach</span>} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {teachingPhilosophy.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-paper-line">
                  <p className="font-mono text-sm text-signal-deep">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="modules" className="border-t border-paper-line bg-paper-2">
        <Container className="grid gap-14 py-20 lg:grid-cols-[1fr_1.5fr] lg:py-24">
          <Reveal>
            <SectionHeading
              label="Current teaching"
              title={<span id="modules">University of Brighton</span>}
              intro="Teaching contributions in the School of Architecture, Technology and Engineering and in computing."
            />
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {currentTeaching.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 0.04}>
                <li className="flex h-full flex-col rounded-xl bg-white p-5 ring-1 ring-paper-line">
                  <p className="font-semibold leading-snug">{m.title}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {m.context}
                    {m.level ? ` · ${m.level}` : ""}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="past" className="bg-paper">
        <Container className="grid gap-14 py-20 lg:grid-cols-[1fr_1.5fr] lg:py-24">
          <Reveal>
            <SectionHeading label="Previous teaching" title={<span id="past">Foundation and undergraduate teaching</span>} />
          </Reveal>
          <ul className="space-y-3">
            {pastTeaching.map((m) => (
              <li key={m.title} className="rounded-xl bg-white p-6 ring-1 ring-paper-line">
                <p className="font-semibold">{m.title}</p>
                <p className="mt-1 text-sm text-slate-500">{m.context}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="practice" className="bg-ink text-paper">
        <Container className="py-20 lg:py-24">
          <Reveal>
            <SectionHeading dark label="In practice" title={<span id="practice">Beyond the lecture</span>} />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {practice.map((p, i) => {
              const Icon = practiceIcons[i];
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl bg-ink-2 p-6 ring-1 ring-ink-line">
                    <Icon className="h-5 w-5 text-signal" aria-hidden />
                    <h3 className="mt-4 font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12">
            <p className="label text-slate-500">Workshop topics</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {workshops.map((w) => (
                <Tag key={w} dark>
                  {w}
                </Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="resources" aria-labelledby="resources-title" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              label="Teaching resources"
              title={<span id="resources-title">ROS 2 exercises on GitHub</span>}
              intro="Both packages target ROS 2 Humble on Ubuntu 22.04 and run entirely in simulation."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {teachingRepos.map((r) => (
              <RepoCard key={r.id} r={r} />
            ))}
          </div>
        </Container>
      </section>

      {confirmedAwards.length > 0 && (
        <section aria-labelledby="teaching-recognition" className="border-t border-paper-line bg-paper-2">
          <Container className="py-16">
            <h2 id="teaching-recognition" className="label text-slate-500">
              Recognition
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {confirmedAwards.map((a) => (
                <li key={a.title} className="flex gap-4 rounded-xl bg-white p-6 ring-1 ring-paper-line">
                  <Award className="h-6 w-6 shrink-0 text-signal-deep" aria-hidden />
                  <div>
                    <p className="font-semibold">{a.title}</p>
                    <p className="text-sm text-slate-500">
                      {a.issuer}
                      {a.year ? ` · ${a.year}` : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
