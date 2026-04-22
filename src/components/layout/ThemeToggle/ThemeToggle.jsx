"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    // Dispatch custom event for immediate updates
    window.dispatchEvent(new StorageEvent("storage", { key: "theme", newValue: newTheme }));
  };

  if (!mounted) {
    return (
      <div className="theme-toggle-placeholder" style={{ width: '40px', height: '40px' }} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className={`icon-wrapper ${isDark ? 'dark' : 'light'}`}>
        {isDark ? (
          <FaSun className="theme-icon sun" />
        ) : (
          <FaMoon className="theme-icon moon" />
        )}
      </div>

      <style jsx>{`
        .theme-toggle-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }

        .theme-toggle-btn:hover {
          background: rgba(255, 152, 0, 0.1);
          transform: scale(1.1);
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .theme-icon {
          font-size: 20px;
          transition: color 0.3s ease;
        }

        .sun {
          color: #ffb800;
        }

        .moon {
          color: #5c7cfa;
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
