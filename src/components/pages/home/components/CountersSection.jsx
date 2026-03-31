import React from "react";

export default function CountersSection() {
  return (
    <section
      className="section pb-minus-70"
      id="counters"
      style={{ backgroundImage: "url(https://quikstations.com/uploads/img/dummy/counter-bg.png)" }}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading light" data-aos="fade-down" data-aos-delay="100">
              <h2>كويك في ارقام</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="counter-item">
              <h3 className="counter">6000</h3>
              <p>سيارة خلال 24 ساعة</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="counter-item">
              <h3 className="counter">9</h3>
              <p>محطات مشغلة</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="counter-item">
              <h3 className="counter">29</h3>
              <p>سنة خبرة في تشغيل محطات الوقود</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
