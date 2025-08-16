import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-smooth">
            <span className="hero-text">Ankur Goswami</span>
            <br />
            <span className="text-foreground">Web Developer | Data Scientist</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            I craft beautiful, functional web applications with modern technologies.
            <br />
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
  asChild
  variant="default"
  size="lg"
  className="transition-bounce hover:card-glow"
>
  <a href="#projects">View My Work</a>
</Button>

<Button
  asChild
  variant="outline"
  size="lg"
  className="transition-bounce hover:accent-glow"
>
  <a href="#contact">Get In Touch</a>
</Button>

            <Button 
              variant="secondary" 
              size="lg" 
              className="transition-bounce hover:card-glow"
              asChild
            >
              <a href="/Goswami_Ankur_Resume.pdf" download="Goswami_Ankur_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/AnkurG643" 
              className="p-3 rounded-full bg-card hover:bg-primary transition-smooth hover:card-glow"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ankurgoswami643/" 
              className="p-3 rounded-full bg-card hover:bg-accent transition-smooth hover:accent-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#contact" 
              className="p-3 rounded-full bg-card hover:bg-primary transition-smooth hover:card-glow"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;