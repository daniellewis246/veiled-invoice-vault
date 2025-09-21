import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Lock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-accent">
              Powered by Fully Homomorphic Encryption
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Trade Invoices
            <span className="gradient-primary bg-clip-text text-transparent block">
              Without Exposing
            </span>
            Sensitive Data
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionary marketplace where businesses can sell encrypted invoices as collateral. 
            Advanced cryptography ensures contract terms remain confidential while enabling secure trading.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="flex items-center gap-2">
              Start Trading Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Learn About FHE
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Fully Encrypted</h3>
              <p className="text-sm text-muted-foreground">Invoice data never exposed</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Instant Liquidity</h3>
              <p className="text-sm text-muted-foreground">Fast capital for businesses</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-2">
                <Lock className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Zero Trust</h3>
              <p className="text-sm text-muted-foreground">Cryptographic guarantees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;