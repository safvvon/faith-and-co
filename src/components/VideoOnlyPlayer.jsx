import React, { useRef, useEffect, useState } from 'react';

export default function VideoOnlyPlayer({ videoList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const videoRefs = useRef([]);

  // Pre-buffer all video elements on initial mount
  useEffect(() => {
    videoRefs.current.forEach((videoEl) => {
      if (videoEl) {
        videoEl.load();
      }
    });

    const activeVid = videoRefs.current[0];
    if (activeVid) {
      activeVid.currentTime = 0;
      activeVid.play().catch(() => {});
    }
  }, []);

  // When currentIndex changes, start playing the new video
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch((err) => {
        console.warn("Autoplay attempt:", err);
      });
    }
  }, [currentIndex]);

  // When the new video starts rendering live frames, switch displayedIndex and pause old video
  const handleVideoPlaying = (idx) => {
    if (idx === currentIndex && displayedIndex !== currentIndex) {
      const oldVid = videoRefs.current[displayedIndex];
      if (oldVid && oldVid !== videoRefs.current[idx]) {
        oldVid.pause();
      }
      setDisplayedIndex(idx);
    }
  };

  const handleVideoEnded = (idx) => {
    if (idx === currentIndex) {
      const nextIndex = (currentIndex + 1) % videoList.length;
      setCurrentIndex(nextIndex);
    }
  };

  const scrollToExplore = () => {
    const section = document.getElementById('explore-properties');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none transform-gpu">
      {videoList.map((v, idx) => {
        const isTarget = idx === currentIndex;
        const isDisplayed = idx === displayedIndex;
        const isVisible = isTarget || isDisplayed;

        // Target video sits on top (z-20); previous video sits underneath (z-10) until new video is playing
        const zClass = isTarget ? 'z-20' : isDisplayed ? 'z-10' : 'z-0 pointer-events-none';
        const opacityClass = isVisible ? 'opacity-100' : 'opacity-0';

        return (
          <video
            key={v.id}
            ref={(el) => (videoRefs.current[idx] = el)}
            src={v.src}
            preload="auto"
            muted
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            onPlaying={() => handleVideoPlaying(idx)}
            onTimeUpdate={() => handleVideoPlaying(idx)}
            onEnded={() => handleVideoEnded(idx)}
            style={{
              willChange: 'opacity, transform',
              backfaceVisibility: 'hidden',
              transform: 'translate3d(0, 0, 0)'
            }}
            className={`absolute inset-0 w-full h-full object-cover ${zClass} ${opacityClass}`}
          />
        );
      })}

      {/* Dark Mask Overlay (Enhanced Contrast & Depth) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-30 pointer-events-none bg-black/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-black/70 via-black/30 to-black/75"
      />


      {/* Center Hero Overlay */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none">
        <h2 className="font-montserrat text-3xl sm:text-5xl md:text-6xl tracking-[0.05em] font-light text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-5xl leading-tight transform translate-y-6 sm:translate-y-10">
          Connect with Quality Tenants
        </h2>

        {/* Grouped text directly above button */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4">
          <p className="font-montserrat text-base sm:text-xl md:text-2xl font-light text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Exceptional Homes for Every Lifestyle
          </p>
          <button 
            onClick={scrollToExplore}
            className="font-montserrat pointer-events-auto inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border border-white/80 hover:border-white bg-black/20 hover:bg-white/15 text-white text-xs sm:text-sm tracking-[0.2em] font-medium uppercase backdrop-blur-sm transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <span>Explore Properties</span>
            <span className="text-[10px] sm:text-xs">▼</span>
          </button>
        </div>
      </div>
    </div>
  );
}
