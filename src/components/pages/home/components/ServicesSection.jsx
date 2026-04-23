"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import {
  FaGasPump,
  FaStoreAlt,
  FaCoffee,
  FaToilet,
  FaChessKnight,
  FaMosque,
  FaCreditCard,
  FaTruckPickup,
  FaWrench,
  FaCarCrash,
  FaOilCan,
  FaChargingStation,
  FaCar,
  FaTint,
  FaArrowLeft,
} from "react-icons/fa";

const getServices = (language) => language === 'ar' ? [
  { title: "وقود", icon: FaGasPump },
  { title: "مطاعم", icon: FaStoreAlt },
  { title: "مقاهي وكافيهات", icon: FaCoffee },
  { title: "دوارات مياه", icon: FaToilet },
  { title: "ألعاب أطفال", icon: FaChessKnight },
  { title: "مساجد رجال ونساء", icon: FaMosque },
  { title: "سوبر ماركت", icon: FaStoreAlt },
  { title: "صراف آلي", icon: FaCreditCard },
  { title: "غسيل سيارات", icon: FaTruckPickup },
  { title: "صيانة", icon: FaWrench },
  { title: "إطارات", icon: FaCarCrash },
  { title: "تغيير زيوت", icon: FaOilCan },
  { title: "شاحن سيارات كهربائية", icon: FaChargingStation },
  { title: "زينة سيارات", icon: FaCar },
  { title: "هواء وماء", icon: FaTint },
] : [
  { title: "Fuel", icon: FaGasPump },
  { title: "Restaurants", icon: FaStoreAlt },
  { title: "Cafes", icon: FaCoffee },
  { title: "Restrooms", icon: FaToilet },
  { title: "Kids Games", icon: FaChessKnight },
  { title: "Mosques", icon: FaMosque },
  { title: "Supermarket", icon: FaStoreAlt },
  { title: "ATM", icon: FaCreditCard },
  { title: "Car Wash", icon: FaTruckPickup },
  { title: "Maintenance", icon: FaWrench },
  { title: "Tires", icon: FaCarCrash },
  { title: "Oil Change", icon: FaOilCan },
  { title: "EV Charging", icon: FaChargingStation },
  { title: "Car Detailing", icon: FaCar },
  { title: "Air & Water", icon: FaTint },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ServicesSection() {
  const { language, t } = useLanguage();
  const services = getServices(language);

  return (
    <section 
      id="services"
      style={{ 
        padding: "120px 0 60px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Top Accent Line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,152,0,0.5), transparent)"
      }} />

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
            {t('home.services.title')}
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "20px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? (
              <>كل ما تحتاجه في <span style={{ color: "#ff9800" }}>محطة واحدة</span></>
            ) : (
              <><span style={{ color: "#ff9800" }}>Everything</span> You Need at One Station</>
            )}
          </h2>
          <p style={{
            fontSize: "18px",
            color: "var(--text-muted)",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar'
              ? 'نقدم مجموعة متكاملة من الخدمات عالية الجودة لضمان راحتك ورفاهيتك'
              : 'We offer a complete set of high-quality services to ensure your comfort and well-being'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="600"
            >
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                style={{
                  padding: "35px 30px",
                  background: "var(--bg-card)",
                  borderRadius: "20px",
                  border: "1px solid var(--border-color)",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                {/* Number */}
                <span style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  fontFamily: "'Cairo', sans-serif"
                }}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    border: "1px solid rgba(255,152,0,0.3)"
                  }}
                >
                  <service.icon style={{ fontSize: "30px", color: "#ff9800" }} />
                </motion.div>

                {/* Title */}
                <h4 style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "15px",
                  fontFamily: "'Cairo', sans-serif"
                }}>
                  {service.title}
                </h4>

                {/* Link */}
                <a 
                  href="/services" 
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#ff9800",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "'Cairo', sans-serif"
                  }}
                >
                  {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
                  <FaArrowLeft size={12} style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
