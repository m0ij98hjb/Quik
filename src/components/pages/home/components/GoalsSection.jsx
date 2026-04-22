"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaAmbulance, FaChartLine, FaUsers, FaPlus, FaFistRaised, FaTrophy } from "react-icons/fa";

const getGoals = (language) => language === 'ar' ? [
  { title: "الريادة", description: "تحقيق الريادة في تشغيل مراكز الخدمة.", icon: FaTrophy },
  { title: "السلامة", description: "تعزيز أداء السلامة المهنية والحفاظ على البيئة.", icon: FaAmbulance },
  { title: "الكفاءة", description: "تطوير الكفاءات والحفاظ عليها.", icon: FaFistRaised },
  { title: "النمو", description: "تعظيم النمو الاستراتيجي للمنشأة.", icon: FaChartLine },
  { title: "الشراكة والتكامل", description: "الشراكة والتكامل مع شركاء استراتيجيين محليين وعالميين.", icon: FaUsers },
  { title: "التوسع", description: "التوسع والانتشار في ربوع المملكة", icon: FaPlus },
] : [
  { title: "Leadership", description: "Achieving leadership in service center operations.", icon: FaTrophy },
  { title: "Safety", description: "Enhancing occupational safety performance and environmental preservation.", icon: FaAmbulance },
  { title: "Efficiency", description: "Developing and maintaining competencies.", icon: FaFistRaised },
  { title: "Growth", description: "Maximizing the strategic growth of the establishment.", icon: FaChartLine },
  { title: "Partnership", description: "Partnership and integration with local and global strategic partners.", icon: FaUsers },
  { title: "Expansion", description: "Expansion and spread throughout the Kingdom.", icon: FaPlus },
];

export default function GoalsSection() {
  const { language, t } = useLanguage();
  const goals = getGoals(language);
  return (
    <section 
      id="goals"
      style={{ 
        padding: "120px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(255,152,0,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,152,0,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        zIndex: 0
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
            {language === 'ar' ? 'استراتيجيتنا' : 'Our Strategy'}
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "20px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? (
              <>أهدافنا <span style={{ color: "#ff9800" }}>الاستراتيجية</span></>
            ) : (
              <><span style={{ color: "#ff9800" }}>Our</span> Strategic Goals</>
            )}
          </h2>
        </motion.div>

        {/* Goals Grid */}
        <div className="row">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="col-lg-6 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  padding: "30px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,152,0,0.1)",
                  height: "100%"
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  style={{
                    width: "70px",
                    height: "70px",
                    minWidth: "70px",
                    background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(255,152,0,0.3)"
                  }}
                >
                  <goal.icon style={{ fontSize: "28px", color: "var(--text-primary)" }} />
                </motion.div>

                {/* Content */}
                <div>
                  <h4 style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {goal.title}
                  </h4>
                  <p style={{
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                    fontFamily: "'Cairo', sans-serif",
                    lineHeight: "1.7"
                  }}>
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
