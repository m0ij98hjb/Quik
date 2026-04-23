"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { useLoading } from "../../../../contexts/LoadingContext";

const heroImages = [
  "/images/hero.png",
  "/images/quikhero.png",
  "/images/quikhero1.jpg",
  "/images/asfd.png"
];

export default function HeroSection() {
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const { language, t } = useLanguage();
  const { isLoading } = useLoading();

  useEffect(() => {
    const initTyped = () => {
      if (window.Typed && typedRef.current) {
        // Destroy previous instance if exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }
        
        typedInstanceRef.current = new window.Typed(typedRef.current, {
          strings: language === 'ar'
            ? ["نحو آفاق جديدة", "معاً لمستقبل أفضل"]
            : ["Towards New Horizons", "Together for a Better Future"],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
          showCursor: true,
          cursorChar: "|",
        });
      } else {
        setTimeout(initTyped, 500);
      }
    };
    initTyped();
    
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section 
      style={{ 
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        {heroImages.map((img, index) => (
          currentImage === index && (
            <motion.img
              key={img}
              src={img}
              alt="Hero"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0
              }}
            />
          )
        ))}
      </AnimatePresence>

      {/* Dark Overlay - Always dark regardless of theme */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
        zIndex: 1
      }} />

      {/* Background Grid Pattern */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(255,152,0,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,152,0,0.03) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
        zIndex: 2
      }} />

      {/* Background Grid Pattern */}
      <motion.button
        onClick={prevImage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-aos="fade-right"
        data-aos-duration="600"
        style={{
          position: "absolute",
          left: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          background: "rgba(255,152,0,0.3)",
          border: "1px solid rgba(255,152,0,0.5)",
          borderRadius: "50%",
          color: "var(--text-primary)",
          cursor: "pointer",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaArrowRight />
      </motion.button>

      <motion.button
        onClick={nextImage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-aos="fade-left"
        data-aos-duration="600"
        style={{
          position: "absolute",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          background: "rgba(255,152,0,0.3)",
          border: "1px solid rgba(255,152,0,0.5)",
          borderRadius: "50%",
          color: "var(--text-primary)",
          cursor: "pointer",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaArrowLeft />
      </motion.button>

      {/* Image Dots */}
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
        style={{
        position: "absolute",
        bottom: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        zIndex: 10
      }}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            style={{
              width: currentImage === index ? "30px" : "10px",
              height: "10px",
              background: currentImage === index ? "#ff9800" : "rgba(255,255,255,0.3)",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 4 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={!isLoading ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.8, delay: isLoading ? 0 : 0.3, type: "spring", stiffness: 100 }}
              style={{
                display: "inline-block",
                padding: "8px 24px",
                background: "rgba(255,152,0,0.1)",
                border: "1px solid rgba(255,152,0,0.3)",
                borderRadius: "30px",
                color: "#ff9800",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "30px",
                fontFamily: "'Cairo', sans-serif"
              }}
            >
              {language === 'ar' ? 'مرحباً بكم في' : 'Welcome to'}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={!isLoading ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 1, delay: isLoading ? 0 : 0.5, type: "spring", stiffness: 80 }}
              style={{
                fontSize: "clamp(36px, 8vw, 80px)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "20px",
                fontFamily: "'Cairo', sans-serif"
              }}
            >
              {language === 'ar' ? (
                <>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: isLoading ? 0 : 0.7 }}
                  >
                    شركة كويك
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: isLoading ? 0 : 0.9 }}
                    style={{ color: "#ff9800" }}
                  >
                    لمحطات الوقود
                  </motion.span>
                </>
              ) : (
                <>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: isLoading ? 0 : 0.7 }}
                  >
                    Quik Company
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: isLoading ? 0 : 0.9 }}
                    style={{ color: "#ff9800" }}
                  >
                    Fuel Stations
                  </motion.span>
                </>
              )}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={!isLoading ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.8, delay: isLoading ? 0 : 1.1, type: "spring", stiffness: 70 }}
              style={{ 
                fontSize: "24px",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "40px",
                fontFamily: "'Cairo', sans-serif",
                minHeight: "40px"
              }}
            >
              <span ref={typedRef}></span>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={!isLoading ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.8, delay: isLoading ? 0 : 1.3, type: "spring", stiffness: 90 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 35px",
                background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                color: "var(--text-primary)",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: "'Cairo', sans-serif",
                fontSize: "16px",
                boxShadow: "none",
                border: "2px solid var(--border-color)"
              }}
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <FaArrowDown />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "50px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10
      }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            fontFamily: "'Cairo', sans-serif",
            fontSize: "14px",
            fontWeight: 600
          }}>
            <span>{language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}</span>
            <FaArrowDown style={{ color: "#ff9800", fontSize: "16px" }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
