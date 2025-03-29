
import { PortfolioItem } from "./types";

export const electronicsItems: PortfolioItem[] = [
  {
    id: 3,
    title: "Tech Gadget Store",
    status: "upcoming",
    completionDate: "Starting Next Month",
    industry: "Electronics",
    conversionRate: 0,
    maxConversion: 5,
    description: "High-volume Shopify store with custom product configurator, 3D product previews, and international shipping optimization.",
    technologies: ["Shopify Plus", "ThreeJS", "ShipStation", "Algolia"],
    results: "Planning phase",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "TechEdge Innovations",
    clientWebsite: "https://example.com/techedge",
    challenge: "The client is planning to launch a high-volume electronics store with complex product configurations and needs a solution that can handle international shipping and provide immersive product experiences.",
    solution: "We're planning to develop a Shopify Plus store with a custom product configurator, 3D product previews using ThreeJS, and optimized international shipping using ShipStation. The site will also feature Algolia for enhanced search capabilities.",
    testimonial: null,
    keyFeatures: [
      "Interactive 3D product previews",
      "Custom product configurator for tech bundles",
      "Advanced search functionality with Algolia",
      "International shipping optimization",
      "Real-time inventory management"
    ],
    stats: [],
    gallery: [
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1501&q=80",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 4,
    title: "VVITEC Electronics",
    status: "completed",
    completionDate: "August 2023",
    industry: "Electronics",
    conversionRate: 4.5,
    maxConversion: 5,
    description: "Premium mobile phones and accessories store with advanced product comparison tools and AR try-before-you-buy features.",
    technologies: ["Shopify Plus", "AR Kit", "Vue.js", "Klaviyo"],
    results: "185% increase in conversion rate",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "VVITEC.com",
    clientWebsite: "https://example.com/vvitec",
    challenge: "VVITEC needed a high-performance e-commerce platform to showcase their premium mobile phones and accessories with interactive features to boost customer confidence.",
    solution: "We developed a custom Shopify Plus store with AR try-before-you-buy functionality, side-by-side product comparisons, and detailed tech specifications displays that highlight key features.",
    testimonial: {
      quote: "Our online sales have skyrocketed since launching the new store. The AR feature has been a game-changer for reducing returns and increasing customer satisfaction.",
      author: "Vincent Lee, CEO at VVITEC"
    },
    keyFeatures: [
      "Augmented reality phone case previews",
      "Advanced product comparison tools",
      "Interactive tech specification displays",
      "Guided accessory recommendations",
      "Express checkout with stored device profiles"
    ],
    stats: [
      { label: "Conversion Rate Increase", value: "185%" },
      { label: "Return Rate Decrease", value: "42%" },
      { label: "Average Order Value", value: "+$65" },
      { label: "Mobile Traffic Conversion", value: "5.2%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544866092-1677b4d83b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1541735363-54a8c5c283ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1329&q=80"
    ]
  },
  {
    id: 9,
    title: "TechStation",
    status: "ongoing",
    completionDate: "Q3 2024",
    industry: "Computer Hardware",
    conversionRate: 3.8,
    maxConversion: 5,
    description: "Computer accessories marketplace with component compatibility checker, personalized workstation builder, and technical support integration.",
    technologies: ["Shopify Plus", "React", "Hardware API", "Zendesk"],
    results: "Beta showing 92% user satisfaction",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "TechStation Inc.",
    clientWebsite: "https://example.com/techstation",
    challenge: "Building a comprehensive computer accessories marketplace that helps customers find compatible components and build personalized workstations with confidence.",
    solution: "We're developing a Shopify Plus store with an advanced compatibility checking system, interactive workstation builder, and integrated technical support system for pre and post-purchase assistance.",
    testimonial: {
      quote: "The beta version has exceeded our expectations. Customers especially love the compatibility checker and the workstation builder tool.",
      author: "David Chen, CTO at TechStation"
    },
    keyFeatures: [
      "Real-time component compatibility checker",
      "Interactive workstation builder with performance metrics",
      "Technical specification comparison tool",
      "Integrated tech support chat",
      "Setup guide generator for purchased components"
    ],
    stats: [
      { label: "Beta User Satisfaction", value: "92%" },
      { label: "Average Build Value", value: "$845" },
      { label: "Support Ticket Reduction", value: "Projected 65%" },
      { label: "Return Rate", value: "Estimated <5%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1442&q=80"
    ]
  }
];
