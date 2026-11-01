/**
 * Site-wide settings. Update `url` once the custom domain is live —
 * it drives canonical URLs, the sitemap and Open Graph metadata.
 */
export const siteConfig = {
  name: "Dr Sajjad Hussain",
  shortName: "Sajjad Hussain",
  title: "Dr Sajjad Hussain — Robotics & AI, University of Brighton",
  description:
    "Lecturer in Robotics, Automation and Control Engineering at the University of Brighton. Research on human–robot interaction, multimodal learning, embodied AI and robot manipulation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sh1755.github.io",
  locale: "en_GB",
  email: "s.hussain4@brighton.ac.uk",
  /** Set to a file in /public (e.g. "/cv/Sajjad-Hussain-CV.pdf") to show CV buttons. */
  cvPath: null as string | null,
  links: {
    github: "https://github.com/sh1755",
    linkedin: "https://www.linkedin.com/in/880sajjad-hussain/",
    scholar: "https://scholar.google.com/citations?user=OH5lZ0cAAAAJ&hl=en",
    brighton: "https://research.brighton.ac.uk/p/en/persons/sajjad-hussain-2",
    alphaxiv: "https://www.alphaxiv.org/@sajjad-hussain",
    lab: "https://almasb.github.io/RAI/",
    thesis:
      "https://research.brighton.ac.uk/en/studentTheses/machine-learning-driven-multimodal-control-for-human-robot-intera/",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/research/", label: "Research" },
    { href: "/publications/", label: "Publications" },
    { href: "/projects/", label: "Projects & Code" },
    { href: "/teaching/", label: "Teaching" },
    { href: "/about/", label: "About" },
  ],
} as const;
