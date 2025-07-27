import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Calendar, GraduationCap } from "lucide-react";

const phrases = [
  "Crafting Designs.",
  "Building Bots.",
  "Creating SnapTier.",
  "Making Ideas Real."
];

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingDelay = isDeleting ? 50 : 120;
    const pauseAfterComplete = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), pauseAfterComplete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  // Time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZone: 'Asia/Kolkata'
      };
      setCurrentTime(now.toLocaleTimeString('en-IN', options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-background via-primary-muted/20 to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
            Achyuth
          </h1>
          
          {/* Typing effect */}
          <div className="text-2xl md:text-3xl font-medium text-muted-foreground mb-12 h-12 flex items-center justify-center">
            <span className="border-r-2 border-primary animate-pulse pr-1">
              {displayText}
            </span>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-card hover-lift">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Age</p>
              <p className="font-semibold text-lg">14</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-card hover-lift">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">From</p>
              <p className="font-semibold text-lg">Calicut, Kerala</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-card hover-lift">
              <GraduationCap className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">School</p>
              <p className="font-semibold text-lg">Al Farook, Farook College</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-card hover-lift">
              <div className="w-6 h-6 bg-primary rounded-full mx-auto mb-3 animate-pulse"></div>
              <p className="text-sm text-muted-foreground mb-1">My Time</p>
              <p className="font-semibold text-lg font-mono">{currentTime}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-elegant transition-all duration-300"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-primary"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};