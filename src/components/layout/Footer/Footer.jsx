"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp, FaArrowUp, FaHome, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  return (
    <>
      <footer style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255,152,0,0.1)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Top Accent Line */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ff9800, transparent)"
        }} />

        <div style={{ padding: "80px 0 40px" }}>
          <div className="container">
            <div className="row">
              {/* Logo & About */}
              <div className="col-lg-4 mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://quikstations.com/uploads/img/general/1719503953-logo white.png"
                    alt={language === 'ar' ? 'كويك لمحطات الوقود' : 'Quik Fuel Stations'}
                    style={{ height: "80px", marginBottom: "20px" }}
                  />
                  <p style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginBottom: "25px"
                  }}>
                    {language === 'ar'
                      ? 'شركة كويك الرائدة في مجال تشغيل محطات الوقود ومراكز الخدمة في المملكة العربية السعودية'
                      : 'Quik, the leading company in fuel stations and service centers operation in the Kingdom of Saudi Arabia'}
                  </p>
                  
                  {/* Social Links */}
                  <div style={{ display: "flex", gap: "12px" }}>
                    {[
                      { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61554353376942" },
                      { icon: FaInstagram, href: "https://www.instagram.com/quikgasstations/" },
                      { icon: BsTwitterX, href: "https://x.com/quik_firm" },
                      { icon: FaWhatsapp, href: "https://wa.me/966509260777" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        style={{
                          width: "45px",
                          height: "45px",
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#ff9800",
                          textDecoration: "none"
                        }}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-4 mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h5 style={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "25px",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {t('footer.links')}
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {[
                      { name: t('nav.home'), href: "/" },
                      { name: t('nav.about'), href: "/about" },
                      { name: t('nav.services'), href: "/services" },
                      { name: t('nav.branches'), href: "/branches" },
                      { name: t('nav.contact'), href: "/contact" },
                    ].map((link, index) => (
                      <li key={index} style={{ marginBottom: "12px" }}>
                        <a 
                          href={link.href}
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            textDecoration: "none",
                            fontFamily: "'Cairo', sans-serif",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "color 0.3s ease"
                          }}
                          onMouseEnter={(e) => e.target.style.color = "#ff9800"}
                          onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.6)"}
                        >
                          <span style={{ color: "#ff9800" }}>›</span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h5 style={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "25px",
                    fontFamily: "'Cairo', sans-serif"
                  }}>
                    {t('footer.contact')}
                  </h5>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "45px",
                        height: "45px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                      }}>
                        <FaMapMarkerAlt style={{ color: "#ff9800", fontSize: "16px" }} />
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Cairo', sans-serif", fontSize: "14px" }}>
                        أبها , طريق الملك فهد
                      </span>
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "45px",
                        height: "45px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                      }}>
                        <FaPhone style={{ color: "#ff9800", fontSize: "16px" }} />
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Cairo', sans-serif", fontSize: "14px" }}>
                        920004588
                      </span>
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "45px",
                        height: "45px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                      }}>
                        <FaEnvelope style={{ color: "#ff9800", fontSize: "16px" }} />
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Cairo', sans-serif", fontSize: "14px" }}>
                        turkialamer@yahoo.com
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center"
        }}>
          <div className="container">
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Cairo', sans-serif",
              fontSize: "14px",
              margin: 0
            }}>
              {t('footer.rights')} © {language === 'ar' ? 'شركة كويك لمحطات الوقود' : 'Quik Fuel Stations Company'} {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <motion.a 
        href="mailto:turkialamer@yahoo.com" 
        whileHover={{ scale: 1.1 }}
        style={{
          position: "fixed",
          bottom: "100px",
          right: "30px",
          width: "50px",
          height: "50px",
          background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "none",
          zIndex: 999,
          textDecoration: "none"
        }}
      >
        <FaEnvelope size={20} />
      </motion.a>
      
      <motion.a
        href="https://wa.me/966509260777"
        whileHover={{ scale: 1.1 }}
        style={{
          position: "fixed",
          bottom: "160px",
          right: "30px",
          width: "50px",
          height: "50px",
          background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "none",
          zIndex: 999,
          textDecoration: "none"
        }}
      >
        <FaWhatsapp size={24} />
      </motion.a>
      
      <motion.a 
        href="#" 
        whileHover={{ scale: 1.1 }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff9800",
          border: "2px solid rgba(255,152,0,0.3)",
          zIndex: 999,
          textDecoration: "none"
        }}
      >
        <FaArrowUp size={20} />
      </motion.a>
    </>
  );
}