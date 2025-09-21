import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionizing Invoice Finance
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our platform leverages Fully Homomorphic Encryption (FHE) to enable confidential invoice trading, 
              protecting sensitive business data while maintaining market transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 gradient-card rounded-lg border border-border/50">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fully Encrypted</h3>
              <p className="text-muted-foreground mb-4">
                Invoice data remains encrypted during computation, ensuring complete privacy.
              </p>
              <Link to="/security">
                <Button variant="outline" size="sm" className="flex items-center gap-2 mx-auto">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="text-center p-6 gradient-card rounded-lg border border-border/50">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Live Marketplace</h3>
              <p className="text-muted-foreground mb-4">
                Browse and bid on encrypted invoices with real-time auction mechanics.
              </p>
              <Link to="/marketplace">
                <Button variant="outline" size="sm" className="flex items-center gap-2 mx-auto">
                  Browse <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="text-center p-6 gradient-card rounded-lg border border-border/50">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Process</h3>
              <p className="text-muted-foreground mb-4">
                Automated workflow from invoice listing to settlement with blockchain verification.
              </p>
              <Link to="/how-it-works">
                <Button variant="outline" size="sm" className="flex items-center gap-2 mx-auto">
                  Discover <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/marketplace">
              <Button variant="hero" size="lg" className="mr-4">
                Start Trading
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;