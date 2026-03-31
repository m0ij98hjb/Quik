"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  useEffect(() => {
    // Only initialize Typed if it's available and not already initialized
    const initTyped = () => {
      if (window.Typed && document.getElementById("quik")) {
        // Clear previous instances if any
        document.getElementById("quik").innerHTML = "";
        const cursor = document.querySelector(".typed-cursor");
        if (cursor) cursor.remove();

        new window.Typed("#quik", {
          strings: ["<i>نحو آفاق جديدة .</i> ", " معاً لمستقبل افضل."],
          typeSpeed: 50,
        });
      } else {
        setTimeout(initTyped, 500);
      }
    };
    initTyped();
  }, []);

  return (
    <section className="hero-banner" id="hero_video" data-scroll-index="1" style={{ backgroundColor: "#000" }} data-aos="fade-in">
      {/* YTPlayer uninitialized container */}
      <div
        id="video-background"
        data-video-bg="true"
        className="player bg-overlay mb_YTPlayer isMuted"
        data-property="{videoURL:'https://youtu.be/JVUBZzGe8gQ',containment:'#hero_video',showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"
      ></div>

      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-xl-6 col-md-10 wow fadeInUp">
            <div className="hero-inner">
              <h1 data-aos="fade-up" data-aos-delay="200">شركة كويك لمحطات الوقود</h1>
              <i
                style={{ fontSize: "24px", color: "#fff", fontWeight: "bold", fontFamily: "system-ui" }}
                id="quik"
              ></i>
              <div style={{ marginTop: "40px" }}>
                <a href="#" className="white-btn no-pseudo d-inline-flex align-items-center">
                  <span className="text">تواصل معنا</span>
                  <span className="icon">
                    <i className="fa fa-arrow-right">
                      <FaArrowRight />
                    </i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="mailto:turkialamer@yahoo.com" className="hero-email-link">
        turkialamer@yahoo.com
      </a>
      <a href="#" data-scroll-nav="2" className="scroll-down-btn">
        مرر للاسفل
      </a>

      {/* Typed Cursor CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .typed-cursor {
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink {
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink {
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink {
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `}} />
    </section>
  );
}
