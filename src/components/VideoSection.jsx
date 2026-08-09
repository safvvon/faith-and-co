import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronDown, RotateCcw, ArrowRight } from 'lucide-react';

export default function VideoSection({
  video,
  index,
  totalCount,
  isGlobalMuted,
  toggleGlobalMute,
  onScrollNext,
  onVideoEnd
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  // IntersectionObserver to auto-play when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch((err) => {
              console.warn("Autoplay blocked or waiting for interaction:", err);
              setIsPlaying(false);
            });
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.6 } // 60% of section must be visible to trigger
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Sync mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isGlobalMuted;
    }
  }, [isGlobalMuted]);

  // Handle video progress update
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.error("Play error:", err));
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <section
      id={`video-${video.id}`}
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-screen h-screen scroll-section flex items-center justify-center overflow-hidden bg-black select-none"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video.src}
        playsInline
        muted={isGlobalMuted}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onVideoEnd}
        onError={() => setHasError(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Fallback overlay if error */}
      {hasError && (
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-center p-6 z-10">
          <p className="text-white/70 text-sm">Video content unavailable ({video.src})</p>
        </div>
      )}

      {/* Gradient Overlays for optimal text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between pt-24 pb-16">
        
        {/* Top Tag & Category */}
        <div className="flex justify-between items-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-200 text-xs font-mono tracking-widest uppercase">
            <span>{video.tag}</span>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs font-montserrat font-light tracking-[0.3em] uppercase text-white/60">
              FAITH &amp; CO ARCHIVE
            </span>
          </div>
        </div>

        {/* Center / Lower Main Typography */}
        <div className="max-w-2xl space-y-4 my-auto">
          <div className="space-y-1">
            <p className="text-amber-300 text-sm font-semibold tracking-widest uppercase">
              {video.category} — {video.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-light text-white tracking-[0.05em] leading-tight">
              {video.title}
            </h1>
          </div>

          <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-xl">
            {video.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 px-7 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-amber-200 transition-all transform hover:scale-[1.02] cursor-pointer shadow-lg">
              <span>{video.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs tracking-widest uppercase backdrop-blur-md transition-all cursor-pointer">
              {video.secondaryCta}
            </button>
          </div>
        </div>

        {/* Bottom Bar: Video controls & Progress */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/15 pt-4 backdrop-blur-xs">
          
          {/* Quick Play Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlayPause}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
            </button>

            <button
              onClick={restartVideo}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
              title="Restart Video"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={toggleGlobalMute}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
              title={isGlobalMuted ? "Unmute" : "Mute"}
            >
              {isGlobalMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            <span className="text-xs font-mono text-white/60 ml-2">
              {index + 1} / {totalCount}
            </span>
          </div>

          {/* Scroll Down Next Indicator */}
          {index < totalCount - 1 && (
            <button
              onClick={onScrollNext}
              className="flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-widest uppercase transition-colors cursor-pointer animate-pulse-subtle"
            >
              <span>Next Scene</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar along bottom of each section */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
