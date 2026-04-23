"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "../../../../contexts/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function AboutSection() {
  const { language, t } = useLanguage();
  return (
    <section 
      id="about"
      style={{ 
        padding: "120px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Grid */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(255,152,0,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,152,0,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        zIndex: 0
      }} />

      <div style={{ display: 'none' }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Image Side */}
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ paddingLeft: "30px" }}>
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              style={{ position: "relative" }}
            >
              <div style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                height: "370px"
              }}>
                <img
                  src="/images/quikhero1.jpg"
                  alt="شركة كويك"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
                {/* Overlay */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)"
                }} />
              </div>

            </div>
          </div>

          {/* Content Side */}
          <div className="col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <span style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(255,152,0,0.1)",
                border: "1px solid rgba(255,152,0,0.3)",
                borderRadius: "30px",
                color: "#ff9800",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "20px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {t('nav.about')}
              </span>

              <h2 style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "25px",
                fontFamily: "'Cairo', sans-serif",
                lineHeight: "1.3"
              }}>
                {language === 'ar' ? (
                  <>شركة <span style={{ color: "#ff9800" }}>كويك</span><br />لتشغيل محطات الوقود</>
                ) : (
                  <><span style={{ color: "#ff9800" }}>Quik</span> Company<br />Fuel Station Operations</>
                )}
              </h2>

              <p style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: "1.9",
                marginBottom: "30px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar'
                  ? 'أُسست مجموعة تركي عبد العزيز آل عامر التجارية منذ أكثر من ثلاثون عامًّا وكان من أول نشاطاتها تشغيل محطات الوقود ومراكز خدمة السيارات. تطورت لتصبح شركة كويك الرائدة في مجال تشغيل المحطات ومراكز الخدمة.'
                  : 'The Turki Abdulaziz Al-Amer Commercial Group was established more than thirty years ago, and one of its first activities was operating fuel stations and car service centers. It evolved to become Quik Company, a leader in station operations and service centers.'}
              </p>

              <div style={{ marginBottom: "30px" }}>
                {(language === 'ar' ? [
                  "أكثر من 30 عاماً من الخبرة",
                  "كوادر مهنية وفنية متخصصة",
                  "أحدث الأساليب والتقنيات",
                  "خدمة عملاء متميزة على مدار الساعة"
                ] : [
                  "More than 30 years of experience",
                  "Professional and technical cadres",
                  "Latest methods and technologies",
                  "24/7 customer service"
                ]).map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    data-aos-duration="500"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                      borderBottom: index < 3 ? "1px solid rgba(255,152,0,0.1)" : "none"
                    }}
                  >
                    <span style={{
                      width: "24px",
                      height: "24px",
                      background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-primary)",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}>
                      ✓
                    </span>
                    <span style={{
                      color: "var(--text-secondary)",
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "15px"
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href="https://quikstations.com/uploads/img/about/1721482867-profile quik station..pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "15px 35px",
                  background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                  color: "var(--text-primary)",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "16px",
                  boxShadow: "none"
                }}
              >
                <FaDownload />
                {language === 'ar' ? 'تنزيل بروفايل الشركة' : 'Download Company Profile'}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
