import { useState } from "react";

interface TapOverlayProps {
  onTap: () => void;
}

export const TapOverlay = ({ onTap }: TapOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleTap = () => {
    setIsVisible(false);
    setTimeout(onTap, 300); // Delay to allow fade out animation
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-medium z-[10000] cursor-pointer transition-opacity duration-300 animate-fade-in"
      onClick={handleTap}
    >
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
          Welcome
        </div>
        <div className="text-lg">Tap to Enter</div>
        <div className="mt-8 w-12 h-12 border-2 border-current rounded-full mx-auto animate-pulse flex items-center justify-center">
          <div className="w-2 h-2 bg-current rounded-full"></div>
        </div>
      </div>
    </div>
  );
};