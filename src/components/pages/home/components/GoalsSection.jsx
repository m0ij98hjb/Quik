import React from "react";
import { FaAmbulance, FaChartLine, FaUsers, FaPlus, FaFistRaised } from "react-icons/fa";
import { SiAccusoft } from "react-icons/si";

export default function GoalsSection() {
  const goals = [
    {
      title: "الريادة",
      description: "تحقيق الريادة في تشغيل مراكز الخدمة.",
      iconClass: "fab fa-accusoft",
      icon: <SiAccusoft size={30} color="#fff" />,
      delay: "0.0s",
    },
    {
      title: "السلامة",
      description: "تعزيز أداء السلامة المهنية والحفاظ على البيئة.",
      iconClass: "fas fa-ambulance",
      icon: <FaAmbulance size={30} color="#fff" />,
      delay: "0.1s",
    },
    {
      title: "الكفاءة",
      description: "تطوير الكفاءات والحفاظ عليها.",
      iconClass: "fas fa-fist-raised",
      icon: <FaFistRaised size={30} color="#fff" />,
      delay: "0.2s",
    },
    {
      title: "النمو",
      description: "تعظيم النمو الاستراتيجي للمنشأة.",
      iconClass: "fas fa-chart-line",
      icon: <FaChartLine size={30} color="#fff" />,
      delay: "0.3s",
    },
    {
      title: "الشراكة والتكامل",
      description: "الشراكة والتكامل مع شركاء استراتيجيين محليين وعالميين.",
      iconClass: "fas fa-users",
      icon: <FaUsers size={30} color="#fff" />,
      delay: "0.4s",
    },
    {
      title: "التوسع",
      description: "التوسع والانتشار في ربوع الممكلة",
      iconClass: "fas fa-plus",
      icon: <FaPlus size={30} color="#fff" />,
      delay: "0.5s",
    },
  ];

  return (
    <section className="section pb-minus-76 bg-primary-light" data-scroll-index="5" id="myresume" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading-left" data-aos="fade-right" data-aos-delay="100">
              <span>أهدافنا</span>
              <h2>الأهداف الاستراتيجية</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 2 + 1)}
            >
              <div className="resume-item">
                <div className="body">
                  <div className="icon-outer-line">
                    <div className="icon-inner-line">
                      <span className={`${goal.iconClass} no-pseudo d-flex align-items-center justify-content-center`}>
                        {goal.icon}
                      </span>
                    </div>
                  </div>
                  <div className="text">
                    <h5>{goal.title}</h5>
                    <span>{goal.description}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
