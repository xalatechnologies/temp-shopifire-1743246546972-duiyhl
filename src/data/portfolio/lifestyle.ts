
import { PortfolioItem } from "./types";

export const lifestyleItems: PortfolioItem[] = [
  {
    id: 2,
    title: "Organic Food Market",
    status: "ongoing",
    completionDate: "In Progress",
    industry: "Food & Beverage",
    conversionRate: 3.2,
    maxConversion: 5,
    description: "Subscription-based Shopify store with recurring delivery options and customizable product bundles for organic food products.",
    technologies: ["Shopify", "ReCharge", "Bold Subscriptions", "Klaviyo"],
    results: "Projected 40% subscriber retention rate",
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "Green Harvest Co.",
    clientWebsite: "https://example.com/greenharvest",
    challenge: "The client wanted to transform their existing Shopify store into a subscription-based model that would allow customers to receive regular deliveries of organic produce and create custom bundles.",
    solution: "We're implementing a custom subscription solution using ReCharge and Bold Subscriptions, with a user-friendly product bundling system and personalized delivery schedules.",
    testimonial: {
      quote: "The team has been incredibly responsive and innovative in building our subscription platform. We're already seeing strong early adoption.",
      author: "Michael Torres, Founder"
    },
    keyFeatures: [
      "Customizable subscription frequency options",
      "Build-your-own organic produce bundles",
      "Integrated email marketing automation via Klaviyo",
      "Subscription management dashboard for customers",
      "Mobile-friendly checkout process"
    ],
    stats: [
      { label: "Early Subscriber Count", value: "450+" },
      { label: "Projected Retention", value: "40%" },
      { label: "Average Order Value", value: "$85" },
      { label: "Customer Satisfaction", value: "4.7/5" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1342&q=80"
    ]
  },
  {
    id: 5,
    title: "London Vape",
    status: "completed",
    completionDate: "November 2023",
    industry: "Health & Wellness",
    conversionRate: 4.2,
    maxConversion: 5,
    description: "Age-verified e-cigarette and vape products store with subscription options and detailed product education content.",
    technologies: ["Shopify", "AgeChecker", "Laravel", "Subscriptio"],
    results: "210% ROI in first 6 months",
    image: "https://images.unsplash.com/photo-1560321577-2b2fb7971181?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "London Vape Co.",
    clientWebsite: "https://example.com/londonvape",
    challenge: "Creating a compliant vape products store with robust age verification while providing an engaging shopping experience with educational content.",
    solution: "We built a Shopify store with integrated age verification, subscription options for regular customers, and a content hub with product education and usage guides.",
    testimonial: {
      quote: "The new store not only meets all compliance requirements but has transformed our business with subscription revenue and significantly improved customer retention.",
      author: "James Whitley, Founder of London Vape"
    },
    keyFeatures: [
      "Robust age verification system",
      "Subscription service for regular products",
      "Educational content hub with product guides",
      "Flavor profile matching quiz",
      "Compliance management dashboard"
    ],
    stats: [
      { label: "Subscription Revenue", value: "35% of total" },
      { label: "Customer Retention", value: "68%" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Return Customer Rate", value: "73%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80",
      "https://images.unsplash.com/photo-1595392029990-9efe97590076?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1565706199573-2f804af2b6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  }
];
