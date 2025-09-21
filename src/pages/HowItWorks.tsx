import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, Shield, Coins, CheckCircle, TrendingUp, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. List Your Invoice",
      description: "Upload your invoice data which gets automatically encrypted using FHE technology. Set your minimum discount rate and auction duration.",
      details: ["Invoice verification", "Automatic FHE encryption", "Set auction parameters", "Generate tradeable token"]
    },
    {
      icon: Shield,
      title: "2. Encrypted Marketplace",
      description: "Your invoice appears in the marketplace with sensitive data encrypted but key metrics visible for bidding.",
      details: ["Face value visible", "Due date shown", "Credit rating displayed", "Sensitive details encrypted"]
    },
    {
      icon: TrendingUp,
      title: "3. Competitive Bidding",
      description: "Investors place bids on your encrypted invoice. The highest bid wins when the auction closes.",
      details: ["Real-time bidding", "Transparent auction", "Automatic bid ranking", "Timer-based closure"]
    },
    {
      icon: Coins,
      title: "4. Instant Settlement",
      description: "Once sold, you receive immediate payment minus the discount rate. Smart contracts handle the transfer.",
      details: ["Instant payment", "Smart contract execution", "Automatic fee calculation", "Blockchain verification"]
    },
    {
      icon: CheckCircle,
      title: "5. Invoice Collection",
      description: "The buyer collects payment from your customer when the invoice matures, completing the cycle.",
      details: ["Automated tracking", "Payment notification", "Settlement confirmation", "Platform fee deduction"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our FHE-powered platform revolutionizes invoice factoring by maintaining complete privacy 
            while enabling transparent price discovery through competitive auctions.
          </p>
          <Link to="/marketplace">
            <Button variant="hero" size="lg">
              Start Trading Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="gradient-card border border-border/50 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border/50 flex items-center justify-center">
                    <div className="text-center">
                      <step.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Process Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose FHE Invoice Finance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of invoice factoring with unparalleled security and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="gradient-card border border-border/50 text-center p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Complete Privacy</h3>
              <p className="text-muted-foreground">
                Your sensitive business data remains encrypted throughout the entire process.
              </p>
            </Card>

            <Card className="gradient-card border border-border/50 text-center p-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Better Rates</h3>
              <p className="text-muted-foreground">
                Competitive bidding ensures you get the best possible discount rates.
              </p>
            </Card>

            <Card className="gradient-card border border-border/50 text-center p-6">
              <Coins className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Liquidity</h3>
              <p className="text-muted-foreground">
                Convert your invoices to cash instantly with automated settlement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the future of invoice finance. Connect your wallet and start trading encrypted invoices today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wallet" size="lg" className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Connect Wallet
            </Button>
            <Link to="/marketplace">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                Browse Marketplace <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;