import { Experience } from "@/app/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{experience.title}</CardTitle>

        <p className="text-sm text-muted-foreground">
          {experience.company} · {experience.startYear} - {experience.endYear}
        </p>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{experience.description}</p>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
