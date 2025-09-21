import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Key, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Fully Homomorphic Encryption (FHE)",
      description: "Advanced cryptographic technology that allows computations on encrypted data without ever decrypting it.",
      details: ["Data never exposed in plaintext", "Computations on encrypted values", "Zero-knowledge proofs", "Quantum-resistant encryption"]
    },
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "All transactions are recorded on-chain with cryptographic proof of authenticity and integrity.",
      details: ["Immutable transaction records", "Smart contract automation", "Decentralized verification", "Transparent audit trail"]
    },
    {
      icon: Key,
      title: "Private Key Management",
      description: "User-controlled private keys ensure you maintain complete ownership of your encrypted data.",
      details: ["Non-custodial architecture", "Hardware wallet support", "Key rotation capabilities", "Multi-signature options"]
    },
    {
      icon: Eye,
      title: "Selective Disclosure",
      description: "Choose exactly what information to reveal while keeping sensitive details encrypted.",
      details: ["Granular privacy controls", "Buyer verification levels", "Risk-based disclosure", "Compliance automation"]
    }
  ];

  const threatProtections = [
    {
      threat: "Data Breaches",
      protection: "FHE encryption ensures data remains secure even if systems are compromised",
      status: "Protected"
    },
    {
      threat: "Insider Attacks",
      protection: "Zero-knowledge architecture prevents internal access to sensitive data",
      status: "Protected"
    },
    {
      threat: "Regulatory Compliance",
      protection: "Automated compliance checks with privacy-preserving verification",
      status: "Compliant"
    },
    {
      threat: "Market Manipulation",
      protection: "Transparent bidding with cryptographic proof of fairness",
      status: "Prevented"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Badge variant="outline" className="mb-4">
              Enterprise-Grade Security
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Security & Privacy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Built with military-grade encryption and zero-knowledge principles, our platform ensures 
            your sensitive business data remains private while enabling transparent market operations.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Quantum-Resistant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Security Architecture
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our multi-layered security approach combines cutting-edge cryptography with blockchain technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="gradient-card border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Matrix */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Threat Protection Matrix
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our security measures protect against common threats in financial technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threatProtections.map((item, index) => (
              <Card key={index} className="gradient-card border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg">{item.threat}</h3>
                    <Badge 
                      variant={item.status === 'Protected' || item.status === 'Compliant' || item.status === 'Prevented' ? 'default' : 'destructive'}
                      className="ml-2"
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{item.protection}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Implementation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the cryptographic foundations that power our secure marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="gradient-card border border-border/50 text-center p-6">
              <div className="p-4 rounded-lg bg-primary/20 w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Encryption Performance</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Encryption: &lt;100ms</div>
                <div>Computation: &lt;2s</div>
                <div>Verification: &lt;500ms</div>
              </div>
            </Card>

            <Card className="gradient-card border border-border/50 text-center p-6">
              <div className="p-4 rounded-lg bg-primary/20 w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Standards</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>AES-256 Encryption</div>
                <div>RSA-4096 Keys</div>
                <div>SHA-3 Hashing</div>
              </div>
            </Card>

            <Card className="gradient-card border border-border/50 text-center p-6">
              <div className="p-4 rounded-lg bg-primary/20 w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audit Status</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Smart Contracts: Audited</div>
                <div>FHE Implementation: Verified</div>
                <div>Security Framework: Certified</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <Card className="gradient-card border border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Security Best Practices</h3>
              <p className="text-muted-foreground mb-6">
                While our platform provides enterprise-grade security, users should follow best practices 
                for wallet security and private key management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Use hardware wallets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Enable 2FA authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Verify all transactions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Secure Trading?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of businesses already using our secure, encrypted invoice marketplace.
          </p>
          <Link to="/marketplace">
            <Button variant="hero" size="lg">
              Start Secure Trading
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;