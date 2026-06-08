"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  images: { url: string; alt: string }[];
  currentIndex?: number;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export function ImageModal({ isOpen, images, currentIndex = 0, onClose, onNavigate }: ImageModalProps) {
  const [index, setIndex] = useState(currentIndex);

  // Update index when currentIndex prop changes
  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const goToNext = () => {
    const nextIndex = (index + 1) % images.length;
    setIndex(nextIndex);
    onNavigate?.(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (index - 1 + images.length) % images.length;
    setIndex(prevIndex);
    onNavigate?.(prevIndex);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleArrows = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleArrows);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrows);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, index]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[index];

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-muted hover:text-text transition-colors z-10"
          aria-label="Close modal"
          suppressHydrationWarning
        >
          <X size={24} />
        </button>

        {/* Image container */}
        <div className="relative bg-surface rounded-xl overflow-hidden">
          <img
            key={index}
            src={currentImage.url}
            alt={currentImage.alt}
            className="w-full h-auto object-contain animate-in fade-in duration-300"
          />

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              {/* Previous button */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
                suppressHydrationWarning
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
                aria-label="Next image"
                suppressHydrationWarning
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Image counter and info */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-muted text-sm">{currentImage.alt}</p>
          {images.length > 1 && (
            <span className="text-muted text-xs font-mono bg-accent/10 px-3 py-1 rounded-lg">
              {index + 1} / {images.length}
            </span>
          )}
        </div>

        {/* Keyboard hint */}
        <p className="text-muted/60 text-xs text-center mt-2">
          {images.length > 1 ? "Use arrow keys or buttons · Press ESC to close" : "Press ESC to close"}
        </p>
      </div>
    </div>
  );
}
