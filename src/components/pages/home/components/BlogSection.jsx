"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaUser, FaCalendarAlt, FaArrowLeft, FaNewspaper } from "react-icons/fa";

const getBlogs = (language) => language === 'ar' ? [
  {
    title: "تجديد شهادة التأهيل لشركة كويك لمحطات الوقود",
    description: "تم تجديد شهادة التأهيل لشركة كويك لعامي 2026-2027 بفضل التزامنا بأعلى معايير الجودة والسلامة في تشغيل محطات الوقود.",
    img: "1766219254-IMG-20250508-WA0016.jpg",
    link: "https://quikstations.com/blog/shh-d-ltahyl-lshrk-koyk-lmht-t-lokod",
    date: "يناير 2025",
    category: "شهادات",
  },
  {
    title: "افتتاح محطة جيزان ابو عريش",
    description: "قريبا سيتم افتتاح محطة جيزان ابو عريش لتقديم خدمات متميزة لعملائنا في منطقة جازان.",
    img: "1765952002-IMG-20250508-WA0020.jpg",
    link: "https://quikstations.com/blog/ftt-h-mht-gyz-n-bo-aarysh",
    date: "ديسمبر 2024",
    category: "افتتاحات",
  },
  {
    title: "افتتاح فرع شركة كويك محطة طريق 80",
    description: "قريبا افتتاح فرع طريق 80 خميس مشيط بتصميم عصري وخدمات متكاملة لراحة عملائنا.",
    img: "1765951227-WhatsApp Image 2025-08-05 at 16.19.36_6718eea5.jpg",
    link: "https://quikstations.com/blog/ftt-h-fraa-shrk-koyk-mht-tryk-80",
    date: "نوفمبر 2024",
    category: "افتتاحات",
  },
  {
    title: "افتتاح فرع محطة كويك - المحالة",
    description: "قريبا افتتاح فرع محطة كويك في المحالة بخدمات متنوعة ومميزة لتلبية احتياجات عملائنا.",
    img: "1765949912-Screenshot 2025-09-24 090117.png",
    link: "https://quikstations.com/blog/ftt-h-fraa-mht-koyk-lmh-l",
    date: "أكتوبر 2024",
    category: "افتتاحات",
  },
] : [
  {
    title: "Quik Company Qualification Certificate Renewal",
    description: "The qualification certificate for Quik Company was renewed for 2026-2027 thanks to our commitment to the highest quality and safety standards in operating fuel stations.",
    img: "1766219254-IMG-20250508-WA0016.jpg",
    link: "https://quikstations.com/blog/shh-d-ltahyl-lshrk-koyk-lmht-t-lokod",
    date: "January 2025",
    category: "Certificates",
  },
  {
    title: "Jazan Abu Arish Station Opening",
    description: "Coming soon - Jazan Abu Arish station opening to provide distinguished services to our customers in the Jazan region.",
    img: "1765952002-IMG-20250508-WA0020.jpg",
    link: "https://quikstations.com/blog/ftt-h-mht-gyz-n-bo-aarysh",
    date: "December 2024",
    category: "Openings",
  },
  {
    title: "Route 80 Branch Opening",
    description: "Coming soon - Route 80 Khamis Mushait branch with modern design and integrated services for our customers' comfort.",
    img: "1765951227-WhatsApp Image 2025-08-05 at 16.19.36_6718eea5.jpg",
    link: "https://quikstations.com/blog/ftt-h-fraa-shrk-koyk-mht-tryk-80",
    date: "November 2024",
    category: "Openings",
  },
  {
    title: "Al-Mahalah Station Branch Opening",
    description: "Coming soon - Quik station branch in Al-Mahalah with diverse and distinguished services to meet our customers' needs.",
    img: "1765949912-Screenshot 2025-09-24 090117.png",
    link: "https://quikstations.com/blog/ftt-h-fraa-mht-koyk-lmh-l",
    date: "October 2024",
    category: "Openings",
  },
];

export default function BlogSection() {
  const { language, t } = useLanguage();
  const blogs = getBlogs(language);
  return (
    <section 
      id="blog"
      style={{ 
        padding: "60px 0 120px 0",
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

      {/* Glow Orbs */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255,152,0,0.08) 0%, transparent 70%)",
        filter: "blur(80px)",
        zIndex: 0
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
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
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            <FaNewspaper />
            {t('nav.blog')}
          </motion.div>

          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "15px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? (
              <>آخر <span style={{ color: "#ff9800" }}>الأخبار</span> والمستجدات</>
            ) : (
              <><span style={{ color: "#ff9800" }}>Latest</span> News & Updates</>
            )}
          </h2>

          <p style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            fontFamily: "'Cairo', sans-serif",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            {language === 'ar'
              ? 'تابعونا لمعرفة آخر مستجدات وأخبار شركة كويك لمحطات الوقود'
              : 'Follow us to know the latest updates and news from Quik Fuel Stations Company'}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="row">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <motion.div
                whileHover={{ y: -10 }}
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  borderRadius: "25px",
                  border: "1px solid rgba(255,152,0,0.1)",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                }}
              >
                {/* Category Badge */}
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  padding: "6px 14px",
                  background: "rgba(255,152,0,0.9)",
                  borderRadius: "20px",
                  color: "#000",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "'Cairo', sans-serif",
                  zIndex: 2
                }}>
                  {blog.category}
                </div>

                {/* Image */}
                <div style={{
                  height: "220px",
                  overflow: "hidden",
                  position: "relative"
                }}>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={`https://quikstations.com/uploads/img/blogs/${blog.img}`}
                    alt={blog.title}
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)"
                  }} />
                </div>

                {/* Content */}
                <div style={{ 
                  padding: "25px", 
                  flex: 1, 
                  display: "flex", 
                  flexDirection: "column",
                  position: "relative"
                }}>
                  {/* Meta */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "15px",
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <FaCalendarAlt size={11} /> {blog.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <FaUser size={11} /> {language === 'ar' ? 'كويك' : 'Quik'}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    fontFamily: "'Cairo', sans-serif",
                    lineHeight: "1.6"
                  }}>
                    {blog.title}
                  </h4>

                  {/* Description */}
                  <p style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    marginBottom: "20px",
                    fontFamily: "'Cairo', sans-serif",
                    lineHeight: "1.7",
                    flex: 1
                  }}>
                    {blog.description}
                  </p>

                  {/* Link */}
                  <motion.a 
                    href={blog.link}
                    whileHover={{ x: -5 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#ff9800",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 700,
                      fontFamily: "'Cairo', sans-serif",
                      marginTop: "auto"
                    }}
                  >
                    {t('blog.readMore')}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: language === 'ar' ? -5 : 5 }}
                    >
                      <FaArrowLeft size={14} style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className="text-center mt-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "15px 40px",
              background: "linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.05) 100%)",
              border: "2px solid rgba(255,152,0,0.3)",
              borderRadius: "50px",
              color: "#ff9800",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "'Cairo', sans-serif",
              transition: "all 0.3s ease"
            }}
          >
            <FaNewspaper />
            {language === 'ar' ? 'عرض جميع الأخبار' : 'View All News'}
          </motion.a>
        </div>
      </div>
    </section>
  );
}