"use client";

import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Listen for storage changes (cross-tab sync)
    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        const newTheme = e.newValue || "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!mounted) {
    return (
      <div style={{ 
        minHeight: "100vh", 
        backgroundColor: "#0a0a0a",
        color: "#ffffff"
      }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: theme === "dark" ? "#0a0a0a" : "#ffffff",
      color: theme === "dark" ? "#ffffff" : "#0a0a0a"
    }}>
      {children}
    </div>
  );
}
