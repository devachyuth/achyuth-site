import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Brand } from "@/components/Brand";
import { Contact } from "@/components/Contact";
import { NFCOverlay } from "@/components/NFCOverlay";
import { TapOverlay } from "@/components/TapOverlay";

const Index = () => {
  const [showTapOverlay, setShowTapOverlay] = useState(true);

  const handleTapOverlayComplete = () => {
    setShowTapOverlay(false);
  };

  return (
    <div className="min-h-screen">
      {/* Tap to Enter Overlay */}
      {showTapOverlay && <TapOverlay onTap={handleTapOverlayComplete} />}
      
      {/* NFC Overlay - shows if ?nfc=true in URL */}
      <NFCOverlay />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Work />
        <Brand />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 text-gradient">Achyuth</div>
          <p className="text-secondary-foreground/80 mb-6 max-w-md mx-auto">
            Crafting digital experiences that blend creativity with functionality.
          </p>
          <div className="flex justify-center gap-6 text-sm text-secondary-foreground/60">
            <span>© 2025 Achyuth</span>
            <span>•</span>
            <span>Made By Achyuth</span>
            <span>•</span>
            <a 
              href="https://snaptier.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              SnapTier
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;