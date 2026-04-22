"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function FranchiseHero() {
  const sectionRef = useRef(null);
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    // Reveal animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const initTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        // Destroy previous instance if exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }
        
        typedInstanceRef.current = new window.Typed(typedRef.current, {
          strings: language === 'ar'
            ? ['انضم إلى عائلة <span style="color: #ff9800;">كويك</span> للمحطات']
            : ['Join the <span style="color: #ff9800;">Quik</span> Stations'],
          typeSpeed: 80,
          backSpeed: 40,
          loop: true,
          showCursor: true,
          cursorChar: '|',
          html: true,
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

  return (
    <section 
      ref={sectionRef}
      className="hero-section" 
      style={{ 
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        overflow: "hidden"
      }}
    >
      {/* Background Pattern - Grid Lines */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,152,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,152,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          zIndex: 0
        }}
      />

      {/* Animated Orange Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,152,0,0.4) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 1
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,152,0,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 1
        }}
      />

      {/* Main Content Container */}
      <div 
        className="container-fluid px-0"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 20px 60px",
            position: "relative"
          }}
        >
          <div 
            style={{
              maxWidth: "1200px",
              width: "100%",
              textAlign: "center"
            }}
          >
            {/* Number Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "inline-block",
                padding: "8px 24px",
                background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                borderRadius: "30px",
                marginBottom: "30px"
              }}
            >
              <span style={{
                color: "var(--text-primary)",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'Cairo', sans-serif",
                letterSpacing: "2px",
              }}>
                {language === 'ar' ? 'برنامج الامتياز التجاري' : 'Franchise Program'}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: "clamp(36px, 6vw, 62px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "30px",
                fontFamily: "'Cairo', sans-serif",
                lineHeight: "1.2",
                textShadow: "0 0 40px rgba(255,152,0,0.3)",
                minHeight: "120px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span ref={typedRef} style={{ display: 'inline-block', minWidth: language === 'ar' ? '400px' : '400px' }}></span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ 
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "var(--text-muted)",
                lineHeight: "1.9",
                maxWidth: "700px",
                margin: "0 auto 40px",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {language === 'ar'
                ? 'صمم برنامج الامتياز التجاري بدقة لتمكين التجار والمستثمرين للوصول لأهدافهم الاستثمارية من خلال الرؤى والإستراتيجيات اللازمة للإزدهار'
                : 'Our franchise program is carefully designed to enable merchants and investors to achieve their investment goals through the vision and strategies necessary for prosperity'}
            </motion.p>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#franchizee" 
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "18px 50px",
                background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                color: "var(--text-primary)",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: "'Cairo', sans-serif",
                fontSize: "18px",
                boxShadow: "0 10px 40px rgba(255,152,0,0.4)",
                border: "2px solid var(--border-color)",
                cursor: "pointer"
              }}
            >
              {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }}>
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image - Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px"
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "20px 20px 0 0",
              overflow: "hidden",
              boxShadow: "0 -20px 60px rgba(255,152,0,0.2)"
            }}
          >
            <img
              src="/images/quikgiantess.png"
              alt="Quik Station"
              style={{
                width: "100%",
                height: "auto",
                display: "block"
              }}
            />
            {/* Gradient Overlay on Image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, var(--bg-primary) 0%, transparent 30%, transparent 70%, var(--bg-secondary) 100%)"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10
        }}
      >
        <div
          style={{
            width: "30px",
            height: "50px",
            border: "2px solid rgba(255,152,0,0.5)",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px"
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "6px",
              height: "6px",
              background: "#ff9800",
              borderRadius: "50%"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
