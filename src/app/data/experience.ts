const Experiences = [
  {
    title: "Software Developer",
    company: "Smartvatten",
    startYear: "2022",
    endYear: "Present",
    description:
      "Full-stack developer on a production Next.js application serving external customers, from early development through to delivery and ongoing maintenance. Built data-heavy features including visualisation, reporting, and exports, with a focus on scalability, performance, and UX. Worked primarily in TypeScript, with involvement in cloud infrastructure using Kubernetes, GCP, and Terraform.",
  },
  {
    title: "Software Developer",
    company: "Identoi",
    startYear: "2019",
    endYear: "2022",
    description:
      "Developed and maintained a customer-facing REST API for product data and media delivery, building backend services in JavaScript and Node.js.",
  },
];

type Experience = (typeof Experiences)[number];

export { Experiences };
export type { Experience };
