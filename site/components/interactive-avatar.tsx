"use client";

import * as React from "react";
import confetti from "canvas-confetti";
import { Avatar } from "@/components/ui/avatar";

interface InteractiveAvatarProps {
  size?: "sm" | "md" | "lg";
  showPresence?: boolean;
  imageClassName?: string;
  className?: string;
}

const avatarImages = [
  "/pfp2.jpeg",
  "/cat1.jpg",
  "/cat2.jpg",
  "/cat3.jpg",
  "/cat4.jpg",
];

export function InteractiveAvatar({
  size = "lg",
  showPresence = true,
  imageClassName,
  className,
}: InteractiveAvatarProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const avatarRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Toggle image
    setCurrentIndex((prev) => (prev + 1) % avatarImages.length);

    // Trigger confetti
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
        colors: ["#1db954", "#1ed760", "#22c55e", "#4ade80"],
        gravity: 1.2,
        scalar: 0.8,
        ticks: 100,
        startVelocity: 20,
      });
    }

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div
      ref={avatarRef}
      onClick={handleClick}
      className={`cursor-pointer transition-transform active:scale-90 ${className}`}
      style={{
        transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="transition-opacity duration-300"
        style={{
          opacity: isAnimating ? 0.7 : 1,
        }}
      >
        <Avatar
          src={avatarImages[currentIndex]}
          alt="Dhiya K"
          size={size}
          showPresence={showPresence}
          imageClassName={imageClassName}
        />
      </div>
    </div>
  );
}
