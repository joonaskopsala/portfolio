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
    link: {
      url: "https://smartvatten.com/fi/kiinteistot/smartvatten-hub",
      text: "More information",
    },
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
  {
    title: "Dota 2 Fearless Mode Ban tool",
    description:
      "A simple but functional tool for banning heroes across games in series in Dota 2's Fearless Mode. It's meant to be used as a stream overlay for tournaments.",
    technologies: ["TypeScript", "React", "Next.js", "Material UI"],
    githubUrl: "https://github.com/joonaskopsala/dota2-fearless",
    link: {
      url: "https://dota2-fearless.vercel.app/",
      text: "Try it out!",
    },
  },
];

type Project = (typeof Projects)[number];

export { Projects };
export type { Project };
