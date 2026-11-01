export interface AcademicEvent {
  id: string;
  title: string;
  role: string;
  event: string;
  location: string;
  date: string;
  year: number;
  description: string;
  featured?: boolean;
  links: { label: string; href: string }[];
  note?: string;
}

export const events: AcademicEvent[] = [
  {
    id: "icsr-2026",
    title: "International Conference on Social Robotics — ICSR + ART 2026",
    role: "Attendee",
    event: "18th International Conference on Social Robotics (ICSR + ART 2026)",
    location: "University of London, London, United Kingdom",
    date: "1–4 July 2026",
    year: 2026,
    description: "Attended the international conference on social robotics, human–robot interaction and creative robotics in London.",
    links: [{ label: "Conference", href: "https://icsr2026.uk/" }],
  },
  {
    id: "airoc-2025",
    title: "Multimodal Human–Robot Interaction Using Gesture and Language Models",
    role: "Invited Speaker",
    event: "Abu Dhabi AI-Robotics Conference (AIRoC) 2025 — Dialogue on Humanoids",
    location: "Abu Dhabi, United Arab Emirates",
    date: "8–9 December 2025",
    year: 2025,
    description:
      "Invited talk on combining gesture recognition and language models for intuitive control of collaborative manipulators, at a conference organised by the Robotics Department of Mohamed bin Zayed University of Artificial Intelligence (MBZUAI).",
    featured: true,
    links: [
      { label: "Speaker list", href: "https://sites.google.com/view/abudhabi-airoc2025/speakers" },
      { label: "Conference", href: "https://sites.google.com/view/abudhabi-airoc2025/welcome" },
    ],
    note: "MBZUAI is named as the event host only; it does not imply an affiliation.",
  },
  {
    id: "icarm-2025",
    title: "Multilingual NLP for 7-DoF robotic manipulation",
    role: "Paper",
    event: "IEEE ICARM 2025",
    location: "Portsmouth, United Kingdom",
    date: "1–3 August 2025",
    year: 2025,
    description: "Language-driven beverage preparation on a Franka Emika Panda from English and German instructions.",
    links: [{ label: "Paper", href: "/publications/#hussain2025multilingual" }],
  },
  {
    id: "grc-2025",
    title: "Energy-efficient trajectory planning for high-DoF robots",
    role: "Conference abstract",
    event: "First German Robotics Conference",
    location: "Nuremberg, Germany",
    date: "March 2025",
    year: 2025,
    description: "Sinusoidal trajectory generation with velocity scaling for energy-aware motion.",
    links: [{ label: "Abstract", href: "/publications/#hussain2025energy" }],
  },
  {
    id: "icra40-2024",
    title: "Gesture-based manipulation of a 7-DoF arm for multistep tasks",
    role: "Paper",
    event: "ICRA@40",
    location: "Rotterdam, Netherlands",
    date: "23–26 September 2024",
    year: 2024,
    description: "Early results of gesture-to-task control on the Franka Emika Panda, the precursor to AI-RTGM.",
    links: [{ label: "Paper", href: "/publications/#hussain2024icra" }],
  },
];
