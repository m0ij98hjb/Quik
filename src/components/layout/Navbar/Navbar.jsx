"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useLanguage } from "../../../contexts/LanguageContext";




const QuikNavbar = () => {
  const pathname = usePathname();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, t, direction } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.quik-lang')) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── NAVBAR ── */
        .quik-navbar {
          font-family: 'Cairo', sans-serif;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          background: var(--bg-glass, rgba(10, 10, 10, 0.8));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid var(--border-color, rgba(255, 152, 0, 0.1));
        }
        .quik-navbar.scrolled {
          background: var(--bg-glass, rgba(10, 10, 10, 0.95));
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .quik-navbar-inner {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 15px 40px;
          max-width: 1600px;
          margin: 0 auto;
          /* Removed uniform column-gap to allow asymmetric spacing */
          direction: ${direction} !important; /* Ensure correct mirroring in both languages */
        }

        .desktop-actions {
          display: flex;
          align-items: center;
          gap: 25px; /* More balanced internal gap */
          justify-self: end;
        }

        /* ── LOGO ── */
        .quik-logo {
          display: flex; align-items: center;
          text-decoration: none; flex-shrink: 0;
          justify-self: start;
          transition: all 0.3s ease;
          padding: 8px 15px;
          border-radius: 12px;
        }
        .quik-logo:hover {
          transform: scale(1.05);
          // background: var(--bg-glass, rgba(0,0,0,0.5));
        }
        .quik-logo img {
          height: 66px;
          width: auto;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        /* ── DESKTOP NAV ── */
        .quik-nav-menu {
          display: flex; align-items: center;
          list-style: none; justify-content: center;
          gap: 8px;
          margin-inline-start: 30px; /* Closer to Logo */
          margin-inline-end: 100px;  /* Farther from Moon/Actions */
          direction: ${direction} !important; /* Menu items order based on language */
        }
        .quik-nav-item { position: relative; }

        .quik-nav-link {
          display: flex; align-items: center; gap: 6px;
          padding: 12px 20px;
          font-size: 15px; font-weight: 600; color: var(--text-primary, rgba(255, 255, 255, 0.9));
          text-decoration: none; white-space: nowrap; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; background: none;
          font-family: 'Cairo', sans-serif;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        .quik-nav-link::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(230, 126, 34, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .quik-nav-link:hover {
          color: #ff9800;
          transform: translateY(-2px);
        }
        .quik-nav-link:hover::before {
          opacity: 1;
        }
        .quik-nav-link.active {
          color: #ff9800;
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(230, 126, 34, 0.1) 100%);
        }
        
        .quik-nav-link .badge {
          background: linear-gradient(135deg, #ff9800 0%, #e67e22 100%);
          color: #fff;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 10px;
          margin-right: 6px;
          font-weight: 700;
        }

        .quik-nav-arrow {
          font-size: 10px;
          margin-right: 4px;
          transition: transform 0.3s ease;
        }
        .quik-nav-link:hover .quik-nav-arrow {
          transform: translateY(2px);
        }

        /* ── DROPDOWN ── */
        .quik-dropdown {
          position: absolute; top: calc(100% + 10px); right: 0;
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          border-radius: 16px;
          min-width: 220px;
          padding: 12px 0;
          list-style: none; z-index: 9999;
          border: 1px solid rgba(255, 152, 0, 0.2);
          visibility: hidden; opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .quik-nav-item:hover .quik-dropdown,
        .quik-nav-item.open .quik-dropdown {
          visibility: visible; opacity: 1;
          transform: translateY(0);
        }
        
        .quik-dropdown li a {
          display: block; padding: 12px 24px;
          font-size: 14px; font-weight: 500; color: rgba(255, 255, 255, 0.8);
          text-decoration: none; transition: all 0.2s ease;
        }
        .quik-dropdown li a:hover { 
          color: #ff9800;
          background: rgba(255, 152, 0, 0.1);
          padding-right: 30px;
        }

        /* ── LANGUAGE ── */
        .quik-lang { position: relative; flex-shrink: 0; }
        .quik-lang-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 152, 0, 0.1);
          border: 1px solid rgba(255, 152, 0, 0.3);
          border-radius: 50px;
          font-family: 'Cairo', sans-serif;
          font-size: 14px; font-weight: 600; color: var(--text-primary, rgba(255, 255, 255, 0.9));
          cursor: pointer; transition: all 0.3s ease;
        }
        .quik-lang-btn:hover {
          background: rgba(255, 152, 0, 0.2);
          border-color: rgba(255, 152, 0, 0.5);
          color: #ff9800;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 152, 0, 0.2);
        }
        
        .quik-lang-dropdown {
          position: absolute; top: calc(100% + 10px); left: 0;
          background: var(--bg-glass, rgba(20, 20, 20, 0.95));
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          min-width: 140px;
          padding: 8px 0;
          list-style: none; z-index: 9999;
          border: 1px solid var(--border-color, rgba(255, 152, 0, 0.2));
          visibility: hidden; opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .quik-lang:hover .quik-lang-dropdown,
        .quik-lang.open .quik-lang-dropdown {
          visibility: visible; opacity: 1;
          transform: translateY(0);
        }
        .quik-lang-dropdown li button {
          display: block; width: 100%; padding: 10px 20px;
          font-size: 14px; font-weight: 500; color: var(--text-primary, rgba(255, 255, 255, 0.8));
          background: none; border: none; text-align: right;
          font-family: 'Cairo', sans-serif; cursor: pointer;
          transition: all 0.2s ease;
        }
        .quik-lang-dropdown li button:hover { 
          color: #ff9800;
          background: rgba(255, 152, 0, 0.1);
        }

        /* ── MOBILE MENU BUTTON ── */
        .quik-mobile-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 152, 0, 0.1);
          border: 1px solid rgba(255, 152, 0, 0.3);
          border-radius: 12px;
          color: var(--text-primary, #fff);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 20px;
        }
        .quik-mobile-btn:hover {
          background: rgba(255, 152, 0, 0.2);
          border-color: rgba(255, 152, 0, 0.5);
          transform: scale(1.05);
        }

        /* ── MOBILE MENU ── */
        .quik-mobile-menu {
          display: none;
          position: fixed;
          top: 0; right: -100%;
          width: 320px;
          height: 100vh;
          background: var(--bg-primary, rgba(10, 10, 10, 0.98));
          backdrop-filter: blur(20px);
          padding: 100px 0 30px;
          flex-direction: column;
          box-shadow: -10px 0 60px rgba(0, 0, 0, 0.5);
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 9998;
          overflow-y: auto;
          border-left: 1px solid var(--border-color, rgba(255, 152, 0, 0.2));
        }
        .quik-mobile-menu.open {
          display: flex;
          right: 0;
        }
        .quik-mobile-overlay {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 9997;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .quik-mobile-overlay.open {
          display: block;
          opacity: 1;
        }

        .quik-mobile-link {
          display: block; padding: 16px 30px;
          font-size: 16px; font-weight: 600; color: var(--text-primary, rgba(255, 255, 255, 0.9));
          text-decoration: none; font-family: 'Cairo', sans-serif;
          border: none; background: none;
          text-align: right; width: 100%; cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        .quik-mobile-link:hover, .quik-mobile-link.active {
          color: #ff9800;
          background: rgba(255, 152, 0, 0.1);
          padding-right: 40px;
        }
        .quik-mobile-link .badge {
          background: linear-gradient(135deg, #ff9800 0%, #e67e22 100%);
          color: #fff;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 10px;
          margin-right: 8px;
          font-weight: 700;
        }
        
        .quik-mobile-divider {
          height: 1px;
          background: rgba(255, 152, 0, 0.2);
          margin: 8px 20px;
        }

        .mobile-theme-toggle {
          padding: 16px 30px;
          border-top: 1px solid rgba(255, 152, 0, 0.2);
          margin-top: auto;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .quik-navbar-inner {
            padding: 18px 30px;
          }
          .quik-nav-link {
            padding: 10px 16px;
            font-size: 14px;
          }
        }
        
        @media (max-width: 992px) {
          .quik-nav-menu, .quik-lang { display: none; }
          .quik-mobile-btn { display: flex; }
          .quik-navbar-inner { padding: 15px 25px; }

          .quik-logo img {
            height: 50px;
          }
        }

        @media (max-width: 576px) {
          .quik-navbar-inner {
            padding: 12px 20px;
          }
          .quik-logo img {
            height: 42px;
          }
          .quik-mobile-menu {
            width: 100%;
            right: -100%;
          }
          .quik-mobile-btn {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }
        }
      `}</style>

      <nav className={`quik-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="quik-navbar-inner">

          {/* Logo */}
          <a href="/" className="quik-logo">
            <img
              src="https://quikstations.com/uploads/img/general/1719503953-logo white.png"
              alt="Quik Logo"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="quik-nav-menu">
            <li className="quik-nav-item">
              <a href="/" className={`quik-nav-link ${pathname === '/' ? 'active' : ''}`}>
                {t('nav.home')}
              </a>
            </li>
            <li className="quik-nav-item">
              <a href="/about" className={`quik-nav-link ${pathname === '/about' ? 'active' : ''}`}>
                {t('nav.about')}
              </a>
            </li>
            <li className="quik-nav-item">
              <a href="/services" className={`quik-nav-link ${pathname === '/services' ? 'active' : ''}`}>
                {t('nav.services')}
              </a>
            </li>
            <li className="quik-nav-item">
              <a href="/partners" className={`quik-nav-link ${pathname === '/partners' ? 'active' : ''}`}>
                {t('nav.partners')}
              </a>
            </li>
            <li className="quik-nav-item">
              <a href="/franchise" className={`quik-nav-link ${pathname === '/franchise' ? 'active' : ''}`}>
                {t('nav.franchise')}
              </a>
            </li>
            <li className="quik-nav-item">
              <a href="/blog" className={`quik-nav-link ${pathname === '/blog' ? 'active' : ''}`}>
                {t('nav.blog')}
              </a>
            </li>
            <li className="quik-nav-item">
              <a href="/branches" className={`quik-nav-link ${pathname === '/branches' ? 'active' : ''}`}>

                {t('nav.branches')}
              </a>
            </li>
          </ul>

          {/* Desktop Actions (Theme + Lang) */}
          <div className="desktop-actions">
            <ThemeToggle />

            {/* Language Switcher */}
            <div className={`quik-lang ${isLangOpen ? "open" : ""}`}>
              <button
                className="quik-lang-btn"
                onClick={(e) => { e.stopPropagation(); setIsLangOpen(!isLangOpen); }}
              >
                {language === 'ar' ? 'العربية' : 'English'}
                <FaAngleDown className={`quik-nav-arrow ${isLangOpen ? "open" : ""}`} />
              </button>
              <ul className="quik-lang-dropdown">
                <li><button onClick={() => { changeLanguage('ar'); setIsLangOpen(false); }}>العربية</button></li>
                <li><button onClick={() => { changeLanguage('en'); setIsLangOpen(false); }}>English</button></li>
              </ul>
            </div>

            {/* Careers Button - Styled like Language */}
            <a
              href="/careers"
              className={`quik-careers-btn ${pathname === '/careers' ? 'active' : ''}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: pathname === '/careers' ? 'rgba(255, 152, 0, 0.25)' : 'rgba(255, 152, 0, 0.1)',
                border: pathname === '/careers' ? '1px solid rgba(255, 152, 0, 0.6)' : '1px solid rgba(255, 152, 0, 0.3)',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                color: pathname === '/careers' ? '#ff9800' : 'var(--text-primary, rgba(255, 255, 255, 0.9))',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 152, 0, 0.2)';
                e.target.style.borderColor = 'rgba(255, 152, 0, 0.5)';
                e.target.style.color = '#ff9800';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 152, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                if (pathname !== '/careers') {
                  e.target.style.background = 'rgba(255, 152, 0, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 152, 0, 0.3)';
                  e.target.style.color = 'var(--text-primary, rgba(255, 255, 255, 0.9))';
                } else {
                  e.target.style.background = 'rgba(255, 152, 0, 0.25)';
                  e.target.style.borderColor = 'rgba(255, 152, 0, 0.6)';
                  e.target.style.color = '#ff9800';
                }
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {t('nav.careers')}
            </a>

            {/* CTA Button */}
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #ff9800 0%, #e67e22 100%)',
                color: '#fff',
                borderRadius: '50px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: "'Cairo', sans-serif",
                boxShadow: '0 8px 20px rgba(255, 152, 0, 0.3)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 30px rgba(255, 152, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 152, 0, 0.3)';
              }}
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="quik-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div className={`quik-mobile-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

        {/* Mobile Menu */}
        <div className={`quik-mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="/" className={`quik-mobile-link ${pathname === '/' ? 'active' : ''}`}>
            <span className="badge">01</span>
            {t('nav.home')}
          </a>
          <a href="/about" className={`quik-mobile-link ${pathname === '/about' ? 'active' : ''}`}>
            <span className="badge">02</span>
            {t('nav.about')}
          </a>
          <a href="/services" className={`quik-mobile-link ${pathname === '/services' ? 'active' : ''}`}>
            <span className="badge">03</span>
            {t('nav.services')}
          </a>
          <a href="/partners" className={`quik-mobile-link ${pathname === '/partners' ? 'active' : ''}`}>
            <span className="badge">04</span>
            {t('nav.partners')}
          </a>
          <a href="/franchise" className={`quik-mobile-link ${pathname === '/franchise' ? 'active' : ''}`}>
            <span className="badge">05</span>
            {t('nav.franchise')}
          </a>
          <a href="/blog" className={`quik-mobile-link ${pathname === '/blog' ? 'active' : ''}`}>
            <span className="badge">06</span>
            {t('nav.blog')}
          </a>
          <a href="/branches" className={`quik-mobile-link ${pathname === '/branches' ? 'active' : ''}`}>
            <span className="badge">07</span>
            {t('nav.branches')}
          </a>
          <div className="quik-mobile-divider" />
          <button
            className="quik-mobile-link"
            onClick={() => changeLanguage(language === 'ar' ? 'en' : 'ar')}
          >
            🌐 {language === 'ar' ? 'English' : 'العربية'}
          </button>
          <a
            href="/careers"
            className={`quik-mobile-link ${pathname === '/careers' ? 'active' : ''}`}
            style={{
              background: pathname === '/careers' ? 'rgba(255, 152, 0, 0.15)' : 'transparent',
              color: pathname === '/careers' ? '#ff9800' : undefined,
              border: pathname === '/careers' ? '1px solid rgba(255, 152, 0, 0.4)' : '1px solid rgba(255, 152, 0, 0.2)',
              borderRadius: '12px',
              margin: '5px 20px'
            }}
          >
            <span style={{ marginLeft: '8px' }}>💼</span>
            {t('nav.careers')}
          </a>
          <a href="/contact" className="quik-mobile-link" style={{ marginTop: '10px' }}>
            {t('nav.contact')}
          </a>
          <div className="quik-mobile-divider" />
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
};

export default QuikNavbar;