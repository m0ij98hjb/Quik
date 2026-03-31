"use client";

import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const QuikNavbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsAboutOpen(false);
      setIsLangOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── NAVBAR ── */
        .quik-navbar {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: transparent;
          transition: background 0.35s ease, box-shadow 0.35s ease;
        }
        .quik-navbar.scrolled {
          background: var(--nav-bg);
          box-shadow: var(--shadow-sm);
          padding: 15px 0;
        }

        .quik-navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 50px 110px;
          height: 70px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .desktop-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        /* ── LOGO ── */
        .quik-logo {
          display: flex; align-items: center; gap: 4px;
          text-decoration: none; flex-shrink: 0;
        }
        .quik-logo-icon { width: 48px; height: 48px; }
        .quik-logo-text { display: flex; flex-direction: column; line-height: 1; }
        .quik-logo-arabic { font-size: 22px; font-weight: 700; color: var(--text-primary); letter-spacing: -0.5px; }
        .quik-logo-english {
          font-family: 'Arial Black', sans-serif;
          font-size: 16px; font-weight: 900; color: var(--text-primary);
          letter-spacing: 2px; margin-top: -2px;
        }

        /* Logo image switching */
        .quik-logo img {
          height: 130px;
          margin-top: 50px;
          width: auto;
          transition: all 0.35s ease;
        }
        .quik-navbar.scrolled .quik-logo img {
          margin-top: 0;
          height: 125px;
        }
        
        /* Theme-aware logo behavior */
        [data-theme='dark'] .logo-transparent {
          filter: none !important;
        }

        .logo-transparent { display: block; }
        .logo-normal      { display: none;  }
        .quik-navbar.scrolled .logo-transparent { display: none;  }
        .quik-navbar.scrolled .logo-normal      { display: block; }

        [data-theme='dark'] .quik-navbar.scrolled .logo-transparent {
          display: block !important;
        }
        [data-theme='dark'] .quik-navbar.scrolled .logo-normal {
          display: none !important;
        }

        /* ── DESKTOP NAV ── */
        .quik-nav-menu {
          display: flex; align-items: center;
          list-style: none; flex: 1; justify-content: center;
        }
        .quik-nav-item { position: relative; }

        .quik-nav-link {
          display: flex; align-items: center; gap: 4px;
          padding: 0 16px; height: 70px;
          font-size: 15px; font-weight: 600; color: #f0ededff;
          text-decoration: none; white-space: nowrap; cursor: pointer;
          transition: color 0.2s; border: none; background: none;
          font-family: 'Cairo', sans-serif;
        }
        .quik-nav-link:hover { color: #ffffffff; }
        .quik-nav-link::after {
          content: ''; position: absolute;
          bottom: 0; left: 50%; transform: translateX(-50%) scaleX(0);
          width: 95px; height: 7px;
          background: var(--color-secondary);
          transition: transform 0.35s ease;
        }
        .quik-nav-link:hover::after,
        .quik-nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }
        .quik-nav-link.active { color: var(--color-secondary) !important; position: relative; }

        /* ── COLORS ON SCROLL ── */
        .quik-navbar.scrolled .quik-nav-link {
          color: var(--text-primary);
        }
        .quik-navbar.scrolled .quik-nav-link:hover {
          color: var(--color-secondary);
        }
        .quik-navbar.scrolled .quik-nav-link.active {
          color: var(--color-secondary) !important;
        }

        .quik-nav-arrow {
          font-size: 12px;
          margin-right: 6px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
        }
        .quik-nav-arrow.open {
          transform: rotate(180deg);
        }

        /* ── DROPDOWN ── */
        .quik-dropdown {
          position: absolute; top: 100%; right: 0;
          background: var(--bg-card);
          box-shadow: var(--shadow-md);
          border-radius: 8px; min-width: 180px; padding: 8px 0;
          list-style: none; z-index: 9999;
          border-top: 3px solid var(--color-secondary);
          visibility: hidden; opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        .quik-nav-item:hover .quik-dropdown,
        .quik-nav-item.open .quik-dropdown {
          visibility: visible; opacity: 1;
          transform: translateY(0);
        }
        
        .quik-dropdown li a {
          display: block; padding: 10px 20px;
          font-size: 14px; font-weight: 500; color: var(--text-primary);
          text-decoration: none; transition: background 0.15s, color 0.15s;
        }
        .quik-dropdown li a:hover { 
          background: var(--bg-secondary); 
          color: var(--color-secondary); 
        }

        /* ── LANGUAGE ── */
        .quik-lang { position: relative; flex-shrink: 0; }
        .quik-lang-btn {
          display: flex; align-items: center; gap: 4px;
          padding: 6px 14px;
          background: transparent;
          border: none;
          font-family: 'Cairo', sans-serif;
          font-size: 14px; font-weight: 600; color: #f0ededff;
          cursor: pointer; transition: all 0.2s;
        }
        .quik-navbar.scrolled .quik-lang-btn {
          color: var(--text-primary);
        }
        .quik-lang-btn:hover { color: var(--color-secondary); }
        
        .quik-lang-dropdown {
          position: absolute; top: calc(100% + 8px); left: 0;
          background: var(--bg-card); box-shadow: var(--shadow-md);
          border-radius: 8px; min-width: 120px; padding: 8px 0;
          list-style: none; z-index: 9999;
          border-top: 3px solid var(--color-secondary);
          visibility: hidden; opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        
        .quik-lang:hover .quik-lang-dropdown,
        .quik-lang.open .quik-lang-dropdown {
          visibility: visible; opacity: 1;
          transform: translateY(0);
        }
        .quik-lang-dropdown li button {
          display: block; width: 100%; padding: 9px 18px;
          font-size: 14px; font-weight: 500; color: var(--text-primary);
          background: none; border: none; text-align: right;
          font-family: 'Cairo', sans-serif; cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .quik-lang-dropdown li button:hover { 
          background: var(--bg-secondary); 
          color: var(--color-secondary); 
        }

        /* ── HAMBURGER ── */
        .quik-hamburger {
          display: none; flex-direction: column;
          justify-content: center; gap: 5px;
          width: 36px; height: 36px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .quik-hamburger span {
          display: block; height: 2.5px; background: var(--text-primary);
          border-radius: 2px; transition: all 0.3s ease; transform-origin: center;
        }
        .quik-navbar:not(.scrolled) .quik-hamburger span {
          background: #fff;
        }
        .quik-hamburger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        .quik-hamburger.open span:nth-child(2) { opacity: 0; }
        .quik-hamburger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .quik-mobile-menu {
          display: none; flex-direction: column;
          background: var(--bg-primary);
          padding: 8px 0 16px;
          border-top: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
        }
        .quik-mobile-menu.open { display: flex; }

        .quik-mobile-link {
          display: block; padding: 13px 24px;
          font-size: 15px; font-weight: 600; color: var(--text-primary);
          text-decoration: none; font-family: 'Cairo', sans-serif;
          border: none; background: none;
          text-align: right; width: 100%; cursor: pointer;
          transition: color 0.15s, background 0.15s;
        }
        .quik-mobile-link:hover, .quik-mobile-link.active {
          color: var(--color-secondary); background: var(--bg-secondary);
        }
        .quik-mobile-divider { height: 1px; background: var(--border-color); margin: 6px 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .quik-nav-menu, .quik-lang { display: none; }
          .quik-hamburger { display: flex; }
          .quik-navbar-inner { padding: 0 20px; }
          
          .quik-logo img {
            height: 80px;
            margin-top: 20px;
          }
          .quik-navbar.scrolled .quik-logo img {
            height: 70px;
            margin-top: 0;
          }
        }
        @media (max-width: 480px) {
          .quik-logo img {
            height: 60px;
            margin-top: 15px;
          }
          .quik-navbar.scrolled .quik-logo img {
            height: 55px;
            margin-top: 0;
          }
          .quik-logo-arabic { font-size: 18px; }
          .quik-logo-english { font-size: 13px; }
          .quik-logo-icon { width: 38px; height: 38px; }
        }
      `}</style>

      <nav className={`quik-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="quik-navbar-inner">

          {/* Logo */}
          <a href="/" className="quik-logo">
            <img
              src="https://quikstations.com/uploads/img/general/1719503953-logo white.png"
              alt="Quik Logo"
              className="logo-transparent"
            />
            <img
              src="https://quikstations.com/uploads/img/general/1719503953-colored logo.png"
              alt="Quik Logo"
              className="logo-normal"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="quik-nav-menu">
            <li className="quik-nav-item">
              <a href="/" className="quik-nav-link active">الرئيسية</a>
            </li>
            <li className={`quik-nav-item ${isAboutOpen ? "open" : ""}`}>
              <button
                className="quik-nav-link"
                onClick={(e) => { e.stopPropagation(); setIsAboutOpen(!isAboutOpen); setIsLangOpen(false); }}
              >
                من نحن
                <FaAngleDown className={`quik-nav-arrow ${isAboutOpen ? "open" : ""}`} />
              </button>
              <ul className="quik-dropdown">
                <li><a href="/about">عن كويك</a></li>
                <li><a href="/vision">رؤيتنا</a></li>
                <li><a href="/team">فريقنا</a></li>
              </ul>
            </li>
            <li className="quik-nav-item"><a href="/services" className="quik-nav-link">خدماتنا</a></li>
            <li className="quik-nav-item"><a href="/partners" className="quik-nav-link">شركاؤنا</a></li>
            <li className="quik-nav-item"><a href="/franchise" className="quik-nav-link">الامتياز التجاري</a></li>
            <li className="quik-nav-item"><a href="/investment" className="quik-nav-link">الاستثمار</a></li>
            <li className="quik-nav-item"><a href="/contact" className="quik-nav-link">تواصل معنا</a></li>
         

          {/* Desktop Actions (Theme + Lang) */}
          <div className="desktop-actions">
            <ThemeToggle />
            
            {/* Language Switcher */}
            <div className={`quik-lang ${isLangOpen ? "open" : ""}`}>
              <button
                className="quik-lang-btn"
                onClick={(e) => { e.stopPropagation(); setIsLangOpen(!isLangOpen); setIsAboutOpen(false); }}
              >
                العربية
                <FaAngleDown className={`quik-nav-arrow ${isLangOpen ? "open" : ""}`} />
              </button>
              <ul className="quik-lang-dropdown">
                <li><button>العربية</button></li>
                <li><button>English</button></li>
              </ul>
            </div>
          </div>
           </ul>

          {/* Hamburger */}
          <button
            className={`quik-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`quik-mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-theme-toggle" style={{ padding: '10px 24px', display: 'flex', justifyContent: 'flex-start' }}>
            <ThemeToggle />
          </div>
          <a href="/" className="quik-mobile-link active">الرئيسية</a>
          <a href="/about" className="quik-mobile-link">من نحن</a>
          <a href="/services" className="quik-mobile-link">خدماتنا</a>
          <a href="/partners" className="quik-mobile-link">شركاؤنا</a>
          <a href="/franchise" className="quik-mobile-link">الامتياز التجاري</a>
          <a href="/investment" className="quik-mobile-link">الاستثمار</a>
          <a href="/contact" className="quik-mobile-link">تواصل معنا</a>
          <div className="quik-mobile-divider" />
          <button className="quik-mobile-link">🌐 العربية / English</button>
        </div>
      </nav>
    </>
  );
};

export default QuikNavbar;