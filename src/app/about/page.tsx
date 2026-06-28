import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Skills } from "../data/skills";
import SkillBadge from "@/components/SkillBadge";
import PageTitle from "@/components/PageTitle";

const currently = [
  {
    label: "Working as",
    value:
      "Full stack developer at Smartvatten, building data heavy web application for customers.",
  },
  {
    label: "Learning",
    value: "Always something new, whatever is needed to get the job done.",
  },
  {
    label: "Hobbies",
    value: "Fishing, being out in the nature, building a wooden boat",
  },
];

const AboutPage = () => {
  return (
    <Section disableSeparator>
      <Container>
        <div className="max-w-2xl">
          <div className="flex items-start justify-between gap-6">
            <div>
              <PageTitle>About Me</PageTitle>
              <p className="mt-3 text-muted-foreground">
                Software developer who cares about design, practicality, and
                performance.
              </p>
            </div>
            <div className="shrink-0">
              <Image
                src="/profile.jpg"
                alt="Joonas Kopsala"
                width={88}
                height={88}
                className="rounded-full object-cover ring-2 ring-border"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Clean, readable code matters to me, the kind that makes sense to
              whoever opens the file next. I communicate directly and don't shy
              away from saying what I think, whether that's raising a concern
              early or pushing back on an approach that doesn't feel right. I
              take full ownership of the things I'm responsible for, and I'm
              always looking to improve, whatever that looks like at the time.
            </p>
            <p>
              Outside of work, I'm a father and a dog owner living in
              Haukipudas, just north of Oulu. Most of my spare time ends up
              outdoors, fishing, moving through nature, or keeping up with the
              gym. Competitive gaming used to take up more of my evenings, but
              real life has a way of rearranging priorities.
            </p>
          </div>

          <div className="mt-10">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Technologies
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {Skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Currently
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {currently.map(({ label, value }) => (
                <div key={label} className="flex gap-4">
                  <span className="w-24 shrink-0 pt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPage;
