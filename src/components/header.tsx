"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={
                        isActive
                          ? "font-bold tracking-tight"
                          : "text-muted-foreground transition-colors hover:text-foreground"
                      }
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-4 ml-4">
            <Button asChild>
              <a href="/cv.pdf" target="_blank">
                Resume
              </a>
            </Button>
          </div>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
