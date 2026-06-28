import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "./data/projects";
import { Experiences } from "./data/experience";
import ExperienceCard from "@/components/ExperienceCard";
import { Skills } from "./data/skills";
import settings from "@/settings.json";

const HomePage = () => {
  return (
    <>
      <Section disableSeparator>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Joonas Kopsala · Full Stack Developer
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Turning complex requirements into maintainable software.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Full stack developer with over 7 years of professional experience
              building production systems for real-world customers. I specialize
              in web technologies like React, Next.js and TypeScript, with a
              strong focus on keeping codebases maintainable as products scale.
              I work best in environments where quality and long-term thinking
              matter.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="/cv.pdf" target="_blank">
                  Download CV
                </a>
              </Button>
            </div>

            {settings.openForOpportunities ? (
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Currently open for opportunities
              </div>
            ) : null}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight">
              Featured Projects
            </h2>

            <p className="mt-3 text-muted-foreground">
              A selection of personal and professional work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {Projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Technical Expertise
            </h2>

            <p className="mt-3 text-muted-foreground">
              Technologies and tools I work with regularly.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {Skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Experience
            </h2>

            <p className="mt-3 text-muted-foreground">
              Professional background and responsibilities.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {Experiences.map((experience) => (
                <ExperienceCard
                  key={experience.company}
                  experience={experience}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Let's Build Something Great Together
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Sounds good? Let's talk.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="mailto:joonas.kopsala@gmail.com">Get In Touch</a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Details</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
