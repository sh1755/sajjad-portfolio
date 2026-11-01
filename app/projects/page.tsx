import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { repos, repoModeLabel } from "@/content/projects";
import { siteConfig } from "@/content/siteConfig";
import { Container, PageHeader, SectionHeading, ButtonLink } from "@/components/ui";
import { RepoCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects & Code",
  description: "Research software and teaching repositories: Franka Panda gesture control, action grammars, LLM-driven HRI, ROS 2 MoveIt and kinematics examples.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  const [lead, ...research] = repos.filter((r) => r.featured && r.category === "robotics");
  const teaching = repos.filter((r) => r.category === "teaching");
  const ai = repos.filter((r) => r.category === "ai");
  return (
    <>
      <PageHeader
        label="Projects & Code"
        title="Working systems, open code."
        intro="Research software, teaching packages and applied AI projects. Every card says whether the work runs on a physical robot, in simulation, or as software only."
      >
        <div className="mt-8">
          <ButtonLink href={siteConfig.links.github}>github.com/sh1755</ButtonLink>
        </div>
      </PageHeader>

      <section aria-labelledby="research-software" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <Reveal>
            <SectionHeading label="Research software" title={<span id="research-software">Robot systems</span>} />
          </Reveal>
          <div className="mt-12">
            <Reveal>
              <RepoCard r={lead} large />
            </Reveal>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {research.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.05}>
                <RepoCard r={r} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="teaching-code" className="border-t border-paper-line bg-paper-2">
        <Container className="py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              label="Research-led teaching"
              title={<span id="teaching-code">Teaching packages</span>}
              intro="Self-contained ROS 2 exercises written for students. Both run in simulation only and say so in their documentation."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {teaching.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.05}>
                <RepoCard r={r} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="applied-ai" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <Reveal>
            <SectionHeading label="Applied AI" title={<span id="applied-ai">Retrieval and language systems</span>} intro="NLP and retrieval-augmented generation projects outside robotics, built with local models and vector search." />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ai.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.05}>
                <RepoCard r={r} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="all" aria-labelledby="all-repos" className="border-t border-paper-line bg-paper-2">
        <Container className="py-20">
          <h2 id="all-repos" className="text-2xl font-semibold tracking-tight">
            All repositories
          </h2>
          <p className="mt-2 text-sm text-slate-500">Snapshot of public repositories, October 2026. Empty or placeholder repositories are not listed.</p>
          <div className="mt-8 overflow-x-auto rounded-xl bg-white ring-1 ring-paper-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-paper-line text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Repository
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Type
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Main tools
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    <span className="sr-only">Link</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-line">
                {repos.map((r) => (
                  <tr key={r.id}>
                    <td className="px-5 py-4">
                      <p className="font-medium text-ink">{r.title}</p>
                      <p className="font-mono text-xs text-slate-400">{r.name}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{repoModeLabel[r.mode]}</td>
                    <td className="px-5 py-4 text-slate-600">{r.tags.slice(0, 3).join(", ")}</td>
                    <td className="px-5 py-4 text-right">
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-signal-deep hover:underline">
                        GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                        <span className="sr-only"> repository {r.name} (opens in a new tab)</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
