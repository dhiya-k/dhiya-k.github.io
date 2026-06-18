"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import { Header } from "@/components/header";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen text-foreground relative pt-24 md:pt-28">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_90%_at_55%_6%,rgba(66,24,140,0.32),rgba(18,18,18,0)_70%),radial-gradient(ellipse_90%_80%_at_55%_55%,rgba(10,28,84,0.18),rgba(15,15,15,0)_75%)] pointer-events-none" />

      <div className="absolute left-4 top-4 z-40 lg:left-6">
        <Avatar
          src="/pfp2.jpeg"
          alt="Dhiya K"
          size="lg"
          showPresence
          imageClassName="object-[50%_20%]"
        />
      </div>

      <Header />

      <div className="relative z-10 w-full px-4 py-6 lg:px-6 2xl:px-8">
        <main className="mx-auto max-w-6xl space-y-12">
          {/* Page Header */}
          <section className="space-y-3">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Portfolio
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                  Projects
                </h1>
                <p className="mt-3 text-lg text-muted">
                  Selected work and experiments
                </p>
              </div>
            </Reveal>
          </section>

          {/* Projects Grid */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.05}>
                  <div className="group flex flex-col rounded-2xl border border-border bg-panel hover:border-accent/50 transition-all duration-300 overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative h-40 w-full overflow-hidden bg-panel-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col gap-4 p-5">
                      {/* Title */}
                      <h3 className="text-lg font-semibold leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <div className="flex-1">
                        <p
                          className={`text-sm text-muted transition-all duration-300 ${
                            expandedId === project.id
                              ? "line-clamp-none"
                              : "line-clamp-3"
                          }`}
                        >
                          {project.description}
                        </p>
                        {project.description.split(" ").length > 30 && (
                          <button
                            onClick={() =>
                              setExpandedId(
                                expandedId === project.id ? null : project.id
                              )
                            }
                            className="mt-2 text-xs font-semibold text-accent hover:text-accent-strong transition-colors"
                          >
                            {expandedId === project.id
                              ? "Show less"
                              : "Read more"}
                          </button>
                        )}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button asChild className="flex-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                        {project.githubUrl && (
                          <Button asChild variant="outline" className="flex-1">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2"
                            >
                              <Github className="h-3.5 w-3.5" />
                              <span>Code</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Back Link */}
          <Reveal>
            <div className="flex justify-center pt-6">
              <Link
                href="#home"
                className="rounded-full border border-border px-6 py-2 text-sm text-muted transition hover:border-accent hover:text-foreground"
              >
                Back to home
              </Link>
            </div>
          </Reveal>
        </main>
      </div>
    </div>
  );
}
