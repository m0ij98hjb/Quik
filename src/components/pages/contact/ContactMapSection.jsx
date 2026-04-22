"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const stations = [
  { name: "محطة ابها", coords: "18.256506,42.632825" },
  { name: "محطة الدرب", coords: "17.712210,42.221088" },
  { name: "محطة المنسك", coords: "18.227749,42.559046" },
  { name: "محايل عسير 1", coords: "18.682143,42.00145" },
  { name: "محطة الفرعاء", coords: "18.165961,42.683265" },
  { name: "محطة جيزان", coords: "16.9834167,42.5879167" },
  { name: "محطة مدخل الخميس", coords: "18.301901,42.691063" },
  { name: "محطة أحد رفيدة", coords: "18.165368,42.832734" },
  { name: "محطة عقبة ضلع", coords: "18.1649528,42.8323337" },
];

function getMapUrl(coords) {
  return `https://maps.google.com/maps?q=${coords}&z=15&output=embed`;
}

export default function ContactMapSection() {
  const [selectedStation, setSelectedStation] = useState(stations[0].coords);

  return (
    <section className="section" data-aos="fade-up" style={{ paddingBottom: "80px" }}>
      <style>{`
        .map-section-title {
          font-family: 'Cairo', sans-serif;
          text-align: center;
          margin-bottom: 40px;
        }
        .map-section-title span {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #f5a623;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .map-section-title h2 {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary, #1a1a2e);
        }
        .map-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border: 1px solid var(--border-color, #eee);
        }
        .map-container iframe {
          display: block;
        }
        .station-selector-wrap {
          background: var(--bg-card, #fff);
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          border: 1px solid var(--border-color, #eee);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .station-selector-wrap .selector-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f5a623, #ff8c00);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 20px;
          color: #fff;
        }
        .station-selector-wrap h5 {
          font-family: 'Cairo', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary, #1a1a2e);
          margin-bottom: 8px;
        }
        .station-selector-wrap p {
          font-family: 'Cairo', sans-serif;
          font-size: 14px;
          color: var(--text-secondary, #666);
          margin-bottom: 20px;
        }
        .station-select {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 2px solid var(--border-color, #e0e0e0);
          background: var(--bg-primary, #fafafa);
          font-family: 'Cairo', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary, #1a1a2e);
          cursor: pointer;
          transition: border-color 0.3s ease;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23f5a623' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: left 16px center;
        }
        .station-select:focus {
          outline: none;
          border-color: #f5a623;
          box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
        }
        .station-info-text {
          font-family: 'Cairo', sans-serif;
          font-size: 13px;
          color: var(--text-secondary, #999);
          margin-top: 14px;
        }
        .station-info-text strong {
          color: #f5a623;
        }
      `}</style>

      <div className="container">
        <div className="map-section-title" data-aos="fade-down" data-aos-delay="100">
          <span>مواقعنا</span>
          <h2>محطاتنا على الخريطة</h2>
        </div>

        <div className="row align-items-stretch">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
            <div className="station-selector-wrap">
              <div className="selector-icon">
                <FaLocationArrow />
              </div>
              <h5>اختر المحطة</h5>
              <p>اختر الفرع لعرض موقعه على الخريطة</p>
              <select
                className="station-select"
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
              >
                {stations.map((station, i) => (
                  <option key={i} value={station.coords}>
                    {station.name}
                  </option>
                ))}
              </select>
              <p className="station-info-text">
                المقر الرئيسي: <strong>أبها - طريق الملك فهد</strong>
              </p>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
            <div className="map-container">
              <iframe
                src={getMapUrl(selectedStation)}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
