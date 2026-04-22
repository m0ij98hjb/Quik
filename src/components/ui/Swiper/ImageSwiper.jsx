"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageSwiper({ images = [], autoPlay = true, speed = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, speed);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length, speed]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  if (!images || images.length === 0) {
    return (
      <div className="swiper-empty">
        <p>لا توجد صور متاحة</p>
      </div>
    );
  }

  return (
    <div className="image-swiper-container">
      <style>{`
        .image-swiper-container {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          position: relative;
          width: 100%;
          height: 80vh;
          overflow: hidden;
          border-radius: 0;
          background: var(--bg-secondary, #f5f5f5);
          box-shadow: none;
          margin-top: 100px;
          padding: 0;
          z-index: 0;
        }

        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-slide.active {
          opacity: 1;
          z-index: 2;
        }

        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Navigation Buttons */
        .swiper-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 50px;
          height: 50px;
          display: none;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease;
          font-size: 18px;
        }

        .swiper-button:hover {
          background: rgba(255, 165, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }

        .swiper-button-next {
          left: 20px;
        }

        .swiper-button-prev {
          right: 20px;
        }

        /* Pagination Dots */
        .swiper-pagination {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 5;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet.active {
          background: var(--color-secondary, #ff9800);
          width: 30px;
          border-radius: 6px;
        }

        .swiper-pagination-bullet:hover {
          background: rgba(255, 165, 0, 0.8);
        }

        /* Info Badge */
        .swiper-info {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          z-index: 5;
        }

        /* Empty State */
        .swiper-empty {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary, #f5f5f5);
          border-radius: 12px;
          color: var(--text-secondary, #999);
          font-size: 16px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .image-swiper-container {
            height: 50vh;
          }

          .swiper-button {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }

          .swiper-button-next {
            left: 10px;
          }

          .swiper-button-prev {
            right: 10px;
          }

          .swiper-pagination {
            bottom: 15px;
            gap: 6px;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }

          .swiper-info {
            bottom: 15px;
            right: 15px;
            font-size: 11px;
            padding: 6px 10px;
          }
        }

        @media (max-width: 480px) {
          .image-swiper-container {
            height: 40vh;
            border-radius: 0;
          }

          .swiper-button {
            width: 35px;
            height: 35px;
            font-size: 12px;
          }

          .swiper-button-next {
            left: 8px;
          }

          .swiper-button-prev {
            right: 8px;
          }
        }
      `}</style>

      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`swiper-slide ${index === current ? "active" : ""}`}
          >
            <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="swiper-button swiper-button-next" onClick={handleNext}>
        <FaChevronRight />
      </button>
      <button className="swiper-button swiper-button-prev" onClick={handlePrev}>
        <FaChevronLeft />
      </button>

      {/* Pagination Dots */}
      <div className="swiper-pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={`swiper-pagination-bullet ${index === current ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Info Badge */}
      <div className="swiper-info">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
