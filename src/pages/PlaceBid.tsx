import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  DollarSign, 
  Clock, 
  Shield, 
  TrendingUp, 
  AlertCircle, 
  Calculator,
  Wallet,
  Eye,
  EyeOff,
  CheckCircle
} from "lucide-react";

const PlaceBid = () => {
  const [searchParams] = useSearchParams();
  const invoiceId = searchParams.get('id') || 'FHE-001';
  
  const [bidAmount, setBidAmount] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [connected, setConnected] = useState(false);
  
  // Sample invoice data (would come from API)
  const invoice = {
    id: invoiceId,
    amount: "25,000",
    dueDate: "Mar 15, 2024",
    currentDiscount: "8.5",
    rating: "AAA",
    timeLeft: "2h 15m",
    minBid: "23,000",
    currentHighBid: "23,500",
    bidders: 7,
    maturityDays: 45,
    issuerType: "Manufacturing Company",
    riskScore: "Low"
  };

  const calculateReturn = () => {
    if (!bidAmount) return { discount: 0, roi: 0, profit: 0 };
    const bid = parseFloat(bidAmount.replace(/,/g, ''));
    const face = parseFloat(invoice.amount.replace(/,/g, ''));
    const discount = ((face - bid) / face * 100);
    const roi = ((face - bid) / bid * 100);
    const profit = face - bid;
    return { discount: discount.toFixed(2), roi: roi.toFixed(2), profit: profit.toFixed(0) };
  };

  const returns = calculateReturn();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/marketplace" className="text-primary hover:text-primary/80 text-sm">
            ← Back to Marketplace
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Invoice Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="gradient-card border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Invoice #{invoice.id}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showDetails ? "Hide" : "View"} Details
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{invoice.rating} Rating</Badge>
                  <Badge variant="outline">{invoice.riskScore} Risk</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>FHE Encrypted</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-muted-foreground">Face Value</Label>
                      <div className={`flex items-center gap-2 text-2xl font-bold ${!showDetails ? 'blur-privacy' : ''}`}>
                        <DollarSign className="h-6 w-6" />
                        {invoice.amount}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-muted-foreground">Due Date</Label>
                      <div className={`font-semibold ${!showDetails ? 'blur-privacy' : ''}`}>
                        {invoice.dueDate} ({invoice.maturityDays} days)
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-muted-foreground">Issuer Type</Label>
                      <div className={`font-semibold ${!showDetails ? 'blur-privacy' : ''}`}>
                        {invoice.issuerType}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-muted-foreground">Current High Bid</Label>
                      <div className="text-2xl font-bold text-primary">
                        ${invoice.currentHighBid}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-muted-foreground">Time Remaining</Label>
                      <div className="flex items-center gap-2 font-semibold text-accent">
                        <Clock className="h-4 w-4" />
                        {invoice.timeLeft}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-muted-foreground">Active Bidders</Label>
                      <div className="font-semibold">
                        {invoice.bidders} participants
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bidding History */}
            <Card className="gradient-card border border-border/50">
              <CardHeader>
                <CardTitle>Bidding Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { bid: "23,500", time: "2 min ago", bidder: "0x1234...5678" },
                    { bid: "23,200", time: "15 min ago", bidder: "0x9876...4321" },
                    { bid: "23,000", time: "32 min ago", bidder: "0x5555...9999" },
                  ].map((bid, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="font-semibold">${bid.bid}</div>
                        <div className="text-sm text-muted-foreground">{bid.bidder}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{bid.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bidding Panel */}
          <div className="space-y-6">
            {/* Wallet Connection */}
            {!connected && (
              <Card className="gradient-card border border-border/50">
                <CardContent className="p-6 text-center">
                  <Wallet className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Connect Wallet to Bid</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect your wallet to place bids on encrypted invoices.
                  </p>
                  <Button 
                    variant="wallet" 
                    className="w-full"
                    onClick={() => setConnected(true)}
                  >
                    Connect Wallet
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Bid Form */}
            <Card className="gradient-card border border-border/50">
              <CardHeader>
                <CardTitle>Place Your Bid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="bidAmount">Bid Amount (USD)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="bidAmount"
                      placeholder="Enter your bid"
                      className="pl-10"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      disabled={!connected}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Minimum bid: ${invoice.minBid}
                  </div>
                </div>

                {bidAmount && (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Calculator className="h-4 w-4 text-primary" />
                        <span className="font-semibold">Return Calculation</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Discount Rate:</span>
                          <span className="font-semibold">{returns.discount}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ROI:</span>
                          <span className="font-semibold text-primary">{returns.roi}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Expected Profit:</span>
                          <span className="font-semibold text-primary">${returns.profit}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Separator />

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Smart contract execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Automatic settlement on win</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Transparent bidding process</span>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  className="w-full" 
                  size="lg"
                  disabled={!connected || !bidAmount}
                >
                  Place Bid
                </Button>

                {!connected && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                    <AlertCircle className="h-3 w-3" />
                    <span>Wallet connection required</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Risk Warning */}
            <Card className="gradient-card border border-accent/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Investment Risk</div>
                    <div className="text-muted-foreground">
                      Invoice trading involves risk. Past performance doesn't guarantee future results. 
                      Only bid amounts you can afford to lose.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceBid;