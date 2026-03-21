// @flow strict

'use client';

import * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

function ProjectCard({ project, isOpen, onToggle }) {
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isMediaHover, setIsMediaHover] = useState(false);
  const [isMediaPlaying, setIsMediaPlaying] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchActiveRef = useRef(false);
  const isDvt = project.name.toLowerCase().includes('dvt');
  const isRocket = project.name.toLowerCase().includes('rocket');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const posterUrlBase = project.posterUrl
    ? `${project.posterUrl}${project.posterUrl.includes('#') ? '&' : '#'}toolbar=0&navpanes=0&scrollbar=0`
    : '';
  const posterUrl = posterUrlBase ? `${posterUrlBase}${isMobile ? '&zoom=70' : ''}` : '';
  const mediaItems = useMemo(() => {
    if (project.media && project.media.length > 0) {
      return project.media.map((item) => {
        if (typeof item === 'string') {
          const isYouTube = item.includes('youtube.com') || item.includes('youtu.be');
          return isYouTube ? { type: 'embed', src: item } : { type: 'image', src: item };
        }
        if (!item?.type && item?.src) {
          const isYouTube = item.src.includes('youtube.com') || item.src.includes('youtu.be');
          return isYouTube ? { type: 'embed', src: item.src } : { type: 'image', src: item.src };
        }
        return item;
      });
    }
    const images = (project.images || []).map((src) => ({ type: 'image', src }));
    const videos = (project.videos || []).map((src) => {
      const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
      return isYouTube ? { type: 'embed', src } : { type: 'video', src };
    });
    return [...images, ...videos];
  }, [project.images, project.videos, project.media]);
  useEffect(() => {
    if (isPosterOpen) {
      const { overflow } = document.body.style;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = overflow;
      };
    }
    return undefined;
  }, [isPosterOpen]);

  useEffect(() => {
    if (!isOpen || isMediaHover || isMediaPlaying || mediaItems.length <= 1) return undefined;
    const timer = setInterval(() => {
      setMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isOpen, isMediaHover, isMediaPlaying, mediaItems.length]);

  useEffect(() => {
    if (mediaIndex >= mediaItems.length) {
      setMediaIndex(0);
    }
  }, [mediaIndex, mediaItems.length]);

  useEffect(() => {
    if (!isPosterOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPosterOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isPosterOpen]);

  useEffect(() => {
    if (!isOpen || mediaItems.length <= 1) return undefined;
    const onKeyDown = (event) => {
      const tag = event.target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || event.target?.isContentEditable) return;
      if (event.key === 'ArrowRight') {
        setMediaIndex((prev) => (prev + 1) % mediaItems.length);
      } else if (event.key === 'ArrowLeft') {
        setMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, mediaItems.length]);

  const handleTouchStart = (event) => {
    if (mediaItems.length <= 1) return;
    const touch = event.touches?.[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    touchActiveRef.current = true;
  };

  const handleTouchMove = (event) => {
    if (!touchActiveRef.current) return;
    const touch = event.touches?.[0];
    if (!touch) return;
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      event.preventDefault();
    }
  };

  const handleTouchEnd = (event) => {
    if (!touchActiveRef.current || mediaItems.length <= 1) return;
    touchActiveRef.current = false;
    const touch = event.changedTouches?.[0];
    if (!touch) return;
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) {
        setMediaIndex((prev) => (prev + 1) % mediaItems.length);
      } else {
        setMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
      }
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl border border-slate-800 bg-slate-900/95 shadow-sm transition-all duration-300 ${
        isOpen
          ? 'lg:w-[calc(100vw-3rem)] lg:max-w-[calc(100vw-3rem)] lg:mx-[calc(50%-50vw+1.5rem)] z-[60] shadow-lg'
          : 'max-w-2xl mx-auto hover:-translate-y-0.5 hover:shadow-md'
      }`}
    >
      <button
        type="button"
        className="w-full text-left cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(22,242,179,0.25)]"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className={`text-center ml-3 text-[#16f2b3] ${isOpen ? 'text-xs sm:text-base lg:text-xl' : 'text-[11px] sm:text-sm lg:text-base'} ${isOpen ? '' : 'truncate whitespace-nowrap'}`}>
            {project.name}
          </p>
        </div>
      </button>
      <div
        className={`overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 transition-all duration-300 ${isOpen ? 'max-h-[1200px] py-4 lg:py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        <div
          className={`grid grid-cols-1 ${
            isRocket ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-[1.1fr_0.9fr]'
          } gap-6 text-xs sm:text-sm md:text-base`}
        >
          <div className="flex flex-col gap-4 h-full">
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Objective</p>
              <p className="text-gray-300">{project.objective}</p>
            </div>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Key Contributions</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {project.contributions?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Technical Stack/Tools</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools?.map((tool, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-[#1b2c68a0] bg-[#0b1229] px-3 py-1 text-[10px] sm:text-xs md:text-sm text-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          <div>
            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Results and Impact</p>
            <p className="text-gray-300">{project.results}</p>
          </div>
          <div className="mt-4 flex items-center justify-start">
            {project.posterUrl && (
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wide text-white bg-slate-700/90 border border-slate-600 transition-all duration-200 hover:bg-slate-600 hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
                onClick={() => setIsPosterOpen(true)}
              >
                View Additional Details
              </button>
            )}
          </div>
        </div>
          <div className="flex flex-col gap-4">
            <div
              className={`rounded-xl border border-[#1b2c68a0] bg-[#0b1229] p-3 transition-shadow duration-300 ${
                isMediaHover ? 'shadow-[0_0_20px_rgba(22,242,179,0.2)]' : ''
              }`}
              onMouseEnter={() => setIsMediaHover(true)}
              onMouseLeave={() => setIsMediaHover(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={() => { touchActiveRef.current = false; }}
              style={{ touchAction: 'pan-y' }}
            >
              {mediaItems.length > 0 ? (
                <div className="space-y-4">
                  <div
                    className={`overflow-hidden rounded-xl border border-[#1b2c68a0] ${isDvt ? 'bg-white p-2' : 'bg-[#0b1229]'} flex items-center justify-center w-full`}
                  >
                    {mediaItems[mediaIndex]?.type === 'image' ? (
                      <img
                        src={mediaItems[mediaIndex].src}
                        alt={`${project.name} media ${mediaIndex + 1}`}
                        className="w-full h-auto object-contain rounded-lg border-2 border-[#1b2c68a0]"
                        loading="lazy"
                      />
                    ) : mediaItems[mediaIndex]?.type === 'video' ? (
                      <video
                        src={mediaItems[mediaIndex].src}
                        muted
                        controls
                        playsInline
                        onPlay={() => setIsMediaPlaying(true)}
                        onPause={() => setIsMediaPlaying(false)}
                        onEnded={() => setIsMediaPlaying(false)}
                        className="w-full h-auto bg-black rounded-lg border-2 border-[#1b2c68a0]"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-black rounded-lg border-2 border-[#1b2c68a0] overflow-hidden">
                        <iframe
                          src={mediaItems[mediaIndex].src.replace("watch?v=", "embed/") + "?mute=1"}
                          title={`${project.name} media ${mediaIndex + 1}`}
                          className="w-full h-full bg-black"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                {mediaItems.length > 1 && (
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] flex-[1.6] rounded-full bg-[#1a1443]">
                      <div
                        className="h-[2px] rounded-full bg-[#16f2b3] transition-all duration-300"
                        style={{ width: `${((mediaIndex + 1) / mediaItems.length) * 100}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-1 justify-end ml-auto">
                      {mediaItems.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setMediaIndex(index)}
                          aria-label={`Show slide ${index + 1}`}
                          className={`h-2 w-2 rounded-full border transition-all duration-200 ${
                            index === mediaIndex
                              ? 'bg-[#16f2b3] border-[#16f2b3] shadow-[0_0_10px_rgba(22,242,179,0.5)]'
                              : 'bg-transparent border-[#1b2c68a0] hover:border-[#16f2b3]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                </div>
              ) : (
                <div className="rounded-lg border border-[#1b2c68a0] bg-[#0b1229] p-6 min-h-[220px] flex items-center justify-center text-gray-500 text-sm">
                  <span>Project media placeholder</span>
                </div>
              )}
            </div>
            {project.videoUrl && (
              <div className="overflow-hidden rounded-xl border border-[#1b2c68a0] bg-[#0b1229] p-3">
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-[#1b2c68a0] bg-black">
                  <iframe
                    src={project.videoUrl.replace("watch?v=", "embed/")}
                    title={`${project.name} video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isPosterOpen && posterUrl && (
  <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm p-3 md:p-6">
          <div className="relative mx-auto h-[calc(100vh-1.5rem)] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/80 shadow-xl md:h-[calc(100vh-2rem)]">
            <button
              type="button"
              className="absolute right-6 top-3 z-10 h-10 w-10 rounded-full bg-red-400 text-[#0d1224] text-2xl font-bold leading-none transition hover:-translate-y-[1px] active:translate-y-[1px]"
              onClick={() => {
                const evt = new KeyboardEvent('keydown', { key: 'Escape' });
                window.dispatchEvent(evt);
              }}
              aria-label="Close poster"
            >
              ×
            </button>
            <button
              type="button"
              className="absolute right-0 -top-10 text-white text-sm hover:underline"
              onClick={() => setIsPosterOpen(false)}
            >
        Close
      </button>
      <button
        type="button"
        className="absolute right-0 -top-16 h-8 w-8 rounded-full border border-white/40 text-white hover:bg-white/10"
        onClick={() => setIsPosterOpen(false)}
        aria-label="Close poster"
      >
        ×
      </button>
      <div className={`w-full h-full rounded-lg border border-[#1b2c68a0] bg-white ${isMobile ? 'overflow-auto' : 'overflow-hidden'}`}>
        <iframe
          src={posterUrl}
          title={`${project.name} poster`}
          className="w-full h-full"
          style={isMobile ? { transform: 'scale(0.85)', transformOrigin: 'top left' } : undefined}
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ProjectCard;


