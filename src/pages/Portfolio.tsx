
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/data/portfolio";
import CallToAction from "@/components/CallToAction";
import { useState, useMemo } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { TabsContent, Tabs } from "@/components/ui/tabs";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Limit to only 6 portfolio items
  const limitedPortfolioItems = portfolioItems.slice(0, 6);
  
  const filteredItems = useMemo(() => 
    filter === "all" 
      ? limitedPortfolioItems 
      : limitedPortfolioItems.filter(item => 
          item.industry.toLowerCase().includes(filter.toLowerCase())
        ),
    [filter, limitedPortfolioItems]
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Our Portfolio"
          description="Discover our successful Shopify projects that have helped businesses scale their e-commerce operations."
        />
        
        <Tabs defaultValue="all" className="w-full mb-8">
          <PortfolioFilter 
            activeFilter={filter} 
            onFilterChange={setFilter} 
          />
          
          {/* We need to maintain the TabsContent for animation consistency */}
          <TabsContent value={filter} className="w-full">
            <PortfolioGrid projects={filteredItems} />
          </TabsContent>
        </Tabs>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Portfolio;
