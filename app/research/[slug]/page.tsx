import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, maturityLabel, themes } from "@/content/research";
import { publications } from "@/content/publications";
import { repos } from "@/content/projects";
import { Container, SectionLabel, Badge, ButtonLink, Tag } from "@/components/ui";
import { Pipeline } from "@/components/Pipeline";
import { PublicationItem } from "@/components/Publications";
import { ZoomImage } from "@/components/ZoomImage";
import { DemoVideo } from "@/components/DemoVideo";
import { maturityTone } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.oneLiner, alternates: { canonical: `/research/${c.slug}/` } };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = caseStudies.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const c = caseStudies[i];
  const prev = caseStudies[i - 1];
  const next = caseStudies[i + 1];
  const pub = c.publicationId ? publications.find((p) => p.id === c.publicationId) : undefined;
  const relatedThemes = themes.filter((t) => c.themeIds.includes(t.id));
  // The body-pose demo is the closest public recording of the gesture → motion loop.
  const demo = c.slug === "ai-rtgm" || c.slug === "phd-multimodal-framework" ? repos.find((r) => r.id === "franka-bodypose") : undefined;

  return (
    <>
      <header className="relative overflow-hidden bg-ink text-paper">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <Container className="relative pb-16 pt-28 sm:pt-36">
          <Link href="/research/#contributions" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-paper">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All research
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-signal">Research {c.number}</span>
            <Badge tone="dark">{maturityLabel[c.maturity]}</Badge>
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{c.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">{c.oneLiner}</p>
          <p className="mt-4 text-sm text-slate-400">{c.venue}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {c.links.map((l, k) => (
              <ButtonLink key={l.href} href={l.href} variant={k === 0 ? "primary" : "ghost"}>
                {l.label}
              </ButtonLink>
            ))}
          </div>
        </Container>
      </header>

      {c.pipeline && (
        <section aria-label="System overview" className="border-b border-paper-line bg-paper-2">
          <Container className="py-10">
            <p className="label mb-4 text-slate-500">System overview</p>
            <Pipeline steps={c.pipeline} caption={`Simplified flow of ${c.shortTitle}, following the published description.`} />
          </Container>
        </section>
      )}

      <article className="bg-paper">
        <Container className="grid gap-14 py-20 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="min-w-0">
            <Reveal>
              <SectionLabel>The problem</SectionLabel>
              <p className="mt-4 text-lg leading-relaxed text-slate-800">{c.problem}</p>
            </Reveal>

            <Reveal>
              <div className="mt-14">
                <SectionLabel>Approach</SectionLabel>
                <ol className="mt-5 space-y-4">
                  {c.approach.map((a, k) => (
                    <li key={k} className="grid grid-cols-[2rem_1fr] gap-2 text-[1.02rem] leading-relaxed text-slate-700">
                      <span className="font-mono text-sm text-signal-deep">{String(k + 1).padStart(2, "0")}</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {c.components && (
              <Reveal>
                <div className="mt-14">
                  <SectionLabel>Main components</SectionLabel>
                  <dl className="mt-5 grid gap-px overflow-hidden rounded-xl bg-paper-line ring-1 ring-paper-line sm:grid-cols-3">
                    {c.components.map((m) => (
                      <div key={m.name} className="bg-white p-5">
                        <dt className="font-mono text-sm font-semibold text-ink">{m.name}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-slate-600">{m.role}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            )}

            {(c.results || c.resultsNote) && (
              <Reveal>
                <div className="mt-14">
                  <SectionLabel>Evidence</SectionLabel>
                  {c.results && (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {c.results.map((r) => (
                        <div key={r.label} className="rounded-xl bg-ink p-6 text-paper">
                          <p className="text-4xl font-semibold tracking-tight text-signal">{r.value}</p>
                          <p className="mt-2 text-sm text-slate-300">{r.label}</p>
                          <p className="mt-3 font-mono text-[0.68rem] text-slate-500">Source: {r.source}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {c.resultsNote && <p className="mt-5 leading-relaxed text-slate-700">{c.resultsNote}</p>}
                </div>
              </Reveal>
            )}

            {c.limitations && (
              <Reveal>
                <div className="mt-10 rounded-xl border border-amber-600/20 bg-amber-50/70 p-5">
                  <p className="label text-amber-800">Scope and limitations</p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-950/80">{c.limitations}</p>
                </div>
              </Reveal>
            )}

            {c.image && (
              <Reveal>
                <figure className="mt-14 overflow-hidden rounded-xl ring-1 ring-paper-line">
                  <ZoomImage src={c.image.src} alt={c.image.alt} width={886} height={762} imgClassName="object-cover" caption={c.image.alt} />
                  <figcaption className="bg-white px-4 py-3 text-xs text-slate-500">{c.image.alt}. Screenshot from the project repository.</figcaption>
                </figure>
              </Reveal>
            )}

            {pub && (
              <div className="mt-16">
                <SectionLabel>Publication</SectionLabel>
                <div className="mt-2 border-y border-paper-line">
                  <PublicationItem p={pub} />
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {demo?.video && (
              <figure className="overflow-hidden rounded-xl bg-ink ring-1 ring-paper-line">
                <DemoVideo src={demo.video.src} poster={demo.video.poster} label="Lab recording of hand-gesture and body-pose control of the Franka Panda" className="aspect-[9/12] w-full object-cover" />
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-slate-400">
                  Related lab recording: MediaPipe hand tracking driving the Panda through ROS 2 and MoveIt (body-pose control project).
                </figcaption>
              </figure>
            )}
            <div className="rounded-xl bg-white p-6 ring-1 ring-paper-line">
              <p className="label text-slate-500">Status</p>
              <div className="mt-3">
                <Badge tone={maturityTone[c.maturity]}>{maturityLabel[c.maturity]}</Badge>
              </div>
              <p className="label mt-6 text-slate-500">Methods & tools</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              {relatedThemes.length > 0 && (
                <>
                  <p className="label mt-6 text-slate-500">Research themes</p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {relatedThemes.map((t) => (
                      <li key={t.id}>
                        <Link href={`/research/#${t.id}`} className="text-signal-deep hover:underline">
                          {t.index} · {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </aside>
        </Container>
      </article>

      <nav aria-label="More research" className="border-t border-paper-line bg-paper-2">
        <Container className="grid gap-4 py-10 sm:grid-cols-2">
          {prev ? (
            <Link href={`/research/${prev.slug}/`} className="group rounded-xl bg-white p-5 ring-1 ring-paper-line hover:ring-slate-300">
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Previous · Research {prev.number}
              </span>
              <span className="mt-1 block font-medium">{prev.shortTitle}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/research/${next.slug}/`} className="group rounded-xl bg-white p-5 text-right ring-1 ring-paper-line hover:ring-slate-300">
              <span className="flex items-center justify-end gap-1.5 text-xs text-slate-500">
                Next · Research {next.number} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="mt-1 block font-medium">{next.shortTitle}</span>
            </Link>
          )}
        </Container>
      </nav>
    </>
  );
}
