"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ 
  children, 
  id, 
  className = "", 
  background = "dark",
  padding = "120px 0",
  gridPattern = true,
  accentLine = false
}) {
  const bgColors = {
    dark: "#0a0a0a",
    darker: "#111",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
  };

  return (
    <section 
      id={id}
      className={className}
      style={{ 
        padding,
        background: bgColors[background] || background,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Grid Pattern Background */}
      {gridPattern && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(255,152,0,0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,152,0,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          zIndex: 0
        }} />
      )}

      {/* Accent Line Top */}
      {accentLine && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,152,0,0.5), transparent)",
          zIndex: 1
        }} />
      )}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </section>
  );
}

// Animated Section Header Component
export function SectionHeader({ 
  badge, 
  badgeNumber,
  title, 
  description,
  align = "center"
}) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.div 
      {...fadeInUp}
      style={{ textAlign: align, marginBottom: "60px" }}
    >
      {badge && (
        <span style={{
          display: "inline-block",
          padding: "8px 20px",
          background: "rgba(255,152,0,0.1)",
          border: "1px solid rgba(255,152,0,0.3)",
          borderRadius: "30px",
          color: "#ff9800",
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "20px",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {badgeNumber} / {badge}
        </span>
      )}
      <h2 style={{ 
        fontSize: "clamp(32px, 5vw, 48px)", 
        fontWeight: 800, 
        color: "#fff", 
        marginBottom: "20px",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {title}
      </h2>
      {description && (
        <p style={{ 
          fontSize: "18px", 
          color: "rgba(255,255,255,0.6)",
          maxWidth: "600px",
          margin: align === "center" ? "0 auto" : "0",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

// Animated Card Component
export function AnimatedCard({ 
  children, 
  index = 0,
  hoverEffect = true,
  style = {}
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={hoverEffect ? { y: -10 } : {}}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        borderRadius: "20px",
        border: "1px solid rgba(255,152,0,0.1)",
        position: "relative",
        overflow: "hidden",
        ...style
      }}
    >
      {/* Hover Glow - Removed */}
      {children}
    </motion.div>
  );
}

// Glow Orb Component
export function GlowOrb({ 
  top, 
  bottom, 
  left, 
  right, 
  size = 400,
  delay = 0
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      style={{
        position: "absolute",
        top,
        bottom,
        left,
        right,
        width: size,
        height: size,
        zIndex: 0
      }}
    />
  );
}

// Primary Button Component
export function PrimaryButton({ 
  children, 
  href = "#",
  icon,
  size = "large"
}) {
  const sizes = {
    small: { padding: "12px 30px", fontSize: "14px" },
    medium: { padding: "15px 40px", fontSize: "16px" },
    large: { padding: "20px 50px", fontSize: "18px" }
  };

  return (
    <motion.a 
      href={href}
      whileHover={{ scale: 1.05, boxShadow: "none" }}
      whileTap={{ scale: 0.95 }}
      style={{ 
        display: "inline-flex", 
        alignItems: "center", 
        gap: "12px",
        background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)", 
        color: "#fff", 
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: 700,
        fontFamily: "'Cairo', sans-serif",
        boxShadow: "none",
        border: "2px solid rgba(255,255,255,0.1)",
        ...sizes[size]
      }}
    >
      {children}
      {icon}
    </motion.a>
  );
}

// Icon Box Component
export function IconBox({ 
  icon: Icon, 
  size = 80,
  animated = true
}) {
  const box = (
    <div style={{
      width: size,
      height: size,
      background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(255,152,0,0.3)"
    }}>
      <Icon style={{ fontSize: size * 0.4, color: "#ff9800" }} />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {box}
      </motion.div>
    );
  }

  return box;
}

// Step Number Component
export function StepNumber({ 
  number, 
  active = false,
  size = 80
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        width: size,
        height: size,
        background: active 
          ? "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)"
          : "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: active ? "2px solid #ff9800" : "2px solid rgba(255,152,0,0.3)",
        boxShadow: "none"
      }}
    >
      <span style={{
        color: active ? "#fff" : "#ff9800",
        fontSize: size * 0.35,
        fontWeight: 800,
        fontFamily: "'Cairo', sans-serif"
      }}>
        {String(number).padStart(2, '0')}
      </span>
    </motion.div>
  );
}

// Timeline Line Component
export function TimelineLine() {
  return (
    <div style={{
      position: "absolute",
      top: "40px",
      left: "12.5%",
      right: "12.5%",
      height: "2px",
      background: "linear-gradient(90deg, #ff9800, rgba(255,152,0,0.3))",
      zIndex: 0
    }} className="d-none d-lg-block" />
  );
}

// Check Badge Component
export function CheckBadge({ size = 60 }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring" }}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <FaCheckCircle style={{ fontSize: size * 0.5, color: "#fff" }} />
    </motion.div>
  );
}

import { FaCheckCircle } from "react-icons/fa";

// Animated Background Glow
export function BackgroundGlow() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 6, repeat: Infinity }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        background: "transparent",
        filter: "none",
        zIndex: 0
      }}
    />
  );
}

// Scroll Progress Indicator
export function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10
      }}
    >
      <div style={{
        width: "30px",
        height: "50px",
        border: "2px solid rgba(255,152,0,0.5)",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px"
      }}>
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: "6px",
            height: "6px",
            background: "#ff9800",
            borderRadius: "50%"
          }}
        />
      </div>
    </motion.div>
  );
}

// Accent Top Line
export function AccentTopLine() {
  return (
    <div style={{
      position: "absolute",
      top: "-2px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "4px",
      background: "linear-gradient(90deg, transparent, #ff9800, transparent)",
      borderRadius: "2px"
    }} />
  );
}

// Content Wrapper for Cards
export function CardContent({ children, padding = "40px 30px" }) {
  return (
    <div style={{ padding, position: "relative", zIndex: 1 }}>
      {children}
    </div>
  );
}

// Stagger Container
export function StaggerContainer({ children, className = "" }) {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={{
        initial: {},
        whileInView: {
          transition: { staggerChildren: 0.15 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade In Item
export function FadeInItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Reveal on Scroll
export function RevealOnScroll({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Title with Gradient
export function GradientTitle({ children, as: Component = "h2", style = {} }) {
  return (
    <Component style={{
      fontSize: "clamp(32px, 5vw, 48px)",
      fontWeight: 800,
      background: "linear-gradient(135deg, #fff 0%, #ff9800 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontFamily: "'Cairo', sans-serif",
      ...style
    }}>
      {children}
    </Component>
  );
}

// Section Number Badge
export function SectionBadge({ number, label }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "8px 20px",
      background: "rgba(255,152,0,0.1)",
      border: "1px solid rgba(255,152,0,0.3)",
      borderRadius: "30px",
      color: "#ff9800",
      fontSize: "14px",
      fontWeight: 600,
      marginBottom: "20px",
      fontFamily: "'Cairo', sans-serif"
    }}>
      {number} / {label}
    </span>
  );
}

// Dark Card
export function DarkCard({ children, style = {} }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      borderRadius: "20px",
      border: "1px solid rgba(255,152,0,0.1)",
      ...style
    }}>
      {children}
    </div>
  );
}

// Light Text
export function LightText({ children, size = "18px", style = {} }) {
  return (
    <p style={{
      fontSize: size,
      color: "rgba(255,255,255,0.6)",
      fontFamily: "'Cairo', sans-serif",
      lineHeight: "1.8",
      ...style
    }}>
      {children}
    </p>
  );
}

// White Heading
export function WhiteHeading({ children, level = 2, style = {} }) {
  const Tag = `h${level}`;
  const sizes = {
    1: "clamp(36px, 6vw, 72px)",
    2: "clamp(28px, 4vw, 42px)",
    3: "clamp(24px, 3vw, 32px)",
    4: "24px"
  };

  return (
    <Tag style={{
      fontSize: sizes[level],
      fontWeight: 800,
      color: "#fff",
      fontFamily: "'Cairo', sans-serif",
      lineHeight: "1.2",
      ...style
    }}>
      {children}
    </Tag>
  );
}

// Orange Highlight Text
export function OrangeHighlight({ children }) {
  return (
    <span style={{ color: "#ff9800" }}>
      {children}
    </span>
  );
}

// Container with Glow
export function GlowContainer({ children, style = {} }) {
  return (
    <div style={{
      position: "relative",
      ...style
    }}>
      <BackgroundGlow />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

// Responsive Grid
export function ResponsiveGrid({ children, columns = 3, gap = "30px" }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap,
      "@media (max-width: 991px)": {
        gridTemplateColumns: "repeat(2, 1fr)"
      },
      "@media (max-width: 575px)": {
        gridTemplateColumns: "1fr"
      }
    }} className="row">
      {children}
    </div>
  );
}

// Flex Center
export function FlexCenter({ children, direction = "column", style = {} }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: direction,
      alignItems: "center",
      justifyContent: "center",
      ...style
    }}>
      {children}
    </div>
  );
}

// Gradient Border Card
export function GradientBorderCard({ children, style = {} }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.02) 100%)",
      borderRadius: "15px",
      border: "1px solid rgba(255,152,0,0.2)",
      position: "relative",
      ...style
    }}>
      <AccentTopLine />
      {children}
    </div>
  );
}

// Text Center
export function TextCenter({ children }) {
  return (
    <div style={{ textAlign: "center" }}>
      {children}
    </div>
  );
}

// Max Width Container
export function MaxWidth({ children, width = "600px" }) {
  return (
    <div style={{ maxWidth: width, margin: "0 auto" }}>
      {children}
    </div>
  );
}

// Padding Container
export function Padding({ children, x = "20px", y = "0" }) {
  return (
    <div style={{ padding: `${y} ${x}` }}>
      {children}
    </div>
  );
}

// Margin Bottom
export function MarginBottom({ children, size = "40px" }) {
  return (
    <div style={{ marginBottom: size }}>
      {children}
    </div>
  );
}

// Spacer
export function Spacer({ size = "60px" }) {
  return <div style={{ height: size }} />;
}

// Divider Line
export function DividerLine() {
  return (
    <div style={{
      height: "1px",
      background: "linear-gradient(90deg, transparent, rgba(255,152,0,0.3), transparent)",
      margin: "60px 0"
    }} />
  );
}

// Highlight Box
export function HighlightBox({ children, style = {} }) {
  return (
    <div style={{
      padding: "8px 20px",
      background: "rgba(255,152,0,0.1)",
      border: "1px solid rgba(255,152,0,0.3)",
      borderRadius: "30px",
      display: "inline-block",
      ...style
    }}>
      {children}
    </div>
  );
}

// Feature List Item
export function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "20px",
      padding: "20px",
      background: "rgba(255,255,255,0.02)",
      borderRadius: "15px",
      border: "1px solid rgba(255,152,0,0.1)"
    }}>
      <div style={{
        width: "50px",
        height: "50px",
        minWidth: "50px",
        background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255,152,0,0.3)"
      }}>
        <Icon style={{ fontSize: "24px", color: "#ff9800" }} />
      </div>
      <div>
        <h4 style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "8px",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: "1.6",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Stat Card
export function StatCard({ number, label, suffix = "" }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.02) 100%)",
        borderRadius: "20px",
        border: "1px solid rgba(255,152,0,0.2)",
        textAlign: "center"
      }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring" }}
        style={{
          fontSize: "48px",
          fontWeight: 800,
          color: "#ff9800",
          fontFamily: "'Cairo', sans-serif",
          display: "block"
        }}
      >
        {number}{suffix}
      </motion.span>
      <span style={{
        fontSize: "14px",
        color: "rgba(255,255,255,0.6)",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {label}
      </span>
    </motion.div>
  );
}

// Testimonial Card
export function TestimonialCard({ quote, author, role }) {
  return (
    <DarkCard style={{ padding: "40px" }}>
      <div style={{
        fontSize: "60px",
        color: "#ff9800",
        lineHeight: 1,
        marginBottom: "20px",
        opacity: 0.5
      }}>
        &ldquo;
      </div>
      <p style={{
        fontSize: "16px",
        color: "rgba(255,255,255,0.8)",
        lineHeight: "1.8",
        marginBottom: "30px",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div style={{
          width: "50px",
          height: "50px",
          background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: 700,
          color: "#fff",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {author.charAt(0)}
        </div>
        <div>
          <h5 style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#fff",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {author}
          </h5>
          <span style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {role}
          </span>
        </div>
      </div>
    </DarkCard>
  );
}

// Image with Overlay
export function ImageWithOverlay({ src, alt, overlayOpacity = 0.6 }) {
  return (
    <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden" }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `linear-gradient(to bottom, rgba(10,10,10,${overlayOpacity}) 0%, transparent 50%)`,
        pointerEvents: "none"
      }} />
    </div>
  );
}

// List with Icons
export function IconList({ items, icon: Icon }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, index) => (
        <li 
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 0",
            borderBottom: index < items.length - 1 ? "1px solid rgba(255,152,0,0.1)" : "none"
          }}
        >
          <Icon style={{ color: "#ff9800", fontSize: "18px", flexShrink: 0 }} />
          <span style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Cairo', sans-serif" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Timeline Item
export function TimelineItem({ year, title, description, isLast = false }) {
  return (
    <div style={{ 
      display: "flex", 
      gap: "30px",
      position: "relative",
      paddingBottom: isLast ? 0 : "40px"
    }}>
      {/* Timeline Line */}
      {!isLast && (
        <div style={{
          position: "absolute",
          top: "50px",
          right: "calc(100% - 25px)",
          width: "2px",
          height: "calc(100% - 20px)",
          background: "linear-gradient(to bottom, #ff9800, rgba(255,152,0,0.1))"
        }} />
      )}
      
      {/* Year Badge */}
      <div style={{
        width: "50px",
        height: "50px",
        minWidth: "50px",
        background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: 700,
        color: "#fff",
        fontFamily: "'Cairo', sans-serif",
        zIndex: 1
      }}>
        {year}
      </div>
      
      {/* Content */}
      <div>
        <h4 style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "10px",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: "1.7",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Partner Logo Placeholder
export function PartnerLogo({ name }) {
  return (
    <div style={{
      padding: "30px",
      background: "rgba(255,255,255,0.02)",
      borderRadius: "15px",
      border: "1px solid rgba(255,152,0,0.1)",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100px"
    }}>
      <span style={{
        fontSize: "18px",
        fontWeight: 700,
        color: "rgba(255,255,255,0.4)",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {name}
      </span>
    </div>
  );
}

// Contact Info Item
export function ContactInfoItem({ icon: Icon, label, value, href }) {
  const content = (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "20px",
      background: "rgba(255,255,255,0.02)",
      borderRadius: "15px",
      border: "1px solid rgba(255,152,0,0.1)"
    }}>
      <div style={{
        width: "50px",
        height: "50px",
        background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Icon style={{ color: "#ff9800", fontSize: "22px" }} />
      </div>
      <div>
        <span style={{
          display: "block",
          fontSize: "12px",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "4px",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {label}
        </span>
        <span style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#fff",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} style={{ textDecoration: "none", display: "block" }}>{content}</a>;
  }

  return content;
}

// Social Link Button
export function SocialButton({ icon: Icon, href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      style={{
        width: "50px",
        height: "50px",
        background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255,152,0,0.3)",
        textDecoration: "none"
      }}
    >
      <Icon style={{ color: "#ff9800", fontSize: "20px" }} />
    </motion.a>
  );
}

// Section Title with Line
export function SectionTitleWithLine({ children }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "60px" }}>
      <h2 style={{
        fontSize: "clamp(28px, 4vw, 42px)",
        fontWeight: 800,
        color: "#fff",
        marginBottom: "20px",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {children}
      </h2>
      <div style={{
        width: "80px",
        height: "4px",
        background: "linear-gradient(90deg, transparent, #ff9800, transparent)",
        margin: "0 auto",
        borderRadius: "2px"
      }} />
    </div>
  );
}

// Feature Grid
export function FeatureGrid({ features }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px"
    }}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          style={{
            padding: "30px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(255,152,0,0.1)"
          }}
        >
          <div style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            border: "1px solid rgba(255,152,0,0.3)"
          }}>
            <feature.icon style={{ color: "#ff9800", fontSize: "28px" }} />
          </div>
          <h4 style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "12px",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {feature.title}
          </h4>
          <p style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: "1.7",
            fontFamily: "'Cairo', sans-serif"
          }}>
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Comparison Table
export function ComparisonTable({ headers, rows }) {
  return (
    <div style={{
      overflowX: "auto",
      borderRadius: "20px",
      border: "1px solid rgba(255,152,0,0.1)"
    }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "rgba(255,255,255,0.02)"
      }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "'Cairo', sans-serif",
                  borderBottom: "1px solid rgba(255,152,0,0.2)"
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: cellIndex === 0 ? "#fff" : "rgba(255,255,255,0.7)",
                    fontWeight: cellIndex === 0 ? 600 : 400,
                    fontFamily: "'Cairo', sans-serif",
                    borderBottom: "1px solid rgba(255,152,0,0.05)"
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// FAQ Item
export function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div style={{
      borderBottom: "1px solid rgba(255,152,0,0.1)"
    }}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "25px 0",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "right"
        }}
      >
        <span style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#fff",
          fontFamily: "'Cairo', sans-serif"
        }}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          style={{
            width: "30px",
            height: "30px",
            background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
            borderRadius: "8px",
            display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff9800",
          fontSize: "20px"
        }}
      >
        +
      </motion.span>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      style={{ overflow: "hidden" }}
    >
      <p style={{
        padding: "0 0 25px 0",
        fontSize: "15px",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "1.8",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {answer}
      </p>
    </motion.div>
  </div>
);
}

// Process Step
export function ProcessStep({ number, title, description }) {
return (
  <div style={{
    display: "flex",
    gap: "20px",
    alignItems: "flex-start"
  }}>
    <div style={{
      width: "60px",
      height: "60px",
      background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: 800,
      color: "#fff",
      fontFamily: "'Cairo', sans-serif",
      flexShrink: 0
    }}>
      {number}
    </div>
    <div>
      <h4 style={{
        fontSize: "20px",
        fontWeight: 700,
        color: "#fff",
        marginBottom: "10px",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {title}
      </h4>
      <p style={{
        fontSize: "14px",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "1.7",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {description}
      </p>
    </div>
  </div>
);
}

// Badge
export function Badge({ children, color = "orange" }) {
const colors = {
  orange: { bg: "rgba(255,152,0,0.1)", border: "rgba(255,152,0,0.3)", text: "#ff9800" },
  green: { bg: "rgba(39,174,96,0.1)", border: "rgba(39,174,96,0.3)", text: "#27ae60" },
  blue: { bg: "rgba(52,152,219,0.1)", border: "rgba(52,152,219,0.3)", text: "#3498db" }
};

const theme = colors[color] || colors.orange;

return (
  <span style={{
    display: "inline-block",
    padding: "6px 16px",
    background: theme.bg,
    border: `1px solid ${theme.border}`,
    borderRadius: "20px",
    color: theme.text,
    fontSize: "12px",
    fontWeight: 600,
    fontFamily: "'Cairo', sans-serif"
  }}>
    {children}
  </span>
);
}

// Price Card
export function PriceCard({ title, price, period, features, featured = false }) {
return (
  <motion.div
    whileHover={{ y: -10 }}
    style={{
      padding: "40px",
      background: featured 
        ? "linear-gradient(135deg, rgba(255,152,0,0.15) 0%, rgba(255,152,0,0.05) 100%)"
        : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      borderRadius: "20px",
      border: featured ? "2px solid rgba(255,152,0,0.3)" : "1px solid rgba(255,152,0,0.1)",
      position: "relative",
      textAlign: "center"
    }}
  >
    {featured && (
      <div style={{
        position: "absolute",
        top: "-12px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "6px 20px",
        background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
        borderRadius: "20px",
        color: "#fff",
        fontSize: "12px",
        fontWeight: 700,
        fontFamily: "'Cairo', sans-serif"
      }}>
        الأكثر طلباً
      </div>
    )}
    
    <h3 style={{
      fontSize: "24px",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "20px",
      fontFamily: "'Cairo', sans-serif"
    }}>
      {title}
    </h3>
    
    <div style={{ marginBottom: "30px" }}>
      <span style={{
        fontSize: "48px",
        fontWeight: 800,
        color: "#ff9800",
        fontFamily: "'Cairo', sans-serif"
      }}>
        {price}
      </span>
      <span style={{
        fontSize: "14px",
        color: "rgba(255,255,255,0.5)",
        fontFamily: "'Cairo', sans-serif"
      }}>
        /{period}
      </span>
    </div>
    
    <ul style={{
      listStyle: "none",
      padding: 0,
      margin: "0 0 30px 0",
      textAlign: "right"
    }}>
      {features.map((feature, index) => (
        <li 
          key={index}
          style={{
            padding: "12px 0",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Cairo', sans-serif",
            borderBottom: index < features.length - 1 ? "1px solid rgba(255,152,0,0.1)" : "none",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <span style={{ color: "#ff9800" }}>✓</span>
          {feature}
        </li>
      ))}
    </ul>
    
    <PrimaryButton href="#" size="medium">
      ابدأ الآن
    </PrimaryButton>
  </motion.div>
);
}

// Alert Box
export function AlertBox({ type = "info", children }) {
const types = {
  info: { bg: "rgba(52,152,219,0.1)", border: "rgba(52,152,219,0.3)", icon: "ℹ️" },
  success: { bg: "rgba(39,174,96,0.1)", border: "rgba(39,174,96,0.3)", icon: "✓" },
  warning: { bg: "rgba(243,156,18,0.1)", border: "rgba(243,156,18,0.3)", icon: "⚠️" },
  error: { bg: "rgba(231,76,60,0.1)", border: "rgba(231,76,60,0.3)", icon: "✕" }
};

const theme = types[type];

return (
  <div style={{
    padding: "20px",
    background: theme.bg,
    border: `1px solid ${theme.border}`,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "15px"
  }}>
    <span style={{ fontSize: "20px" }}>{theme.icon}</span>
    <span style={{
      color: "rgba(255,255,255,0.9)",
      fontFamily: "'Cairo', sans-serif",
      fontSize: "14px"
    }}>
      {children}
    </span>
  </div>
);
}

// Loading Spinner
export function LoadingSpinner({ size = 40 }) {
return (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    style={{
      width: size,
      height: size,
      border: `3px solid rgba(255,152,0,0.1)`,
      borderTopColor: "#ff9800",
      borderRadius: "50%"
    }}
  />
);
}

// Empty State
export function EmptyState({ icon: Icon, title, description }) {
return (
  <div style={{
    padding: "60px 20px",
    textAlign: "center",
    background: "rgba(255,255,255,0.02)",
    borderRadius: "20px",
    border: "1px solid rgba(255,152,0,0.1)"
  }}>
    <div style={{
      width: "80px",
      height: "80px",
      background: "linear-gradient(135deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0.1) 100%)",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px",
      border: "1px solid rgba(255,152,0,0.3)"
    }}>
      <Icon style={{ color: "#ff9800", fontSize: "40px" }} />
    </div>
    <h4 style={{
      fontSize: "20px",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "10px",
      fontFamily: "'Cairo', sans-serif"
    }}>
      {title}
    </h4>
    <p style={{
      fontSize: "14px",
      color: "rgba(255,255,255,0.5)",
      fontFamily: "'Cairo', sans-serif"
    }}>
      {description}
    </p>
  </div>
);
}

// Error Boundary Fallback
export function ErrorFallback({ error, resetErrorBoundary }) {
return (
  <div style={{
    padding: "40px",
    textAlign: "center",
    background: "rgba(231,76,60,0.1)",
    borderRadius: "20px",
    border: "1px solid rgba(231,76,60,0.3)"
  }}>
    <h3 style={{
      fontSize: "24px",
      fontWeight: 700,
      color: "#e74c3c",
      marginBottom: "20px",
      fontFamily: "'Cairo', sans-serif"
    }}>
      عذراً، حدث خطأ ما
    </h3>
    <p style={{
      fontSize: "14px",
      color: "rgba(255,255,255,0.7)",
      marginBottom: "20px",
      fontFamily: "'Cairo', sans-serif"
    }}>
      {error.message}
    </p>
    <button
      onClick={resetErrorBoundary}
      style={{
        padding: "12px 30px",
        background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
        border: "none",
        borderRadius: "25px",
        color: "#fff",
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "'Cairo', sans-serif"
      }}
    >
      إعادة المحاولة
    </button>
  </div>
);
}

// Scroll To Top Button
export function ScrollToTop() {
const [isVisible, setIsVisible] = React.useState(false);

React.useEffect(() => {
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

return (
  <motion.button
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: isVisible ? 1 : 0, 
      scale: isVisible ? 1 : 0 
    }}
    onClick={scrollToTop}
    style={{
      position: "fixed",
      bottom: "30px",
      right: "30px",
      width: "50px",
      height: "50px",
      background: "linear-gradient(135deg, #ff9800 0%, #e67e22 100%)",
      border: "none",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(255,152,0,0.4)",
      zIndex: 999
    }}
  >
    <span style={{ color: "#fff", fontSize: "20px" }}>↑</span>
  </motion.button>
);
}

// Export all components
export {
  SectionWrapper,
  SectionHeader,
  AnimatedCard,
  GlowOrb,
  PrimaryButton,
  IconBox,
  StepNumber,
  TimelineLine,
  CheckBadge,
  BackgroundGlow,
  ScrollIndicator,
  AccentTopLine,
  CardContent,
  StaggerContainer,
  FadeInItem,
  RevealOnScroll,
  GradientTitle,
  SectionBadge,
  DarkCard,
  LightText,
  WhiteHeading,
  OrangeHighlight,
  GlowContainer,
  ResponsiveGrid,
  FlexCenter,
  GradientBorderCard,
  TextCenter,
  MaxWidth,
  Padding,
  MarginBottom,
  Spacer,
  DividerLine,
  HighlightBox,
  FeatureItem,
  StatCard,
  TestimonialCard,
  ImageWithOverlay,
  IconList,
  TimelineItem,
  PartnerLogo,
  ContactInfoItem,
  SocialButton,
  SectionTitleWithLine,
  FeatureGrid,
  ComparisonTable,
  FAQItem,
  ProcessStep,
  Badge,
  PriceCard,
  AlertBox,
  LoadingSpinner,
  EmptyState,
  ErrorFallback,
  ScrollToTop
};
