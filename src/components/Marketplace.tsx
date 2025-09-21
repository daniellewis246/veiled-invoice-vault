import InvoiceCard from "./InvoiceCard";
import { Button } from "@/components/ui/button";
import { Filter, Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const Marketplace = () => {
  const sampleInvoices = [
    {
      id: "FHE-001",
      amount: "25,000",
      dueDate: "Mar 15, 2024",
      discount: "8.5",
      rating: "AAA",
      timeLeft: "2h 15m"
    },
    {
      id: "FHE-002", 
      amount: "150,000",
      dueDate: "Apr 2, 2024",
      discount: "12.0",
      rating: "AA",
      timeLeft: "5h 43m"
    },
    {
      id: "FHE-003",
      amount: "75,500",
      dueDate: "Mar 28, 2024", 
      discount: "9.2",
      rating: "A+",
      timeLeft: "1d 8h"
    },
    {
      id: "FHE-004",
      amount: "320,000",
      dueDate: "May 10, 2024",
      discount: "15.5",
      rating: "BBB",
      timeLeft: "3h 22m"
    },
    {
      id: "FHE-005",
      amount: "42,800",
      dueDate: "Mar 20, 2024",
      discount: "7.8",
      rating: "AAA",
      timeLeft: "45m"
    },
    {
      id: "FHE-006",
      amount: "198,600",
      dueDate: "Apr 18, 2024",
      discount: "11.3",
      rating: "AA-",
      timeLeft: "2d 5h"
    }
  ];

  return (
    <section id="marketplace" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Invoice Marketplace
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse confidential invoices available for trading. All sensitive data is encrypted using 
            Fully Homomorphic Encryption while maintaining verifiable authenticity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search invoices..." 
              className="pl-10 bg-card border-border/50"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Sort by Rate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleInvoices.map((invoice) => (
            <InvoiceCard
              key={invoice.id}
              {...invoice}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Load More Invoices
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;