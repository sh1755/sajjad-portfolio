/**
 * Teaching content. Module *leadership* is deliberately not claimed anywhere —
 * see CONTENT_REVIEW.md before adding "Module Leader" to any entry.
 */
export const teachingPhilosophy = {
  quote:
    "I connect robotics and AI theory with programming, simulation and hands-on experimentation, helping students understand both the mathematical principles and their implementation in real systems.",
  principles: [
    {
      title: "Theory you can run",
      text: "Every equation on a slide should have a counterpart students can execute — a kinematics derivation becomes a ROS 2 node, a loss function becomes a training curve they can break and fix.",
    },
    {
      title: "Simulation before hardware",
      text: "Students build confidence in RViz, PyBullet or a dry-run mode first, then move to real equipment knowing what the robot should do and how to stop it.",
    },
    {
      title: "Feedback that moves work forward",
      text: "Assessment is most useful when it tells a student what to try next. I favour short, specific feedback on code and design decisions over generic marks.",
    },
  ],
};

export interface TeachingArea {
  title: string;
  context: string;
  level?: string;
  topics?: string[];
}

export const currentTeaching: TeachingArea[] = [
  {
    title: "Robotics, Automation and Control Engineering",
    context: "University of Brighton",
  },
  {
    title: "Machine Learning",
    context: "University of Brighton",
    level: "Level 6",
  },
  {
    title: "Introduction to Programming (CI401)",
    context: "University of Brighton",
  },
  {
    title: "Working in the Computing Industry (CI453)",
    context: "University of Brighton",
  },
  {
    title: "Enterprise Networking",
    context: "University of Brighton",
  },
  {
    title: "Cyber Security Management",
    context: "University of Brighton",
  },
];

export const pastTeaching: TeachingArea[] = [
  {
    title: "Physics, Mathematics, Engineering and Programming",
    context: "Kaplan International Pathways",
  },
  {
    title: "Mechanical Engineering",
    context: "Undergraduate teaching, India",
  },
];

export const practice = [
  { title: "Project mentoring", text: "Guiding undergraduate and postgraduate projects in robotics, computer vision and applied machine learning, from scoping to write-up." },
  { title: "Laboratory demonstrations", text: "Live demonstrations on the Franka Emika Panda and in simulation, so students see planning, control and safety behaviour in practice." },
  { title: "Practical coding exercises", text: "Short, incremental exercises in Python and ROS 2 that students extend week by week." },
  { title: "Assessment and feedback", text: "Coursework and practical assessment with written feedback focused on the next improvement." },
];

export const workshops = ["ROS 2 fundamentals", "Forward and inverse kinematics", "MoveIt 2 motion planning", "Robot simulation in RViz and PyBullet", "Python for engineers"];
