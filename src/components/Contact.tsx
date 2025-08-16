import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    placeholder="Project inquiry" 
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={6}
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full transition-bounce hover:card-glow"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card-gradient border-border/50 transition-smooth hover:card-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@developer.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50 transition-smooth hover:card-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50 transition-smooth hover:card-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-4 rounded-full bg-card hover:bg-primary transition-smooth hover:card-glow group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="p-4 rounded-full bg-card hover:bg-accent transition-smooth hover:accent-glow group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-accent-foreground" />
                </a>
                <a 
                  href="#" 
                  className="p-4 rounded-full bg-card hover:bg-primary transition-smooth hover:card-glow group"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-hero-gradient border-border/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Available for New Projects</h3>
                <p className="text-sm opacity-90 mb-4">
                  I'm currently accepting new freelance projects and full-time opportunities.
                </p>
                <Button variant="secondary" className="transition-bounce">
                  Let's Talk
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;