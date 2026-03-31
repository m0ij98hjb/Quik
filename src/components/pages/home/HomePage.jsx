import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GoalsSection from "./components/GoalsSection";
import ServicesSection from "./components/ServicesSection";
import VisionSection from "./components/VisionSection";
import CountersSection from "./components/CountersSection";
import PartnersSection from "./components/PartnersSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import Footer from "../../layout/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="main-area">
        <HeroSection />
        <AboutSection />
        <GoalsSection />
        <ServicesSection />
        <VisionSection />
        <CountersSection />
        <PartnersSection />
        <BlogSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}