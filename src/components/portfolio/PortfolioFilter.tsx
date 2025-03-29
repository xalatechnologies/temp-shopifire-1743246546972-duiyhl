
import { portfolioCategories } from "@/data/portfolio";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PortfolioFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const PortfolioFilter = ({ activeFilter, onFilterChange }: PortfolioFilterProps) => {
  return (
    <Tabs defaultValue={activeFilter} className="w-full mb-8">
      <TabsList className="flex flex-wrap justify-center mb-6">
        {portfolioCategories.map((category) => (
          <TabsTrigger 
            key={category.id}
            value={category.id} 
            onClick={() => onFilterChange(category.id)}
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default PortfolioFilter;
