"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const partners = [
  { title: "Road Cup", titleAr: "رود كوب", category: "كافيهات", categoryEn: "Cafes", img: "1732512129-images.jpg" },
  { title: "Petromin", titleAr: "بترومين", category: "زيوت", categoryEn: "Oil", img: "1721465155-PETROMIN_logo.svg.png" },
  { title: "Bridgestone", titleAr: "بريجستون", category: "إطارات", categoryEn: "Tires", img: "1721465086-New-Bridgestone-Logo-Design-2011-BPO.jpg" },
  { title: "Somat", titleAr: "سمات الاتقان", category: "زيوت", categoryEn: "Oil", img: "1721464896-B3d5SQHf_400x400.jpg" },
  { title: "Loco", titleAr: "لوكو", category: "كافيهات", categoryEn: "Cafes", img: "1721464844-loco.jpg" },
  { title: "Black & White", titleAr: "بلاك اند وايت", category: "كافيهات", categoryEn: "Cafes", img: "1721464610-image01-removebg-preview.png" },
  { title: "iOS", titleAr: "ايت او اس", category: "كافيهات", categoryEn: "Cafes", img: "1721464103-80-removebg-preview.png" },
  { title: "Reschio", titleAr: "ريشيو", category: "كافيهات", categoryEn: "Cafes", img: "1721463088-NS9fqFatB3RMVAaFtoTZ.png" },
  { title: "Riksa", titleAr: "ريكسا", category: "كافيهات", categoryEn: "Cafes", img: "1720947146-ريكسا.jpg" },
  { title: "Nestretto", titleAr: "نستريتو", category: "كافيهات", categoryEn: "Cafes", img: "1720956103-55.png" },
  { title: "Max Food", titleAr: "ماكس فود", category: "مطاعم", categoryEn: "Restaurants", img: "1720946451-maxfood.jpg" },
  { title: "Barns", titleAr: "بارنز", category: "كافيهات", categoryEn: "Cafes", img: "1720955914-555-transformed.png" },
];

const categories = ["الكل", "زيوت", "إطارات", "كافيهات", "مطاعم"];
const categoriesEn = ["All", "Oil", "Tires", "Cafes", "Restaurants"];

export default function PartnersPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(language === 'ar' ? "الكل" : "All");
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);

  const currentCategories = language === 'ar' ? categories : categoriesEn;

  // Update filter when language changes, defaulting to "All"
  useEffect(() => {
    setActiveFilter(language === 'ar' ? "الكل" : "All");
  }, [language]);

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        // Destroy previous instance if exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }
        
        typedInstanceRef.current = new window.Typed(typedRef.current, {
          strings: language === 'ar' ? ['شركاؤنا', 'شركاء النجاح'] : ['Our Partners', 'Success Partners'],
          typeSpeed: 80,
          backSpeed: 40,
          showCursor: true,
          cursorChar: '|',
          loop: true,
          startDelay: 300,
        });
      }
    };
    const timer = setTimeout(checkTyped, 500);
    return () => {
      clearTimeout(timer);
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, [language]);

  const allKey = language === 'ar' ? "الكل" : "All";

  const filteredPartners = activeFilter === allKey
    ? partners
    : partners.filter(p => {
        return language === 'ar' ? p.category === activeFilter : p.categoryEn === activeFilter;
      });

  return (
    <>
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={{ 
          padding: '100px 0 60px', 
          background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glow Orbs */}
          <div style={{
            position: 'absolute',
            top: '10%', right: '10%',
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(255,152,0,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 25px",
                background: "rgba(255,152,0,0.1)",
                border: "1px solid rgba(255,152,0,0.3)",
                borderRadius: "30px",
                color: "#ff9800",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "20px",
                marginTop: "25px",
                fontFamily: "'Cairo', sans-serif"
              }}>
                <FaHandshake />
                {t('partners.subtitle')}
              </span>
              
              <h1 style={{ 
                fontSize: 'clamp(36px, 6vw, 64px)', 
                fontWeight: 800, 
                color: 'var(--text-primary)',
                marginBottom: '20px',
                fontFamily: "'Cairo', sans-serif",
                minHeight: '120px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span ref={typedRef} style={{ display: 'inline-block', minWidth: '250px' }}></span>
              </h1>
              
              <p style={{
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                margin: '0 auto',
                fontFamily: "'Cairo', sans-serif",
                lineHeight: '1.8'
              }}>
                {language === 'ar'
                  ? 'نفتخر بشراكتنا مع أفضل الشركات والعلامات التجارية لتقديم خدمات متميزة لعملائنا'
                  : 'We are proud of our partnership with the best companies and brands to provide distinguished services to our customers'}
              </p>

              {/* Stats */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '50px',
                flexWrap: 'wrap',
                marginTop: '40px'
              }}>
                {[{ num: '12+', label: language === 'ar' ? 'شريك' : 'Partners' }, { num: '5', label: language === 'ar' ? 'فئات' : 'Categories' }, { num: '9', label: language === 'ar' ? 'محطات' : 'Stations' }].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      fontSize: '36px',
                      fontWeight: 800,
                      color: '#ff9800',
                      fontFamily: "'Cairo', sans-serif"
                    }}>{stat.num}</div>
                    <div style={{ 
                      fontSize: '14px', 
                      color: 'var(--text-secondary)',
                      fontFamily: "'Cairo', sans-serif"
                    }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section style={{ padding: '80px 0', position: 'relative' }}>
          {/* Grid Background */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `linear-gradient(rgba(255,152,0,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,152,0,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Filter Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5"
            >
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px"
              }}>
                {currentCategories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "12px 30px",
                      background: activeFilter === category 
                        ? "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)" 
                        : "var(--bg-glass)",
                      color: activeFilter === category ? "var(--text-primary)" : "var(--text-secondary)",
                      border: activeFilter === category 
                        ? "none" 
                        : "1px solid rgba(255,152,0,0.2)",
                      borderRadius: "30px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "'Cairo', sans-serif",
                      transition: "all 0.3s ease",
                      boxShadow: activeFilter === category 
                        ? "0 10px 30px rgba(255,152,0,0.3)" 
                        : "none"
                    }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Partners Grid */}
            <div className="row">
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="col-lg-3 col-md-4 col-6 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <motion.div
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    style={{
                      padding: "40px 30px",
                      background: "var(--bg-card)",
                      borderRadius: "20px",
                      border: "2px solid var(--border-accent)",
                      borderTop: "6px solid #ff9800",
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-md)"
                    }}
                  >
                    {/* Orange Glow Effect */}
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "150px",
                      height: "150px",
                      background: "radial-gradient(circle, rgba(255,152,0,0.1) 0%, transparent 70%)",
                      filter: "blur(30px)",
                      zIndex: 0
                    }} />

                    <img
                      src={`https://quikstations.com/uploads/img/portfolio/${partner.img}`}
                      alt={language === 'ar' ? partner.titleAr : partner.title}
                      style={{
                        width: "100%",
                        height: "140px",
                        objectFit: "contain",
                        position: "relative",
                        zIndex: 1
                      }}
                    />

                    <h4 style={{
                      marginTop: "20px",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      fontFamily: "'Cairo', sans-serif",
                      position: "relative",
                      zIndex: 1
                    }}>
                      {language === 'ar' ? partner.titleAr : partner.title}
                    </h4>

                    <p style={{
                      marginTop: "5px",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      fontFamily: "'Cairo', sans-serif",
                      position: "relative",
                      zIndex: 1,
                      marginBottom: 0
                    }}>
                      {language === 'ar' ? partner.category : partner.categoryEn}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredPartners.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-5"
              >
                <p style={{
                  fontSize: "18px",
                  color: "var(--text-secondary)",
                  fontFamily: "'Cairo', sans-serif"
                }}>
                  {language === 'ar' ? 'لا يوجد شركاء في هذا القسم' : 'No partners in this category'}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '80px 0', 
          background: 'linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.05) 100%)',
          borderTop: '1px solid rgba(255,152,0,0.2)',
          borderBottom: '1px solid rgba(255,152,0,0.2)'
        }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 style={{
                fontSize: '32px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '15px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'هل ترغب في أن تصبح شريكاً؟' : 'Interested in becoming a partner?'}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                marginBottom: '30px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'نرحب بالشراكات الاستراتيجية لتقديم أفضل الخدمات لعملائنا' : 'We welcome strategic partnerships to provide the best services to our customers'}
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 40px',
                  background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                  borderRadius: '50px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: "'Cairo', sans-serif",
                  boxShadow: '0 10px 30px rgba(255,152,0,0.4)'
                }}
              >
                {language === 'ar' ? 'تواصل معنا للشراكة' : 'Contact Us for Partnership'}
                <FaHandshake style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px' }} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
