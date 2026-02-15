import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  showPresence?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function Avatar({
  src,
  alt,
  size = "md",
  showPresence = true,
  className,
}: AvatarProps) {
  return (
    <div className={cn("relative flex-shrink-0", sizeClasses[size], className)}>
      <div className="relative h-full w-full overflow-hidden rounded-full border border-accent/40 shadow-[0_0_12px_rgba(29,185,84,0.35)] ring-2 ring-accent/30">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes={size === "sm" ? "40px" : size === "md" ? "48px" : "64px"}
        />
      </div>
      {showPresence && (
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-accent" />
      )}
    </div>
  );
}
