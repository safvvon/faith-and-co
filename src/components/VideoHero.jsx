import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, ArrowRight, ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';

export default function VideoHero({
  videoList,
  currentIndex,
  onSelectVideo,
  onNextVideo,
  onPrevVideo,
  isGlobalMuted,
  toggleGlobalMute
}) {
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  const currentVideo = videoList[currentIndex];

  // Manage playback for preloaded stacked video elements
  useEffect(() => {
    setHasError(false);
    setProgress(0);

    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;
      if (idx === currentIndex) {
        videoEl.currentTime = 0;
        videoEl.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay blocked or awaiting interaction:", err);
          setIsPlaying(false);
        });
      } else {
        videoEl.pause();
      }
    });
  }, [currentIndex]);

  // Sync global mute state across all video elements
  useEffect(() => {
    videoRefs.current.forEach((videoEl) => {
      if (videoEl) {
        videoEl.muted = isGlobalMuted;
      }
    });
  }, [isGlobalMuted]);

  const handleTimeUpdate = () => {
    const activeVideoEl = videoRefs.current[currentIndex];
    if (activeVideoEl && activeVideoEl.duration) {
      const currentProgress = (activeVideoEl.currentTime / activeVideoEl.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlayPause = () => {
    const activeVideoEl = videoRefs.current[currentIndex];
    if (!activeVideoEl) return;
    if (isPlaying) {
      activeVideoEl.pause();
      setIsPlaying(false);
    } else {
      activeVideoEl.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.error("Play error:", err));
    }
  };

  const restartVideo = () => {
    const activeVideoEl = videoRefs.current[currentIndex];
    if (activeVideoEl) {
      activeVideoEl.currentTime = 0;
      activeVideoEl.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <section className="relative w-screen h-screen flex flex-col justify-between overflow-hidden bg-black select-none">
      {/* Preloaded Video Streams with Seamless Crossfade Transition (NO Black/Blank Cut) */}
      {videoList.map((v, idx) => {
        const isActive = idx === currentIndex;
        return (
          <video
            key={v.id}
            ref={(el) => (videoRefs.current[idx] = el)}
            src={v.src}
            preload="auto"
            playsInline
            muted={isGlobalMuted}
            onTimeUpdate={isActive ? handleTimeUpdate : undefined}
            onEnded={isActive ? onNextVideo : undefined}
            onError={isActive ? () => setHasError(true) : undefined}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />
        );
      })}

      {/* Video Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center text-center p-6 z-20 space-y-2">
          <p className="text-amber-300 font-mono text-sm tracking-wider uppercase">Video Source Unavailable</p>
          <p className="text-white/60 text-xs">({currentVideo.src})</p>
        </div>
      )}

      {/* Aesthetic Gradients for Maximum Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/70 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none z-20" />

      {/* Main Content Area */}
      <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between pt-24 pb-12">
        
        {/* Top Sequence Tag & Video Switcher Pill */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-mono tracking-widest uppercase shadow-lg">
              {currentVideo.tag}
            </span>
            <span className="hidden sm:inline-block text-white/50 text-xs font-mono tracking-widest uppercase">
              • SEAMLESS CONTINUOUS SEQUENCE
            </span>
          </div>

          {/* Quick Jump Buttons (Video 1, Video 2, Video 3) */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/15">
            {videoList.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => onSelectVideo(idx)}
                className={`px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-amber-300 text-black font-bold shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Video {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Center Main Copy */}
        <div className="max-w-2xl space-y-4 my-auto">
          <div className="space-y-2">
            <p className="text-amber-300 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
              {currentVideo.category} — {currentVideo.subtitle}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-montserrat font-light text-white tracking-[0.05em] leading-tight">
              {currentVideo.title}
            </h1>
          </div>

          <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-xl">
            {currentVideo.description}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 px-7 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-amber-200 transition-all transform hover:scale-[1.02] cursor-pointer shadow-xl">
              <span>{currentVideo.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs tracking-widest uppercase backdrop-blur-md transition-all cursor-pointer">
              {currentVideo.secondaryCta}
            </button>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="space-y-4 border-t border-white/15 pt-4">
          
          {/* Controls row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Playback Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onPrevVideo}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
                title="Previous Video"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlayPause}
                className="p-3 rounded-full bg-amber-300 hover:bg-amber-200 text-black shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
              </button>

              <button
                onClick={onNextVideo}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
                title="Next Video"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={restartVideo}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer ml-1"
                title="Restart Current Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={toggleGlobalMute}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
                title={isGlobalMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isGlobalMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              <span className="text-xs font-mono text-white/70 ml-2">
                0{currentIndex + 1} / 0{videoList.length}
              </span>
            </div>

            {/* Up Next Preview Trigger */}
            <button
              onClick={onNextVideo}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 backdrop-blur-md transition-all cursor-pointer text-xs font-medium tracking-wider uppercase group"
            >
              <span>Next: {videoList[(currentIndex + 1) % videoList.length].title}</span>
              <SkipForward className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Segmented Timeline Progress Bar */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {videoList.map((v, idx) => {
              let fillPercentage = 0;
              if (idx < currentIndex) {
                fillPercentage = 100;
              } else if (idx === currentIndex) {
                fillPercentage = progress;
              } else {
                fillPercentage = 0;
              }

              return (
                <div
                  key={v.id}
                  onClick={() => onSelectVideo(idx)}
                  className="group cursor-pointer py-2 flex flex-col gap-1.5"
                >
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-150 rounded-full"
                      style={{ width: `${fillPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-white/50 group-hover:text-white/80 transition-colors uppercase">
                    <span>0{idx + 1}. {v.title}</span>
                    {idx === currentIndex && <span className="text-amber-300 animate-pulse">PLAYING</span>}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
