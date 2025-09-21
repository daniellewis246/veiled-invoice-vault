import Header from "@/components/Header";
import Marketplace from "@/components/Marketplace";
import Footer from "@/components/Footer";

const MarketplacePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-8">
        <Marketplace />
      </div>
      <Footer />
    </div>
  );
};

export default MarketplacePage;