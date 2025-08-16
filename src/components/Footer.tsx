import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="hero-text">Developer Portfolio</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting beautiful, functional web applications with passion and precision. 
              Always learning, always creating.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@developer.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="p-2 rounded-full bg-card hover:bg-primary transition-smooth hover:card-glow group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-card hover:bg-accent transition-smooth hover:accent-glow group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-card hover:bg-primary transition-smooth hover:card-glow group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm flex items-center">
            © {currentYear} Developer Portfolio. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            and lots of coffee.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-smooth">Privacy Policy</button>
            <button className="hover:text-primary transition-smooth">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;