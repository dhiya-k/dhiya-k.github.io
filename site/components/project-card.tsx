"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  demoUrl: string;
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  image,
  demoUrl,
  className,
}: ProjectCardProps) {
  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-xl bg-panel/90 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:bg-panel-muted hover:shadow-[0_16px_32px_rgba(0,0,0,0.45)]",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${title} thumbnail`}
          width={360}
          height={360}
          className="aspect-square w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 md:group-hover:bg-black/40" />
        <motion.a
          href={demoUrl}
          className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-black shadow-lg transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0"
          aria-label={`View ${title} live demo`}
          initial={false}
          whileHover={{ scale: 1.05 }}
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.a>
      </div>
      <div className="mt-4 min-h-[3.5rem] space-y-1">
        <h3 className="text-base font-semibold text-foreground line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {subtitle}
        </p>
      </div>
    </motion.article>
  );
}
