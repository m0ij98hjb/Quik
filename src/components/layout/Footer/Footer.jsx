"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp, FaArrowUp, FaHome } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 footer-widget-resp">
                <div className="footer-widget">
                  <h6 className="footer-title">من نحن</h6>
                  <img
                    src="https://quikstations.com/uploads/img/general/1719503953-logo white.png"
                    alt="footer logo"
                    style={{ height: "128px" }}
                    className="img-fluid footer-logo"
                  />
                  <p className="footer-desc">شركة كويك لمحطات الوقود</p>
                  <div className="footer-social-links">
                    <a href="https://www.facebook.com/profile.php?id=61554353376942">
                      <i className="fab fa-facebook-f no-pseudo d-inline-flex align-items-center justify-content-center"><FaFacebookF color="#fff" /></i>
                    </a>
                    <a href="https://www.instagram.com/quikgasstations/">
                      <i className="fab fa-instagram no-pseudo d-inline-flex align-items-center justify-content-center"><FaInstagram color="#fff" /></i>
                    </a>
                    <a href="https://x.com/quik_firm">
                      <i className="fab fa-twitter no-pseudo d-inline-flex align-items-center justify-content-center"><FaTwitter color="#fff" /></i>
                    </a>
                    <a href="#" className="scroll-home-btn no-pseudo d-inline-flex align-items-center justify-content-center" data-scroll-goto="1">
                      <i className="fa fa-home d-flex align-items-center justify-content-center"><FaHome color="#fff" /></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 footer-widget-resp">
                <div className="footer-widget footer-widget-pl">
                  <h6 className="footer-title">علاقات العملاء</h6>
                  <ul className="footer-links"></ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 footer-widget-resp">
                <div className="footer-widget">
                  <h6 className="footer-title">Contact Info</h6>
                  <div className="footer-contact-info-wrap">
                    <ul className="footer-contact-info-list">
                      <li>
                        <h6>العنوان</h6>
                        <p>أبها , طريق الملك فهد</p>
                      </li>
                      <li>
                        <h6>الموقع الجغرافي</h6>
                        <a
                          href="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgp1SKecohaZ2TqxFIZjP-wM1i7MT9sa8&amp;q=18.256506,42.632825"
                          target="_blank"
                          className="text-white"
                          rel="noreferrer"
                        >
                          المكتب الرئيسي - ابها
                        </a>
                      </li>
                      <li>
                        <h6>الهاتف والبريد الالكتروني</h6>
                        <div className="text">
                          <p>920004588</p>
                          <p>turkialamer@yahoo.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p className="copyright-text">جميع الحقوق محفوظة لدى © شركة كويك لمحطات الوقود</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a href="mailto:turkialamer@yahoo.com" className="scroll-phone-btn no-pseudo d-inline-flex align-items-center justify-content-center">
        <i className="fas fa-envelope d-flex align-items-center justify-content-center"><FaEnvelope color="#fff" /></i>
      </a>
      <a href="https://wa.me/966509260777" className="scroll-facebook-btn no-pseudo d-inline-flex align-items-center justify-content-center">
        <i className="fab fa-whatsapp d-flex align-items-center justify-content-center"><FaWhatsapp color="#fff" /></i>
      </a>
      <a href="#" className="scroll-top-btn no-pseudo d-inline-flex align-items-center justify-content-center" data-scroll-goto="1">
        <i className="fa fa-arrow-up d-flex align-items-center justify-content-center"><FaArrowUp color="#fff" /></i>
      </a>

      {/* Preloader */}
      <div id="preloader-wrap" style={{ display: "none" }}>
        <div className="preloader-inner" style={{ display: "none" }}>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}