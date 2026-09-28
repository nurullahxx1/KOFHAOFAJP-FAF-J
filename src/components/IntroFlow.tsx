import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AppStage } from '../types';

interface IntroFlowProps {
  onComplete: () => void;
}

export const IntroFlow: React.FC<IntroFlowProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<AppStage>('black_initial');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showBottomRightBtn, setShowBottomRightBtn] = useState(false);
  const [isFadingToMain, setIsFadingToMain] = useState(false);

  // 1. Initial 1-second pure black screen, then fade into "Tıkla M"
  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('click_m');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // When second apology is shown, wait ~2.4 seconds then show "İstersen tıkla" button
  useEffect(() => {
    if (stage === 'apology_2') {
      const timer = setTimeout(() => {
        setShowBottomRightBtn(true);
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Handle first button: "Tıkla M"
  const handleFirstButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setStage('click_again');
      setIsTransitioning(false);
    }, 550); // 400-700ms smooth transition
  };

  // Handle second button: "Bir daha tıkla" -> Transitions to deep navy apology screen
  const handleSecondButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setStage('apology_1');
      setIsTransitioning(false);
    }, 600);
  };

  // Handle tap on apology screen: "Çok Özür dilerim" -> "Gerçekten çok özür dilerim"
  const handleApologyScreenTap = () => {
    if (stage === 'apology_1' && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStage('apology_2');
        setIsTransitioning(false);
      }, 600);
    }
  };

  // Handle bottom right "İstersen tıkla" button -> Grand transition into soft flamingo pink world
  const handleFinalTransition = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFadingToMain(true);

    try {
      confetti({
        particleCount: 40,
        spread: 55,
        origin: { y: 0.82, x: 0.85 },
        colors: ['#f472b6', '#fb7185', '#fed7e2', '#fbcfe8', '#e9d5ff'],
        shapes: ['circle'],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.85,
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      onComplete();
    }, 750);
  };

  const isDarkNavy = stage === 'apology_1' || stage === 'apology_2';

  return (
    <div
      onClick={handleApologyScreenTap}
      className={`fixed inset-0 w-full h-full flex flex-col justify-center items-center select-none overflow-hidden transition-all duration-1000 ease-out ${
        isDarkNavy ? 'bg-[#0B1026]' : 'bg-black'
      } ${isFadingToMain ? 'opacity-0 scale-102' : 'opacity-100'} ${
        stage === 'apology_1' ? 'cursor-pointer' : ''
      }`}
      aria-live="polite"
    >
      {/* Subtle ambient starlight / dust particles on dark navy background */}
      {isDarkNavy && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/5 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/3 right-1/5 w-0.5 h-0.5 bg-blue-200/50 rounded-full" />
          <div className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-pink-200/30 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }} />
        </div>
      )}

      {/* Stage 0: Initial pure black screen for ~1s */}
      {stage === 'black_initial' && <div className="sr-only">Yükleniyor</div>}

      {/* Stage 1: "Tıkla M" Button */}
      {stage === 'click_m' && (
        <div
          className={`flex flex-col items-center justify-center transition-all duration-500 ease-out ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <button
            type="button"
            onClick={handleFirstButtonClick}
            className="group relative min-h-[48px] px-8 py-3.5 rounded-full text-sm font-medium text-white/90 bg-white/[0.04] border border-white/20 hover:border-white/45 hover:bg-white/[0.08] active:scale-95 transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.08)] hover:shadow-[0_0_28px_rgba(255,255,255,0.18)] backdrop-blur-md cursor-pointer"
            aria-label="Tıkla M"
          >
            <span className="tracking-wide">Tıkla M</span>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-pink-300/80 rounded-full animate-pulse" />
          </button>
        </div>
      )}

      {/* Stage 2: "Bir daha tıkla" Button */}
      {stage === 'click_again' && (
        <div
          className={`flex flex-col items-center justify-center transition-all duration-500 ease-out ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <button
            type="button"
            onClick={handleSecondButtonClick}
            className="min-h-[48px] px-8 py-3.5 rounded-full text-sm font-medium text-white/90 bg-white/[0.04] border border-white/25 hover:border-white/50 hover:bg-white/[0.08] active:scale-95 transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.08)] hover:shadow-[0_0_28px_rgba(255,255,255,0.18)] backdrop-blur-md cursor-pointer"
            aria-label="Bir daha tıkla"
          >
            <span className="tracking-wide">Bir daha tıkla</span>
          </button>
        </div>
      )}

      {/* Stage 3 & 4: Navy Apology Flow */}
      {isDarkNavy && (
        <div className="relative w-full h-full flex flex-col justify-center items-center px-6">
          <div className="text-center max-w-sm mx-auto">
            {stage === 'apology_1' && (
              <div
                className={`transition-all duration-700 ease-out ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <p className="font-handwriting text-3xl sm:text-4xl text-white/95 font-light tracking-wider drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] leading-relaxed">
                  Çok Özür dilerim
                </p>
                <p className="mt-8 text-[11px] text-white/35 font-sans tracking-widest uppercase transition-opacity duration-1000">
                  (ekrana dokun)
                </p>
              </div>
            )}

            {stage === 'apology_2' && (
              <div className="animate-in fade-in zoom-in-95 duration-700 ease-out">
                <p className="font-handwriting text-4xl sm:text-5xl text-white font-light tracking-wide drop-shadow-[0_0_16px_rgba(255,255,255,0.3)] leading-relaxed">
                  Gerçekten çok özür dilerim
                </p>
              </div>
            )}
          </div>

          {/* Stage 5: Bottom Right "İstersen tıkla" Button */}
          {stage === 'apology_2' && (
            <div
              className={`absolute bottom-8 right-6 transition-all duration-700 ease-out ${
                showBottomRightBtn
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <button
                type="button"
                onClick={handleFinalTransition}
                className="group flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full text-xs font-medium text-pink-100 bg-pink-500/15 border border-pink-400/35 hover:bg-pink-500/25 hover:border-pink-300 active:scale-95 transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(244,114,182,0.2)] cursor-pointer"
                aria-label="İstersen tıkla"
              >
                <span className="tracking-wide">İstersen tıkla</span>
                <span className="text-pink-300 text-xs group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
