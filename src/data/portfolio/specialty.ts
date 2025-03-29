
import { PortfolioItem } from "./types";

export const specialtyItems: PortfolioItem[] = [
  {
    id: 6,
    title: "Epic Game Haven",
    status: "completed",
    completionDate: "May 2023",
    industry: "Gaming",
    conversionRate: 4.7,
    maxConversion: 5,
    description: "Gaming marketplace with pre-order system, loyalty program, and immersive product showcases for PlayStation games and accessories.",
    technologies: ["Shopify Plus", "Unity WebGL", "Discord API", "Loyalty Lion"],
    results: "320% increase in pre-orders",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "Epic Game Haven",
    clientWebsite: "https://example.com/epicgamehaven",
    challenge: "Creating an engaging gaming marketplace that caters to enthusiasts with pre-order capabilities, exclusive content, and community features.",
    solution: "We built a Shopify Plus store with pre-order functionality, an integrated loyalty program, and immersive product showcases using Unity WebGL for 3D game accessory previews.",
    testimonial: {
      quote: "Our customers love the ability to pre-order upcoming games and earn points through our loyalty program. The 3D previews of accessories have drastically reduced our return rates.",
      author: "Marcus Johnson, Owner of Epic Game Haven"
    },
    keyFeatures: [
      "Game pre-order system with countdown timers",
      "Integrated Discord community access",
      "Points-based loyalty program for gamers",
      "3D accessory previews",
      "Bundle deals configurator"
    ],
    stats: [
      { label: "Pre-order Increase", value: "320%" },
      { label: "Loyalty Program Adoption", value: "78%" },
      { label: "Return Rate", value: "Only 4.2%" },
      { label: "Community Growth", value: "12K members" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559136656-fa8bd4be73b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 8,
    title: "Heritage Antiquities",
    status: "completed",
    completionDate: "October 2023",
    industry: "Antiques & Collectibles",
    conversionRate: 4.3,
    maxConversion: 5,
    description: "Curated antique marketplace with authentication certificates, item history documentation, and virtual showroom tours.",
    technologies: ["Shopify", "WebGL", "Blockchain Certificates", "ARKit"],
    results: "165% increase in high-value transactions",
    image: "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    clientName: "Heritage Antiquities",
    clientWebsite: "https://example.com/heritage",
    challenge: "Creating a trusted online marketplace for valuable antiques that provides authentication, rich item history, and an immersive shopping experience for collectors.",
    solution: "We developed a Shopify store with blockchain-backed authentication certificates, detailed item provenance documentation, and virtual 3D showroom tours of curated collections.",
    testimonial: {
      quote: "Our clientele demands authenticity and provenance. This platform delivers both while creating an engaging online experience that rivals visiting a physical gallery.",
      author: "Eleanor Westfield, Proprietor"
    },
    keyFeatures: [
      "Blockchain authentication certificates",
      "Interactive item provenance timeline",
      "Virtual 3D showroom tours",
      "Appointment booking for private viewings",
      "Collector relationship management system"
    ],
    stats: [
      { label: "High-Value Transaction Increase", value: "165%" },
      { label: "Average Time on Site", value: "12.5 min" },
      { label: "International Shipment Value", value: "+$250K" },
      { label: "Authentication Verification Rate", value: "100%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1577083552431-73a0a3e4e4a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1577083552522-4fae839add60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  }
];
