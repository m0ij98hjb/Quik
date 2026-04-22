"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";

const getStations = (language) => language === 'ar' ? [
  { name: "محطة ابها", coords: "18.256506,42.632825" },
  { name: "محطة الدرب", coords: "17.712210,42.221088" },
  { name: "محطة المنسك", coords: "18.227749,42.559046" },
  { name: "محايل عسير 1", coords: "18.682143,42.00145" },
  { name: "محطة الفرعاء", coords: "18.165961,42.683265" },
  { name: "محطة جيزان", coords: "16.9834167,42.5879167" },
  { name: "محطة مدخل الخميس", coords: "18.301901,42.691063" },
  { name: "محطة أحد رفيدة", coords: "18.165368,42.832734" },
  { name: "محطة عقبة ضلع", coords: "18.1649528,42.8323337" },
] : [
  { name: "Abha Station", coords: "18.256506,42.632825" },
  { name: "Al-Darb Station", coords: "17.712210,42.221088" },
  { name: "Al-Mansak Station", coords: "18.227749,42.559046" },
  { name: "Mohayil Asir 1", coords: "18.682143,42.00145" },
  { name: "Al-Faraa Station", coords: "18.165961,42.683265" },
  { name: "Jazan Station", coords: "16.9834167,42.5879167" },
  { name: "Khamis Entrance", coords: "18.301901,42.691063" },
  { name: "Ahad Rafidah Station", coords: "18.165368,42.832734" },
  { name: "Aqaba Dala Station", coords: "18.1649528,42.8323337" },
];

export default function MapSection() {
  const { language, t } = useLanguage();
  const stations = getStations(language);
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?q=18.256506,42.632825&z=15&output=embed"
  );

  const handleMapChange = (e) => {
    setMapUrl(e.target.value);
  };

  return (
    <section 
      style={{ 
        padding: "80px 0",
        backgroundColor: "var(--bg-primary)",
        position: "relative"
      }}
    >
      <div className="container" style={{ maxWidth: "1400px" }}>
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
            {t('home.branches.title')}
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "20px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {language === 'ar' ? (
              <>فروعنا <span style={{ color: "#ff9800" }}>على الخريطة</span></>
            ) : (
              <><span style={{ color: "#ff9800" }}>Our Branches</span> on Map</>
            )}
          </h2>
        </motion.div>

        <div className="row">
          {/* Stations List */}
          <motion.div 
            className="col-lg-4 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              padding: "30px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              borderRadius: "20px",
              border: "1px solid rgba(255,152,0,0.1)",
              height: "100%"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "20px"
              }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <FaLocationArrow style={{ color: "var(--text-primary)", fontSize: "20px" }} />
                </div>
                <h5 style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: 0,
                  fontFamily: "'Cairo', sans-serif"
                }}>
                  قائمة المحطات
                </h5>
              </div>

              <select 
                onChange={handleMapChange} 
                value={mapUrl}
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  background: "var(--bg-card)",
                  border: "1px solid rgba(255,152,0,0.3)",
                  borderRadius: "12px",
                  color: "var(--text-primary)",
                  fontSize: "15px",
                  fontFamily: "'Cairo', sans-serif",
                  outline: "none",
                  cursor: "pointer",
                  marginBottom: "20px"
                }}
              >
                <option value="https://maps.google.com/maps?q=18.256506,42.632825&z=15&output=embed" style={{ background: "#111" }}>
                  اختر الفرع
                </option>
                {stations.map((station, index) => (
                  <option 
                    key={index} 
                    value={`https://maps.google.com/maps?q=${station.coords}&z=15&output=embed`}
                    style={{ background: "#111" }}
                  >
                    {station.name}
                  </option>
                ))}
              </select>

              {/* Station List */}
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                {stations.map((station, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={() => setMapUrl(`https://maps.google.com/maps?q=${station.coords}&z=15&output=embed`)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 15px",
                      cursor: "pointer",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      borderBottom: index < stations.length - 1 ? "1px solid rgba(255,152,0,0.1)" : "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,152,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <FaMapMarkerAlt style={{ color: "#ff9800", fontSize: "16px" }} />
                    <span style={{
                      color: "var(--text-secondary)",
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "14px"
                    }}>
                      {station.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="col-lg-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "2px solid rgba(255,152,0,0.2)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}>
              <iframe
                src={mapUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
