import { Skill } from "@/app/data/skills";
import { Badge } from "./ui/badge";
import Link from "next/link";

const SkillBadge = ({ skill }: { skill: Skill }) => {
  return (
    <Link href={skill.resource} target="_blank" rel="noopener noreferrer">
      <Badge
        variant="secondary"
        className="transition-transform hover:scale-130 cursor-pointer"
      >
        {skill.name}
      </Badge>
    </Link>
  );
};

export default SkillBadge;
