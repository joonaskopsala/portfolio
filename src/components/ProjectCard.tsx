import { Project } from "@/app/data/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { GithubIconIcon } from "./icons/logos-github-icon";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </CardContent>

      {project.githubUrl && (
        <CardFooter>
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIconIcon size={16} className="mr-2 fill-current" />
              View on GitHub
            </a>
          </Button>
        </CardFooter>
      )}
      {project.link && (
        <CardFooter>
          <Button variant="outline" size="sm" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              More information
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
