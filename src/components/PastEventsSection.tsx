"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { pastEvents, type PastEvent } from "@/lib/data";

export default function PastEventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check scroll position to manage manual arrow states
  const updateScrollState = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const handleScroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth > 768 ? 360 : container.clientWidth * 0.85;
      
      if (direction === "right") {
        const isNearEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 15;
        if (isNearEnd) {
          // Loop smoothly back to beginning
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  }, []);

  // Listen to manual scrolling
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      updateScrollState();
      el.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState);
      return () => {
        el.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, [updateScrollState]);

  // Auto-scroll mechanism (every 3.8s) when not hovered/paused
  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      handleScroll("right");
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, handleScroll]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="group/carousel bg-[#FFFFFF] py-14 sm:py-16 md:py-24 border-b border-[#EDEDED] relative overflow-hidden"
      aria-label="Dokumentasi & Berita Kegiatan"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => {
        setIsPaused(true);
        if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
      }}
      onTouchEnd={() => {
        if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = setTimeout(() => setIsPaused(false), 3500);
      }}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        {/* Section Header with Status & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-full bg-[#EFF6FF] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#1D4ED8]">
                Kilas Balik & Berita
              </span>
              {/* Subtle Auto-scroll pulse indicator */}
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-[500] transition-colors ${
                  isPaused ? "bg-[#F2F2F2] text-[#707070]" : "bg-emerald-50 text-emerald-700"
                }`}
                title={isPaused ? "Auto-scroll dihentikan sementara (hover aktif)" : "Auto-scroll aktif otomatis"}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isPaused ? "bg-[#ADADAD]" : "bg-emerald-500 animate-pulse"
                  }`}
                />
                <span className="hidden sm:inline">
                  {isPaused ? "Dijeda" : "Auto-scroll"}
                </span>
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
              Kegiatan yang Telah Berlangsung
            </h2>
            <p className="mt-2 text-[14px] sm:text-[16px] text-[#707070] leading-[1.6]">
              Dokumentasi dan kilas balik momen persekutuan, bazar, serta pelayanan pemuda PPG POUK Wasuponda.
            </p>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Geser kegiatan ke kiri"
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#EDEDED] bg-[#FAFAFA] text-[#141414] shadow-xs transition-all duration-300 ${
                canScrollLeft
                  ? "hover:bg-[#141414] hover:text-white cursor-pointer active:scale-95"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Geser kegiatan ke kanan"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EDEDED] bg-[#FAFAFA] text-[#141414] shadow-xs transition-all duration-300 hover:bg-[#141414] hover:text-white cursor-pointer active:scale-95"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel:
            - Mobile-first: 1 portrait card visible with 18% peek for visual affordance
            - Desktop: 3 portrait cards visible side-by-side
            - Smooth touch snap & auto-scroll pausing on hover/touch
        */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-5 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {pastEvents.map((item) => (
            <article
              key={item.id}
              className="group snap-start shrink-0 w-[84vw] sm:w-[320px] lg:w-[calc((100%-48px)/3)] flex flex-col justify-between rounded-[22px] border border-[#EDEDED] bg-[#FAFAFA] hover:bg-white p-3.5 sm:p-4 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/25 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
            >
              <div>
                {/* Portrait Poster / Photo Container (Aspect 3:4 / Portrait Ratio) */}
                <div
                  onClick={() => setSelectedEvent(item)}
                  className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] bg-[#EAEAEA] cursor-pointer"
                  title="Klik untuk melihat poster penuh"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 320px, 400px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Shadow for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Top-Left: Category Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-[600] bg-white/95 text-[#141414] shadow-sm backdrop-blur-xs border border-black/5">
                      {item.tag}
                    </span>
                  </div>

                  {/* Top-Right: Status Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-[500] text-white shadow-sm backdrop-blur-md border border-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Bottom Hover Clue / Overlay */}
                  <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between text-white text-[12px] font-[500]">
                    <span className="rounded-lg bg-black/50 px-2.5 py-1 backdrop-blur-xs">
                      {item.dateFull}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-md opacity-80 group-hover:opacity-100 group-hover:scale-110 transition">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M15 3h6v6" />
                        <path d="M10 14L21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-4 px-1">
                  {item.subtitle && (
                    <p className="text-[12px] font-[600] text-[#1D4ED8] line-clamp-1 mb-1">
                      {item.subtitle}
                    </p>
                  )}

                  <h3
                    onClick={() => setSelectedEvent(item)}
                    className="text-[18px] sm:text-[19px] font-[650] text-[#141414] leading-[1.3] line-clamp-2 min-h-[48px] group-hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  {/* Metadata Rows: Tempat & Waktu */}
                  <div className="mt-3.5 space-y-1.5 border-t border-[#EDEDED] pt-3 text-[13px] text-[#707070]">
                    {/* Waktu */}
                    <p className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-[#9E9E9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="truncate">{item.dateFull} · {item.time}</span>
                    </p>

                    {/* Tempat */}
                    <p className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-[#9E9E9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="truncate">{item.place}</span>
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-[13px] text-[#707070] leading-[1.55] line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 px-1 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(item)}
                  className="group/btn flex h-[44px] w-full items-center justify-center rounded-full bg-[#141414] hover:bg-[#2c2c2c] text-white text-[13px] font-[600] transition-all duration-200 active:scale-[0.98] shadow-xs cursor-pointer"
                >
                  <span>Lihat Dokumentasi & Detail</span>
                  <svg
                    className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Indicators & Arrow Controls */}
        <div className="flex sm:hidden items-center justify-between mt-4 px-1">
          <p className="text-[12px] text-[#9E9E9E]">
            ← Geser atau sentuh untuk melihat dokumentasi →
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Geser ke kiri"
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#EDEDED] bg-white text-[#141414] shadow-xs active:scale-95 transition cursor-pointer ${
                canScrollLeft ? "opacity-100" : "opacity-30 cursor-not-allowed"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Geser ke kanan"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EDEDED] bg-white text-[#141414] shadow-xs active:scale-95 transition cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Detail / Lightbox Modal */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white p-5 sm:p-7 shadow-2xl text-[#141414]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Tutup detail acara"
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#EDEDED] text-[#141414] transition cursor-pointer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Full Portrait Poster Preview */}
              <div className="sm:col-span-5 relative aspect-[9/16] w-full max-w-[280px] mx-auto overflow-hidden rounded-[18px] border border-[#EDEDED] bg-[#FAFAFA] shadow-sm">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-contain"
                />
              </div>

              {/* Event Information */}
              <div className="sm:col-span-7 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-[600] bg-[#EFF6FF] text-[#1D4ED8]">
                      {selectedEvent.tag}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-[500] bg-emerald-50 text-emerald-700">
                      {selectedEvent.badge}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-[700] text-[#141414] leading-[1.25]">
                    {selectedEvent.title}
                  </h3>
                  {selectedEvent.subtitle && (
                    <p className="mt-1 text-[13px] font-[600] text-[#707070]">
                      {selectedEvent.subtitle}
                    </p>
                  )}
                </div>

                {/* Date & Location Box */}
                <div className="rounded-[16px] bg-[#FAFAFA] border border-[#EDEDED] p-3.5 space-y-2 text-[13px] text-[#707070]">
                  <p className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-[#141414]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="font-[600] text-[#141414]">{selectedEvent.dateFull}</span> · {selectedEvent.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-[#141414]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{selectedEvent.place}</span>
                  </p>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-1">
                    Tentang Acara
                  </h4>
                  <p className="text-[14px] text-[#141414] leading-[1.6]">
                    {selectedEvent.summary}
                  </p>
                </div>

                {/* Contact Persons if available */}
                {selectedEvent.contacts && selectedEvent.contacts.length > 0 && (
                  <div className="pt-2 border-t border-[#EDEDED]">
                    <h4 className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-2">
                      Narahubung (Contact Person)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.contacts.map((c) => (
                        <a
                          key={c.phone}
                          href={`https://wa.me/62${c.phone.replace(/^0/, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#EDEDED] bg-[#FAFAFA] hover:bg-[#EDEDED] px-3.5 py-1.5 text-[12px] font-[600] text-[#141414] transition"
                        >
                          <span>{c.name}: {c.phone}</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Close Button at bottom */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="w-full flex h-[44px] items-center justify-center rounded-full bg-[#141414] hover:bg-[#2c2c2c] text-white text-[13px] font-[600] transition active:scale-[0.98]"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
