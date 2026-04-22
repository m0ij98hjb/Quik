"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaCar, FaGasPump, FaAward } from "react-icons/fa";

const getStats = (language) => language === 'ar' ? [
  { number: "6000+", label: "سيارة خلال 24 ساعة", icon: FaCar },
  { number: "9", label: "محطات مشغلة", icon: FaGasPump },
  { number: "29", label: "سنة خبرة", icon: FaAward },
] : [
  { number: "6000+", label: "Cars in 24 hours", icon: FaCar },
  { number: "9", label: "Active Stations", icon: FaGasPump },
  { number: "29", label: "Years Experience", icon: FaAward },
];

export default function CountersSection() {
  const { language } = useLanguage();
  const stats = getStats(language);
  return (
    <section
      id="counters"
      style={{ 
        padding: "100px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(135deg, rgba(255,152,0,0.05) 0%, transparent 50%, rgba(255,152,0,0.05) 100%)",
        zIndex: 0
      }} />

      {/* Top Line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,152,0,0.5), transparent)"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "20px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? (
              <>كويك في <span style={{ color: "#ff9800" }}>أرقام</span></>
            ) : (
              <><span style={{ color: "#ff9800" }}>Quik</span> in Numbers</>
            )}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="row justify-content-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4 mb-md-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                style={{
                  textAlign: "center",
                  padding: "40px 30px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  borderRadius: "25px",
                  border: "1px solid rgba(255,152,0,0.2)",
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
                  width: "200px",
                  height: "200px",
                  background: "radial-gradient(circle, rgba(255,152,0,0.1) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0
                }} />

                {/* Icon */}
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  border: "1px solid rgba(255,152,0,0.3)",
                  position: "relative",
                  zIndex: 1
                }}>
                  <stat.icon style={{ fontSize: "36px", color: "#ff9800" }} />
                </div>

                {/* Number */}
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring" }}
                  style={{
                    fontSize: "52px",
                    fontWeight: 800,
                    color: "#ff9800",
                    marginBottom: "10px",
                    fontFamily: "'Cairo', sans-serif",
                    textShadow: "0 0 30px rgba(255,152,0,0.3)",
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  {stat.number}
                </motion.h3>

                {/* Label */}
                <p style={{
                  fontSize: "18px",
                  color: "var(--text-secondary)",
                  margin: 0,
                  fontFamily: "'Cairo', sans-serif",
                  position: "relative",
                  zIndex: 1
                }}>
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
