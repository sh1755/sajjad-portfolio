/**
 * Professional experience. Overlapping University of Brighton appointments are
 * grouped under one organisation so the logo and description appear once.
 * Set `hidden: true` on anything awaiting confirmation (see CONTENT_REVIEW.md).
 */
export interface Role {
  title: string;
  period: string;
  hidden?: boolean;
}

export interface Organisation {
  id: string;
  name: string;
  location: string;
  kind: "Academic" | "Industry";
  /** Optional official logo placed in /public/images/logos/. */
  logo?: string;
  roles: Role[];
  summary: string;
  hidden?: boolean;
}

export const experience: Organisation[] = [
  {
    id: "brighton",
    name: "University of Brighton",
    location: "Brighton, UK",
    kind: "Academic",
    roles: [
      { title: "Lecturer in Robotics, Automation and Control Engineering", period: "Sep 2026 – present" },
      { title: "Research Officer", period: "Apr 2026 – Sep 2026" },
      { title: "Hourly Paid Lecturer", period: "Oct 2025 – Sep 2026" },
      { title: "PhD Researcher in Robotics and AI", period: "Feb 2023 – Jun 2026" },
    ],
    summary:
      "Doctoral research on multimodal human–robot interaction in the AI Robotics (AIR) Lab, followed by research and teaching appointments in the School of Architecture, Technology and Engineering. Teaching spans programming, machine learning, robotics and control.",
  },
  {
    id: "kaplan",
    name: "Kaplan International Pathways",
    location: "Brighton, UK",
    kind: "Academic",
    roles: [{ title: "Academic Lecturer / Sessional Tutor", period: "Jan 2024 – Jul 2026" }],
    summary:
      "Taught physics, mathematics, engineering and programming to international foundation and pathway students preparing for UK undergraduate study.",
  },
  {
    id: "bosch",
    name: "Bosch Global Software Technologies",
    location: "India",
    kind: "Industry",
    roles: [{ title: "Simulation Engineer (FEA)", period: "Apr 2022 – Feb 2023" }],
    summary:
      "Finite-element modelling and vibration simulation for automotive engineering components — building, validating and reporting structural and dynamic analyses.",
  },
  {
    id: "assistant-professor",
    name: "Engineering college (name to be confirmed)",
    location: "India",
    kind: "Academic",
    roles: [{ title: "Assistant Professor, Mechanical Engineering", period: "2021 – 2022" }],
    summary: "Undergraduate teaching in mechanical engineering.",
    hidden: true,
  },
  {
    id: "chegg",
    name: "Chegg India",
    location: "India",
    kind: "Industry",
    roles: [{ title: "Subject Matter Expert", period: "Jun 2020 – Feb 2023" }],
    summary: "Provided step-by-step solutions to student questions in engineering subjects.",
  },
];

/** "From engineering to intelligent robotics" — transitions, not a second CV. */
export const journey = [
  { period: "2015 – 2019", title: "Mechanical engineering", text: "B.Tech at Dr A.P.J. Abdul Kalam Technical University — mechanics, design and manufacturing." },
  { period: "2019 – 2021", title: "Machine design and first robots", text: "M.Tech at Jamia Millia Islamia, modelling the kinematics and dynamics of a four-finger robotic gripper." },
  { period: "2021 – 2022", title: "Into the lecture theatre", text: "First experience teaching mechanical engineering to undergraduates." },
  { period: "2022 – 2023", title: "Industrial simulation", text: "Finite-element and vibration simulation for automotive engineering at Bosch." },
  { period: "2023", title: "Doctoral research begins", text: "Moved to Brighton to work on multimodal human–robot interaction with a Franka Emika Panda." },
  { period: "2024 – 2025", title: "International research", text: "Papers and talks at ICRA@40 (Rotterdam), the German Robotics Conference (Nuremberg), IEEE ICARM (Portsmouth) and AIRoC (Abu Dhabi)." },
  { period: "2026", title: "PhD awarded", text: "Research Officer from April, PhD awarded in June, and Lecturer in Robotics, Automation and Control Engineering from September." },
];
