import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Shield, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface InvoiceCardProps {
  id: string;
  amount: string;
  dueDate: string;
  discount: string;
  rating: string;
  timeLeft: string;
  isEncrypted?: boolean;
}

const InvoiceCard = ({ 
  id, 
  amount, 
  dueDate, 
  discount, 
  rating, 
  timeLeft, 
  isEncrypted = true 
}: InvoiceCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="gradient-card border border-border/50 hover:shadow-glow transition-smooth group">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {rating} Rating
            </Badge>
            <Shield className="h-4 w-4 text-primary" />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
            className="opacity-0 group-hover:opacity-100 transition-smooth"
          >
            {showDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-semibold text-sm">
            Invoice #{id}
          </h3>
          <div className={`text-xs text-muted-foreground ${isEncrypted && !showDetails ? 'blur-privacy' : ''}`}>
            Due: {dueDate}
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Face Value</span>
            <div className={`flex items-center gap-1 font-bold text-lg ${isEncrypted && !showDetails ? 'blur-privacy' : ''}`}>
              <DollarSign className="h-4 w-4" />
              {amount}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Discount Rate</span>
            <span className="font-semibold text-primary">{discount}%</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Auction ends in</span>
            <span className="font-medium text-accent">{timeLeft}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <div className="w-full space-y-2">
          <Link to={`/place-bid?id=${id}`}>
            <Button variant="marketplace" className="w-full">
              Place Bid
            </Button>
          </Link>
          {isEncrypted && (
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>Encrypted with FHE</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default InvoiceCard;