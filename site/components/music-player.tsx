"use client";

import * as React from "react";
import Image from "next/image";
import { Music, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX, X } from "lucide-react";
import { playlist } from "@/lib/playlist";

export function MusicPlayer() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(0.7);
  const [isMuted, setIsMuted] = React.useState(false);

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);

  const currentSong = playlist[currentSongIndex];

  const togglePlay = React.useCallback(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Playback failed:", err));
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleNext = React.useCallback(() => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  }, []);

  const handlePrevious = React.useCallback(() => {
    if (currentTime > 3) {
      if (audioRef.current) audioRef.current.currentTime = 0;
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
      setIsPlaying(true);
    }
  }, [currentTime]);

  // Load saved state from localStorage
  React.useEffect(() => {
    const savedVolume = localStorage.getItem("musicVolume");
    const savedSongIndex = localStorage.getItem("currentSongIndex");
    
    if (savedVolume) setVolume(parseFloat(savedVolume));
    if (savedSongIndex) setCurrentSongIndex(parseInt(savedSongIndex));
  }, []);

  // Save volume to localStorage
  React.useEffect(() => {
    localStorage.setItem("musicVolume", volume.toString());
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Save current song index
  React.useEffect(() => {
    localStorage.setItem("currentSongIndex", currentSongIndex.toString());
  }, [currentSongIndex]);

  // Update time
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex, handleNext]);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [togglePlay, handleNext, handlePrevious]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <>
      {/* Spacer */}
      {isVisible && <div className="h-19" />}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-panel/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 ${
          isPlaying ? "shadow-[0_0_20px_rgba(29,185,84,0.5)]" : ""
        }`}
        aria-label="Toggle music player"
      >
        <Music className={`h-5 w-5 ${isPlaying ? "text-accent" : "text-muted"}`} />
      </button>

      {/* Music Bar */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 h-15">
          <div className="relative h-full border-t border-white/10 bg-black/80 shadow-[0_-4px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl supports-backdrop-filter:bg-black/70">
            {/* Green glow when playing */}
            {isPlaying && (
              <div className="absolute inset-0 bg-linear-to-t from-accent/5 to-transparent opacity-50" />
            )}

            <div className="relative mx-auto flex h-full max-w-screen-2xl items-center gap-4 px-4 md:gap-6 md:px-6">
              {/* LEFT: Album Art + Song Info */}
              <div className="flex items-center gap-3 shrink-0 md:w-64 lg:w-80">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md bg-panel">
                  {currentSong.cover ? (
                    <Image
                      src={currentSong.cover}
                      alt={currentSong.title}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Music className="h-5 w-5 text-muted" />
                    </div>
                  )}
                </div>
                <div className="hidden min-w-0 sm:block">
                  <p className="truncate text-sm font-medium text-foreground">
                    {currentSong.title}
                  </p>
                  <p className="truncate text-xs text-muted">{currentSong.artist}</p>
                </div>
              </div>

              {/* CENTER: Controls */}
              <div className="flex flex-1 items-center justify-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="text-muted transition hover:text-foreground"
                  aria-label="Previous track"
                >
                  <SkipBack className="h-4 w-4" fill="currentColor" />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-background shadow-lg transition hover:scale-105 hover:bg-accent-strong"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" fill="currentColor" />
                  ) : (
                    <Play className="h-4 w-4 translate-x-[0.15rem]" fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="text-muted transition hover:text-foreground"
                  aria-label="Next track"
                >
                  <SkipForward className="h-4 w-4" fill="currentColor" />
                </button>
              </div>

              {/* RIGHT: Progress + Volume */}
              <div className="hidden items-center gap-3 md:flex md:w-64 lg:w-80">
                <span className="text-xs text-muted tabular-nums">{formatTime(currentTime)}</span>
                
                <div
                  ref={progressRef}
                  onClick={handleSeek}
                  className="group relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/10"
                >
                  <div
                    className="h-full bg-accent transition-all group-hover:bg-accent-strong"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                <span className="text-xs text-muted tabular-nums">{formatTime(duration)}</span>

                <button
                  onClick={toggleMute}
                  className="text-muted transition hover:text-foreground"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value));
                    setIsMuted(false);
                  }}
                  className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-white/10 accent-accent"
                  style={{
                    background: `linear-gradient(to right, #1db954 0%, #1db954 ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="shrink-0 text-muted transition hover:text-foreground"
                aria-label="Close player"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Top accent line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        </div>
      )}

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentSong.file}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </>
  );
}
