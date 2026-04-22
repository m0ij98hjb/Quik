'use client';

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function InvestmentBreadcrumb() {
  const typedRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        new window.Typed(typedRef.current, {
          strings: language === 'ar' ? ['مركز الاخبار'] : ['News Center'],
          typeSpeed: 80,
          backSpeed: 0,
          showCursor: true,
          cursorChar: '|',
          loop: false,
          startDelay: 300,
          onComplete: (self) => {
            setTimeout(() => {
              if (self.cursor) {
                self.cursor.style.display = 'none';
              }
            }, 1000);
          }
        });
      }
    };

    const timer = setTimeout(checkTyped, 500);
    return () => clearTimeout(timer);
  }, [language]);

  return (
    <section
      className="breadcrumb-section section"
      data-scroll-index="1"
      data-bg-image-path="https://quikstations.com/uploads/img/general/1720339777-colored logo.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner text-right">
              <h1 className="typed-title" style={{ minHeight: '50px', direction: language === 'ar' ? 'rtl' : 'ltr' }}><span ref={typedRef} style={{ display: 'inline-block', minWidth: '220px' }}></span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
