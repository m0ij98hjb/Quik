"use client";

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../../contexts/LanguageContext';
import {
  FaBullseye, FaEye, FaHeart,
  FaUsers, FaAward, FaLeaf, FaHandshake, FaArrowLeft
} from 'react-icons/fa';

const getValues = (language) => language === 'ar' ? [
  { id: '01', title: 'التميز', icon: FaAward, description: 'نسعى دائماً للتميز في كل ما نقدمه من خدمات ومنتجات' },
  { id: '02', title: 'النزاهة', icon: FaHeart, description: 'نعمل بشفافية ومصداقية مع عملائنا وشركائنا' },
  { id: '03', title: 'الابتكار', icon: FaBullseye, description: 'نتبنى أحدث التقنيات والابتكارات في مجال الوقود' },
  { id: '04', title: 'الاستدامة', icon: FaLeaf, description: 'نلتزم بالحفاظ على البيئة وتقديم حلول مستدامة' },
  { id: '05', title: 'الشراكة', icon: FaHandshake, description: 'نؤمن بأهمية الشراكات الناجحة مع عملائنا' },
  { id: '06', title: 'العملاء', icon: FaUsers, description: 'رضا العملاء هو أولويتنا القصوى في كل وقت' },
] : [
  { id: '01', title: 'Excellence', icon: FaAward, description: 'We always strive for excellence in all services and products we provide' },
  { id: '02', title: 'Integrity', icon: FaHeart, description: 'We work with transparency and credibility with our customers and partners' },
  { id: '03', title: 'Innovation', icon: FaBullseye, description: 'We adopt the latest technologies and innovations in the fuel field' },
  { id: '04', title: 'Sustainability', icon: FaLeaf, description: 'We are committed to preserving the environment and providing sustainable solutions' },
  { id: '05', title: 'Partnership', icon: FaHandshake, description: 'We believe in the importance of successful partnerships with our customers' },
  { id: '06', title: 'Customers', icon: FaUsers, description: 'Customer satisfaction is our top priority at all times' },
];

const getStrategicGoals = (language) => language === 'ar' ? [
  { id: '01', title: 'الريادة', description: 'السعي للريادة في مجال إدارة محطات الوقود' },
  { id: '02', title: 'السلامة', description: 'الالتزام بأعلى معايير السلامة والجودة' },
  { id: '03', title: 'الكفاءة', description: 'تحقيق الكفاءة التشغيلية في جميع محطاتنا' },
  { id: '04', title: 'النمو', description: 'النمو المستدام والتوسع في المناطق الجديدة' },
  { id: '05', title: 'الشراكة والتكامل', description: 'بناء شراكات استراتيجية مع الشركاء' },
  { id: '06', title: 'التوسع', description: 'التوسع الجغرافي في جميع أنحاء المملكة' },
] : [
  { id: '01', title: 'Leadership', description: 'Striving for leadership in fuel station management' },
  { id: '02', title: 'Safety', description: 'Commitment to the highest safety and quality standards' },
  { id: '03', title: 'Efficiency', description: 'Achieving operational efficiency in all our stations' },
  { id: '04', title: 'Growth', description: 'Sustainable growth and expansion into new regions' },
  { id: '05', title: 'Partnership', description: 'Building strategic partnerships with partners' },
  { id: '06', title: 'Expansion', description: 'Geographic expansion throughout the Kingdom' },
];

export default function AboutPage() {
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        // Destroy previous instance if exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }
        
        typedInstanceRef.current = new window.Typed(typedRef.current, {
          strings: language === 'ar'
            ? ['عن <span style="color:#ff9800">كويك</span>', t('about.hero.typed2')]
            : ['About <span style="color:#ff9800">Quik</span>', 'Our Vision &amp; Mission'],
          typeSpeed: 80,
          backSpeed: 40,
          showCursor: true,
          cursorChar: '|',
          loop: true,
          startDelay: 300,
          html: true,
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
  }, [language, t]);

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
                {t('about.hero.tagline')}
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
                <span ref={typedRef} style={{ display: 'inline-block', minWidth: language === 'ar' ? '300px' : '350px' }}></span>
              </h1>

              <p style={{
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                margin: '0 auto 30px',
                fontFamily: "'Cairo', sans-serif",
                lineHeight: '1.8'
              }}>
                {t('about.hero.description')}
              </p>

              {/* Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '50px',
                flexWrap: 'wrap'
              }}>
                {[{ num: '6000+', label: t('about.stats.cars') }, { num: '9', label: t('about.stats.stations') }, { num: '29', label: t('about.stats.experience') }].map((stat, i) => (
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
                      color: 'var(--text-dim)',
                      fontFamily: "'Cairo', sans-serif"
                    }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company History */}
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
                  <>تأسيس <span style={{ color: '#ff9800' }}>شركة كويك</span></>
                ) : (
                  <><span style={{ color: '#ff9800' }}>Quik</span> Company</>
                )}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {t('about.history.subtitle')}
              </p>
            </motion.div>

            {/* History Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                padding: '50px',
                background: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)'
              }}
            >
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
                01
              </div>

              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: '2',
                fontFamily: "'Cairo', sans-serif",
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto'
              }}>
                {language === 'ar'
                  ? 'أُسست مجموعة تركي عبد العزيز آل عامر التجارية منذ أكثر من ثلاثين عامًّا وكان من أول نشاطاتها تشغيل محطات الوقود ومراكز خدمة السيارات وتطورت لشركة كويك لتشغيل المحطات ومراكز الخدمة لتتميز بعناصر تنافسية تجعل منها إحدى أفضل الشركات المتخصصة في إدارة محطات الوقود وذلك باستقطاب الكوادر المهنية والفنية المتخصصة في هذا المجال وتقديم أحدث الأساليب التي تلبي احتياجات العملاء لتحقق تطلعاتهم وتعكس الصورة التي تستحقها مملكتنا الغالية'
                  : 'The Turki Abdulaziz Al-Amer Commercial Group was established more than thirty years ago, and one of its first activities was operating fuel stations and car service centers. It evolved into Quik Company for operating stations and service centers, distinguished by competitive elements that make it one of the best specialized companies in fuel station management, by attracting professional and technical cadres specialized in this field and presenting the latest methods that meet customer needs to achieve their aspirations and reflect the image that our precious Kingdom deserves.'}
              </p>

              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <motion.a
                  href="https://quikstations.com/uploads/img/about/1721482867-profile%20quik%20station..pdf"
                  target="_blank"
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
                  {language === 'ar' ? 'تنزيل بروفايل الشركة' : 'Download Company Profile'}
                  <FaArrowLeft style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
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
                  <>رؤيتنا <span style={{ color: '#ff9800' }}>ورسالتنا</span></>
                ) : (
                  <><span style={{ color: '#ff9800' }}>Our</span> Vision & Mission</>
                )}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar'
                  ? 'نسعى لتحقيق التميز في مجال خدمات الوقود'
                  : 'We strive to achieve excellence in fuel services'}
              </p>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="row">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="col-lg-6 mb-4"
              >
                <div style={{
                  padding: '40px',
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)'
                }}>
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
                    01
                  </div>

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
                    <FaEye style={{ fontSize: '28px', color: 'var(--text-primary)' }} />
                  </motion.div>

                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {t('about.vision.title')}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                    fontFamily: "'Cairo', sans-serif",
                    lineHeight: '1.7'
                  }}>
                    {language === 'ar'
                      ? 'أن نكون الشركة الرائدة في مجال خدمات الوقود في المملكة العربية السعودية، من خلال تقديم خدمات عالية الجودة تلبي تطلعات عملائنا وتساهم في تطوير القطاع.'
                      : 'To be the leading company in fuel services in the Kingdom of Saudi Arabia, by providing high-quality services that meet our customers aspirations and contribute to developing the sector.'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="col-lg-6 mb-4"
              >
                <div style={{
                  padding: '40px',
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)'
                }}>
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
                    02
                  </div>

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
                    <FaBullseye style={{ fontSize: '28px', color: 'var(--text-primary)' }} />
                  </motion.div>

                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {t('about.mission.title')}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                    fontFamily: "'Cairo', sans-serif",
                    lineHeight: '1.7'
                  }}>
                    {language === 'ar'
                      ? 'تقديم خدمات وقود متكاملة ومتميزة لعملائنا من خلال شبكة محطات حديثة ومجهزة بأحدث التقنيات، مع التزامنا بأعلى معايير الجودة والسلامة.'
                      : 'Providing integrated and distinguished fuel services to our customers through a modern network of stations equipped with the latest technologies, with our commitment to the highest quality and safety standards.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
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
                  <>الأهداف <span style={{ color: '#ff9800' }}>الاستراتيجية</span></>
                ) : (
                  <><span style={{ color: '#ff9800' }}>Strategic</span> Goals</>
                )}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'الأهداف التي نعمل على تحقيقها' : 'The goals we work to achieve'}
              </p>
            </motion.div>

            {/* Strategic Goals */}
            <div className="row">
              {getStrategicGoals(language).map((goal, index) => (
                <motion.div
                  key={goal.id}
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
                      textAlign: 'center'
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
                      {goal.id}
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
                        margin: '0 auto 20px',
                        boxShadow: 'none'
                      }}
                    >
                      <FaBullseye style={{ fontSize: '28px', color: 'var(--text-primary)' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {goal.title}
                    </h3>

                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.7'
                    }}>
                      {goal.description}
                    </p>

                    {/* Hover Glow - Removed */}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section style={{ padding: '80px 0', position: 'relative' }}>
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
                  <>قيمنا <span style={{ color: '#ff9800' }}>الأساسية</span></>
                ) : (
                  <><span style={{ color: '#ff9800' }}>Our</span> Core Values</>
                )}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'القيم التي نؤمن بها ونعمل بها' : 'The values we believe in and work with'}
              </p>
            </motion.div>

            {/* Values */}
            <div className="row">
              {getValues(language).map((value, index) => (
                <motion.div
                  key={value.id}
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
                      overflow: 'hidden'
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
                      {value.id}
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
                      <value.icon style={{ fontSize: '28px', color: 'var(--text-primary)' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {value.title}
                    </h3>

                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      marginBottom: '20px',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.7'
                    }}>
                      {value.description}
                    </p>

                    {/* Link */}
                    <a href="#" style={{
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
                      {language === 'ar' ? 'المزيد' : 'More'}
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
                {language === 'ar' ? 'هل تريد معرفة المزيد عنا؟' : 'Want to know more about us?'}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                marginBottom: '30px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'فريقنا جاهز للإجابة على جميع استفساراتكم' : 'Our team is ready to answer all your inquiries'}
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
