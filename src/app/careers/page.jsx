"use client";

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaBriefcase, FaUsers, FaGraduationCap, FaHeartbeat, 
  FaChartLine, FaHandshake, FaMapMarkerAlt, FaClock,
  FaArrowLeft, FaBuilding
} from 'react-icons/fa';

const benefits = [
  { id: '01', title: 'تأمين طبي شامل', titleEn: 'Comprehensive Medical Insurance', icon: FaHeartbeat, description: 'تأمين طبي للكادر الوظيفي وعائلاتهم', descriptionEn: 'Medical insurance for employees and their families' },
  { id: '02', title: 'فرص التطوير المهني', titleEn: 'Professional Development', icon: FaGraduationCap, description: 'برامج تدريب وتطوير مستمرة', descriptionEn: 'Continuous training and development programs' },
  { id: '03', title: 'بيئة عمل محفزة', titleEn: 'Motivating Work Environment', icon: FaUsers, description: 'فريق عمل داعم ومتعاون', descriptionEn: 'Supportive and cooperative team' },
  { id: '04', title: 'رواتب تنافسية', titleEn: 'Competitive Salaries', icon: FaChartLine, description: 'حزمة رواتب ومزايا جذابة', descriptionEn: 'Attractive salary and benefits package' },
  { id: '05', title: 'استقرار وظيفي', titleEn: 'Job Stability', icon: FaBuilding, description: 'عمل في شركة رائدة ومستقرة', descriptionEn: 'Work in a leading and stable company' },
  { id: '06', title: 'توازن الحياة والعمل', titleEn: 'Work-Life Balance', icon: FaClock, description: 'ساعات عمل مرنة ومناسبة', descriptionEn: 'Flexible and appropriate working hours' },
];

const jobOpenings = [
  { 
    id: '01', 
    title: 'مهندس IT', titleEn: 'IT Engineer',
    department: 'تقنية المعلومات', departmentEn: 'Information Technology',
    location: 'أبها', locationEn: 'Abha',
    type: 'دوام كامل', typeEn: 'Full Time',
    description: 'مهندس تقنية معلومات لإدارة الشبكات والأنظمة التقنية', descriptionEn: 'IT Engineer to manage networks and technical systems'
  },
  { 
    id: '02', 
    title: 'مشرف محطة', titleEn: 'Station Supervisor',
    department: 'العمليات', departmentEn: 'Operations',
    location: 'خميس مشيط', locationEn: 'Khamis Mushait',
    type: 'دوام كامل', typeEn: 'Full Time',
    description: 'مطلوب مشرف لإدارة وتشغيل محطة الوقود', descriptionEn: 'Supervisor required to manage and operate the fuel station'
  },
  { 
    id: '03', 
    title: 'موظف خدمة عملاء', titleEn: 'Customer Service',
    department: 'الخدمات', departmentEn: 'Services',
    location: 'جيزان', locationEn: 'Jazan',
    type: 'دوام كامل', typeEn: 'Full Time',
    description: 'موظف خدمة عملاء لتقديم خدمة متميزة للعملاء', descriptionEn: 'Customer service employee to provide distinguished service to customers'
  },
  { 
    id: '04', 
    title: 'فني صيانة', titleEn: 'Maintenance Technician',
    department: 'الصيانة', departmentEn: 'Maintenance',
    location: 'أبها', locationEn: 'Abha',
    type: 'دوام كامل', typeEn: 'Full Time',
    description: 'فني صيانة سيارات ذو خبرة في مجال الصيانة', descriptionEn: 'Experienced car maintenance technician in the maintenance field'
  },
  { 
    id: '05', 
    title: 'مسؤول موارد بشرية', titleEn: 'HR Officer',
    department: 'الموارد البشرية', departmentEn: 'Human Resources',
    location: 'أبها', locationEn: 'Abha',
    type: 'دوام كامل', typeEn: 'Full Time',
    description: 'مسؤول موارد بشرية لإدارة عمليات التوظيف والتدريب', descriptionEn: 'HR officer to manage recruitment and training operations'
  },
  { 
    id: '06', 
    title: 'محاسب', titleEn: 'Accountant',
    department: 'المالية', departmentEn: 'Finance',
    location: 'أبها', locationEn: 'Abha',
    type: 'دوام كامل', typeEn: 'Full Time',
    description: 'نبحث عن محاسب ذو خبرة لإدارة الحسابات والتقارير المالية', descriptionEn: 'We are looking for an experienced accountant to manage accounts and financial reports'
  },
];

export default function CareersPage() {
  const typedRef = useRef(null);
  const typedInstanceRef = useRef(null);
  const router = useRouter();
  const { language } = useLanguage();

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        // Destroy previous instance if exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }
        
        typedInstanceRef.current = new window.Typed(typedRef.current, {
          strings: language === 'ar' ? ['انضم لفريقنا', 'ابنِ مستقبلك معنا'] : ['Join Our Team', 'Build Your Future With Us'],
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

  const handleApplyClick = (jobId) => {
    router.push(`/careers/apply/${jobId}`);
  };

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
                marginBottom: '20px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'كن جزءاً من نجاحنا' : 'Be Part of Our Success'}
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
                <span ref={typedRef} style={{ display: 'inline-block', minWidth: '300px' }}></span>
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
                  ? 'انضم إلى فريق كويك وابنِ مستقبلك المهني في بيئة عمل محفزة وداعمة'
                  : 'Join the Quik team and build your professional future in a motivating and supportive work environment'}
              </p>

              {/* Stats */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '50px',
                flexWrap: 'wrap'
              }}>
                {[{ num: '500+', label: language === 'ar' ? 'موظف' : 'Employees' }, { num: '9', label: language === 'ar' ? 'محطة' : 'Stations' }, { num: '29', label: language === 'ar' ? 'سنة خبرة' : 'Years Experience' }].map((stat, i) => (
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

        {/* Why Join Us */}
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
                  <>لماذا <span style={{ color: '#ff9800' }}>تنضم إلينا؟</span></>
                ) : (
                  <>Why <span style={{ color: '#ff9800' }}>Join Us?</span></>
                )}
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'نقدم لكم بيئة عمل مثالية مع مزايا تنافسية' : 'We provide an ideal work environment with competitive benefits'}
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="row">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
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
                      left: '15px',
                      fontSize: '48px',
                      fontWeight: 800,
                      color: 'rgba(255,152,0,0.1)',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: 1
                    }}>
                      {benefit.id}
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
                      <benefit.icon style={{ fontSize: '28px', color: 'var(--text-primary)' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {language === 'ar' ? benefit.title : benefit.titleEn}
                    </h3>

                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      marginBottom: '20px',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.7'
                    }}>
                      {language === 'ar' ? benefit.description : benefit.descriptionEn}
                    </p>

                    {/* Hover Glow - Removed */}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
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
                  <>الوظائف <span style={{ color: '#ff9800' }}>المتاحة</span></>
                ) : (
                  <>Available <span style={{ color: '#ff9800' }}>Job Openings</span></>
                )}
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: 'var(--text-muted)',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'اكتشف الفرص الوظيفية المتاحة وانضم لفريقنا' : 'Discover available job opportunities and join our team'}
              </p>
            </motion.div>

            {/* Job Cards */}
            <div className="row">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="col-lg-6 mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    style={{
                      padding: '40px',
                      background: 'var(--bg-card)',
                      borderRadius: '20px',
                      border: '1px solid var(--border-color)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)'
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
                      {job.id}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: 'none'
                      }}
                    >
                      <FaBriefcase style={{ fontSize: '24px', color: 'var(--text-primary)' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '15px',
                      fontFamily: "'Cairo', sans-serif"
                    }}>
                      {language === 'ar' ? job.title : job.titleEn}
                    </h3>

                    {/* Job Details */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '15px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        background: 'rgba(255,152,0,0.1)',
                        borderRadius: '8px',
                        fontSize: '13px',
                        color: '#ff9800',
                        fontFamily: "'Cairo', sans-serif"
                      }}>
                        <FaBuilding size={12} />
                        {language === 'ar' ? job.department : job.departmentEn}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        background: 'rgba(255,152,0,0.1)',
                        borderRadius: '8px',
                        fontSize: '13px',
                        color: '#ff9800',
                        fontFamily: "'Cairo', sans-serif"
                      }}>
                        <FaMapMarkerAlt size={12} />
                        {language === 'ar' ? job.location : job.locationEn}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        background: 'rgba(255,152,0,0.1)',
                        borderRadius: '8px',
                        fontSize: '13px',
                        color: '#ff9800',
                        fontFamily: "'Cairo', sans-serif"
                      }}>
                        <FaClock size={12} />
                        {language === 'ar' ? job.type : job.typeEn}
                      </div>
                    </div>

                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      marginBottom: '25px',
                      fontFamily: "'Cairo', sans-serif",
                      lineHeight: '1.7'
                    }}>
                      {language === 'ar' ? job.description : job.descriptionEn}
                    </p>

                    {/* Apply Button */}
                    <motion.button
                      onClick={() => handleApplyClick(job.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 30px',
                        background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                        borderRadius: '50px',
                        color: 'var(--text-primary)',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 700,
                        fontFamily: "'Cairo', sans-serif",
                        boxShadow: 'none'
                      }}
                    >
                      {language === 'ar' ? 'التقديم على الوظيفة' : 'Apply Now'}
                      <FaArrowLeft size={12} style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                    </motion.button>

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
                {language === 'ar' ? 'لم تجد الوظيفة المناسبة؟' : 'Did not find the right job?'}
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                marginBottom: '30px',
                fontFamily: "'Cairo', sans-serif"
              }}>
                {language === 'ar' ? 'أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة' : 'Send your CV and we will contact you when a suitable opportunity is available'}
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
                {language === 'ar' ? 'إرسال السيرة الذاتية' : 'Send CV'}
                <FaArrowLeft style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
