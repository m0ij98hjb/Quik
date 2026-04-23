"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { FaBuilding, FaBox, FaGraduationCap, FaCogs, FaChartLine, FaHeadset, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const getServices = (language) => language === 'ar' ? [
  { icon: FaBuilding, title: "الإنشاء والتصميم", description: "إنشاء وتصميم المحطات على حسب المنطقة الجغرافية وإعادة هيكلة المحطات لمواكبة متطلبات السوق المستقبلية" },
  { icon: FaBox, title: "تزويد المواد الأساسية", description: "تقوم شركة كويك لمحطات الوقود بتزويد شركائها بالمواد الأساسية لتمكينهم من تقديم خدمات ذات جودة عالية" },
  { icon: FaGraduationCap, title: "التدريب والتأهيل", description: "لضمان الجودة والسلامة نقوم بالتدريب والتأهيل للموارد البشرية حفاظاً على سلامة العاملين والمجتمع" },
  { icon: FaCogs, title: "الأنظمة المتكاملة", description: "نوفر أنظمة متكاملة لتشغيل المحطات والمشاريع بكفاءة عالية وتقنيات حديثة" },
  { icon: FaChartLine, title: "التحليل والدراسات", description: "توفير جميع البيانات للمنطقة الجغرافية والشركاء مع تحليلات دقيقة للسوق" },
  { icon: FaHeadset, title: "الدعم المستمر", description: "دعم فني وإداري مستمر على مدار الساعة لضمان سير العمل بسلاسة" }
] : [
  { icon: FaBuilding, title: "Construction & Design", description: "Building and designing stations according to the geographical area and restructuring stations to meet future market requirements" },
  { icon: FaBox, title: "Supply of Essential Materials", description: "Quik Fuel Stations Company provides its partners with essential materials to enable them to provide high-quality services" },
  { icon: FaGraduationCap, title: "Training & Qualification", description: "To ensure quality and safety, we provide training and qualification for human resources to preserve the safety of workers and the community" },
  { icon: FaCogs, title: "Integrated Systems", description: "We provide integrated systems for operating stations and projects with high efficiency and modern technologies" },
  { icon: FaChartLine, title: "Analysis & Studies", description: "Providing all data for the geographical area and partners with accurate market analysis" },
  { icon: FaHeadset, title: "Continuous Support", description: "Continuous technical and administrative support around the clock to ensure smooth workflow" }
];

const getBenefits = (language) => language === 'ar' ? [
  { title: "علامة تجارية معروفة", description: "انضم لعلامة تجارية رائدة في مجال محطات الوقود بسمعة ممتازة" },
  { title: "شراكة استراتيجية", description: "نعمل معك كشريك استراتيجي لضمان نجاحك ونموك المستمر" },
  { title: "نمو سريع ومستدام", description: "استراتيجيات مثبتة لتحقيق نمو سريع وعوائد استثمارية ممتازة" },
  { title: "حماية الاستثمار", description: "عقود واضحة وشفافة تحمي استثمارك وتضمن حقوقك" }
] : [
  { title: "Well-Known Brand", description: "Join a leading brand in the fuel stations sector with an excellent reputation" },
  { title: "Strategic Partnership", description: "We work with you as a strategic partner to ensure your success and continuous growth" },
  { title: "Fast & Sustainable Growth", description: "Proven strategies to achieve rapid growth and excellent investment returns" },
  { title: "Investment Protection", description: "Clear and transparent contracts that protect your investment and ensure your rights" }
];

const getSteps = (language) => language === 'ar' ? [
  { title: "تقديم الطلب", description: "املأ نموذج الطلب الإلكتروني بالمعلومات الأساسية" },
  { title: "المراجعة والتقييم", description: "دراسة الطلب وتقييم الموقع والجدوى" },
  { title: "التوقيع والاتفاق", description: "توقيع العقد والبدء في الإجراءات القانونية" },
  { title: "الإطلاق والتشغيل", description: "تجهيز المحطة وبدء التشغيل مع الدعم الكامل" }
] : [
  { title: "Submit Application", description: "Fill out the online application form with basic information" },
  { title: "Review & Evaluation", description: "Study the application and evaluate the site and feasibility" },
  { title: "Signing & Agreement", description: "Sign the contract and begin legal procedures" },
  { title: "Launch & Operation", description: "Prepare the station and start operations with full support" }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function FranchiseServices() {
  const { language, t } = useLanguage();
  const services = getServices(language);
  const benefits = getBenefits(language);
  const steps = getSteps(language);

  return (
    <>
      {/* What We Offer Section - Dark Theme */}
      <section id="franchizee" style={{ padding: "120px 0", background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
        {/* Background Grid Pattern */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(255,152,0,0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,152,0,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          zIndex: 0
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            {...fadeInUp}
            className="row"
          >
            <div className="col-12 text-center mb-5">
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
                01 / {t('nav.services')}
              </span>
              <h2 style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "20px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'ماذا نقدم لممنوحي الامتياز' : 'What We Offer Franchisees'}
              </h2>
              <p style={{
                fontSize: "18px",
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar'
                  ? 'نوفر حزمة شاملة من الخدمات والدعم لضمان نجاح شركائنا'
                  : 'We provide a comprehensive package of services and support to ensure our partners\' success'}
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="col-lg-4 col-md-6 mb-4"
              >
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  style={{ 
                    padding: "40px 30px", 
                    background: "linear-gradient(135deg, var(--bg-glass) 0%, var(--bg-card) 100%)",
                    borderRadius: "20px", 
                    textAlign: "center",
                    height: "100%",
                    border: "1px solid rgba(255,152,0,0.1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Hover Glow Effect - Removed */}
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 25px",
                      border: "1px solid rgba(255,152,0,0.3)"
                    }}
                  >
                    <service.icon style={{ fontSize: "35px", color: "#ff9800" }} />
                  </motion.div>
                  
                  <h4 style={{ 
                    fontSize: "22px", 
                    fontWeight: 700, 
                    color: "var(--text-primary)", 
                    marginBottom: "15px",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {service.title}
                  </h4>
                  <p style={{ 
                    fontSize: "15px", 
                    color: "var(--text-muted)", 
                    lineHeight: "1.8",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "120px 0", background: "var(--bg-secondary)", position: "relative" }}>
        {/* Orange Accent Line */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,152,0,0.5), transparent)"
        }} />

        <div className="container">
          <motion.div {...fadeInUp} className="row">
            <div className="col-12 text-center mb-5">
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
                02 / {language === 'ar' ? 'المميزات' : 'Benefits'}
              </span>
              <h2 style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "20px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'مزايا الانضمام لعائلة كويك' : 'Benefits of Joining Quik Family'}
              </h2>
              <p style={{
                fontSize: "18px",
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar'
                  ? 'استثمر مع علامة تجارية رائدة واستفد من خبرتنا الواسعة'
                  : 'Invest with a leading brand and benefit from our extensive experience'}
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="col-lg-3 col-md-6 mb-4"
              >
                <div style={{ 
                  padding: "35px 25px", 
                  background: "linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.02) 100%)",
                  borderRadius: "15px", 
                  textAlign: "center",
                  height: "100%",
                  border: "1px solid rgba(255,152,0,0.2)",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "-2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "4px",
                    background: "linear-gradient(90deg, transparent, #ff9800, transparent)",
                    borderRadius: "2px"
                  }} />
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px"
                    }}
                  >
                    <FaCheckCircle style={{ fontSize: "28px", color: "var(--text-primary)" }} />
                  </motion.div>
                  
                  <h5 style={{ 
                    fontSize: "20px", 
                    fontWeight: 700, 
                    color: "var(--text-primary)", 
                    marginBottom: "12px",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {benefit.title}
                  </h5>
                  <p style={{ 
                    fontSize: "14px", 
                    color: "var(--text-muted)", 
                    lineHeight: "1.7",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section style={{ padding: "120px 0", background: "var(--bg-primary)", position: "relative" }}>
        <div className="container">
          <motion.div {...fadeInUp} className="row">
            <div className="col-12 text-center mb-5">
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
                03 / {language === 'ar' ? 'الخطوات' : 'Steps'}
              </span>
              <h2 style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "20px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'خطوات الحصول على الامتياز' : 'Steps to Obtain Franchise'}
              </h2>
              <p style={{
                fontSize: "18px",
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar'
                  ? 'عملية بسيطة وواضحة للانضمام إلينا'
                  : 'A simple and clear process to join us'}
              </p>
            </div>
          </motion.div>

          {/* Steps Timeline */}
          <div className="row position-relative">
            {/* Connection Line */}
            <div style={{
              position: "absolute",
              top: "75px",
              left: "12.5%",
              right: "12.5%",
              height: "2px",
              background: "linear-gradient(90deg, #ff9800, rgba(255,152,0,0.3))",
              zIndex: 0
            }} className="d-none d-lg-block" />

            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="col-lg-3 col-md-6 mb-4"
              >
                <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: "80px",
                      height: "80px",
                      background: index === 0 
                        ? "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)"
                        : "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 25px",
                      border: index === 0 ? "2px solid #ff9800" : "2px solid rgba(255,152,0,0.3)",
                      boxShadow: "none"
                    }}
                  >
                    <span style={{
                      color: index === 0 ? "var(--text-primary)" : "#ff9800",
                      fontSize: "28px",
                      fontWeight: 800,
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div style={{
                    padding: "25px",
                    background: "var(--bg-card)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255,152,0,0.1)"
                  }}>
                    <h5 style={{ 
                      fontSize: "20px", 
                      fontWeight: 700, 
                      color: "var(--text-primary)", 
                      marginBottom: "12px",
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {step.title}
                    </h5>
                    <p style={{ 
                      fontSize: "14px", 
                      color: "var(--text-muted)", 
                      lineHeight: "1.7",
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: "100px 0", 
        background: "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ display: 'none' }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "20px",
              fontFamily: "'Cairo', sans-serif"
            }}>
              {language === 'ar' ? 'هل أنت مستعد للانضمام إلينا؟' : 'Ready to Join Us?'}
            </h2>
            <p style={{
              fontSize: "18px",
              color: "var(--text-muted)",
              marginBottom: "40px",
              fontFamily: "'Cairo', sans-serif"
            }}>
              {language === 'ar'
                ? 'ابدأ رحلتك الاستثمارية الناجحة مع كويك اليوم'
                : 'Start your successful investment journey with Quik today'}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "none" }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 40px",
                background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                color: "var(--text-primary)",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 700,
                fontFamily: "'Cairo', sans-serif",
                boxShadow: "none",
                border: "2px solid var(--border-color)"
              }}
            >
              {t('home.hero.cta')}
              <FaArrowRight style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
