const Skills = [
  {
    name: "JavaScript",
    resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "TypeScript", resource: "https://www.typescriptlang.org/" },
  { name: "React", resource: "https://reactjs.org/" },
  { name: "Next.js", resource: "https://nextjs.org/" },
  { name: "Node.js", resource: "https://nodejs.org/" },
  { name: "Python", resource: "https://www.python.org/" },
  { name: "SQL", resource: "https://en.wikipedia.org/wiki/SQL" },
  { name: "Docker", resource: "https://www.docker.com/" },
  { name: "MongoDB", resource: "https://www.mongodb.com/" },
  { name: "Go", resource: "https://golang.org/" },
  { name: "DevOps", resource: "https://en.wikipedia.org/wiki/DevOps" },
  { name: "Kubernetes", resource: "https://kubernetes.io/" },
  { name: "Terraform", resource: "https://www.terraform.io/" },
  { name: "GraphQL", resource: "https://graphql.org/" },
  { name: "GCP", resource: "https://cloud.google.com/" },
  { name: "REST", resource: "https://en.wikipedia.org/wiki/REST" },
  { name: "Material UI", resource: "https://mui.com/" },
];

type Skill = (typeof Skills)[number];

export { Skills };
export type { Skill };
