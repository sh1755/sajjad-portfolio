/**
 * Software portfolio. Descriptions are written from each repository's README
 * and source (snapshot: 31 October 2026). `mode` makes the hardware/simulation
 * distinction explicit on every card.
 */
export type RepoMode = "physical" | "simulation" | "software" | "mixed";

export const repoModeLabel: Record<RepoMode, string> = {
  physical: "Physical robot",
  simulation: "Simulation only",
  software: "Software / AI",
  mixed: "Simulation + hardware tooling",
};

export interface Repo {
  id: string;
  name: string;
  title: string;
  url: string;
  problem: string;
  solution: string;
  tags: string[];
  mode: RepoMode;
  status: string;
  category: "robotics" | "teaching" | "ai";
  featured: boolean;
  image?: { src: string; alt: string; fit?: "cover" | "contain" };
  video?: { src: string; poster: string };
  links?: { label: string; href: string }[];
  highlights?: string[];
}

export const repos: Repo[] = [
  {
    id: "franka-bodypose",
    name: "Franka_MediaPipe_BodyPose_HandGesture_Control",
    title: "Body-Pose and Hand-Gesture Control of a Franka Panda",
    url: "https://github.com/sh1755/Franka_MediaPipe_BodyPose_HandGesture_Control",
    problem:
      "Teleoperating a collaborative arm usually needs a pendant or a joystick, and naive camera-to-joint mapping is unsafe.",
    solution:
      "MediaPipe tracks the operator's right wrist relative to the shoulder and streams small Cartesian velocity commands to MoveIt Servo, while a thumb–index pinch opens and closes the Franka Hand.",
    tags: ["ROS 2 Humble", "MoveIt Servo", "MediaPipe", "OpenCV", "Franka Hand"],
    mode: "physical",
    status: "Experimental layer on a lab-validated ROS 2 / MoveIt hardware stack",
    category: "robotics",
    featured: true,
    video: { src: "/video/franka-bodypose-demo.mp4", poster: "/images/projects/franka-bodypose-poster.jpg" },
    highlights: [
      "Calibration of a neutral pose before any motion is allowed",
      "Left-hand dead-man gesture: lowering the hand commands zero velocity immediately",
      "Speed capped at 0.03 m/s by default, with a deadband against tracking noise",
      "MoveIt Servo handles collision checking, joint limits and singularities",
      "Dry-run mode that sends no robot commands",
    ],
  },
  {
    id: "pgag",
    name: "PGAG-Robotic-Manipulation",
    title: "Physics-Grounded Action Grammars",
    url: "https://github.com/sh1755/PGAG-Robotic-Manipulation",
    problem: "Long-horizon manipulation fails part-way, and full replanning throws away work that is still valid.",
    solution:
      "Skills are typed atoms with preconditions and effects; an executor uses the dependency graph to repair only what a failure invalidated. Includes an evaluation harness, calibration tools and simulation scenes.",
    tags: ["Python", "PyBullet", "ROS 2", "Isaac Lab", "MuJoCo", "pytest"],
    mode: "mixed",
    status: "Active research prototype",
    category: "robotics",
    featured: true,
    image: { src: "/images/projects/pgag-sim-grasp.webp", alt: "Simulated Franka Panda reaching for a red cube in PyBullet", fit: "cover" },
    links: [{ label: "Case study", href: "/research/action-grammars/" }],
  },
  {
    id: "llm-hri",
    name: "LLM_HRI",
    title: "LLM Human–Robot Interaction Experiments",
    url: "https://github.com/sh1755/LLM_HRI",
    problem: "An LLM must never send a robot an action it cannot perform.",
    solution:
      "Experiment code behind the ICARM 2025 study: a GPT-4 prompt returns only whitelisted commands, which trigger pre-taught Franka tasks for coffee and tea preparation (cup, milk, sugar, stir).",
    tags: ["Python", "GPT-4", "Franka Desk", "libfranka"],
    mode: "physical",
    status: "Research code accompanying a published study",
    category: "robotics",
    featured: true,
    links: [{ label: "Case study", href: "/research/multilingual-manipulation/" }],
  },
  {
    id: "ros2-pick-place",
    name: "ROS2-Panda-Pick-and-Place",
    title: "ROS 2 Panda Pick-and-Place with MoveIt 2",
    url: "https://github.com/sh1755/ROS2-Panda-Pick-and-Place",
    problem: "Students need a complete, readable example of motion planning, planning scenes and gripper control.",
    solution:
      "A teaching package that adds a table and cube to the MoveIt planning scene, plans pose-constrained motions, commands the gripper and attaches the object through a full pick-and-place sequence in RViz.",
    tags: ["ROS 2 Humble", "MoveIt 2", "RViz 2", "Python", "ament_python"],
    mode: "simulation",
    status: "Teaching resource",
    category: "teaching",
    featured: true,
    image: {
      src: "/images/projects/ros2-pick-place-rviz.webp",
      alt: "Franka Panda over a green table in RViz during a MoveIt 2 pick-and-place exercise",
      fit: "cover",
    },
  },
  {
    id: "ros2-kinematics",
    name: "ROS2-Forward-Inverse-Kinematics-repository",
    title: "ROS 2 Forward & Inverse Kinematics for a 7-DoF Arm",
    url: "https://github.com/sh1755/ROS2-Forward-Inverse-Kinematics-repository",
    problem: "FK and IK are usually taught on paper; students rarely see a redundant arm respond to their own maths.",
    solution:
      "FK by chained transforms and damped-least-squares Jacobian IK, published as joint states and animated in RViz 2 through approach, grasp, lift, transfer and place stages.",
    tags: ["ROS 2 Humble", "Python", "NumPy", "RViz 2", "TF"],
    mode: "simulation",
    status: "Teaching resource",
    category: "teaching",
    featured: true,
  },
  {
    id: "constructrag",
    name: "constructrag-ai",
    title: "ConstructRAG AI",
    url: "https://github.com/sh1755/constructrag-ai",
    problem: "Comparing construction products across suppliers means searching unstructured catalogues and data sheets.",
    solution:
      "A retrieval-augmented generation pipeline — HuggingFace embeddings, a FAISS index and a local Ollama LLM — behind a Streamlit interface for semantic search, supplier comparison and recommendations.",
    tags: ["LangChain", "FAISS", "HuggingFace", "Ollama", "Streamlit"],
    mode: "software",
    status: "Applied AI project",
    category: "ai",
    featured: false,
    image: {
      src: "/images/projects/constructrag-architecture.webp",
      alt: "ConstructRAG AI system architecture diagram",
      fit: "contain",
    },
  },
  {
    id: "constructagent",
    name: "constructagent-nlp",
    title: "ConstructAgent NLP",
    url: "https://github.com/sh1755/constructagent-nlp",
    problem: "Natural-language product queries mix intent, constraints and entities that keyword search misses.",
    solution:
      "An NLP pipeline for intent detection and entity extraction feeds sentence-transformer retrieval over FAISS and an agentic step that ranks products with explanations.",
    tags: ["Sentence Transformers", "FAISS", "NLP", "Agentic AI", "Streamlit"],
    mode: "software",
    status: "Applied AI project",
    category: "ai",
    featured: false,
    image: {
      src: "/images/projects/constructagent-architecture.webp",
      alt: "ConstructAgent NLP pipeline diagram",
      fit: "contain",
    },
  },
];
