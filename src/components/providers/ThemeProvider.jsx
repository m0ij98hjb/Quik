"use client";

import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    // Always start with light mode — override any previously saved dark preference
    const savedTheme = localStorage.getItem("theme");
    const effectiveTheme = savedTheme ?? "light";
    // If no preference saved yet, save light as default
    if (!savedTheme) {
      localStorage.setItem("theme", "light");
    }
    setTheme(effectiveTheme);
    document.documentElement.setAttribute("data-theme", effectiveTheme);

    // Listen for storage changes (cross-tab sync)
    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        const newTheme = e.newValue || "light";
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
        backgroundColor: "#ffffff",
        color: "#1a1a1a"
      }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: theme === "dark" ? "#0a0a0a" : "#ffffff",
      color: theme === "dark" ? "#ffffff" : "#1a1a1a"
    }}>
      {children}
    </div>
  );
}
