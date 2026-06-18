import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Cpu,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Wrench,
} from "lucide-react";

import { LocationMap } from "@/components/location-map";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Cpu,
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "AI/ML",
    icon: Briefcase,
    items: [
      "TensorFlow.js",
      "OpenCV",
      "Computer Vision",
      "Model Deployment",
      "ONNX",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Vercel", "Git", "Figma", "VS Code", "Docker"],
  },
];

const projects = [
  {
    title: "Vision Grid",
    subtitle: "Next.js · TensorFlow.js · WebRTC",
    demoUrl: "https://demo.example.com/vision-grid",
    image: "/projects/vision-grid.svg",
  },
  {
    title: "Signal Lens",
    subtitle: "React · D3.js · Python",
    demoUrl: "https://demo.example.com/signal-lens",
    image: "/projects/signal-lens.svg",
  },
  {
    title: "Anomaly Radar",
    subtitle: "Next.js · FastAPI · OpenCV",
    demoUrl: "https://demo.example.com/anomaly-radar",
    image: "/projects/anomaly-radar.svg",
  },
  {
    title: "Edge Pulse",
    subtitle: "Next.js · ONNX · WebGL",
    demoUrl: "https://demo.example.com/edge-pulse",
    image: "/projects/vision-grid.svg",
  },
];

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "SmartEdge Labs",
    period: "Jun 2025 - Aug 2025",
    highlights: [
      "Built a responsive analytics UI for ML model monitoring with Next.js.",
      "Integrated real-time inference results into dashboards using WebSockets.",
      "Reduced load time by 30% through route-level code splitting.",
    ],
  },
  {
    role: "Research Assistant",
    company: "ECE AI Lab",
    period: "Jan 2024 - May 2025",
    highlights: [
      "Prototyped computer-vision demos for human activity detection.",
      "Converted model outputs into interactive web visualizations.",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative pt-24 md:pt-28">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_90%_at_55%_6%,rgba(66,24,140,0.32),rgba(18,18,18,0)_70%),radial-gradient(ellipse_90%_80%_at_55%_55%,rgba(10,28,84,0.18),rgba(15,15,15,0)_75%)] pointer-events-none" />
      <div className="relative z-10 w-full px-4 py-6 lg:px-6 2xl:px-8">
        <main className="space-y-14">
          <header className="flex flex-col gap-4 rounded-2xl border border-border bg-panel p-6 lg:hidden">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Portfolio
              </p>
              <h1 className="mt-2 text-2xl font-semibold">Dhiya K</h1>
              <p className="mt-1 text-sm text-muted">
                Frontend Developer building AI-powered web applications
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </header>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start">
            <section id="home" className="space-y-6 scroll-mt-28">
              <Reveal>
                <div className="rounded-2xl border border-border bg-panel p-8 flex flex-col md:grid md:grid-cols-[minmax(0,1fr)_208px] md:gap-6">
                  {/* Text Content */}
                  <div className="min-w-0 flex flex-col gap-4 md:row-span-2">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                        Dhiya K
                      </h1>
                      <div className="flex gap-3 shrink-0">
                        <Button asChild>
                          <Link href="/projects">View Projects</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <a href="/resume.pdf">Download Resume</a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-lg text-muted">
                      I'm a Frontend developer and AI/ML integration enthusiast focused on building clean, responsive, and user-centric web applications. I enjoy turning complex ideas into simple interfaces, integrating machine learning features into real products, and designing experiences that are both intuitive and performant. My work combines strong UI engineering, practical problem solving, and modern web technologies to create applications that people actually enjoy using.
                    </p>
                  </div>

                  {/* Profile Image */}
                  <div className="relative w-full flex-shrink-0 overflow-hidden rounded-2xl aspect-[3/4] md:w-52 md:self-start md:row-start-1 md:col-start-2">
                    <Image
                      src="/pfp2.jpeg"
                      alt="Dhiya K"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 70vw, 208px"
                      priority
                    />
                  </div>

                  {/* Feature Blocks */}
                  <div className="grid gap-4 md:grid-cols-3 mt-8 md:col-start-1 md:col-span-2">
                    {[
                      {
                        title: "Product focus",
                        text: "I ship interfaces that explain ML results, not just render them.",
                      },
                      {
                        title: "Responsive by default",
                        text: "Every layout adapts cleanly across devices and breakpoints.",
                      },
                      {
                        title: "Engineer first",
                        text: "I balance visual polish with solid performance metrics.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-border bg-panel-muted p-5"
                      >
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-2 text-sm text-muted">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <aside className="hidden w-full max-w-[300px] flex-col gap-6 rounded-2xl border border-border bg-[#0b0b0b] p-6 xl:flex">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Let us connect</h3>
                <p className="text-sm text-muted">
                  Open to frontend internships and AI-focused web projects.
                </p>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted">Location</p>
                      <p>Bengaluru, India</p>
                    </div>
                  </div>
                  <div className="mt-3 pointer-events-auto">
                    <LocationMap />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs uppercase text-muted">Availability</p>
                    <p>Internship · Remote</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs uppercase text-muted">Email</p>
                    <p>dhiya@example.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto space-y-3">
                <a
                  href="https://github.com/yourname"
                  className="flex items-center justify-between rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-foreground"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/yourname"
                  className="flex items-center justify-between rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-foreground"
                >
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="/resume.pdf"
                  className="flex items-center justify-between rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-foreground"
                >
                  Resume
                  <FileDown className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>

          <section id="skills" className="space-y-4">
            <Reveal>
              <div className="rounded-2xl border border-border bg-panel p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Skills</h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    Stack I use
                  </span>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <group.icon className="h-4 w-4 text-accent" />
                        {group.title}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="projects" className="space-y-4">
            <Reveal>
              <div className="rounded-2xl border border-transparent bg-transparent p-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Made by
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold">Dhiya</h2>
                  </div>
                  <Link
                    href="/projects"
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    Show all
                  </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      subtitle={project.subtitle}
                      image={project.image}
                      demoUrl={project.demoUrl}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="experience" className="space-y-4">
            <Reveal>
              <div className="rounded-2xl border border-border bg-panel p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Experience</h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    Timeline
                  </span>
                </div>
                <div className="mt-6 space-y-6 border-l border-border pl-6">
                  {experiences.map((experience) => (
                    <div key={experience.role} className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold">
                          {experience.role}
                        </span>
                        <span className="text-xs text-muted">
                          {experience.company} · {experience.period}
                        </span>
                      </div>
                      <ul className="list-disc space-y-1 pl-4 text-sm text-muted">
                        {experience.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="contact" className="space-y-4">
            <Reveal>
              <div className="rounded-2xl border border-border bg-panel p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Contact</h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    Let us connect
                  </span>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-panel-muted px-4 py-3">
                    <MapPin className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted">Location</p>
                      <p className="text-sm">Bengaluru, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-panel-muted px-4 py-3">
                    <Briefcase className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted">Availability</p>
                      <p className="text-sm">Internship · Remote</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-panel-muted px-4 py-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted">Email</p>
                      <p className="text-sm">dhiya@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-panel-muted px-4 py-3">
                    <Github className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted">GitHub</p>
                      <p className="text-sm">github.com/yourname</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

      </div>
    </div>
  );
}
