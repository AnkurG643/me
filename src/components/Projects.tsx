import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import cvss from "@/assets/cvss.png";
import otss from "@/assets/otss.png";
import rfss from "@/assets/rfss.png";
import riisess from "@/assets/riisess.jpg";
import c3ss from "@/assets/c3ss.jpg";

const Projects = () => {
  const projects = [
    {
      title: "CreditVision",
      description: "An ML-powered system for predicting credit risk and generating credit scores to support lending decisions in financial institutions.",
      image: cvss,
      tags: ["Numpy", "Pandas", "Scikit-learn", "Python", "Streamlit"],
      liveUrl: "https://creditvision.onrender.com/",
      githubUrl: "https://github.com/AnkurG643/credit-risk-modeling",
      featured: true
    },
    {
      title: "OlympiTrack",
      description: "Olympitrack is a web-based data visualization platform that showcases historical athletics data covering the previous 120 years of Olympic Games.",
      image: otss,
      tags: ["Numpy", "Pandas", "Scikit-learn", "Python", "Streamlit","Data Visualization","Plotly","seaborn"],
      liveUrl: "https://olympitrack-x9d0.onrender.com/",
      githubUrl: "https://github.com/AnkurG643/olympics",
      featured: true
    },
    {
      title: "Research Innovation Portal",
      description: "A management system for Research, IPR, and Startups. Backend built in Flask with secure auth, role-based access, and dynamic routing.",
      image: riisess,
      tags: ["javascript", "Flask", "PostgreSql", "React", "Tailwind CSS", "JWT", "Role-based access"],
      liveUrl: "https://olympitrack-x9d0.onrender.com/",
      githubUrl: "https://github.com/AnkurG643/olympics",
      featured: true
    },
    {
      title: "Rooflyzer",
      description: "A web application that estimates the market value of residential properties in the city based on various input features provided by the user",
      image: rfss,
      tags: ["Numpy", "Pandas", "Scikit-learn", "Python", "Flask","Ridge Regression"],
      liveUrl: "https://rooflyzer.onrender.com/",
      githubUrl: "https://github.com/AnkurG643/Bangalore_House_price_prediction",
      featured: true
    },
    {
      title: "Medical Super App",
      description: "Full-stack health platform with online consultations, hospital bed mgmt., emergency services. Frontend + backend by me.",
      image: c3ss,
      tags: ["javascript", "Express", "MongoDB", "React", "Tailwind CSS", "JWT", "Role-based access"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
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
      </div>
    </section>
  );
};

export default Projects;