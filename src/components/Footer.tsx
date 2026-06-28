import Link from "next/link";
import Container from "./Container";
import { GithubIconIcon } from "./icons/logos-github-icon";
import { LinkedinIcon } from "./icons/il-linkedin";
import { MailOutlinedIcon } from "./icons/ant-design-mail-outlined";

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 text-sm items-center">
              <div className="flex flex-row gap-1 items-center">
                <MailOutlinedIcon size={15} className="fill-current" />
                <Link
                  href="mailto:joonas.kopsala@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Email
                </Link>
              </div>

              <div className="flex flex-row gap-1 items-center">
                <GithubIconIcon size={15} className="fill-current" />
                <Link
                  href="https://github.com/joonaskopsala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </Link>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <LinkedinIcon size={15} className="fill-current" />
                <Link
                  href="https://linkedin.com/in/joonaskopsala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Joonas Kopsala. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
