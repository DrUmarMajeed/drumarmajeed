import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/umarmajeedofficial",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/umarmajeedofficial",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:umarmajeedofficial@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gradient-primary"
            >
              Umar Majeed
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI/ML Engineer • Aspiring PhD Scholar • AI/ML Researcher
              <br />
              Building intelligent solutions that shape the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Services", "Projects", "Articles", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110 shadow-sm hover:shadow-md"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Umar Majeed. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and cutting-edge tech.</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;