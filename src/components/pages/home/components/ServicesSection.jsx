import React from "react";
import {
  FaGasPump,
  FaStoreAlt,
  FaCoffee,
  FaToilet,
  FaChessKnight,
  FaMosque,
  FaCreditCard,
  FaTruckPickup,
  FaWrench,
  FaCarCrash,
  FaOilCan,
  FaChargingStation,
  FaCar,
  FaTint,
  FaArrowRight,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    { title: "وقود", iconClass: "fas fa-gas-pump", icon: <FaGasPump />, delay: "0.0s" },
    { title: "مطاعم", iconClass: "fas fa-store-alt", icon: <FaStoreAlt />, delay: "0.1s" },
    { title: "مقاهي وكافيهات", iconClass: "fas fa-coffee", icon: <FaCoffee />, delay: "0.2s" },
    { title: "دوارت مياه", iconClass: "fas fa-toilet", icon: <FaToilet />, delay: "0.3s" },
    { title: "العاب أطفال", iconClass: "fas fa-chess-knight", icon: <FaChessKnight />, delay: "0.4s" },
    { title: "مساجد رجال ونساء", iconClass: "fas fa-mosque", icon: <FaMosque />, delay: "0.5s" },
    { title: "سوبر ماركت", iconClass: "fas fa-store-alt", icon: <FaStoreAlt />, delay: "0.6s" },
    { title: "صراف آلي", iconClass: "fas fa-credit-card", icon: <FaCreditCard />, delay: "0.7s" },
    { title: "غسيل سيارات", iconClass: "fas fa-truck-pickup", icon: <FaTruckPickup />, delay: "0.8s" },
    { title: "صيانه", iconClass: "fas fa-wrench", icon: <FaWrench />, delay: "0.9s" },
    { title: "إطارات", iconClass: "fas fa-car-crash", icon: <FaCarCrash />, delay: "0.10s" },
    { title: "تغيير زيوت", iconClass: "fas fa-oil-can", icon: <FaOilCan />, delay: "0.11s" },
    { title: "شاحن سيارات كهربائية", iconClass: "fas fa-charging-station", icon: <FaChargingStation />, delay: "0.12s" },
    { title: "زينة سيارات", iconClass: "fas fa-car", icon: <FaCar />, delay: "0.13s" },
    { title: "هواء وماء", iconClass: "fas fa-tint", icon: <FaTint />, delay: "0.14s" },
  ];

  return (
    <section className="section pb-minus-70" data-scroll-index="3" id="service" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading" data-aos="fade-down" data-aos-delay="100">
              <span>خدماتنا</span>
              <h2>الخدمات</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3 + 1)}
            >
              <div className="services-item">
                <div className="body">
                  <h4>0{index + 1} </h4>
                  <h5>{service.title}</h5>
                  <a href="#" className="no-pseudo d-inline-flex align-items-center">
                    قراءة المزيد <i className="fa fa-arrow-right d-inline-flex align-items-center justify-content-center" style={{marginRight: "5px"}}>
                      <FaArrowRight size={14} color="#F5A623" />
                    </i>
                  </a>
                </div>
                <div className="icon">
                  <span className={`${service.iconClass} no-pseudo d-flex align-items-center justify-content-center`}>
                    {React.cloneElement(service.icon, { size: 35, color: "#fff" })}
                  </span>
                </div>
                <div className="icon-border"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
