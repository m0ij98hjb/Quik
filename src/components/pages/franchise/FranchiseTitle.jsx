'use client';

import { useEffect, useRef } from 'react';

export default function FranchiseTitle() {
  const typedRef = useRef(null);

  useEffect(() => {
    const checkTyped = () => {
      if (typeof window !== 'undefined' && window.Typed && typedRef.current) {
        new window.Typed(typedRef.current, {
          strings: ['الامتياز التجاري'],
          typeSpeed: 80,
          backSpeed: 0,
          showCursor: true,
          cursorChar: '|',
          loop: false,
          startDelay: 300,
          onComplete: (self) => {
            setTimeout(() => {
              if (self.cursor) {
                self.cursor.style.display = 'none';
              }
            }, 1000);
          }
        });
      }
    };

    const timer = setTimeout(checkTyped, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      position: 'absolute', 
      top: '100px', 
      right: '0', 
      left: '0', 
      zIndex: 10, 
      padding: '40px 0',
      textAlign: 'right'
    }}>
      <div className="container">
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 800, 
          color: '#fff', 
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)', 
          minHeight: '60px', 
          direction: 'rtl',
          margin: 0
        }}>
          <span ref={typedRef} style={{ display: 'inline-block', minWidth: '220px' }}></span>
        </h1>
      </div>
    </div>
  );
}
