import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern patterns."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications that deliver excellent user experiences."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders to deliver successful projects."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building 
            web applications. I love turning complex problems into simple, beautiful solutions 
            that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Started coding during college and fell in love with the endless possibilities 
              of software development. From building my first website to creating complex 
              full-stack applications, I've been constantly learning and growing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I specialize in React, Node.js, and modern web technologies, 
              always staying up-to-date with the latest trends and best practices 
              in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card-gradient border-border/50 transition-smooth hover:card-glow hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;