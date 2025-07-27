import { Phone, Mail, Instagram, MessageCircle, Copy, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7012365584",
      href: "tel:+917012365584",
      color: "text-primary",
      description: "Call me directly"
    },
    {
      icon: Mail,
      label: "Email",
      value: "achyyuthh@gmail.com",
      href: "mailto:achyyuthh@gmail.com",
      color: "text-accent",
      description: "Send me an email"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@achyyuthh",
      href: "https://www.instagram.com/achyyuthh/",
      color: "text-secondary",
      description: "Follow me on Instagram"
    },
    {
      icon: MessageCircle,
      label: "Discord",
      value: "achyyuthh",
      href: "https://discord.com/users/1375569084695052450",
      color: "text-primary",
      description: "Chat on Discord"
    }
  ];

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      toast({
        title: "Copied to clipboard!",
        description: `${label} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="group hover-lift bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`${method.color} p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                          {method.label}
                        </p>
                        <p className="text-muted-foreground text-sm mb-2">
                          {method.description}
                        </p>
                        <p className="font-mono text-sm text-primary break-all">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(method.value, method.label)}
                        className="h-10 w-10 p-0 hover:bg-primary hover:text-primary-foreground"
                      >
                        {copiedItem === method.label ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                      
                      <Button
                        size="sm"
                        onClick={() => window.open(method.href, '_blank')}
                        className="bg-gradient-primary text-primary-foreground hover:shadow-glow"
                      >
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-hero border-0 shadow-elegant">
              <CardContent className="p-8 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Something Amazing?
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Whether it's a quick question or a big project, I'd love to hear from you.
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                  onClick={() => window.open('mailto:achyyuthh@gmail.com', '_blank')}
                >
                  Send Email Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};