import type { Metadata } from "next";
import { Building2, Mail, FlaskConical } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui";
import { ContactBlock } from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dr Sajjad Hussain about research collaboration, student projects and robotics partnerships.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const rows = [
    { Icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { Icon: Building2, label: "Institution", value: `${profile.school}, ${profile.institution}`, href: siteConfig.links.brighton },
    { Icon: FlaskConical, label: "Lab", value: "AI Robotics (AIR) Lab", href: siteConfig.links.lab },
  ];
  return (
    <>
      <div className="pt-16">
        <ContactBlock id="contact-main" />
      </div>
      <section className="bg-paper">
        <Container className="py-16">
          <dl className="grid gap-px overflow-hidden rounded-2xl bg-paper-line ring-1 ring-paper-line md:grid-cols-3">
            {rows.map(({ Icon, label, value, href }) => (
              <div key={label} className="bg-white p-6">
                <dt className="flex items-center gap-2 text-sm text-slate-500">
                  <Icon className="h-4 w-4 text-signal-deep" aria-hidden />
                  {label}
                </dt>
                <dd className="mt-2 font-medium">
                  <a href={href} className="hover:text-signal-deep hover:underline" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-500">
            Prospective research students: please include a short description of your background and the problem you would like to work on.
          </p>
        </Container>
      </section>
    </>
  );
}
