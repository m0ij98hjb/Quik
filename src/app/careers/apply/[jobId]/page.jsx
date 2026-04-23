"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { useParams, useRouter } from 'next/navigation';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { 
  FaBriefcase, FaUser, FaEnvelope, FaPhone, FaFileAlt,
  FaMapMarkerAlt, FaGraduationCap, FaIdCard, FaArrowLeft, FaBuilding
} from 'react-icons/fa';

const jobData = {
  '01': { title: 'مهندس IT', titleEn: 'IT Engineer', department: 'تقنية المعلومات', departmentEn: 'Information Technology', location: 'أبها', locationEn: 'Abha', type: 'دوام كامل', typeEn: 'Full Time' },
  '02': { title: 'مشرف محطة', titleEn: 'Station Supervisor', department: 'العمليات', departmentEn: 'Operations', location: 'خميس مشيط', locationEn: 'Khamis Mushait', type: 'دوام كامل', typeEn: 'Full Time' },
  '03': { title: 'موظف خدمة عملاء', titleEn: 'Customer Service', department: 'الخدمات', departmentEn: 'Services', location: 'جيزان', locationEn: 'Jazan', type: 'دوام كامل', typeEn: 'Full Time' },
  '04': { title: 'فني صيانة', titleEn: 'Maintenance Technician', department: 'الصيانة', departmentEn: 'Maintenance', location: 'أبها', locationEn: 'Abha', type: 'دوام كامل', typeEn: 'Full Time' },
  '05': { title: 'مسؤول موارد بشرية', titleEn: 'HR Officer', department: 'الموارد البشرية', departmentEn: 'Human Resources', location: 'أبها', locationEn: 'Abha', type: 'دوام كامل', typeEn: 'Full Time' },
  '06': { title: 'محاسب', titleEn: 'Accountant', department: 'المالية', departmentEn: 'Finance', location: 'أبها', locationEn: 'Abha', type: 'دوام كامل', typeEn: 'Full Time' },
};

export default function JobApplicationPage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const jobId = params.jobId;
  const job = jobData[jobId] || { title: 'وظيفة', titleEn: 'Job', department: '', departmentEn: '', location: '', locationEn: '', type: '', typeEn: '' };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    nationality: '',
    dateOfBirth: '',
    maritalStatus: '',
    education: '',
    university: '',
    graduationYear: '',
    experience: '',
    skills: '',
    cv: null,
    coverLetter: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(language === 'ar' 
      ? `تم إرسال طلبك لوظيفة ${job.title} بنجاح!`
      : `Your application for ${job.titleEn} has been submitted successfully!`);
    router.push('/careers');
  };

  const inputStyle = {
    width: '100%',
    padding: '16px',
    background: 'var(--bg-card)',
    border: '1px solid rgba(255,152,0,0.2)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    fontSize: '14px',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '10px'
  };

  return (
    <>
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container" style={{ paddingBottom: '80px' }}>
          <motion.button
            onClick={() => router.push('/careers')}
            whileHover={{ x: 5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'rgba(255,152,0,0.1)',
              border: '1px solid rgba(255,152,0,0.3)',
              borderRadius: '50px',
              color: '#ff9800',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '30px'
            }}
          >
            <FaArrowLeft size={14} style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
            {language === 'ar' ? 'العودة للوظائف' : 'Back to Jobs'}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              boxShadow: 'none'
            }}>
              <FaBriefcase style={{ fontSize: '40px', color: 'var(--text-primary)' }} />
            </div>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '15px'
            }}>
              {language === 'ar' ? 'التقديم على وظيفة' : 'Job Application'}
            </h1>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#ff9800',
              marginBottom: '20px'
            }}>
              {language === 'ar' ? job.title : job.titleEn}
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{
                padding: '8px 20px',
                background: 'rgba(255,152,0,0.1)',
                borderRadius: '10px',
                fontSize: '14px',
                color: '#ff9800'
              }}>
                <FaBuilding style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px' }} />
                {language === 'ar' ? job.department : job.departmentEn}
              </span>
              <span style={{
                padding: '8px 20px',
                background: 'rgba(255,152,0,0.1)',
                borderRadius: '10px',
                fontSize: '14px',
                color: '#ff9800'
              }}>
                <FaMapMarkerAlt style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px' }} />
                {language === 'ar' ? job.location : job.locationEn}
              </span>
              <span style={{
                padding: '8px 20px',
                background: 'rgba(255,152,0,0.1)',
                borderRadius: '10px',
                fontSize: '14px',
                color: '#ff9800'
              }}>
                {language === 'ar' ? job.type : job.typeEn}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleFormSubmit}>
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                padding: '50px',
                boxShadow: 'var(--shadow-md)'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '30px',
                  paddingBottom: '15px',
                  borderBottom: '2px solid rgba(255,152,0,0.2)'
                }}>
                  {language === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
                </h3>

                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      <FaUser style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                      {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full name'}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      <FaEnvelope style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                      {language === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'ar' ? 'example@email.com' : 'example@email.com'}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      <FaPhone style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                      {language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={language === 'ar' ? '05xxxxxxxx' : '05xxxxxxxx'}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      <FaMapMarkerAlt style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                      {language === 'ar' ? 'العنوان *' : 'Address *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder={language === 'ar' ? 'المدينة - الحي - الشارع' : 'City - District - Street'}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-4 mb-4">
                    <label style={labelStyle}>
                      <FaIdCard style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                      {language === 'ar' ? 'الجنسية *' : 'Nationality *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                      placeholder={language === 'ar' ? 'الجنسية' : 'Nationality'}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-4 mb-4">
                    <label style={labelStyle}>
                      {language === 'ar' ? 'تاريخ الميلاد *' : 'Date of Birth *'}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-4 mb-4">
                    <label style={labelStyle}>
                      {language === 'ar' ? 'الحالة الاجتماعية *' : 'Marital Status *'}
                    </label>
                    <select
                      required
                      value={formData.maritalStatus}
                      onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                      style={{...inputStyle, cursor: 'pointer'}}
                    >
                      <option value="" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'اختر الحالة' : 'Select Status'}</option>
                      <option value="single" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'أعزب/عزباء' : 'Single'}</option>
                      <option value="married" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'متزوج/ة' : 'Married'}</option>
                    </select>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '30px',
                  marginTop: '40px',
                  paddingBottom: '15px',
                  borderBottom: '2px solid rgba(255,152,0,0.2)'
                }}>
                  {language === 'ar' ? 'التعليم والمؤهلات' : 'Education & Qualifications'}
                </h3>

                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      <FaGraduationCap style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                      {language === 'ar' ? 'المؤهل العلمي *' : 'Education Level *'}
                    </label>
                    <select
                      required
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      style={{...inputStyle, cursor: 'pointer'}}
                    >
                      <option value="" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'اختر المؤهل' : 'Select Education'}</option>
                      <option value="highschool" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'ثانوي عام' : 'High School'}</option>
                      <option value="diploma" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'دبلوم' : 'Diploma'}</option>
                      <option value="bachelor" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'بكالوريوس' : 'Bachelor'}</option>
                      <option value="master" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'ماجستير' : 'Master'}</option>
                      <option value="phd" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'دكتوراه' : 'PhD'}</option>
                    </select>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      {language === 'ar' ? 'الجامعة/المعهد *' : 'University/Institute *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      placeholder={language === 'ar' ? 'اسم الجامعة' : 'University name'}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      {language === 'ar' ? 'سنة التخرج *' : 'Graduation Year *'}
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.graduationYear}
                      onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                      placeholder="2023"
                      min="1950"
                      max="2026"
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-lg-6 mb-4">
                    <label style={labelStyle}>
                      <FaFileAlt style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                      {language === 'ar' ? 'سنوات الخبرة *' : 'Years of Experience *'}
                    </label>
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      style={{...inputStyle, cursor: 'pointer'}}
                    >
                      <option value="" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'اختر سنوات الخبرة' : 'Select Experience'}</option>
                      <option value="0-1" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'أقل من سنة' : 'Less than 1 year'}</option>
                      <option value="1-3" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? '1-3 سنوات' : '1-3 years'}</option>
                      <option value="3-5" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? '3-5 سنوات' : '3-5 years'}</option>
                      <option value="5-10" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? '5-10 سنوات' : '5-10 years'}</option>
                      <option value="10+" style={{ background: 'var(--bg-primary)' }}>{language === 'ar' ? 'أكثر من 10 سنوات' : 'More than 10 years'}</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label style={labelStyle}>
                    {language === 'ar' ? 'المهارات والقدرات *' : 'Skills & Abilities *'}
                  </label>
                  <textarea
                    required
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder={language === 'ar' ? 'اكتب مهاراتك...' : 'Write your skills...'}
                    rows="4"
                    style={{...inputStyle, resize: 'vertical'}}
                  />
                </div>

                <div className="mb-4">
                  <label style={labelStyle}>
                    <FaFileAlt style={{ marginLeft: language === 'ar' ? '8px' : '0', marginRight: language === 'ar' ? '0' : '8px', color: '#ff9800' }} />
                    {language === 'ar' ? 'السيرة الذاتية (PDF) *' : 'CV/Resume (PDF) *'}
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })}
                    style={{...inputStyle, cursor: 'pointer'}}
                  />
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '8px'
                  }}>
                    {language === 'ar' ? 'الملفات المسموحة: PDF, DOC, DOCX (الحد الأقصى 5MB)' : 'Allowed files: PDF, DOC, DOCX (Max 5MB)'}
                  </p>
                </div>

                <div className="mb-4">
                  <label style={labelStyle}>
                    {language === 'ar' ? 'رسالة تقديمية (اختياري)' : 'Cover Letter (Optional)'}
                  </label>
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder={language === 'ar' ? 'اكتب رسالتك التقديمية...' : 'Write cover letter...'}
                    rows="4"
                    style={{...inputStyle, resize: 'vertical'}}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '20px',
                    background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 700,
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {language === 'ar' ? 'إرسال الطلب' : 'Submit Application'}
                  <FaArrowLeft style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
}
