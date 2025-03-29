
import { PortfolioItem, getPortfolioItemByIdUtil } from "./types";
import { fashionItems } from "./fashion";
import { electronicsItems } from "./electronics";
import { lifestyleItems } from "./lifestyle";
import { specialtyItems } from "./specialty";

// Combine all portfolio items
export const portfolioItems: PortfolioItem[] = [
  ...fashionItems,
  ...electronicsItems,
  ...lifestyleItems,
  ...specialtyItems
];

// Export each category separately
export { fashionItems } from "./fashion";
export { electronicsItems } from "./electronics";
export { lifestyleItems } from "./lifestyle";
export { specialtyItems } from "./specialty";

// Export helper function with the combined array
export const getPortfolioItemById = (id: number): PortfolioItem | undefined => {
  return getPortfolioItemByIdUtil(portfolioItems, id);
};

// Export categories for filtering
export const portfolioCategories = [
  { id: "all", name: "All Projects" },
  { id: "fashion", name: "Fashion" },
  { id: "electronics", name: "Electronics" },
  { id: "food", name: "Food & Beverage" },
  { id: "gaming", name: "Gaming" },
  { id: "antiques", name: "Antiques" }
];
