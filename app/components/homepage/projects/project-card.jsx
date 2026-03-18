// @flow strict

'use client';

import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

function ProjectCard({ project, isOpen, onToggle }) {
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isMediaHover, setIsMediaHover] = useState(false);
  const isDvt = project.name.toLowerCase().includes('dvt');
  const posterUrl = project.posterUrl
    ? `${project.posterUrl}${project.posterUrl.includes('#') ? '&' : '#'}toolbar=0&navpanes=0&scrollbar=0`
    : '';
  const mediaItems = useMemo(() => {
    const images = (project.images || []).map((src) => ({ type: 'image', src }));
    const videos = (project.videos || []).map((src) => {
      const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
      return isYouTube ? { type: 'embed', src } : { type: 'video', src };
    });
    return [...images, ...videos];
  }, [project.images, project.videos]);
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
    if (!isOpen || isMediaHover || mediaItems.length <= 1) return undefined;
    const timer = setInterval(() => {
      setMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isOpen, isMediaHover, mediaItems.length]);

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

  return (
    <div
      className={`from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full transition-[max-width,margin] duration-300 ${
        isOpen
          ? 'lg:w-[calc(100vw-3rem)] lg:max-w-[calc(100vw-3rem)] lg:mx-[calc(50%-50vw+1.5rem)]'
          : 'max-w-2xl mx-auto'
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
          <p className={`text-center ml-3 text-[#16f2b3] ${isOpen ? 'text-sm sm:text-base lg:text-xl' : 'text-xs sm:text-sm lg:text-base'} ${isOpen ? '' : 'truncate whitespace-nowrap'}`}>
            {project.name}
          </p>
        </div>
      </button>
      <div
        className={`overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 transition-all duration-300 ${isOpen ? 'max-h-[1200px] py-4 lg:py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 text-sm md:text-base">
          <div className="flex flex-col gap-4 h-full">
            <div>
              <p className="text-white font-semibold">Objective</p>
              <p className="text-gray-300">{project.objective}</p>
            </div>
            <div>
              <p className="text-white font-semibold">Key Contributions</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {project.contributions?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold">Technical Stack/Tools</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools?.map((tool, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-[#1b2c68a0] bg-[#0b1229] px-3 py-1 text-xs md:text-sm text-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          <div>
            <p className="text-white font-semibold">Results and Impact</p>
            <p className="text-gray-300">{project.results}</p>
          </div>
          {project.videoUrl && (
            <div className="pt-2">
              <div className="aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-xl border border-[#1b2c68a0]">
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
          <div className="mt-auto flex items-center justify-start">
            {project.posterUrl && (
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#0d1224] bg-gradient-to-b from-[#1af5b6] to-[#10c78f] shadow-[0_6px_14px_rgba(22,242,179,0.18)] ring-1 ring-[#16f2b3]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_8px_18px_rgba(22,242,179,0.22)] active:translate-y-[1px] active:shadow-none cursor-pointer"
                onClick={() => setIsPosterOpen(true)}
              >
                View Additional Details
              </button>
            )}
          </div>
        </div>
          <div
            className={`rounded-xl border border-[#1b2c68a0] bg-[#0b1229] p-4 lg:max-h-[80vh] lg:min-h-[560px] overflow-hidden transition-shadow duration-300 ${
              isMediaHover ? 'shadow-[0_0_20px_rgba(22,242,179,0.2)]' : ''
            }`}
            onMouseEnter={() => setIsMediaHover(true)}
            onMouseLeave={() => setIsMediaHover(false)}
          >
            {mediaItems.length > 0 ? (
              <div className="space-y-4">
                <div
                  className={`overflow-hidden rounded-xl border border-[#1b2c68a0] ${isDvt ? 'bg-white p-2' : 'bg-[#0b1229]'} aspect-[16/10]`}
                >
                  {mediaItems[mediaIndex]?.type === 'image' ? (
                    <img
                      src={mediaItems[mediaIndex].src}
                      alt={`${project.name} media ${mediaIndex + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : mediaItems[mediaIndex]?.type === 'video' ? (
                    <video
                      src={mediaItems[mediaIndex].src}
                      muted
                      controls
                      playsInline
                      className="w-full h-full bg-black"
                    />
                  ) : (
                    <iframe
                      src={mediaItems[mediaIndex].src.replace("watch?v=", "embed/") + "?mute=1"}
                      title={`${project.name} media ${mediaIndex + 1}`}
                      className="w-full h-full bg-black"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                {mediaItems.length > 1 && (
                  <div className="h-1 w-full rounded-full bg-[#1a1443]">
                    <div
                      className="h-1 rounded-full bg-[#16f2b3]"
                      style={{ width: `${((mediaIndex + 1) / mediaItems.length) * 100}%` }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-lg border border-[#1b2c68a0] bg-[#0b1229] p-6 min-h-[220px] flex items-center justify-center text-gray-500 text-sm">
                <span>Project media placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {isPosterOpen && posterUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 p-4">
          <div className="relative w-full h-full max-w-6xl mx-auto">
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
            <div className="w-full h-full rounded-lg overflow-hidden border border-[#1b2c68a0] bg-white">
              <iframe
                src={posterUrl}
                title={`${project.name} poster`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
