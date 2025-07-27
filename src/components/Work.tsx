import { ExternalLink, Github, Palette, Bot, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Work = () => {
  const projects = [
    {
      title: "SnapTier Brand",
      description: "A comprehensive digital platform delivering premium design solutions with lightning-fast turnaround times. Built with modern web technologies and optimized for performance.",
      image: "photo-1498050108023-c5249f4df085",
      tags: ["Web Design", "Branding", "Platform"],
      links: {
        live: "https://snaptier.xyz",
        github: null
      },
      icon: Globe,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Discord Bot Suite",
      description: "Custom Discord bots with advanced functionality including moderation, entertainment, and server management features. Designed for seamless user experience.",
      image: "photo-1461749280684-dccba630e2f6",
      tags: ["Discord.js", "Node.js", "Bot Development"],
      links: {
        live: null,
        github: null
      },
      icon: Bot,
      gradient: "from-secondary to-primary"
    },
    {
      title: "Snaptier Socials",
      description: "Complete visual identity solutions including logo design, color palettes, typography, and brand guidelines for various clients and personal projects.",
      image: "photo-1487058792275-0ad4aaf24ca7",
      tags: ["Logo Design", "Branding", "Visual Identity"],
      links: {
        live: "https://www.instagram.com/snaptier/",
        github: null
      },
      icon: Palette,
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent projects, demonstrating creativity, technical skills, 
            and attention to detail across various digital mediums.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=600&h=300&fit=crop&auto=format`}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Quick Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.links.live && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-10 w-10 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => window.open(project.links.live!, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-10 w-10 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => window.open(project.links.github!, '_blank')}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.links.live && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-glow"
                        onClick={() => window.open(project.links.live!, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                    {project.links.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.links.github!, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {!project.links.live && !project.links.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-muted-foreground text-muted-foreground"
                        disabled
                      >
                        Private Project
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero border-0 shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-white/90 mb-6">
                Check out my Instagram for daily updates and behind-the-scenes content.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://www.instagram.com/achyyuthh/', '_blank')}
              >
                Follow @achyyuthh
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};