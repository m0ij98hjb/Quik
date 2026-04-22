"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaUser, FaBookmark, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";

const blogs = [
  {
    title: "تجديد شهادة التأهيل لشركة كويك لمحطات الوقود",
    titleEn: "Quik Company Qualification Certificate Renewal for Fuel Stations",
    description: "تم تجديد شهادة التأهيل لشركة كويك لعامي 2026-2027",
    descriptionEn: "The qualification certificate for Quik Company has been renewed for 2026-2027",
    img: "1766219254-IMG-20250508-WA0016.jpg",
    link: "https://quikstations.com/blog/shh-d-ltahyl-lshrk-koyk-lmht-t-lokod",
  },
  {
    title: "افتتاح محطة جيزان ابو عريش",
    titleEn: "Jazan Abu Arish Station Opening",
    description: "قريبا سيتم افتتاح محطة جيزان ابو عريش",
    descriptionEn: "Jazan Abu Arish station opening coming soon",
    img: "1765952002-IMG-20250508-WA0020.jpg",
    link: "https://quikstations.com/blog/ftt-h-mht-gyz-n-bo-aarysh",
  },
  {
    title: "افتتاح فرع شركة كويك محطة طريق 80",
    titleEn: "Quik Company Route 80 Station Branch Opening",
    description: "قريبا افتتاح فرع طريق 80 خميس مشيط",
    descriptionEn: "Route 80 Khamis Mushait branch opening coming soon",
    img: "1765951227-WhatsApp Image 2025-08-05 at 16.19.36_6718eea5.jpg",
    link: "https://quikstations.com/blog/ftt-h-fraa-shrk-koyk-mht-tryk-80",
  },
  {
    title: "افتتاح فرع محطة كويك - المحالة",
    titleEn: "Quik Station Al-Mahalah Branch Opening",
    description: "قريبا افتتاح فرع محطة كويك في المحالة",
    descriptionEn: "Quik station Al-Mahalah branch opening coming soon",
    img: "1765949912-Screenshot 2025-09-24 090117.png",
    link: "https://quikstations.com/blog/ftt-h-fraa-mht-koyk-lmh-l",
  },
];

export default function InvestmentGrid() {
  const { language } = useLanguage();

  return (
    <section className="section pb-minus-76" id="blog" style={{ backgroundColor: '#fff !important', background: '#fff !important' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#333', marginBottom: '30px' }}>
              {language === 'ar' ? 'مركز الاخبار' : 'News Center'}
            </h2>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-md-4">
              <div className="item">
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
                          <FaUser style={{ marginLeft: "5px" }} /> Super-Admin
                          User{" "}
                        </span>
                      </a>
                      <a href="#">
                        <span className="no-pseudo d-inline-flex align-items-center">
                          <FaBookmark style={{ marginLeft: "5px" }} />
                          {language === 'ar' ? 'كويك' : 'Quik'}
                        </span>
                      </a>
                    </div>
                    <h5>
                      <a href={blog.link}>{language === 'ar' ? blog.title : blog.titleEn}</a>
                    </h5>
                    <p>{language === 'ar' ? blog.description : blog.descriptionEn}</p>
                    <a
                      href={blog.link}
                      className="blog-link no-pseudo d-inline-flex align-items-center"
                    >
                      {language === 'ar' ? 'قراءة المزيد' : 'Read More'}
                      <FaArrowRight style={{ marginRight: "5px", transform: language === 'ar' ? 'none' : 'rotate(180deg)' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </section>
  );
}
