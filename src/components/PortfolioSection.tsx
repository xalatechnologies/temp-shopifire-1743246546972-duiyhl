import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PortfolioCard } from "./portfolio/PortfolioCard";
import { portfolioItems } from "@/data/portfolio"; // Updated import
import { SectionTitle } from "@/components/ui/section-title";

const PortfolioSection = () => {
  // Show only the first 6 portfolio items
  const limitedPortfolioItems = portfolioItems.slice(0, 6);
  
  return (
    <>
      <SectionTitle
        title="Our Portfolio"
        description="Discover our successful Shopify projects and case studies that have helped businesses scale their e-commerce operations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedPortfolioItems.map((project, index) => (
          <PortfolioCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <div className="mt-10 flex justify-center">
        <Button asChild>
          <Link to="/portfolio" className="flex items-center">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default PortfolioSection;
