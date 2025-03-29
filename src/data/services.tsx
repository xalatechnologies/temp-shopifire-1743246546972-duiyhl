
import { ShoppingCart, PaintBucket, Code, LineChart, Truck, Wallet } from "lucide-react";
import React from "react";

export interface ServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  slug: string;
  features: string[];
}

export const servicesData: ServiceData[] = [
  {
    icon: <ShoppingCart className="h-6 w-6 text-fifa-blue" />,
    title: "Shopify Store Setup",
    description: "Complete store configuration including payment gateways, shipping methods, and tax settings",
    category: "Core",
    categoryColor: "blue",
    slug: "store-setup",
    features: [
      "Complete store configuration",
      "Payment gateway integration",
      "Shipping method setup",
      "Tax settings configuration",
      "Product import and setup",
      "Basic theme customization"
    ]
  }, 
  {
    icon: <PaintBucket className="h-6 w-6 text-fifa-green" />,
    title: "Custom Theme Development",
    description: "Tailored Shopify themes that align with your brand identity and business goals",
    category: "Design",
    categoryColor: "green",
    slug: "custom-theme",
    features: [
      "Custom theme design",
      "Responsive layouts",
      "Brand identity integration",
      "Custom product pages",
      "Optimized checkout flow",
      "Advanced animation and interactions"
    ]
  }, 
  {
    icon: <Code className="h-6 w-6 text-fifa-gold" />,
    title: "App Development & Integration",
    description: "Custom app development and seamless integration of third-party solutions",
    category: "Development",
    categoryColor: "gold",
    slug: "app-integration",
    features: [
      "Custom Shopify app development",
      "Third-party app integration",
      "API development and integration",
      "Automation workflows",
      "Data migration services",
      "Subscription functionality setup"
    ]
  }, 
  {
    icon: <LineChart className="h-6 w-6 text-fifa-blue" />,
    title: "Performance Optimization",
    description: "Speed enhancement, SEO improvements, and conversion rate optimization",
    category: "Technical",
    categoryColor: "purple",
    slug: "optimization",
    features: [
      "Page speed optimization",
      "SEO enhancements",
      "Conversion rate optimization",
      "Technical site audits",
      "Mobile optimization",
      "Performance monitoring setup"
    ]
  }, 
  {
    icon: <Truck className="h-6 w-6 text-fifa-green" />,
    title: "Migration Services",
    description: "Smooth transition from your current platform to Shopify with zero downtime",
    category: "Technical",
    categoryColor: "purple",
    slug: "migration",
    features: [
      "Data migration from other platforms",
      "URL structure preservation",
      "SEO retention strategies",
      "Zero-downtime migration",
      "Post-migration testing",
      "Legacy system integration"
    ]
  }, 
  {
    icon: <Wallet className="h-6 w-6 text-fifa-gold" />,
    title: "Store Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your store running optimally",
    category: "Support",
    categoryColor: "orange",
    slug: "maintenance",
    features: [
      "Regular theme updates",
      "Security patches",
      "Performance monitoring",
      "Content updates",
      "Backup management",
      "Emergency support"
    ]
  }
];
