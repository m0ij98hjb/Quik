import React from "react";
import { FaEye, FaRegDotCircle, FaEnvelope } from "react-icons/fa";

export default function VisionSection() {
  return (
    <section className="section bg-primary-light" data-scroll-index="6" id="vision" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading">
              <span>الرؤية والرسالة</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="skills-img">
              <div className="resume-item">
                <div className="body">
                  <div className="icon-outer-line">
                    <div className="icon-inner-line">
                      <span className="fas fa-eye no-pseudo d-flex align-items-center justify-content-center">
                        <FaEye size={30} color="#fff" />
                      </span>
                    </div>
                  </div>
                  <div className="text">
                    <h5>رؤيتنا</h5>
                    <div className="vision-point d-flex align-items-start mb-2">
                      <i className="no-pseudo d-inline-flex align-items-center justify-content-center mt-1" style={{minWidth: '20px'}}>
                        <FaRegDotCircle size={14} color="#ff4500" />
                      </i>
                      <span className="ms-2">أن تصبح شركة كويك رائدة في مجال تشغيل محطات الوقود ومراكز الخدمة</span>
                    </div>
                    
                    <div className="vision-point d-flex align-items-start mb-2">
                      <i className="no-pseudo d-inline-flex align-items-center justify-content-center mt-1" style={{minWidth: '20px'}}>
                        <FaRegDotCircle size={14} color="#ff4500" />
                      </i>
                      <span className="ms-2">
                        تعزيز مكانتها في السوق المحلية بأن تكون وجهة وليست مجرد محطة وقود بما تقدمه من خدمات ومرافق متميزة ومجهزة على مستوى عالٍ من الكفاءة للارتقاء بالخدمة المقدمة للعملاء
                      </span>
                    </div>

                    <div className="vision-point d-flex align-items-start mb-2">
                      <i className="no-pseudo d-inline-flex align-items-center justify-content-center mt-1" style={{minWidth: '20px'}}>
                        <FaRegDotCircle size={14} color="#ff4500" />
                      </i>
                      <span className="ms-2">
                        مواكبة رؤية المملكة ٢٠٣٠ من خلال تقديم خدمة مجتمعية والمشاركة في صناعة جودة الحياة
                      </span>
                    </div>

                    <div className="vision-point d-flex align-items-start mb-2">
                      <i className="no-pseudo d-inline-flex align-items-center justify-content-center mt-1" style={{minWidth: '20px'}}>
                        <FaRegDotCircle size={14} color="#ff4500" />
                      </i>
                      <span className="ms-2">تقديم فرص عمل للشباب السعودي ودعمهم في ريادة الأعمال.</span>
                    </div>

                    <div className="vision-point d-flex align-items-start mb-2">
                      <i className="no-pseudo d-inline-flex align-items-center justify-content-center mt-1" style={{minWidth: '20px'}}>
                        <FaRegDotCircle size={14} color="#ff4500" />
                      </i>
                      <span className="ms-2">توفير الطاقة البديلة وتهيئة المسطحات الخضراء.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="resume-item" style={{ height: "366px" }}>
              <div className="body">
                <div className="icon-outer-line">
                  <div className="icon-inner-line">
                    <span className="fas fa-envelope no-pseudo d-flex align-items-center justify-content-center">
                      <FaEnvelope size={30} color="#fff" />
                    </span>
                  </div>
                </div>
                <div className="text">
                  <h5>رسالتنا</h5>
                  <span>
                    نحو آفاق جديدة؛ وذلك عن طريق ابتكار واستحداث أفكار جديدة ومتميزة وغير مسبوقة في مجال محطات الوقود وخدمات السيارات
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
