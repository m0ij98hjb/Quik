"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowLeft,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";

const getContactCards = (t) => [
  {
    icon: FaMapMarkerAlt,
    title: t('footer.address'),
    content: ["أبها - طريق الملك فهد", "مدينة سلطان"],
    color: "#ff9800"
  },
  {
    icon: FaPhone,
    title: t('footer.phone'),
    content: ["920004588"],
    link: "tel:920004588",
    color: "#ff9800"
  },
  {
    icon: FaEnvelope,
    title: t('footer.email'),
    content: ["turkialamer@yahoo.com"],
    link: "mailto:turkialamer@yahoo.com",
    color: "#ff9800"
  },
  {
    icon: FaWhatsapp,
    title: t('contact.info.whatsapp') || "WhatsApp",
    content: ["+966 509 260 777"],
    link: "https://wa.me/966509260777",
    color: "#ff9800"
  }
];

export default function ContactFormSection() {
  const { language, t } = useLanguage();
  const contactCards = getContactCards(t);

  return (
    <section
      style={{
        padding: "120px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Placeholder Styles */}
      <style>{`
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: var(--text-muted, rgba(255,255,255,0.5));
          opacity: 1;
        }
      `}</style>
      {/* Background Grid */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(255,152,0,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,152,0,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        zIndex: 0
      }} />

      {/* Background Grid */}

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
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
            {t('contact.subtitle')}
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "20px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? (
              <>تواصل <span style={{ color: "#ff9800" }}>معنا</span></>
            ) : (
              <><span style={{ color: "#ff9800" }}>Contact</span> Us</>
            )}
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--text-muted)",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? 'نسعد بتواصلكم واستفساراتكم في أي وقت' : 'We are happy to hear from you and answer your inquiries at any time'}
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="row mb-5">
          {contactCards.map((card, index) => (
            <motion.div 
              key={index}
              className="col-lg-3 col-md-6 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                style={{
                  padding: "40px 25px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,152,0,0.1)",
                  textAlign: "center",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden"
                }}
              >

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  style={{
                    width: "70px",
                    height: "70px",
                    background: `linear-gradient(135deg, ${card.color} 0%, ${card.color === '#25d366' ? '#128c7e' : '#e67e22'} 100%)`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "none"
                  }}
                >
                  <card.icon style={{ fontSize: "28px", color: "#fff" }} />
                </motion.div>

                {/* Content */}
                <h4 style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "10px",
                  fontFamily: "'Cairo', sans-serif",
                  position: "relative",
                  zIndex: 1
                }}>
                  {card.title}
                </h4>

                {card.link ? (
                  <a
                    href={card.link}
                    target={card.link.startsWith('http') ? "_blank" : undefined}
                    rel={card.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    style={{
                      display: "block",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontFamily: "'Cairo', sans-serif",
                      transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => { e.target.style.color = card.color; }}
                    onMouseLeave={(e) => { e.target.style.color = "var(--text-secondary)"; }}
                  >
                    {card.content[0]}
                  </a>
                ) : (
                  card.content.map((line, i) => (
                    <p key={i} style={{
                      margin: "2px 0",
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      fontFamily: "'Cairo', sans-serif",
                      position: "relative",
                      zIndex: 1
                    }}>
                      {line}
                    </p>
                  ))
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            padding: "50px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            borderRadius: "30px",
            border: "1px solid rgba(255,152,0,0.15)",
            position: "relative"
          }}
        >
          {/* Form Header */}
          <div className="text-center mb-5">
            <h3 style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "10px",
              fontFamily: "'Cairo', sans-serif"
            }}>
              {t('contact.form.title')}
            </h3>
            <p style={{
              fontSize: "14px",
              color: "var(--text-muted)",
              fontFamily: "'Cairo', sans-serif"
            }}>
              {language === 'ar' ? 'سيتم الرد عليكم في أقرب وقت ممكن' : 'We will reply to you as soon as possible'}
            </p>
          </div>

          <form action="https://quikstations.com/message" method="POST" className="contact-form">
            <input type="hidden" name="_token" value="" />
            <div className="row">
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder={language === 'ar' ? "الاسم الكامل *" : "Full Name *"}
                  required
                  style={{
                    width: "100%",
                    padding: "18px 25px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,152,0,0.2)",
                    borderRadius: "15px",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontFamily: "'Cairo', sans-serif",
                    outline: "none",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ff9800";
                    e.target.style.background = "rgba(255,152,0,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,152,0,0.2)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder={language === 'ar' ? "البريد الإلكتروني *" : "Email *"}
                  required
                  style={{
                    width: "100%",
                    padding: "18px 25px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,152,0,0.2)",
                    borderRadius: "15px",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontFamily: "'Cairo', sans-serif",
                    outline: "none",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ff9800";
                    e.target.style.background = "rgba(255,152,0,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,152,0,0.2)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder={language === 'ar' ? "رقم الجوال *" : "Phone Number *"}
                  style={{
                    width: "100%",
                    padding: "18px 25px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,152,0,0.2)",
                    borderRadius: "15px",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontFamily: "'Cairo', sans-serif",
                    outline: "none",
                    transition: "all 0.3s ease",
                    direction: "rtl"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ff9800";
                    e.target.style.background = "rgba(255,152,0,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,152,0,0.2)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder={language === 'ar' ? "الموضوع *" : "Subject *"}
                  required
                  style={{
                    width: "100%",
                    padding: "18px 25px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,152,0,0.2)",
                    borderRadius: "15px",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontFamily: "'Cairo', sans-serif",
                    outline: "none",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ff9800";
                    e.target.style.background = "rgba(255,152,0,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,152,0,0.2)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>
              <div className="col-12 mb-4">
                <textarea
                  name="message"
                  rows="6"
                  placeholder={language === 'ar' ? "اكتب رسالتك هنا... *" : "Write your message here... *"}
                  required
                  style={{
                    width: "100%",
                    padding: "18px 25px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,152,0,0.2)",
                    borderRadius: "15px",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontFamily: "'Cairo', sans-serif",
                    outline: "none",
                    resize: "none",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ff9800";
                    e.target.style.background = "rgba(255,152,0,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,152,0,0.2)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>
              <div className="col-12 text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "18px 60px",
                    background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                    border: "none",
                    borderRadius: "50px",
                    color: "var(--text-primary)",
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "'Cairo', sans-serif",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "none"
                  }}
                >
                  {t('contact.form.send')}
                  <FaArrowLeft style={{ transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
