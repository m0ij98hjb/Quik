"use client";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function MapSection() {
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?q=18.256506,42.632825&z=15&output=embed"
  );

  const handleMapChange = (e) => {
    setMapUrl(e.target.value);
  };

  return (
    <section style={{ display: "flow-root" }} data-aos="fade-up">
      <div className="container" style={{ maxWidth: "1400px" }}>
        <div className="row">
          <div className="col-lg-4" style={{ display: "flex", justifyContent: "space-evenly" }} data-aos="fade-right" data-aos-delay="200">
            <div
              className="contact-info-item"
              style={{
                marginTop: "15px",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignContent: "space-around",
              }}
            >
              <div className="icon" style={{ border: "2px solid #ff4500" }}>
                <span className="fas fa-location-arrow no-pseudo d-inline-flex align-items-center justify-content-center">
                  <FaLocationArrow color="#fff" />
                </span>
              </div>
              <div className="body" data-aos="fade-down" data-aos-delay="300">
                <h5>قائمة المحطات</h5>

                <select className="mapregoin" id="mapregoin" onChange={handleMapChange} value={mapUrl}>
                  <option value="https://maps.google.com/maps?q=18.256506,42.632825&z=15&output=embed">
                    اختر الفرع
                  </option>
                  <option value="https://maps.google.com/maps?q=18.256506,42.632825&z=15&output=embed">
                    محطة ابها
                  </option>
                  <option value="https://maps.google.com/maps?q=17.712210,42.221088&z=15&output=embed">
                    محطة الدرب
                  </option>
                  <option value="https://maps.google.com/maps?q=18.227749,42.559046&z=15&output=embed">
                    محطة المنسك
                  </option>
                  <option value="https://maps.google.com/maps?q=18.682143,42.00145&z=15&output=embed">
                    محايل عسير 1
                  </option>
                  <option value="https://maps.google.com/maps?q=18.165961,42.683265&z=15&output=embed">
                    محطة الفرعاء
                  </option>
                  <option value="https://maps.google.com/maps?q=16.9834167,42.5879167&z=15&output=embed">
                    محطة جيزان
                  </option>
                  <option value="https://maps.google.com/maps?q=18.301901,42.691063&z=15&output=embed">
                    محطة مدخل الخميس
                  </option>
                  <option value="https://maps.google.com/maps?q=18.165368,42.832734&z=15&output=embed">
                    محطة أحد رفيدة
                  </option>
                  <option value="https://maps.google.com/maps?q=18.1649528,42.8323337&z=15&output=embed">
                    محطة عقبة ضلع
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-8 google-map" data-aos="fade-left" data-aos-delay="200">
            <iframe
              src={mapUrl}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>





        </div>
      </div>
    </section>
  );
}
