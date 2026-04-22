"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from '../components/common/LoadingScreen/LoadingScreen';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [key, setKey] = useState(0);

  const runLoader = () => {
    setIsLoading(true);
    setLoadingProgress(0);

    let progress = 0;

    const interval = setInterval(() => {
      progress += (100 - progress) * 0.08;

      if (progress >= 99.5) {
        progress = 100;
        setLoadingProgress(progress);

        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(false);
        }, 300);

        return;
      }

      setLoadingProgress(progress);
    }, 30);

    return interval;
  };

  // 🚀 Initial Load
  useEffect(() => {
    const interval = runLoader();
    return () => clearInterval(interval);
  }, []);

  // 🚀 On Route Change
  useEffect(() => {
    const interval = runLoader();
    return () => clearInterval(interval);
  }, [pathname, key]);

  const triggerLoading = () => {
    setKey(prev => prev + 1);
  };

  const startLoading = () => {
    triggerLoading();
  };

  const stopLoading = () => {
    setIsLoading(false);
    setLoadingProgress(100);
  };

  const setProgress = (progress) => {
    setLoadingProgress(progress);
  };

  return (
    <LoadingContext.Provider value={{
      isLoading,
      loadingProgress,
      startLoading,
      stopLoading,
      setProgress
    }}>
      <LoadingScreen />
      {children}
    </LoadingContext.Provider>
  );
};