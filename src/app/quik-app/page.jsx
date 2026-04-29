"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  FaMobileAlt, FaWallet, FaMapMarkedAlt, FaStar,
  FaApple, FaGooglePlay, FaDownload, FaArrowRight, FaArrowLeft,
  FaUserPlus, FaRocket
} from 'react-icons/fa';

export default function QuikAppPage() {
  const { language, t } = useLanguage();

  const features = [
    {
      id: 1,
      icon: FaStar,
      title: t('quik-app.features.loyalty.title'),
      description: t('quik-app.features.loyalty.description'),
    },
    {
      id: 2,
      icon: FaWallet,
      title: t('quik-app.features.payment.title'),
      description: t('quik-app.features.payment.description'),
    },
    {
      id: 3,
      icon: FaMapMarkedAlt,
      title: t('quik-app.features.locator.title'),
      description: t('quik-app.features.locator.description'),
    },
    {
      id: 4,
      icon: FaDownload,
      title: t('quik-app.features.offers.title'),
      description: t('quik-app.features.offers.description'),
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Hero Section - Ultra Professional Dark Theme */}
      <section style={{
        padding: '160px 0 120px',
        background: '#050505',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,152,0,0.1)'
      }}>
        {/* Mesh Gradient / Background Glows */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(255,152,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(230,126,34,0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(10,10,10,1) 0%, #050505 100%)
          `,
          zIndex: 0
        }} />

        {/* Animated Grid Pattern - More Subtle */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          zIndex: 1
        }} />

        {/* Floating Decorative Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              position: 'absolute',
              top: `${15 + i * 15}%`,
              left: `${10 + (i % 3) * 30}%`,
              width: '100px',
              height: '100px',
              background: 'rgba(255,152,0,0.03)',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              zIndex: 1
            }}
          />
        ))}

        {/* Main Background Glow */}
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255,152,0,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="row align-items-center justify-content-between g-lg-5">
            {/* Content Side - Wider to fit title on one line */}
            <div className="col-lg-7 order-lg-1 order-2">
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  padding: '40px 0',
                  background: 'transparent',
                  textAlign: language === 'ar' ? 'right' : 'left',
                  direction: language === 'ar' ? 'rtl' : 'ltr'
                }}
              >
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 24px',
                  background: 'rgba(255,152,0,0.1)',
                  border: '1px solid rgba(255,152,0,0.2)',
                  borderRadius: '50px',
                  color: '#ff9800',
                  fontSize: '14px',
                  fontWeight: 700,
                  marginBottom: '25px',
                  fontFamily: "'Cairo', sans-serif"
                }}>
                  <FaStar size={12} />
                  {t('quik-app.hero.badge')}
                </span>

                <h1 style={{
                  fontSize: 'clamp(35px, 5.5vw, 68px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '25px',
                  fontFamily: "'Cairo', sans-serif",
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{ color: '#ff9800' }}>{t('quik-app.hero.titleHighlight')}</span> {t('quik-app.hero.titleMain')}
                </h1>

                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '550px',
                  marginBottom: '45px',
                  fontFamily: "'Cairo', sans-serif",
                  lineHeight: '1.8'
                }}>
                  {t('quik-app.hero.description')}
                </p>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {/* Apple App Store */}
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 28px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '16px',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff9800'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <FaApple size={30} />
                    <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                      <div style={{ fontSize: '10px', opacity: 0.5 }}>Download on the</div>
                      <div style={{ fontSize: '18px', fontWeight: 700 }}>App Store</div>
                    </div>
                  </motion.a>

                  {/* Google Play */}
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 28px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '16px',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff9800'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <FaGooglePlay size={26} />
                    <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                      <div style={{ fontSize: '10px', opacity: 0.5 }}>GET IT ON</div>
                      <div style={{ fontSize: '18px', fontWeight: 700 }}>Google Play</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Image Side - Smaller to give space to text */}
            <div className="col-lg-5 order-lg-2 order-1 mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: language === 'ar' ? -50 : 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  position: 'relative',
                  perspective: '1500px'
                }}
              >
                {/* Floating Elements Around Phone */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255,152,0,0.2)',
                    borderRadius: '15px',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255,152,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff9800',
                    zIndex: 2
                  }}
                >
                  <FaStar />
                </motion.div>

                <img
                  src="/quik-app-mockup.png"
                  alt="Quik App Mockup"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '40px',
                    filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.8))',
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 1
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <motion.h2 
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '15px',
                fontFamily: "'Cairo', sans-serif"
              }}>
              {t('quik-app.features.titleMain')} <span style={{ color: '#ff9800' }}>{t('quik-app.features.titleHighlight')}</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                fontFamily: "'Cairo', sans-serif"
              }}>
              {t('quik-app.features.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row"
          >
            {features.map((feature) => (
              <div key={feature.id} className="col-md-6 col-lg-3 mb-4">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -10, borderColor: '#ff9800', boxShadow: '0 25px 50px rgba(0,0,0,0.05)' }}
                  style={{
                    padding: '45px 30px',
                    background: 'var(--bg-card)',
                    borderRadius: '28px',
                    border: '1px solid var(--border-color)',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                      width: '75px',
                      height: '75px',
                      background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                      borderRadius: '22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 30px',
                      color: '#fff',
                      fontSize: '32px',
                      boxShadow: '0 15px 30px rgba(255,152,0,0.2)'
                    }}>
                    <feature.icon />
                  </motion.div>
                  <motion.h3 
                    variants={fadeInUp}
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '15px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeInUp}
                    style={{
                      fontSize: '15.5px',
                      color: 'var(--text-secondary)',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.7'
                    }}>
                    {feature.description}
                  </motion.p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section - Premium Design */}
      <section style={{ padding: '120px 0', background: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <motion.h2 
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '15px',
                fontFamily: "'Cairo', sans-serif"
              }}>
              {t('quik-app.howItWorks.titleMain')} <span style={{ color: '#ff9800' }}>{t('quik-app.howItWorks.titleHighlight')}</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                fontFamily: "'Cairo', sans-serif"
              }}>
              {t('quik-app.howItWorks.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row justify-content-center"
          >
            {[1, 2, 3].map((step) => (
              <div key={step} className="col-lg-4 col-md-6 mb-4">
                <motion.div
                  variants={fadeInUp}
                  style={{
                    position: 'relative',
                    padding: '40px 25px',
                    textAlign: 'center',
                    background: 'var(--bg-card)',
                    borderRadius: '24px',
                    border: '1px solid var(--border-color)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.02)',
                    height: '100%',
                    zIndex: 2
                  }}
                >
                  {/* Background Number */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.04, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '100px',
                      fontWeight: 900,
                      color: '#ff9800',
                      lineHeight: 1,
                      zIndex: -1,
                      userSelect: 'none'
                    }}>
                    0{step}
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                      width: '65px',
                      height: '65px',
                      background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 25px',
                      color: '#fff',
                      fontSize: '28px',
                      boxShadow: '0 12px 24px rgba(255,152,0,0.2)'
                    }}>
                    {step === 1 ? <FaDownload /> : step === 2 ? <FaUserPlus /> : <FaRocket />}
                  </motion.div>

                  <motion.h3 
                    variants={fadeInUp}
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                    {t(`quik-app.howItWorks.step${step}.title`)}
                  </motion.h3>
                  <motion.p 
                    variants={fadeInUp}
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--text-secondary)',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.6'
                    }}>
                    {t(`quik-app.howItWorks.step${step}.description`)}
                  </motion.p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              padding: '70px 40px',
              background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
              borderRadius: '40px',
              textAlign: 'center',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '1050px',
              margin: '0 auto',
              boxShadow: '0 40px 80px rgba(255,152,0,0.25)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.h2 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                style={{
                  fontSize: 'clamp(30px, 5vw, 48px)',
                  fontWeight: 900,
                  marginBottom: '20px',
                  fontFamily: "'Cairo', sans-serif"
                }}
              >
                {t('quik-app.cta.title')}
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: '19px',
                  maxWidth: '650px',
                  margin: '0 auto 40px',
                  opacity: 0.95,
                  fontFamily: "'Cairo', sans-serif",
                  lineHeight: '1.7'
                }}
              >
                {t('quik-app.cta.description')}
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '18px 45px',
                    background: '#1a1a1a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '18px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: "'Cairo', sans-serif",
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                >
                  <FaDownload />
                  {t('quik-app.hero.downloadApp')}
                </motion.button>
              </motion.div>
            </div>

            {/* Decorative Background Circles */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: '#fff',
                zIndex: 0
              }} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.06, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-60px',
                left: '-60px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: '#fff',
                zIndex: 0
              }} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
