"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../../../contexts/LoadingContext';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const { isLoading, loadingProgress } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="loading-screen"
        >

          {/* Background */}
          <div className="loading-bg-pattern" />
          <div className="loading-gradient" />

          {/* Content */}
          <div className="loading-content">

            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="logo-container"
            >

              {/* 🎯 Logo Reveal (من جوه لبره) */}
              <div className="logo-image-wrapper">

                <motion.div
                  className="logo-reveal"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: loadingProgress / 100,
                    opacity: 1
                  }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.25
                  }}
                >
                  <img
                    src="/images/loding.png"
                    alt="Quik Logo"
                    className="loading-logo-image"
                  />
                </motion.div>

              </div>

              {/* 🔵 Progress Ring */}
              <svg className="progress-ring" viewBox="0 0 120 120">

                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                />

                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#ff9800"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 339.29,
                    strokeDashoffset:
                      339.29 - (339.29 * loadingProgress / 100),
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'center'
                  }}
                />

              </svg>

            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}