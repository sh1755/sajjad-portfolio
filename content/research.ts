/**
 * Research themes and flagship research contributions (case studies).
 * `maturity` keeps validated work visibly separate from ongoing research.
 */
export type Maturity = "published-physical" | "published-simulation" | "preprint-simulation" | "active-prototype" | "milestone";

export const maturityLabel: Record<Maturity, string> = {
  "published-physical": "Published · physical robot",
  "published-simulation": "Published · simulation",
  "preprint-simulation": "Preprint · simulation",
  "active-prototype": "Active research · prototype",
  milestone: "Doctoral milestone",
};

export interface ResearchTheme {
  id: string;
  index: string;
  title: string;
  short: string;
  body: string;
  established: string[];
  emerging: string[];
  related: { label: string; href: string }[];
  visual: "hri" | "language" | "learning" | "sustainable";
}

export const themes: ResearchTheme[] = [
  {
    id: "hri",
    index: "A",
    title: "Human–Robot Interaction & Multimodal Control",
    short: "Turning gestures, body movement and speech into safe robot motion.",
    body:
      "This is the core of my research. I build pipelines that track a person's hands and body in real time, recognise intent and map it onto continuous control of a 7-DoF Franka Emika Panda. The engineering challenge is less about recognition accuracy in isolation and more about the full loop: latency, calibration, dead-man safety gates, compliant motion and graceful failure when tracking drops out.",
    established: [
      "Real-time hand-gesture recognition mapped to multistep manipulation tasks",
      "Body-pose teleoperation through MoveIt Servo with calibration and dead-man control",
      "Integration of perception with ROS 2, MoveIt 2 and the Franka control stack",
    ],
    emerging: ["Fusing gesture and speech into one interaction channel", "User studies of operator workload and trust"],
    related: [
      { label: "AI-RTGM case study", href: "/research/ai-rtgm/" },
      { label: "Body-pose control code", href: "/projects/#franka-bodypose" },
    ],
    visual: "hri",
  },
  {
    id: "language",
    index: "B",
    title: "Language Models & Embodied AI",
    short: "Grounding natural-language instructions in executable robot skills.",
    body:
      "Language models are useful to a robot only when their output is constrained to actions the robot can actually perform. My work uses LLMs as task interpreters that emit structured commands for a validated skill library — first with multilingual (English/German) instructions for domestic tasks, and in simulation as high-level planners on top of learned low-level controllers.",
    established: [
      "Multilingual instruction-to-command pipeline on a physical Franka Panda (IEEE ICARM 2025)",
      "Review of large language and vision models for robotic manipulation (SN Computer Science, 2025)",
    ],
    emerging: [
      "Local small language models for on-premise, privacy-preserving HRI",
      "Vision–language–action models and safety-aware execution constraints",
    ],
    related: [
      { label: "Multilingual manipulation", href: "/research/multilingual-manipulation/" },
      { label: "RL + LLM hybrid", href: "/research/rl-llm-hybrid/" },
    ],
    visual: "language",
  },
  {
    id: "learning",
    index: "C",
    title: "Robot Learning, Manipulation & Motion Planning",
    short: "Learning-based decisions on top of classical robotics.",
    body:
      "I am interested in combining what learning does well — perception, task selection, adaptation — with what classical robotics already does reliably: kinematics, trajectory generation and collision-aware motion planning. Recent work explores structured action grammars in which each skill carries explicit preconditions and effects, so that a failure can be repaired locally rather than by replanning the whole task.",
    established: [
      "Forward and inverse kinematics, Jacobian-based numerical IK",
      "MoveIt 2 motion planning and planning-scene manipulation",
      "RL (PPO, SAC) in PyBullet simulation",
    ],
    emerging: [
      "Physics-grounded action grammars with dependency-local repair",
      "Imitation learning from teleoperated demonstrations",
    ],
    related: [
      { label: "Action grammars", href: "/research/action-grammars/" },
      { label: "Teaching repositories", href: "/teaching/#resources" },
    ],
    visual: "learning",
  },
  {
    id: "sustainable",
    index: "D",
    title: "Sustainable & Intelligent Robotics",
    short: "Energy-aware motion and robotics for circular manufacturing and agriculture.",
    body:
      "Robots that run all day should not waste energy. I have worked on energy-aware trajectory generation for high-DoF arms, and I am developing directions in robotic disassembly for circular manufacturing, autonomous agriculture and digital twins for intelligent automation. These are emerging directions and I welcome collaborators in them.",
    established: ["Energy-efficient trajectory planning for high-DoF robots (German Robotics Conference, 2025)"],
    emerging: [
      "Robotic disassembly for circular manufacturing",
      "Autonomous systems for smart farming (review in preparation)",
      "Digital twins for intelligent automation",
    ],
    related: [{ label: "Energy-efficient planning", href: "/research/energy-efficient-planning/" }],
    visual: "sustainable",
  },
];


/** Concise subtopics; these appear as grouped research expertise on Home and Research. */
export const researchFocusGroups = [
  {
    title: "Robotics fundamentals",
    topics: ["Robot kinematics", "Robot dynamics", "Control systems", "Robot simulation", "Trajectory planning"],
  },
  {
    title: "AI for robotics",
    topics: ["Large language models (LLMs)", "Vision–language models (VLMs)", "Reinforcement learning (RL)", "Multimodal perception", "Embodied AI"],
  },
  {
    title: "Manipulation & interaction",
    topics: ["Robot manipulation", "Human–robot interaction", "Robot grasping", "Motion planning", "ROS 2 & MoveIt 2"],
  },
] as const;

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  maturity: Maturity;
  venue: string;
  oneLiner: string;
  problem: string;
  approach: string[];
  components?: { name: string; role: string }[];
  pipeline?: string[];
  results?: { value: string; label: string; source: string }[];
  resultsNote?: string;
  limitations?: string;
  publicationId?: string;
  links: { label: string; href: string }[];
  image?: { src: string; alt: string };
  video?: { src: string; poster: string; caption: string };
  stack: string[];
  themeIds: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-rtgm",
    number: "01",
    title: "AI-RTGM: Real-Time Gesture-Based Human–Robot Interaction",
    shortTitle: "AI-RTGM",
    maturity: "published-physical",
    venue: "Concurrency and Computation: Practice and Experience, 2026",
    oneLiner: "An end-to-end framework that maps human hand gestures to complete manipulation tasks on a 7-DoF Franka Emika Panda.",
    problem:
      "Many gesture interfaces either rely on pre-scripted commands or on wearable sensors, and few close the loop all the way from a camera image to stable motion on a redundant 7-DoF arm. The question was whether vision-only gesture recognition could drive multistep tasks — not just jog the arm — reliably and in real time.",
    approach: [
      "GESTID, a CNN-based vision model, continuously recognises the operator's hand gestures from a camera stream.",
      "Each recognised gesture is mapped to a task definition — for example gesture 1 to a pick-and-place routine and gesture 2 to a cleaning routine — described in JSON.",
      "TAGEM generates and executes smooth, coordinated 7-DoF trajectories for the selected task using forward-kinematics-driven trajectory execution.",
    ],
    components: [
      { name: "GESTID", role: "Gesture identification — CNN-based visual recognition" },
      { name: "Gesture → task mapping", role: "Links each gesture to a JSON-defined manipulation task" },
      { name: "TAGEM", role: "Trajectory generation and execution on the 7-DoF arm" },
    ],
    pipeline: ["Human gesture", "Camera", "GESTID recognition", "Task mapping", "TAGEM trajectory", "Robot controller", "Franka Panda"],
    results: [{ value: "< 70 ms", label: "End-to-end latency reported in the paper", source: "CCPE journal paper, 2026" }],
    publicationId: "hussain2026realtime",
    links: [
      { label: "Read the paper (open access)", href: "https://doi.org/10.1002/cpe.70643" },
      { label: "Earlier ICRA@40 paper", href: "/publications/#hussain2024icra" },
    ],
    stack: ["Computer vision", "CNN", "Trajectory generation", "Forward kinematics", "Franka Emika Panda"],
    themeIds: ["hri"],
  },
  {
    slug: "multilingual-manipulation",
    number: "02",
    title: "Multilingual Language-Driven Manipulation",
    shortTitle: "Multilingual manipulation",
    maturity: "published-physical",
    venue: "IEEE ICARM 2025, Portsmouth",
    oneLiner: "English and German instructions, interpreted by an LLM, become executable robot commands for preparing a hot drink.",
    problem:
      "Domestic robots will be instructed by people who do not speak the same language — or speak it imprecisely. The study asked how well a general-purpose LLM, constrained by careful prompting, could turn free-form multilingual instructions into the exact commands a manipulator needs.",
    approach: [
      "GPT-4 interprets each English or German instruction with iterative prompt refinement and few-shot examples.",
      "The model's output is restricted to a fixed vocabulary of robot commands, so it cannot invent actions.",
      "Each command triggers a pre-taught skill on the Franka Emika Panda — gripper moves, joint motions and grasps — for steps such as fetching a cup, adding milk or sugar, and stirring.",
    ],
    pipeline: ["Instruction (EN/DE)", "LLM interpreter", "Command vocabulary", "Robot skill library", "Franka Panda"],
    results: [
      { value: "83%", label: "Overall task accuracy", source: "University of Brighton research record" },
      { value: "3%", label: "Accuracy gap between English and German inputs", source: "University of Brighton research record" },
    ],
    publicationId: "hussain2025multilingual",
    links: [
      { label: "Published paper (DOI)", href: "https://doi.org/10.1109/ICARM65671.2025.11293725" },
      { label: "Open preprint", href: "https://doi.org/10.36227/techrxiv.174803781.15522811/v1" },
      {
        label: "Research record",
        href: "https://research.brighton.ac.uk/en/publications/integration-of-multilingual-nlp-with-7-dof-robotic-manipulation-f/",
      },
      { label: "Experiment code", href: "https://github.com/sh1755/LLM_HRI" },
    ],
    stack: ["GPT-4", "Few-shot prompting", "Python", "Franka Desk tasks", "libfranka"],
    themeIds: ["language", "hri"],
  },
  {
    slug: "energy-efficient-planning",
    number: "03",
    title: "Energy-Efficient Trajectory Planning for High-DoF Robots",
    shortTitle: "Energy-efficient planning",
    maturity: "published-simulation",
    venue: "First German Robotics Conference, Nuremberg, 2025 (abstract)",
    oneLiner: "Sinusoidal trajectories with velocity scaling to reduce energy use without sacrificing smoothness or accuracy.",
    problem:
      "High-DoF arms on assembly and handling lines spend much of their energy budget on motion that could be smoother. The aim was a planning framework that treats energy, smoothness and accuracy as explicit, competing objectives.",
    approach: [
      "Trajectories are generated as sinusoidal profiles, which avoid abrupt changes in acceleration.",
      "Velocity scaling adjusts each segment to reduce energy consumption, evaluated through an energy-aware cost function.",
      "The framework is tested on a 7-DoF manipulator model with realistic kinematic and dynamic constraints in PyBullet.",
    ],
    pipeline: ["Task waypoints", "Sinusoidal profile", "Velocity scaling", "Energy-aware cost", "7-DoF arm (PyBullet)"],
    resultsNote:
      "The study reports steady cumulative energy consumption without spikes and smooth transitions in simulation. Real-time adjustment and real-robot validation are planned next.",
    limitations: "Simulation-only. Presented as a peer-reviewed conference abstract; the full text is available on arXiv.",
    publicationId: "hussain2025energy",
    links: [{ label: "Read on arXiv", href: "https://arxiv.org/abs/2503.11716" }],
    stack: ["PyBullet", "Trajectory optimisation", "Python"],
    themeIds: ["sustainable", "learning"],
  },
  {
    slug: "rl-llm-hybrid",
    number: "04",
    title: "Hybrid RL and LLM Framework for Robotic Manipulation",
    shortTitle: "RL + LLM hybrid",
    maturity: "published-simulation",
    venue: "IEEE EmergIN 2025 · published conference paper",
    oneLiner: "Language models plan the task; reinforcement-learning policies carry out the motion.",
    problem:
      "RL policies are good at precise low-level control but struggle to generalise across task descriptions; LLMs reason well about tasks but cannot control joints. The framework splits the work between them.",
    approach: [
      "An LLM interprets the natural-language task and decomposes it into sub-goals.",
      "RL policies (PPO and SAC) execute each sub-goal as low-level motion.",
      "Evaluated in PyBullet with a simulated Franka Emika Panda on pick-and-place, object sorting and dynamic obstacle avoidance.",
    ],
    pipeline: ["Task in natural language", "LLM planner", "Sub-goals", "RL policy (PPO/SAC)", "Panda in PyBullet"],
    resultsNote:
      "Compared with an RL-only baseline in simulation, the study reports shorter task completion times and higher success and adaptability. Metric definitions and trial counts are not detailed, so these numbers are not reproduced here.",
    limitations: "Simulation-based evaluation. Real-world robot validation and sim-to-real transfer remain future work.",
    publicationId: "saad2026hybrid",
    links: [
      { label: "Published paper (DOI)", href: "https://doi.org/10.1109/EMERGIN67762.2025.11450758" },
      { label: "Open preprint", href: "https://arxiv.org/abs/2603.30022" },
    ],
    stack: ["PyBullet", "PPO", "SAC", "LLM planning"],
    themeIds: ["language", "learning"],
  },
  {
    slug: "action-grammars",
    number: "05",
    title: "Physics-Grounded Action Grammars",
    shortTitle: "Action grammars",
    maturity: "active-prototype",
    venue: "Ongoing research · public prototype on GitHub",
    oneLiner: "Robot skills as typed atoms with preconditions and effects — so a failed step can be repaired locally.",
    problem:
      "When one step of a long manipulation task fails — a block knocked over, a grasp slipping — most systems replan from scratch. If each skill declared what it needs and what it produces, the robot could work out exactly which earlier steps are invalidated and redo only those.",
    approach: [
      "Each skill is an atom c = (skill, objects, pre, effect, Ω, Σ); task programmes are sequences of atoms with automatically derived dependency graphs.",
      "An executor monitors effects and performs dependency-local repair: when an effect goes stale, only the affected chain is re-executed.",
      "An evaluation harness compares local repair with full replanning under injected failures.",
      "Supporting infrastructure includes hand–eye calibration, atom tagging for teleoperated demonstrations, a PyBullet Franka scene with a ROS 2 bridge, an Isaac Lab grasp scene and an early MuJoCo scaffold for a humanoid platform.",
    ],
    pipeline: ["Task programme", "Atoms + dependency graph", "Executor", "Effect monitor", "Local repair"],
    resultsNote:
      "Current results come from a kinematic mock environment with injected failures and from PyBullet simulation. They test the grammar and executor logic, not physical manipulation, and are not reported here as research findings.",
    limitations:
      "Evolving prototype. Not yet published or physically validated; hardware scripts (calibration, Isaac Lab) are written but await full testing.",
    links: [{ label: "View repository", href: "https://github.com/sh1755/PGAG-Robotic-Manipulation" }],
    image: { src: "/images/projects/pgag-sim-stack.webp", alt: "Simulated Franka Panda stacking three coloured blocks in PyBullet" },
    stack: ["Python", "NetworkX", "PyBullet", "ROS 2", "Isaac Lab", "MuJoCo", "OpenCV"],
    themeIds: ["learning"],
  },
  {
    slug: "phd-multimodal-framework",
    number: "06",
    title: "PhD: Machine-Learning-Driven Multimodal Control for HRI",
    shortTitle: "PhD thesis",
    maturity: "milestone",
    venue: "University of Brighton · awarded June 2026",
    oneLiner: "A doctoral programme connecting perception, language and control into one framework for human–robot interaction.",
    problem:
      "People communicate with a mix of gestures, movement and words. The thesis asks how a collaborative manipulator can accept these channels together, interpret them with machine learning, and still behave predictably and safely.",
    approach: [
      "Perception: vision-based recognition of hand gestures and body pose.",
      "Language: LLM-based interpretation of spoken or written instructions, including multilingual input.",
      "Control: mapping recognised intent to trajectory generation and execution on a 7-DoF Franka Emika Panda.",
      "Evaluation on physical tasks such as pick-and-place, cleaning and beverage preparation.",
    ],
    pipeline: ["Gesture & pose", "Language", "Intent", "Task & trajectory", "7-DoF control"],
    links: [
      {
        label: "Read thesis",
        href: "https://research.brighton.ac.uk/en/studentTheses/machine-learning-driven-multimodal-control-for-human-robot-intera/",
      },
    ],
    stack: ["Computer vision", "LLMs", "ROS 2", "Franka Emika Panda"],
    themeIds: ["hri", "language"],
  },
];

export const flagshipSlugs = ["ai-rtgm", "multilingual-manipulation", "action-grammars"];
