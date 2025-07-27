import { useEffect, useState } from "react";

export const NFCOverlay = () => {
  const [showNFC, setShowNFC] = useState(false);
  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    // Check for NFC parameter
    const isNFC = new URLSearchParams(window.location.search).get('nfc') === 'true';
    if (!isNFC) return;

    setShowNFC(true);

    // Load Lottie dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lottie-web@5.7.6/build/player/lottie.min.js';
    script.onload = () => {
      setLottieLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!showNFC || !lottieLoaded) return;

    // Initialize Lottie animation
    const lottie = (window as any).lottie;
    if (!lottie) return;

    const animationContainer = document.getElementById('nfc-lottie');
    if (!animationContainer) return;

    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/tick.json' // You'll need to add this file to public folder
    });

    // Play success sound
    setTimeout(() => {
      const audio = new Audio('/ding.mp3'); // You'll need to add this file to public folder
      audio.volume = 1;
      audio.play().catch(e => console.warn('🔇 Ding failed:', e));
    }, 100);

    // Hide overlay after animation
    setTimeout(() => {
      setShowNFC(false);
    }, 2000);

    return () => {
      anim.destroy();
    };
  }, [showNFC, lottieLoaded]);

  if (!showNFC) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fade-in">
      <div className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center max-w-[90%] w-64 animate-scale-in">
        <div id="nfc-lottie" className="w-24 h-24 mb-4"></div>
        <div className="text-center text-foreground font-medium">
          Successfully entered via NFC card
        </div>
      </div>
    </div>
  );
};