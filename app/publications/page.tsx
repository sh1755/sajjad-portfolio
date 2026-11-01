import type { Metadata } from "next";
import { sortedPublications } from "@/content/publications";
import { siteConfig } from "@/content/siteConfig";
import { Container, PageHeader, ButtonLink } from "@/components/ui";
import { PublicationBrowser } from "@/components/Publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Journal articles, conference papers, reviews, preprints and the PhD thesis of Dr Sajjad Hussain.",
  alternates: { canonical: "/publications/" },
};

export default function PublicationsPage() {
  const items = sortedPublications();
  return (
    <>
      <PageHeader
        label="Publications"
        title="Publications"
        intro="Journal articles, published conference papers, reviews and selected working papers, with direct links to the publisher or open version where available."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.links.scholar} variant="primary">
            Google Scholar
          </ButtonLink>
          <ButtonLink href={siteConfig.links.brighton} variant="ghost">
            University research profile
          </ButtonLink>
          <ButtonLink href={siteConfig.links.alphaxiv} variant="ghost">
            alphaXiv
          </ButtonLink>
        </div>
      </PageHeader>
      <section className="bg-paper">
        <Container className="py-16 lg:py-20">
          <PublicationBrowser items={items} />
          <p className="mt-16 max-w-2xl border-t border-paper-line pt-6 text-sm leading-relaxed text-slate-500">
            Citation counts change constantly, so they are not reproduced here — Google Scholar has the current figures. Formal author lists and citation exports remain available from the linked publisher records.
          </p>
        </Container>
      </section>
    </>
  );
}
