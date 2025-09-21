import { Wallet, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Veiled Invoice Vault" className="h-10 w-10" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Veiled Invoice Vault
            </h1>
            <p className="text-xs text-muted-foreground">FHE-Powered Confidential Trading</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/marketplace" className="text-sm font-medium hover:text-primary transition-smooth">
            Marketplace
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-smooth">
            How It Works
          </Link>
          <Link to="/security" className="text-sm font-medium hover:text-primary transition-smooth flex items-center gap-1">
            <Shield className="h-4 w-4" />
            Security
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <ConnectButton />
          <Button variant="hero" size="sm">
            List Invoice
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;