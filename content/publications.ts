/**
 * Publication records. Every entry here was checked against the University of
 * Brighton research portal, the publisher page or arXiv (October 2026).
 * Anything that could not be verified is listed in CONTENT_REVIEW.md instead.
 *
 * type   — what kind of output it is
 * status — where it is in the publication process (drives the badge colour)
 */
export type PubType = "journal" | "conference" | "review" | "preprint" | "thesis" | "chapter";
export type PubStatus = "published" | "presented" | "accepted" | "preprint" | "abstract" | "working-paper" | "awarded";

export interface PubLink {
  label: "DOI" | "PDF" | "arXiv" | "Preprint" | "Record" | "Code" | "Thesis";
  href: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  date?: string;
  venue: string;
  venueDetail?: string;
  type: PubType;
  status: PubStatus;
  featured?: boolean;
  summary?: string;
  links: PubLink[];
  projectSlug?: string;
  bibtex?: string;
}

/** The site owner's name as it appears in author lists — highlighted in the UI. */
export const SELF = "Sajjad Hussain";

export const publications: Publication[] = [
  {
    id: "hussain2026realtime",
    title: "Real-Time HRI: Human Hand Gesture Mapping for 7-DoF Robotic Arm Operation",
    authors: ["Sajjad Hussain", "Khizer Saeed", "Almas Baimagambetov", "Yannis Manolopoulos", "Nikolaos Polatidis"],
    year: 2026,
    date: "13 March 2026",
    venue: "Concurrency and Computation: Practice and Experience",
    venueDetail: "Vol. 38, Issue 6, e70643 · Open access",
    type: "journal",
    status: "published",
    featured: true,
    summary:
      "AI-RTGM: an end-to-end framework that couples CNN-based gesture recognition (GESTID) with trajectory generation and execution (TAGEM) for real-time task control of a 7-DoF manipulator.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1002/cpe.70643" },
      { label: "Record", href: "https://research.brighton.ac.uk/en/persons/sajjad-hussain/" },
    ],
    projectSlug: "ai-rtgm",
    bibtex: `@article{hussain2026realtime,
  title   = {Real-Time HRI: Human Hand Gesture Mapping for 7-DoF Robotic Arm Operation},
  author  = {Hussain, Sajjad and Saeed, Khizer and Baimagambetov, Almas and Manolopoulos, Yannis and Polatidis, Nikolaos},
  journal = {Concurrency and Computation: Practice and Experience},
  volume  = {38},
  number  = {6},
  pages   = {e70643},
  year    = {2026},
  doi     = {10.1002/cpe.70643}
}`,
  },
  {
    id: "hussain2025review",
    title:
      "A Review of Advances in Large Language and Vision Models for Robotic Manipulation: Techniques, Integrations, and Challenges",
    authors: [
      "Sajjad Hussain",
      "S. Biswas",
      "A. Dutta",
      "Md Saad",
      "Almas Baimagambetov",
      "Khizer Saeed",
      "Nikolaos Polatidis",
    ],
    year: 2025,
    date: "25 June 2025",
    venue: "SN Computer Science",
    venueDetail: "Vol. 6, Article 588 · Springer Nature",
    type: "review",
    status: "published",
    featured: true,
    summary:
      "A review of how transformer-based language and vision models are being integrated with robot control for task planning, decision-making and adaptive manipulation, and where they still fall short.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1007/s42979-025-04119-6" },
      {
        label: "Record",
        href: "https://research.brighton.ac.uk/en/publications/a-review-of-advances-in-large-language-and-vision-models-for-robo/",
      },
    ],
    bibtex: `@article{hussain2025review,
  title   = {A Review of Advances in Large Language and Vision Models for Robotic Manipulation: Techniques, Integrations, and Challenges},
  author  = {Hussain, Sajjad and Biswas, S. and Dutta, A. and Saad, Md and Baimagambetov, Almas and Saeed, Khizer and Polatidis, Nikolaos},
  journal = {SN Computer Science},
  volume  = {6},
  pages   = {588},
  year    = {2025},
  doi     = {10.1007/s42979-025-04119-6}
}`,
  },
  {
    id: "hussain2025multilingual",
    title: "Integration of Multilingual NLP with 7-DOF Robotic Manipulation for Enhanced Domestic Task Automation",
    authors: ["Sajjad Hussain", "Awes Mubarak", "Khizer Saeed", "Almas Baimagambetov"],
    year: 2025,
    date: "August 2025",
    venue: "IEEE International Conference on Advanced Robotics and Mechatronics (ICARM 2025)",
    venueDetail: "IEEE ICARM 2025 · pp. 452–457 · Portsmouth, UK",
    type: "conference",
    status: "published",
    featured: true,
    summary:
      "GPT-4-based few-shot prompting converts English and German instructions into robot commands for beverage preparation on a Franka Emika Panda — 83% overall task accuracy, with a 3% gap between languages.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1109/ICARM65671.2025.11293725" },
      { label: "Preprint", href: "https://doi.org/10.36227/techrxiv.174803781.15522811/v1" },
      {
        label: "Record",
        href: "https://research.brighton.ac.uk/en/publications/integration-of-multilingual-nlp-with-7-dof-robotic-manipulation-f/",
      },
      { label: "Code", href: "https://github.com/sh1755/LLM_HRI" },
    ],
    projectSlug: "multilingual-manipulation",
    bibtex: `@inproceedings{hussain2025multilingual,
  title     = {Integration of Multilingual NLP with 7-DOF Robotic Manipulation for Enhanced Domestic Task Automation},
  author    = {Hussain, Sajjad and Mubarak, Awes and Saeed, Khizer and Baimagambetov, Almas},
  booktitle = {IEEE International Conference on Advanced Robotics and Mechatronics (ICARM)},
  address   = {Portsmouth, United Kingdom},
  year      = {2025},
  pages     = {452--457},
  doi       = {10.1109/ICARM65671.2025.11293725}
}`,
  },
  {
    id: "hussain2025energy",
    title: "A Robust and Energy-Efficient Trajectory Planning Framework for High-Degree-of-Freedom Robots",
    authors: ["Sajjad Hussain", "Md Saad", "Almas Baimagambetov", "Khizer Saeed"],
    year: 2025,
    date: "March 2025",
    venue: "First German Robotics Conference, Nuremberg",
    venueDetail: "Peer-reviewed conference abstract · full text on arXiv",
    type: "conference",
    status: "abstract",
    featured: true,
    summary:
      "Sinusoidal trajectory generation with velocity scaling to reduce energy use while keeping motion smooth and accurate, evaluated on a 7-DoF arm in PyBullet.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2503.11716" },
      {
        label: "Record",
        href: "https://research.brighton.ac.uk/en/publications/a-robust-and-energy-efficient-trajectory-planning-framework-for-h/",
      },
    ],
    projectSlug: "energy-efficient-planning",
    bibtex: `@misc{hussain2025energy,
  title         = {A Robust and Energy-Efficient Trajectory Planning Framework for High-Degree-of-Freedom Robots},
  author        = {Hussain, Sajjad and Saad, Md and Baimagambetov, Almas and Saeed, Khizer},
  year          = {2025},
  eprint        = {2503.11716},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO},
  note          = {Abstract presented at the German Robotics Conference, Nuremberg, 2025}
}`,
  },
  {
    id: "saad2026hybrid",
    title: "Hybrid Framework for Robotic Manipulation: Integrating Reinforcement Learning and Large Language Models",
    authors: ["Md Saad", "Sajjad Hussain", "Mohd Suhaib"],
    year: 2025,
    date: "2025",
    venue: "IEEE International Conference on Emerging Technologies and Innovation for Sustainability (EmergIN 2025)",
    venueDetail: "IEEE EmergIN 2025 · pp. 886–890",
    type: "conference",
    status: "published",
    featured: true,
    summary:
      "LLM-based task planning on top of RL-based low-level control (PPO/SAC), evaluated in PyBullet with a simulated Franka Emika Panda.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1109/EMERGIN67762.2025.11450758" },
      { label: "arXiv", href: "https://arxiv.org/abs/2603.30022" },
    ],
    projectSlug: "rl-llm-hybrid",
    bibtex: `@inproceedings{saad2025hybrid,
  title     = {Hybrid Framework for Robotic Manipulation: Integrating Reinforcement Learning and Large Language Models},
  author    = {Saad, Md and Hussain, Sajjad and Suhaib, Mohd},
  booktitle = {2025 International Conference on Emerging Technologies and Innovation for Sustainability (EmergIN)},
  pages     = {886--890},
  year      = {2025},
  doi       = {10.1109/EMERGIN67762.2025.11450758}
}`,
  },
  {
    id: "hussain2026thesis",
    title: "Machine Learning Driven Multimodal Control for Human-Robot Interaction",
    authors: ["Sajjad Hussain"],
    year: 2026,
    date: "June 2026",
    venue: "PhD thesis, University of Brighton",
    type: "thesis",
    status: "awarded",
    featured: true,
    links: [
      {
        label: "Thesis",
        href: "https://research.brighton.ac.uk/en/studentTheses/machine-learning-driven-multimodal-control-for-human-robot-intera/",
      },
    ],
    projectSlug: "phd-multimodal-framework",
    bibtex: `@phdthesis{hussain2026thesis,
  title  = {Machine Learning Driven Multimodal Control for Human-Robot Interaction},
  author = {Hussain, Sajjad},
  school = {University of Brighton},
  year   = {2026}
}`,
  },
  {
    id: "ezekiel2025face",
    title: "A Dissection of Factors Influencing Face Recognition Technologies",
    authors: ["O. T. Ezekiel", "Sajjad Hussain", "Khizer Saeed", "Almas Baimagambetov", "Shanay Rab"],
    year: 2025,
    date: "1 October 2025",
    venue: "SAFER-TEA 2024 — 2nd EAI International Conference on Safe, Secure, Ethical, Responsible Technologies and Emerging Applications",
    venueDetail: "Springer LNICST, pp. 201–218",
    type: "chapter",
    status: "published",
    links: [{ label: "Record", href: "https://research.brighton.ac.uk/en/persons/sajjad-hussain/" }],
  },
  {
    id: "hussain2024icra",
    title: "Gesture Based Manipulation of 7 DoF Robotic Arm for Multistep End Task",
    authors: ["Sajjad Hussain", "Khizer Saeed", "Almas Baimagambetov"],
    year: 2024,
    date: "September 2024",
    venue: "ICRA@40 — 40th Anniversary of the IEEE Conference on Robotics and Automation",
    venueDetail: "Rotterdam, Netherlands, 23–26 September 2024 · peer-reviewed",
    type: "conference",
    status: "presented",
    links: [
      {
        label: "Record",
        href: "https://research.brighton.ac.uk/en/publications/gesture-based-manipulation-of-7-dof-robotic-arm-for-multistep-end/",
      },
    ],
  },
  {
    id: "hussain2024gesturereview",
    title:
      "Advancements in Gesture Recognition Techniques and Machine Learning for Enhanced Human-Robot Interaction: A Comprehensive Review",
    authors: ["Sajjad Hussain", "Khizer Saeed", "Almas Baimagambetov", "Shanay Rab", "Md Saad"],
    year: 2024,
    date: "September 2024",
    venue: "arXiv preprint",
    venueDetail: "arXiv:2409.06503 [cs.RO]",
    type: "preprint",
    status: "preprint",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2409.06503" }],
  },
  {
    id: "hussain2024gripper",
    title: "Mathematical Modeling of Four Finger Robotic Grippers",
    authors: ["Sajjad Hussain", "M. Suhaib"],
    year: 2024,
    date: "September 2024",
    venue: "arXiv preprint",
    venueDetail: "arXiv:2409.06419 · work from Jamia Millia Islamia",
    type: "preprint",
    status: "preprint",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2409.06419" }],
  },
  {
    id: "saad2024rrr",
    title: "Simulation and Optimization of Computed Torque Control 3 DOF RRR Manipulator Using MATLAB",
    authors: ["Md Saad", "Sajjad Hussain"],
    year: 2024,
    date: "September 2024",
    venue: "arXiv preprint",
    venueDetail: "arXiv:2409.04785",
    type: "preprint",
    status: "preprint",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2409.04785" }],
  },
  {
    id: "hussain2026agriculture",
    title:
      "Robotics in Agriculture: A Comprehensive Review of Autonomous Systems, Algorithms, and Applications for Smart Farming",
    authors: ["Sajjad Hussain", "S. Biswas", "Md Saad", "F. Husain", "M. H. N. Shaikh"],
    year: 2026,
    venue: "Working paper",
    type: "review",
    status: "working-paper",
    links: [],
  },
];

export const pubTypeLabel: Record<PubType, string> = {
  journal: "Journal article",
  conference: "Conference",
  review: "Review",
  preprint: "Preprint",
  thesis: "Thesis",
  chapter: "Book chapter",
};

export const pubStatusLabel: Record<PubStatus, string> = {
  published: "Published",
  presented: "Presented",
  accepted: "Accepted",
  preprint: "Preprint",
  abstract: "Conference abstract",
  "working-paper": "Working paper",
  awarded: "Awarded",
};

export const pubFilters: { key: "all" | PubType; label: string }[] = [
  { key: "all", label: "All" },
  { key: "journal", label: "Journal articles" },
  { key: "conference", label: "Conference papers" },
  { key: "review", label: "Reviews" },
  { key: "preprint", label: "Preprints" },
  { key: "chapter", label: "Book chapters" },
  { key: "thesis", label: "Thesis" },
];

export function sortedPublications() {
  const order = (p: Publication) => p.year * 100 + (p.date ? monthIndex(p.date) : 0);
  return [...publications].sort((a, b) => order(b) - order(a));
}

function monthIndex(date: string) {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const lower = date.toLowerCase();
  const i = months.findIndex((m) => lower.includes(m));
  return i + 1;
}
