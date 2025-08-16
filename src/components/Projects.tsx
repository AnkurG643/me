import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import webAppImage from "@/assets/project-web-app.jpg";
import mobileAppImage from "@/assets/project-mobile-app.jpg";
import ecommerceImage from "@/assets/project-ecommerce.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "A comprehensive task management application with real-time collaboration, drag-and-drop functionality, and team workspace features.",
      image: webAppImage,
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: ecommerceImage,
      tags: ["Next.js", "Stripe", "MongoDB", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
      image: mobileAppImage,
      tags: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 overflow-hidden transition-smooth hover:card-glow hover:scale-[1.02] group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="transition-bounce hover:card-glow"
                    asChild
                  >
                    <a href={project.liveUrl}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="transition-bounce hover:accent-glow"
                    asChild
                  >
                    <a href={project.githubUrl}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 transition-smooth hover:card-glow hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl}>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl}>
                      <Github className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="transition-bounce hover:accent-glow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;