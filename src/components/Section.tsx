import { ReactNode } from "react";
import { Separator } from "./ui/separator";

type SectionProps = {
  children: ReactNode;
  className?: string;
  disableSeparator?: boolean;
};

const Section = ({
  children,
  className = "",
  disableSeparator,
}: SectionProps) => {
  return (
    <>
      {!disableSeparator && <Separator className="max-w-6xl" />}
      <section className={`py-16 md:py-24 ${className}`}>{children}</section>
    </>
  );
};

export default Section;
