"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      delay: 0,
      offset: 100,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
