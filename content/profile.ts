export const profile = {
  name: "Dr Sajjad Hussain",
  role: "Lecturer in Robotics, Automation and Control Engineering",
  institution: "University of Brighton",
  school: "School of Architecture, Technology and Engineering",
  location: "Brighton, United Kingdom",
  portrait: {
    src: "/images/profile/portrait.jpg",
    alt: "Portrait of Dr Sajjad Hussain",
    // Replace with a higher-resolution LinkedIn photo at the same path when available.
  },
  tagline: "Building robots that understand people.",
  intro:
    "I am a Lecturer and Robotics & AI Researcher at the University of Brighton. My work explores how robotic systems can perceive human gestures, understand natural language, plan actions and interact safely with the physical world.",
  researchStatement:
    "My research sits where human perception meets robot control. I build systems that turn what people do and say — a hand gesture, a body movement, a spoken instruction in English or German — into safe, executable motion on a 7-DoF Franka Emika Panda. The work combines learned perception, language models and classical robotics: kinematics, trajectory generation, motion planning and compliant control.",
  bio: [
    "I am a Lecturer in Robotics, Automation and Control Engineering at the University of Brighton, where I completed my PhD on machine-learning-driven multimodal control for human–robot interaction (awarded June 2026). I am a member of the university's AI Robotics (AIR) Lab.",
    "My path into robotics started in mechanical engineering. A machine-design master's at Jamia Millia Islamia led to early work on modelling multi-finger robotic grippers, and a period as a simulation engineer at Bosch Global Software Technologies gave me an industrial grounding in finite-element modelling and vibration analysis before I moved to Brighton for doctoral research.",
    "Today my work connects perception, language and control: gesture-driven manipulation, multilingual language-to-action pipelines, energy-aware trajectory planning and, more recently, structured action grammars for recoverable robot skills. Alongside research, I teach programming, machine learning and robotics, and I try to make each module as hands-on as the lab itself.",
  ],
  interests: [
    "Human–robot interaction",
    "Multimodal learning",
    "Embodied AI",
    "Vision–language–action models",
    "Robot manipulation",
    "Intelligent control",
  ],
};

export const education = [
  {
    degree: "PhD, Robotics and Artificial Intelligence",
    institution: "University of Brighton",
    period: "2023 – 2026",
    detail:
      "Thesis: Machine Learning Driven Multimodal Control for Human-Robot Interaction. Awarded June 2026.",
  },
  {
    degree: "M.Tech, Mechanical Engineering (Machine Design)",
    institution: "Jamia Millia Islamia, New Delhi",
    period: "2019 – 2021",
    detail: "Kinematic, force and dynamic modelling of a tendon-driven four-finger robotic gripper.",
  },
  {
    degree: "B.Tech, Mechanical Engineering",
    institution: "Dr A.P.J. Abdul Kalam Technical University",
    period: "2015 – 2019",
    detail: null,
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Robotics",
    items: ["ROS 2", "MoveIt 2", "MoveIt Servo", "Franka Emika Panda", "libfranka", "Robot kinematics", "Motion planning", "Manipulation"],
  },
  {
    group: "AI & learning",
    items: ["PyTorch", "TensorFlow", "CNNs", "Reinforcement learning", "LLMs", "VLMs", "Retrieval-augmented generation"],
  },
  { group: "Computer vision", items: ["OpenCV", "MediaPipe", "Hand & body-pose tracking", "Depth sensing"] },
  { group: "Simulation", items: ["PyBullet", "MuJoCo", "NVIDIA Isaac Sim / Isaac Lab", "RViz 2"] },
  { group: "Programming", items: ["Python", "C++", "MATLAB"] },
];
