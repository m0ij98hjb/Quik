"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";

const getVisionPoints = (language) => language === 'ar' ? [
  "أن تصبح شركة كويك رائدة في مجال تشغيل محطات الوقود ومراكز الخدمة",
  "تعزيز مكانتها في السوق المحلية بأن تكون وجهة وليست مجرد محطة وقود",
  "مواكبة رؤية المملكة ٢٠٣٠ من خلال تقديم خدمة مجتمعية",
  "تقديم فرص عمل للشباب السعودي ودعمهم في ريادة الأعمال",
  "توفير الطاقة البديلة وتهيئة المسطحات الخضراء"
] : [
  "To make Quik Company a leader in fuel station operations and service centers",
  "Strengthen its position in the local market as a destination, not just a fuel station",
  "Align with Saudi Vision 2030 by providing community services",
  "Provide job opportunities for Saudi youth and support them in entrepreneurship",
  "Provide alternative energy and prepare green spaces"
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function VisionSection() {
  const { language, t } = useLanguage();
  const visionPoints = getVisionPoints(language);
  return (
    <section 
      id="vision"
      style={{ 
        padding: "60px 0 120px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ display: 'none' }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="800"
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
            {t('about.vision.title')} & {t('about.mission.title')}
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "20px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? (
              <>نحو <span style={{ color: "#ff9800" }}>مستقبل</span> أفضل</>
            ) : (
              <><span style={{ color: "#ff9800" }}>Towards</span> a Better Future</>
            )}
          </h2>
        </div>

        <div className="row" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {/* Vision Card */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              style={{
                padding: "40px 30px",
                background: "var(--bg-card)",
                borderRadius: "20px",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-md)",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "start"
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: "90px",
                  height: "90px",
                  background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "30px",
                  border: "2px solid rgba(255,152,0,0.3)"
                }}
              >
                <FaEye style={{ fontSize: "40px", color: "#ff9800" }} />
              </motion.div>

              <h3 style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "25px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {t('about.vision.title')}
              </h3>

              <div>
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    data-aos-duration="500"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      textAlign: "start",
                      gap: "15px",
                      padding: "15px 0",
                      borderBottom: index < visionPoints.length - 1 ? "1px solid rgba(255,152,0,0.1)" : "none"
                    }}
                  >
                    <FaCheckCircle style={{ 
                      color: "#ff9800", 
                      fontSize: "20px", 
                      marginTop: "3px",
                      flexShrink: 0
                    }} />
                    <span style={{
                      color: "var(--text-secondary)",
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "15px",
                      lineHeight: "1.7"
                    }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-lg-6">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              style={{
                padding: "40px 30px",
                background: "var(--bg-card)",
                borderRadius: "20px",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-md)",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                textAlign: "start"
              }}
            >


              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                style={{
                  width: "90px",
                  height: "90px",
                  background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "30px",
                  border: "2px solid rgba(255,152,0,0.3)"
                }}
              >
                <FaBullseye style={{ fontSize: "40px", color: "#ff9800" }} />
              </motion.div>

              <h3 style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "25px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {t('about.mission.title')}
              </h3>

              <p style={{
                fontSize: "20px",
                color: "var(--text-secondary)",
                lineHeight: "2",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar'
                  ? '"نحو آفاق جديدة؛ وذلك عن طريق ابتكار واستحداث أفكار جديدة ومتميزة وغير مسبوقة في مجال محطات الوقود وخدمات السيارات"'
                  : '"Towards new horizons; through innovation and creating new, distinctive, and unprecedented ideas in the field of fuel stations and car services"'}
              </p>

              <div style={{
                marginTop: "30px",
                padding: "10px 25px",
                background: "rgba(255,152,0,0.1)",
                borderRadius: "30px",
                border: "1px solid rgba(255,152,0,0.3)"
              }}>
                <span style={{
                  color: "#ff9800",
                  fontWeight: 700,
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "16px"
                }}>
                  {language === 'ar' ? '#نحو_آفاق_جديدة' : '#Towards_New_Horizons'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
