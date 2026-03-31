"use client";
import React, { useEffect } from "react";
import { FaPlay, FaDownload } from "react-icons/fa";

export default function AboutSection() {
  useEffect(() => {
    // Initialize slick carousel for '.about' slider once jQuery and slick are ready
    const initSlick = () => {
      if (window.$ && window.$.fn && window.$.fn.slick && window.$(".about").length > 0) {
        if (!window.$(".about").hasClass("slick-initialized")) {
          window.$(".about").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl: true,
            dots: true,
            infinite: true,
            cssEase: "linear",
            variableHeight: true,
            mobileFirst: true,
          });
        }
      } else {
        setTimeout(initSlick, 500);
      }
    };
    initSlick();
  }, []);

  return (
    <section className="section" id="about" data-scroll-index="2" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="about-img"
              data-aos="fade-right"
              data-aos-delay="200"
              dir="rtl"
            >
              <div className="row">
                {/* Images Wrapper */}
                <div className="about" style={{ height: "500px", width: "430px" }}>
                  <img
                    src="https://quikstations.com/uploads/img/about/1719938743-55.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                  <img
                    src="https://quikstations.com/uploads/img/about/22.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                  <img
                    src="https://quikstations.com/uploads/img/about/23.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                  <img
                    src="https://quikstations.com/uploads/img/about/24.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                  <img
                    src="https://quikstations.com/uploads/img/about/25.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                  <img
                    src="https://quikstations.com/uploads/img/about/26.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                  <img
                    src="https://quikstations.com/uploads/img/about/27.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                  <img
                    src="https://quikstations.com/uploads/img/about/28.jpg"
                    style={{ height: "500px" }}
                    alt="About image"
                    title="About image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <a className="about-video-btn no-pseudo d-inline-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=rZsIxZXBcfU">
                <i className="fa fa-play d-flex align-items-center justify-content-center">
                  <FaPlay color="#fff" />
                </i>
              </a>
              <div className="video-border-line"></div>
            </div>
          </div>
          <div className="col-lg-6" style={{ textAlign: "center" }}>
            <div
              className="about-inner"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h6>من نحن</h6>
              <h2>شركة كويك لمحطات الوقود</h2>
              <p style={{ margin: "0 56px" }}>
                أُسست مجموعة تركي عبد العزيز آل عامر التجارية منذ أكثر من ثلاثون عامًّا وكان من أول نشاطاتها تشغيل محطات الوقود ومراكز خدمة السيارات وتطورت لشركة كويك لتشغيل المحطات ومراكز الخدمة لتتميز بعناصر تنافسية تجعل منها إحدى أفضل الشركات المتخصصة في إدارة محطات الوقود وذلك باستقطاب الكوادر المهنية والفنية المتخصصة في هذا المجال وتقديم أحدث الأساليب التي تلبي احتياجات العملاء لتحقق تطلعاتهم وتعكس الصورة التي تستحقها مملكتنا الغالية
              </p>
              <div className="row"></div>

              <a
                href="https://quikstations.com/uploads/img/about/1721482867-profile quik station..pdf"
                className="primary-btn no-pseudo d-inline-flex align-items-center download-profile-btn"
                style={{ marginTop: "22px" }}
                download=""
              >
                <span className="text">تنزيل بروفايل الشركة</span>
                <span className="icon">
                  <i className="fa fa-download">
                    <FaDownload color="#f5a623" />
                  </i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
