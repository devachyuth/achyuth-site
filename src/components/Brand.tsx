import { Globe, Instagram, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Brand = () => {
  return (
    <section id="brand" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            My Brand
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SnapTier represents my vision of delivering premium digital solutions 
            with speed, quality, and innovation at the forefront.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-lift bg-gradient-card border-0 shadow-elegant hover:shadow-hover transition-all duration-500 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Brand header with gradient background */}
                <div className="bg-gradient-hero p-8 md:p-12 text-center text-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                    <span className="text-3xl font-bold">S</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">SnapTier</h3>
                  <p className="text-xl text-white/90 max-w-md mx-auto">
                    Premium digital solutions at lightning speed
                  </p>
                </div>

                {/* Brand links */}
                <div className="p-8 md:p-12">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <a 
                      href="https://snaptier.xyz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                            snaptier.xyz
                          </p>
                          <p className="text-muted-foreground text-sm">Official Website</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </a>

                    <a 
                      href="https://www.instagram.com/snaptier/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/50 hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20">
                        <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                          <Instagram className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg group-hover:text-accent transition-colors">
                            @snaptier
                          </p>
                          <p className="text-muted-foreground text-sm">Follow for Updates</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </a>
                  </div>

                  <div className="mt-8 text-center">
                    <Button 
                      size="lg"
                      className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                      onClick={() => window.open('https://snaptier.xyz', '_blank')}
                    >
                      Explore SnapTier
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};