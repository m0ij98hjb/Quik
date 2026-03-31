import React from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="section bg-primary-light" id="contact" data-scroll-index="7" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading" data-aos="fade-down" data-aos-delay="100">
              <span>تواصل معنا </span>
              <h2>التواصل</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info-item" data-aos="fade-right" data-aos-delay="200">
              <div className="icon no-pseudo">
                <span className="fas fa-map-marker-alt d-inline-flex align-items-center justify-content-center">
                  <FaMapMarkerAlt color="#fff" />
                </span>
              </div>
              <div className="body">
                <h5>الموقع</h5> <p>أبها -طريق الملك فهد - مدينة سلطان</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="contact-form-wrap" data-aos="fade-up" data-aos-delay="300">
              <form action="https://quikstations.com/message" method="POST">
                <input type="hidden" name="_token" value="lfGRsNUhJUyjOr7qqgFLF9TYSofqC4Bap7NCGqYE" />{" "}
                <div className="row">
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="contact-form-group">
                      <input type="text" className="form-control" name="name" placeholder="الاسم" required="" />
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="contact-form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="البريد الالكتروني"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-up" data-aos-delay="600">
                    <div className="contact-form-group">
                      <input type="text" className="form-control" name="subject" placeholder="الموضوع" required="" />
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-up" data-aos-delay="700">
                    <div className="contact-form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        cols="20"
                        rows="8"
                        placeholder="اكتب رسالتك"
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="contact-btn-left" data-aos="zoom-in" data-aos-delay="800">
                      <button type="submit" className="primary-btn no-pseudo contact-submit-btn">
                        <span className="text">ارسل رسالتك</span>
                        <span className="icon">
                          <i className="fa fa-arrow-right d-inline-flex align-items-center justify-content-center">
                            <FaArrowRight color="#f5a623" />
                          </i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
