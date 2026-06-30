import Container from "@/components/Container";
import { LinkedinIcon } from "@/components/icons/il-linkedin";
import { GithubIconIcon } from "@/components/icons/logos-github-icon";
import Section from "@/components/Section";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import settings from "@/settings.json";
import PageTitle from "@/components/PageTitle";
import OpportunitySignal from "@/components/OpportunitySignal";

const contactLinks = [
  {
    icon: <MailIcon size={18} />,
    label: "Email",
    value: "joonas.kopsala@gmail.com",
    href: "mailto:joonas.kopsala@gmail.com",
  },
  {
    icon: <LinkedinIcon size={18} className="fill-current" />,
    label: "LinkedIn",
    value: "linkedin.com/in/joonaskopsala",
    href: "https://www.linkedin.com/in/joonaskopsala/",
  },
  {
    icon: <GithubIconIcon size={18} className="fill-current" />,
    label: "GitHub",
    value: "github.com/joonaskopsala",
    href: "https://github.com/joonaskopsala",
  },
];

const ContactPage = () => {
  return (
    <Section disableSeparator>
      <Container>
        <div className="max-w-2xl">
          <PageTitle>Get in Touch</PageTitle>

          <p className="mt-3 text-muted-foreground">
            Reach out to me. Best way to do so, is via email. I also engourage
            you to connect with me on LinkedIn.
          </p>

          {settings.openForOpportunities && <OpportunitySignal />}

          <div className="mt-8 flex flex-col gap-3">
            {contactLinks.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="group flex items-center gap-4 rounded-lg border border-border px-5 py-4 transition-colors hover:border-primary/40 hover:bg-muted/50"
              >
                <span className="text-muted-foreground transition-colors group-hover:text-primary">
                  {icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {value}
                  </span>
                </div>
                <ArrowUpRightIcon
                  size={14}
                  className="ml-auto text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;
