import { ArrowRight, Shield, Github, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="FHE Invoice Finance" className="h-8 w-8" />
              <span className="font-bold text-lg">FHE Finance</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolutionary invoice factoring powered by Fully Homomorphic Encryption. 
              Trade with confidence while keeping sensitive data private.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Marketplace</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">List Invoice</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Security</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="h-3 w-3" />
                <a href="#" className="hover:text-primary transition-smooth">FHE Technology</a>
              </li>
              <li><a href="#" className="hover:text-primary transition-smooth">Audit Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 FHE Invoice Finance. All rights reserved.</span>
            </div>

            {/* Animated Money Flow */}
            <div className="flex items-center space-x-2 text-primary">
              <span className="text-sm font-medium">Secure Capital Flow</span>
              <div className="flex items-center space-x-1">
                <ArrowRight className="h-4 w-4 money-flow" style={{ animationDelay: "0s" }} />
                <ArrowRight className="h-4 w-4 money-flow" style={{ animationDelay: "0.5s" }} />
                <ArrowRight className="h-4 w-4 money-flow" style={{ animationDelay: "1s" }} />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;