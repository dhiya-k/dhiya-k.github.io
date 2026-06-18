"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;

    const updateScrolledState = () => {
      const nextScrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (!menuOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-[width] duration-300 ease-out",
        isScrolled ? "w-[min(88vw,900px)]" : "w-[min(92vw,980px)]",
        isScrolled && "scrolled"
      )}
    >
      <div
        className={cn(
          "rounded-full border border-white/10",
          "transition-all duration-300 ease-out",
          isScrolled
            ? "bg-black/78 shadow-[0_16px_44px_rgba(0,0,0,0.42)] backdrop-blur-xl supports-backdrop-filter:bg-black/68"
            : "bg-black/70 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl supports-backdrop-filter:bg-black/55"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-3 px-4 md:px-6",
            "transition-all duration-300 ease-out",
            isScrolled ? "py-2" : "py-3"
          )}
        >
          <Link
            href="#home"
            className="text-sm font-semibold tracking-wide text-foreground"
          >
            Dhiya K
          </Link>

          <nav className="hidden items-center gap-4 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild size="sm">
              <a href="/resume.pdf">Resume</a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-foreground transition hover:bg-white/10 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            Menu
            <span className="text-[10px]">{menuOpen ? "Close" : "Open"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/70",
          "shadow-[0_18px_45px_rgba(0,0,0,0.35)]",
          "backdrop-blur-xl supports-backdrop-filter:bg-black/55",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          "transition-all duration-200 md:hidden"
        )}
      >
        <div className="flex flex-col gap-2 px-4 py-4 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-muted transition hover:bg-white/10 hover:text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="/resume.pdf">Resume</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
