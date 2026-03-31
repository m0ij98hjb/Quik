"use client";
import React, { useEffect } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";

export default function PartnersSection() {
  useEffect(() => {
    // Re-initialize Isotope if it's available
    const initIsotope = () => {
      if (window.$ && window.$.fn && window.$.fn.isotope && window.$(".portfolio-grid").length > 0) {
        var $grid = window.$(".portfolio-grid").isotope({
          itemSelector: ".portfolio-item",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
        });
        window.$(".portfolio-filter").on("click", "a", function (e) {
          e.preventDefault();
          var filterValue = window.$(this).attr("data-portfolio-filter");
          $grid.isotope({ filter: filterValue });
          window.$(".portfolio-filter a").removeClass("current");
          window.$(this).addClass("current");
        });
      } else {
        setTimeout(initIsotope, 500);
      }
    };
    initIsotope();
  }, []);

  const partners = [
    { title: "رود كوب", category: "كافيهات", img: "1732512129-images.jpg" },
    { title: "بترومين", category: "زيوت", img: "1721465155-PETROMIN_logo.svg.png" },
    { title: "بريجستون", category: "إطارات", img: "1721465086-New-Bridgestone-Logo-Design-2011-BPO.jpg" },
    { title: "سمات الاتقان", category: "زيوت", img: "1721464896-B3d5SQHf_400x400.jpg" },
    { title: "لوكو", category: "كافيهات", img: "1721464844-loco.jpg" },
    { title: "بلاك اند وايت", category: "كافيهات", img: "1721464610-image01-removebg-preview.png" },
    { title: "ايت او اس", category: "كافيهات", img: "1721464103-80-removebg-preview.png" },
    { title: "ريشيو", category: "كافيهات", img: "1721463088-NS9fqFatB3RMVAaFtoTZ.png" },
    { title: "البنك الاهلي السعودي", category: "بنوك", img: "1721463032-snb.png" },
    { title: "ريكسا", category: "كافيهات", img: "1720947146-ريكسا.jpg" },
    { title: "نستريتو", category: "كافيهات", img: "1720956103-55.png" },
    { title: "ماكس فود", category: "مطاعم", img: "1720946451-maxfood.jpg" },
    { title: "بارنز", category: "كافيهات", img: "1720955914-555-transformed.png" },
  ];

  return (
    <section className="section pb-0 bg-primary-light" id="porfolio" style={{ padding: "30px 0 !important" }} data-scroll-index="4" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-heading-left" data-aos="fade-right" data-aos-delay="100">
              <span>شركاؤنا</span>
              <h2>الشركاء</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-filter">
              <a href="#" data-portfolio-filter="*" className="current">الكل</a>
              <a href="#" data-portfolio-filter=".بنوك">بنوك</a>
              <a href="#" data-portfolio-filter=".زيوت">زيوت</a>
              <a href="#" data-portfolio-filter=".إطارات">إطارات</a>
              <a href="#" data-portfolio-filter=".كافيهات">كافيهات</a>
              <a href="#" data-portfolio-filter=".مطاعم">مطاعم</a>
            </div>
          </div>
        </div>
        <div className="row portfolio-grid" id="portfolio-masonry-wrap">
          {partners.map((partner, index) => (
            <div key={index} className={`col-md-6 col-lg-4 portfolio-item ${partner.category}`} data-aos="zoom-in" data-aos-delay={100 * (index % 3 + 1)}>
              <div className="portfolio-item-inner">
                <div className="portfolio-item-img">
                  <img
                    style={{ padding: "30px" }}
                    src={`https://quikstations.com/uploads/img/portfolio/${partner.img}`}
                    alt="Portfolio image"
                    className="img-fluid"
                  />
                  <a
                    href={`https://quikstations.com/uploads/img/portfolio/${partner.img}`}
                    className="portfolio-zoom-link no-pseudo d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="fas fa-search"><FaSearch /></i>
                  </a>
                </div>
                <div className="body">
                  <div className="portfolio-details">
                    <span>{partner.category}</span>
                    <h5>{partner.title}</h5>
                  </div>
                  <a
                    href={`https://quikstations.com/portfolio/${encodeURIComponent(partner.category)}`}
                    className="portfolio-link no-pseudo d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="fa fa-arrow-right"><FaArrowRight /></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
