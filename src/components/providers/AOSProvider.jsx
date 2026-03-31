"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
      delay: 50,
      offset: 120,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
