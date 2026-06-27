import { ReactNode } from "react";
import Section from "./Section";
import Container from "./Container";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  );
};

export default Page;
