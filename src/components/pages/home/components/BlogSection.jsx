"use client";
import React, { useEffect } from "react";
import { FaUser, FaBookmark, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

export default function BlogSection() {
  useEffect(() => {
    const initOwl = () => {
      if (window.$ && window.$.fn && window.$.fn.owlCarousel && window.$("#blogCarousel").length > 0) {
        if (!window.$("#blogCarousel").hasClass("owl-loaded")) {
          window.$("#blogCarousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
              renderToStaticMarkup(
                <div className="nav-btn-outer no-pseudo">
                  <div className="nav-btn-inner" style={{ fontSize: "20px" }}>
                    <FaArrowRight size={20} />
                  </div>
                </div>
              ),
              renderToStaticMarkup(
                <div className="nav-btn-outer no-pseudo">
                  <div className="nav-btn-inner" style={{ fontSize: "20px" }}>
                    <FaArrowLeft size={20} />
                  </div>
                </div>
              ),
            ],
            dots: false,
            rtl: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navContainer: "#blog-nav-container",
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
            },
          });
        }
      } else {
        setTimeout(initOwl, 500);
      }
    };
    initOwl();
  }, []);

  const blogs = [
    {
      title: "تجديد شهادة التأهيل لشركة كويك لمحطات الوقود",
      description: "تم تجديد شهادة التأهيل لشركة كويك لعامي 2026-2027",
      img: "1766219254-IMG-20250508-WA0016.jpg",
      link: "https://quikstations.com/blog/shh-d-ltahyl-lshrk-koyk-lmht-t-lokod",
    },
    {
      title: "افتتاح محطة جيزان ابو عريش",
      description: "قريبا سيتم افتتاح محطة جيزان ابو عريش",
      img: "1765952002-IMG-20250508-WA0020.jpg",
      link: "https://quikstations.com/blog/ftt-h-mht-gyz-n-bo-aarysh",
    },
    {
      title: "افتتاح فرع شركة كويك محطة طريق 80",
      description: "قريبا افتتاح فرع طريق 80 خميس مشيط",
      img: "1765951227-WhatsApp Image 2025-08-05 at 16.19.36_6718eea5.jpg",
      link: "https://quikstations.com/blog/ftt-h-fraa-shrk-koyk-mht-tryk-80",
    },
    {
      title: "افتتاح فرع محطة كويك - المحالة",
      description: "قريبا افتتاح فرع محطة كويك في المحالة",
      img: "1765949912-Screenshot 2025-09-24 090117.png",
      link: "https://quikstations.com/blog/ftt-h-fraa-mht-koyk-lmh-l",
    },
  ];

  return (
    <section className="section pb-minus-76" id="blog" data-aos="fade-up">
      <style>{`
        #blog #blog-nav-container {
          display: flex !important;
          gap: 12px;
          align-items: center;
          margin-bottom: 20px;
        }
        /* Override default owl-nav behavior in this section */
        #blog .owl-nav {
          display: none !important;
        }
        #blog .owl-nav button {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <div className="section-heading-left" data-aos="fade-right" data-aos-delay="100">
              <span>الاخبار</span>
              <h2>شركة كويك لمحطات الوقود</h2>
            </div>
            {/* Custom Nav Container for Blog Carousel */}
            <div id="blog-nav-container" className="no-pseudo" style={{ display: 'flex', gap: '10px' }}></div>
          </div>
        </div>
        <div className="owl-carousel owl-theme" id="blogCarousel">
          {blogs.map((blog, index) => (
            <div key={index} className="item" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="blog-item">
                <div className="blog-img">
                  <a href={blog.link}>
                    <img
                      src={`https://quikstations.com/uploads/img/blogs/${blog.img}`}
                      alt="Blog image"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <a href="#">
                      <span className="no-pseudo d-inline-flex align-items-center">
                        <FaUser style={{ marginLeft: "5px" }} /> Super-Admin User{" "}
                      </span>
                    </a>
                    <a href="#">
                      <span className="no-pseudo d-inline-flex align-items-center">
                        <FaBookmark style={{ marginLeft: "5px" }} />كويك
                      </span>
                    </a>
                  </div>
                  <h5>
                    <a href={blog.link}>{blog.title}</a>
                  </h5>
                  <p>{blog.description}</p>
                  <a href={blog.link} className="blog-link no-pseudo d-inline-flex align-items-center">
                    قراءة المزيد
                    <FaArrowRight style={{ marginRight: "5px" }} />
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