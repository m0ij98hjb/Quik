"use client";

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../../contexts/LanguageContext';
import {
  FaGasPump, FaUtensils, FaMugHot, FaShower, FaChild,
  FaMosque, FaShoppingBag, FaCreditCard, FaCarSide,
  FaWrench, FaCircle, FaOilCan, FaChargingStation,
  FaSprayCan, FaCompressArrowsAlt, FaArrowLeft
} from 'react-icons/fa';

const getServices = (language) => language === 'ar' ? [
  { id: '01', title: 'وقود', icon: FaGasPump, description: 'تزويد جميع أنواع الوقود بأعلى جودة ومعايير عالمية' },
  { id: '02', title: 'مطاعم', icon: FaUtensils, description: 'مطاعم متنوعة تقدم أشهى الأطباق المحلية والعالمية' },
  { id: '03', title: 'مقاهي وكافيهات', icon: FaMugHot, description: 'مقاهي راقية تقدم أفضل أنواع القهوة والمشروبات' },
  { id: '04', title: 'دوارات مياه', icon: FaShower, description: 'خدمات دوارات مياه نظيفة ومجهزة بأحدث المعدات' },
  { id: '05', title: 'ألعاب أطفال', icon: FaChild, description: 'مناطق أطفال آمنة ومجهزة بأحدث ألعاب الترفيه' },
  { id: '06', title: 'مساجد رجال ونساء', icon: FaMosque, description: 'مساجد مجهزة ومريحة للرجال والنساء' },
  { id: '07', title: 'سوبر ماركت', icon: FaShoppingBag, description: 'سوبر ماركت شامل يوفر جميع احتياجاتك' },
  { id: '08', title: 'صراف آلي', icon: FaCreditCard, description: 'خدمات صراف آلي متوفرة على مدار الساعة' },
  { id: '09', title: 'غسيل سيارات', icon: FaCarSide, description: 'خدمات غسيل سيارات احترافية بأحدث التقنيات' },
  { id: '10', title: 'صيانة', icon: FaWrench, description: 'خدمات صيانة شاملة لجميع أنواع السيارات' },
  { id: '11', title: 'إطارات', icon: FaCircle, description: 'خدمات تبديل وإصلاح الإطارات بأفضل الماركات' },
  { id: '12', title: 'تغيير زيوت', icon: FaOilCan, description: 'خدمات تغيير الزيوت بأعلى أنواع الزيوت' },
  { id: '13', title: 'شاحن سيارات كهربائية', icon: FaChargingStation, description: 'محطات شحن للسيارات الكهربائية بأحدث التقنيات' },
  { id: '14', title: 'زينة سيارات', icon: FaSprayCan, description: 'خدمات زينة وتجميل السيارات بلمسة احترافية' },
  { id: '15', title: 'هواء وماء', icon: FaCompressArrowsAlt, description: 'خدمات تعبئة الهواء والماء للسيارات مجاناً' }
] : [
  { id: '01', title: 'Fuel', icon: FaGasPump, description: 'Supplying all types of fuel with the highest quality and international standards' },
  { id: '02', title: 'Restaurants', icon: FaUtensils, description: 'Various restaurants offering the finest local and international dishes' },
  { id: '03', title: 'Cafes', icon: FaMugHot, description: 'Elegant cafes offering the best types of coffee and beverages' },
  { id: '04', title: 'Water Dispensers', icon: FaShower, description: 'Clean water dispensing services equipped with the latest equipment' },
  { id: '05', title: 'Kids Games', icon: FaChild, description: 'Safe children areas equipped with the latest entertainment games' },
  { id: '06', title: 'Mosques', icon: FaMosque, description: 'Equipped and comfortable mosques for men and women' },
  { id: '07', title: 'Supermarket', icon: FaShoppingBag, description: 'Comprehensive supermarket providing all your needs' },
  { id: '08', title: 'ATM', icon: FaCreditCard, description: 'ATM services available around the clock' },
  { id: '09', title: 'Car Wash', icon: FaCarSide, description: 'Professional car wash services with the latest technologies' },
  { id: '10', title: 'Maintenance', icon: FaWrench, description: 'Comprehensive maintenance services for all types of cars' },
  { id: '11', title: 'Tires', icon: FaCircle, description: 'Tire replacement and repair services with the best brands' },
  { id: '12', title: 'Oil Change', icon: FaOilCan, description: 'Oil change services with the highest quality oils' },
  { id: '13', title: 'EV Charging', icon: FaChargingStation, description: 'Electric vehicle charging stations with the latest technologies' },
  { id: '14', title: 'Car Detailing', icon: FaSprayCan, description: 'Car detailing and grooming services with a professional touch' },
  { id: '15', title: 'Air & Water', icon: FaCompressArrowsAlt, description: 'Free air and water filling services for cars' }
];

export default function ServicesPage() {
  const typedRef = useRef(null);
  const { language, t } = useLanguage();

  const services = getServices(language);

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        new window.Typed(typedRef.current, {
          strings: language === 'ar' ? ['خدماتنا المتميزة', 'خدمات عالمية المستوى'] : ['Our Premium Services', 'World-Class Services'],
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
    return () => clearTimeout(timer);
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
                fontFamily: "'Cairo', sans-serif"
              }}>
                <span ref={typedRef} style={{ display: 'inline-block', minWidth: language === 'ar' ? '300px' : '400px' }}></span>
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
                  ? 'مجموعة متكاملة من الخدمات عالية الجودة تلبي جميع احتياجاتكم في محطات كويك'
                  : 'A complete set of high-quality services that meet all your needs at Quik stations'}
              </p>

              {/* Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '50px',
                flexWrap: 'wrap'
              }}>
                {[{ num: '15+', label: language === 'ar' ? 'خدمة' : 'Services' }, { num: '24/7', label: language === 'ar' ? 'طوال اليوم' : 'All Day' }, { num: '33', label: language === 'ar' ? 'محطات' : 'Stations' }].map((stat, i) => (
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

        {/* Services Grid */}
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
                  <>خدماتنا <span style={{ color: '#ff9800' }}>المتكاملة</span></>
                ) : (
                  <>Our <span style={{ color: '#ff9800' }}>Integrated</span> Services</>
                )}
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' 
                  ? 'نوفر لكم مجموعة شاملة من الخدمات في محطاتنا لضمان راحتكم ورضاكم'
                  : 'We provide a comprehensive range of services at our stations to ensure your comfort and satisfaction'}
              </p>
            </motion.div>

            {/* Services */}
            <div className="row">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
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
                      background: 'linear-gradient(135deg, var(--bg-glass) 0%, var(--bg-card) 100%)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255,152,0,0.15)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    {/* Number Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      fontSize: '48px',
                      fontWeight: 800,
                      color: 'rgba(255,152,0,0.1)',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: 1
                    }}>
                      {service.id}
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
                      <service.icon style={{ fontSize: '28px', color: 'var(--text-primary)' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {service.title}
                    </h3>

                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      marginBottom: '20px',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.7'
                    }}>
                      {service.description}
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
                      {language === 'ar' ? 'قراءة المزيد' : 'Read More'}
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
                {language === 'ar' ? 'هل تحتاج إلى خدمة محددة؟' : 'Need a specific service?'}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                marginBottom: '30px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'فريقنا جاهز لمساعدتك في أي وقت' : 'Our team is ready to help you at any time'}
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
