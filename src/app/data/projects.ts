const Projects = [
  {
    title: "Smartvatten Hub",
    description:
      "Smartvatten Hub is a water management system, providing real-time monitoring and control of water usage, leak detection, and data analytics. Developed from the ground up as a full-stack developer within a small team.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Material UI",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Docker",
      "Kubernetes",
      "GCP",
      "Terraform",
      "GraphQL",
    ],
    link: "https://smartvatten.com/fi/kiinteistot/smartvatten-hub",
  },
  {
    title: "Linkedin to CV",
    description:
      "Browser extension that allows users to turn their Linkedin PDF export into a actually good looking CV instead of the default ugly one. My CV, which is downloadable in this page, is generated using this extension. Make sure to check it out. 😉",
    technologies: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    githubUrl: "https://github.com/joonaskopsala/linkedin-to-cv",
  },
  {
    title: "Portfolio Website",
    description:
      "It's the site you are on right now! Built to serve as my personal portfolio and showcase my skills and me professionally. Built using modern web development technologies and best practices.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/joonaskopsala/portfolio",
  },
];

type Project = (typeof Projects)[number];

export { Projects };
export type { Project };
