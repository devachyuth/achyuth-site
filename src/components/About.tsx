import { Code, Palette, Bot, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: Palette,
      title: "Website Designing",
      description: "Creating beautiful, user-friendly interfaces with modern design principles and responsive layouts.",
      color: "text-accent"
    },
    {
      icon: Code,
      title: "Graphic Designing", 
      description: "Crafting visual identities, logos, and digital artwork that tells compelling brand stories.",
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "Discord Bot Development",
      description: "Building intelligent bots with custom functionality to enhance Discord server experiences.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Making Ideas Real",
      description: "Transforming concepts into tangible digital solutions through creative problem-solving.",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm passionate about creating digital experiences that blend creativity with functionality, 
            bringing ideas to life through code and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover-lift bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`${skill.color} p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">Active Brand</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};