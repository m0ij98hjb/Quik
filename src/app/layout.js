import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "الرئيسية - شركة كويك لمحطات الوقود",
  description: "شركة كويك لتشغيل المحطات ومراكز الخدمة",
};

import AOSProvider from "../components/providers/AOSProvider";
import { ThemeProvider } from "../components/providers/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link href="https://quikstations.com/uploads/img/general/1719503953-colored logo.png" sizes="128x128" rel="shortcut icon" />

        {/* Boostrap */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/magnific.popup.min.css" />
        {/* Animate Css */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/animate.min.css" />
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/slick.css" />
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/slick-theme.css" />
        {/* Vegas Slider Css */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/vegas.slider.min.css" />
        {/* Owl Carousel */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/owl.carousel.min.css" />
        {/* Owl Carousel Default */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/vendor/css/owl.carousel.default.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/fonts/font_awesome/css/all.css" />
        {/* Flat Icons */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/fonts/flat_icons/flaticon.css" />
        {/* Theme Main Css */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/css/style.css" />
        {/* Theme Color Css */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/css/skins/default-color.css" id="theme-color-toggle" />
        {/* Color Option Css */}
        <link rel="stylesheet" href="https://quikstations.com/assets/frontend/css/skins/yellow-color.css" />
      </head>

      <body className="rtl-mode" data-spy="scroll" data-target="#fixedNavbar">
        <div className="page-wrapper" id="wrapper">
          <ThemeProvider>
            <AOSProvider>
              {children}
            </AOSProvider>
          </ThemeProvider>
        </div>

        {/* Scripts */}
        <Script strategy="beforeInteractive" src="https://www.youtube.com/iframe_api?v=3.2.10" id="YTAPI" />
        <Script strategy="beforeInteractive" src="https://quikstations.com/assets/frontend/vendor/js/jquery.min.js" />
        <Script strategy="beforeInteractive" src="//code.jquery.com/jquery-migrate-1.2.1.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/popper.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/bootstrap.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/images.loaded.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/wow.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/magnific.popup.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/waypoint.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/counter.up.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/jquery.easing.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/owl.carousel.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/validate.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/custom.select.plugin.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/scrollit.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/slick.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/isotope.min.js" />
        <Script strategy="lazyOnload" src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/vendor/js/jquery.mb-ytb.min.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/js/main.js" />
        <Script strategy="lazyOnload" src="https://quikstations.com/assets/frontend/js/rtl-mode.js" />

      </body>
    </html>
  );
}
