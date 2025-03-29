
export interface PortfolioItem {
  id: number;
  title: string;
  status: "completed" | "ongoing" | "upcoming";
  completionDate: string;
  industry: string;
  conversionRate: number;
  maxConversion: number;
  description: string;
  technologies: string[];
  results: string;
  image: string;
  clientName?: string;
  clientWebsite?: string;
  challenge?: string;
  solution?: string;
  testimonial?: {
    quote: string;
    author: string;
  } | null;
  keyFeatures?: string[];
  stats?: Array<{
    label: string;
    value: string;
  }>;
  gallery?: string[];
}

// Helper function to get a portfolio item by ID
export const getPortfolioItemByIdUtil = (items: PortfolioItem[], id: number): PortfolioItem | undefined => {
  return items.find(item => item.id === id);
};
