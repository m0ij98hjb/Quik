"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaMapMarkerAlt, FaArrowLeft, FaPhone, FaEnvelope } from "react-icons/fa";

const getContactInfo = (language) => language === 'ar' ? [
  { icon: FaMapMarkerAlt, title: "الموقع", content: "أبها - طريق الملك فهد - مدينة سلطان" },
  { icon: FaPhone, title: "الهاتف", content: "+966 12 345 6789" },
  { icon: FaEnvelope, title: "البريد الإلكتروني", content: "turkialamer@yahoo.com" }
] : [
  { icon: FaMapMarkerAlt, title: "Location", content: "Abha - King Fahd Road - Sultan City" },
  { icon: FaPhone, title: "Phone", content: "+966 12 345 6789" },
  { icon: FaEnvelope, title: "Email", content: "turkialamer@yahoo.com" }
];

export default function ContactSection() {
  const { language, t } = useLanguage();
  const contactInfo = getContactInfo(language);
  return (
    <section 
      id="contact"
      style={{ 
        padding: "120px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Top Line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,152,0,0.5), transparent)"
      }} />

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
            {language === 'ar' ? 'نحن هنا لمساعدتك' : 'We Are Here to Help'}
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
        </motion.div>

        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="row">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="col-12 mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "25px",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255,152,0,0.1)"
                    }}
                  >
                    <div style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <info.icon style={{ fontSize: "24px", color: "var(--text-primary)" }} />
                    </div>
                    <div>
                      <h5 style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "5px",
                        fontFamily: "'Cairo', sans-serif"
                      }}>
                        {info.title}
                      </h5>
                      <p style={{
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        margin: 0,
                        fontFamily: "'Cairo', sans-serif"
                      }}>
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div style={{
              padding: "40px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              borderRadius: "25px",
              border: "1px solid rgba(255,152,0,0.1)"
            }}>
              <form action="https://quikstations.com/message" method="POST">
                <input type="hidden" name="_token" value="lfGRsNUhJUyjOr7qqgFLF9TYSofqC4Bap7NCGqYE" />
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="الاسم" 
                      required
                      style={{
                        width: "100%",
                        padding: "15px 20px",
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid rgba(255,152,0,0.2)",
                        borderRadius: "12px",
                        color: "var(--text-primary)",
                        fontSize: "15px",
                        fontFamily: "'Cairo', sans-serif",
                        outline: "none"
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="البريد الإلكتروني" 
                      required
                      style={{
                        width: "100%",
                        padding: "15px 20px",
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid rgba(255,152,0,0.2)",
                        borderRadius: "12px",
                        color: "var(--text-primary)",
                        fontSize: "15px",
                        fontFamily: "'Cairo', sans-serif",
                        outline: "none"
                      }}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="الموضوع" 
                      required
                      style={{
                        width: "100%",
                        padding: "15px 20px",
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid rgba(255,152,0,0.2)",
                        borderRadius: "12px",
                        color: "var(--text-primary)",
                        fontSize: "15px",
                        fontFamily: "'Cairo', sans-serif",
                        outline: "none"
                      }}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <textarea 
                      name="message" 
                      rows="5" 
                      placeholder="اكتب رسالتك" 
                      required
                      style={{
                        width: "100%",
                        padding: "15px 20px",
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid rgba(255,152,0,0.2)",
                        borderRadius: "12px",
                        color: "var(--text-primary)",
                        fontSize: "15px",
                        fontFamily: "'Cairo', sans-serif",
                        outline: "none",
                        resize: "none"
                      }}
                    />
                  </div>
                  <div className="col-12 text-center">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        padding: "15px 50px",
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
                        boxShadow: "0 10px 30px rgba(255,152,0,0.3)"
                      }}
                    >
                      إرسال الرسالة
                      <FaArrowLeft />
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
