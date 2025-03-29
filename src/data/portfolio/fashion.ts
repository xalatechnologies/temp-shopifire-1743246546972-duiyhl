
import { PortfolioItem } from "./types";

export const fashionItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Luxury Fashion Boutique",
    status: "completed",
    completionDate: "March 2023",
    industry: "Fashion",
    conversionRate: 4.8,
    maxConversion: 5,
    description: "Custom Shopify theme with advanced filtering, lookbook galleries, and integrated Instagram feed for a luxury fashion retailer.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "AJAX Cart"],
    results: "250% increase in mobile conversions",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "Elegance Apparel",
    clientWebsite: "https://example.com/elegance",
    challenge: "The client needed a highly customized Shopify storefront that could showcase their luxury fashion products in an elegant way while maintaining high performance on mobile devices.",
    solution: "We developed a custom Shopify Plus theme with advanced product filtering, lookbook-style galleries, and seamless mobile navigation. The site features a custom Instagram feed integration and AJAX cart functionality for a smooth shopping experience.",
    testimonial: {
      quote: "The team delivered a stunning online store that perfectly represents our brand aesthetic while significantly improving our mobile conversion rates.",
      author: "Alexandra Chen, Marketing Director"
    },
    keyFeatures: [
      "Custom product filtering by collection, size, color, and price",
      "Lookbook-style product galleries with zoom functionality",
      "Instagram feed integration with shoppable posts",
      "AJAX cart for seamless additions and checkout",
      "Custom mobile-first navigation system"
    ],
    stats: [
      { label: "Mobile Conversion Increase", value: "250%" },
      { label: "Page Load Time", value: "1.2s" },
      { label: "Traffic Increase", value: "180%" },
      { label: "Bounce Rate Decrease", value: "45%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 7,
    title: "Urban Threads",
    status: "completed",
    completionDate: "January 2023",
    industry: "Fashion",
    conversionRate: 4.6,
    maxConversion: 5,
    description: "Contemporary clothing store with virtual try-on technology, size recommendation engine, and sustainable fashion focus.",
    technologies: ["Shopify", "Vue.js", "AR Kit", "Sustainable API"],
    results: "145% revenue growth year-over-year",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "Urban Threads",
    clientWebsite: "https://example.com/urbanthreads",
    challenge: "Building a clothing store that addresses sizing concerns and showcases commitment to sustainable fashion while providing an engaging shopping experience.",
    solution: "We created a Shopify store with virtual try-on technology, a machine learning-based size recommendation engine, and transparent sustainability metrics for each product.",
    testimonial: {
      quote: "The virtual try-on and size recommendation features have dramatically reduced our return rates. Customers also love our sustainability transparency, which has become a key selling point.",
      author: "Sofia Martinez, Creative Director"
    },
    keyFeatures: [
      "Virtual try-on technology",
      "AI-powered size recommendation engine",
      "Sustainability impact score for each product",
      "Mix-and-match outfit builder",
      "Material sourcing transparency"
    ],
    stats: [
      { label: "Return Rate Reduction", value: "62%" },
      { label: "Average Order Value", value: "$115" },
      { label: "Repeat Purchase Rate", value: "76%" },
      { label: "Sustainability Score Boost", value: "4.8/5" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  }
];
