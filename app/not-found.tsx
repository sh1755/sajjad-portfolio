import { Container, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <Container className="flex min-h-[70vh] flex-col justify-center py-32">
        <p className="font-mono text-sm text-signal">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page is outside the workspace.</h1>
        <p className="mt-4 max-w-lg text-slate-300">The link may be out of date. The research, publications and code are all reachable from the home page.</p>
        <div className="mt-8">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
