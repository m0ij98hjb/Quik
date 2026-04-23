"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaUser, FaCalendarAlt, FaArrowLeft, FaNewspaper } from "react-icons/fa";

const getBlogs = (language) => language === 'ar' ? [
  { id: '01', title: 'تجديد شهادة التأهيل', description: 'تم تجديد شهادة التأهيل لشركة كويك لعامي 2026-2027 بفضل التزامنا بأعلى معايير الجودة', date: '15 يناير 2025', category: 'شهادات' },
  { id: '02', title: 'افتتاح محطة جيزان', description: 'قريباً سيتم افتتاح محطة جيزان ابو عريش لتقديم خدمات متميزة لعملائنا', date: '20 ديسمبر 2024', category: 'افتتاحات' },
  { id: '03', title: 'فرع طريق 80', description: 'قريباً افتتاح فرع طريق 80 خميس مشيط بتصميم عصري وخدمات متكاملة', date: '10 نوفمبر 2024', category: 'افتتاحات' },
  { id: '04', title: 'فرع المحالة', description: 'قريباً افتتاح فرع محطة كويك في المحالة بخدمات متنوعة ومميزة', date: '5 أكتوبر 2024', category: 'افتتاحات' },
  { id: '05', title: 'جائزة أفضل شركة', description: 'تم تكريم شركة كويك بجائزة أفضل شركة وقود في المنطقة الجنوبية', date: '1 سبتمبر 2024', category: 'جوائز' },
  { id: '06', title: 'شراكة بترومين', description: 'وقعت شركة كويك اتفاقية شراكة استراتيجية مع شركة بترومين', date: '15 أغسطس 2024', category: 'شراكات' },
] : [
  { id: '01', title: 'Qualification Certificate Renewal', description: 'The qualification certificate for Quik Company was renewed for 2026-2027 thanks to our commitment to the highest quality standards', date: 'Jan 15, 2025', category: 'Certificates' },
  { id: '02', title: 'Jazan Station Opening', description: 'Coming soon - Jazan Abu Arish station opening to provide distinguished services to our customers', date: 'Dec 20, 2024', category: 'Openings' },
  { id: '03', title: 'Route 80 Branch', description: 'Coming soon - Route 80 Khamis Mushait branch with modern design and integrated services', date: 'Nov 10, 2024', category: 'Openings' },
  { id: '04', title: 'Al-Mahalah Branch', description: 'Coming soon - Quik station branch in Al-Mahalah with diverse and distinguished services', date: 'Oct 5, 2024', category: 'Openings' },
  { id: '05', title: 'Best Company Award', description: 'Quik Company was honored with the Best Fuel Company Award in the Southern Region', date: 'Sep 1, 2024', category: 'Awards' },
  { id: '06', title: 'Petromin Partnership', description: 'Quik Company signed a strategic partnership agreement with Petromin', date: 'Aug 15, 2024', category: 'Partnerships' },
];

export default function BlogPage() {
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);
  const { language, t } = useLanguage();
  const blogs = getBlogs(language);

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        // Destroy previous instance if exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }
        
        typedInstanceRef.current = new window.Typed(typedRef.current, {
          strings: language === 'ar' ? ['أخبارنا المتميزة', 'آخر المستجدات'] : ['Our Distinguished News', 'Latest Updates'],
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

  return (
    <>
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={{ 
          padding: '120px 0 80px', 
          background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'none' }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(255,152,0,0.1)',
                border: '1px solid rgba(255,152,0,0.3)',
                borderRadius: '30px',
                color: '#ff9800',
                fontSize: '14px',
                fontWeight: 600,
                marginTop: '50px',
                marginBottom: '20px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'نقدم لكم' : 'We Present'}
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
                <span ref={typedRef} style={{ display: 'inline-block', minWidth: language === 'ar' ? '250px' : '350px' }}></span>
              </h1>

              <p style={{
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                margin: '0 auto 30px',
                fontFamily: "'Cairo', sans-serif",
                lineHeight: '1.8'
              }}>
                {language === 'ar'
                  ? 'تابعونا لمعرفة آخر مستجدات وأخبار شركة كويك لمحطات الوقود'
                  : 'Follow us to know the latest updates and news from Quik Fuel Stations Company'}
              </p>

              {/* Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '50px',
                flexWrap: 'wrap'
              }}>
                {[{ num: '6+', label: language === 'ar' ? 'أخبار' : 'News' }, { num: '4', label: language === 'ar' ? 'فئات' : 'Categories' }, { num: '33', label: language === 'ar' ? 'محطات' : 'Stations' }].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{ textAlign: 'center' }}
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

        {/* Blogs Grid */}
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
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-5"
            >
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '15px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? (
                  <>أخبارنا <span style={{ color: '#ff9800' }}>المتميزة</span></>
                ) : (
                  <><span style={{ color: '#ff9800' }}>Our</span> News</>
                )}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar'
                  ? 'نوفر لكم مجموعة من الأخبار والمستجدات عن شركة كويك'
                  : 'We provide you with a collection of news and updates about Quik Company'}
              </p>
            </motion.div>

            {/* Blogs */}
            <div className="row">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  className="col-lg-4 col-md-6 mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    style={{
                      padding: '35px',
                      background: 'var(--bg-card)',
                      borderRadius: '20px',
                      border: '1px solid var(--border-color)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    {/* Number Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      left: language === 'ar' ? '15px' : 'auto',
                      right: language === 'ar' ? 'auto' : '15px',
                      fontSize: '48px',
                      fontWeight: 800,
                      color: 'rgba(255,152,0,0.1)',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: 1
                    }}>
                      {blog.id}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: 'none'
                      }}
                    >
                      <FaNewspaper style={{ fontSize: '28px', color: 'var(--text-primary)' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {blog.title}
                    </h3>

                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      marginBottom: '15px',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.7'
                    }}>
                      {blog.description}
                    </p>

                    {/* Meta */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginBottom: '20px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaCalendarAlt size={11} /> {blog.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ padding: '2px 8px', background: 'rgba(255,152,0,0.2)', borderRadius: '10px', color: '#ff9800' }}>{blog.category}</span>
                      </span>
                    </div>

                    {/* Link */}
                    <a href="/blog" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#ff9800',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      <FaArrowLeft size={12} style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                      {t('blog.readMore')}
                    </a>

                    {/* Hover Glow - Removed */}
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
                {language === 'ar' ? 'هل تريد قراءة المزيد من الأخبار؟' : 'Want to read more news?'}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                marginBottom: '30px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'تصفح جميع أخبارنا ومستجداتنا' : 'Browse all our news and updates'}
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
                  boxShadow: 'none'
                }}
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <FaArrowLeft style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
