"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHome, FaChevronLeft } from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function ContactBreadcrumb() {
  const typedRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        new window.Typed(typedRef.current, {
          strings: language === 'ar' ? [t('contact.title')] : ['Contact Us'],
          typeSpeed: 80,
          backSpeed: 0,
          showCursor: true,
          cursorChar: '|',
          loop: false,
          startDelay: 300,
        });
      }
    };

    const timer = setTimeout(checkTyped, 500);
    return () => clearTimeout(timer);
  }, [language, t]);

  return (
    <section
      style={{
        padding: "60px 0",
        background: "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)",
        borderBottom: "1px solid rgba(255,152,0,0.2)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Glow Effect */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "200px",
        background: "radial-gradient(circle, rgba(255,152,0,0.1) 0%, transparent 70%)",
        filter: "blur(60px)",
        zIndex: 0
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Breadcrumb Links */}
          <div className="col-md-6 mb-3 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "'Cairo', sans-serif",
                fontSize: "14px"
              }}
            >
              <a href="/" style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}>
                <FaHome size={14} />
                {t('nav.home')}
              </a>
              <FaChevronLeft size={12} color="rgba(255,152,0,0.6)" />
              <span style={{ color: "#ff9800" }}>{t('contact.title')}</span>
            </motion.div>
          </div>

          {/* Title */}
          <div className="col-md-6 text-md-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
    
         
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
