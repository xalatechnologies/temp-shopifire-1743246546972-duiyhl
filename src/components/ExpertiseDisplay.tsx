import { Trophy, Award, Star, ShoppingCart, Database, Smartphone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GlareCard } from "@/components/ui/glare-card";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

// Sample data for expertise areas
export const expertiseAreas = [
  {
    id: 1,
    title: "E-commerce Strategy",
    icon: <ShoppingCart className="h-8 w-8 text-fifa-gold" />,
    skills: [
      { name: "Market Analysis", value: 95 },
      { name: "User Research", value: 88 },
      { name: "Conversion Optimization", value: 92 }
    ],
    location: "Global",
    description: "Strategic e-commerce planning to maximize your online store's potential. We analyze market trends, research user behavior, and optimize conversions to drive sustainable growth for your Shopify business.",
    longDescription: "Our E-commerce Strategy services provide comprehensive planning and implementation support to transform your online store into a high-performing sales channel. We begin with in-depth market analysis to identify trends, gaps, and opportunities specific to your industry. This is paired with detailed user research to understand your customers' behaviors, preferences, and pain points. Using these insights, we develop custom conversion optimization strategies that address the entire customer journey - from initial site visit to post-purchase engagement. Our strategic approach has helped clients achieve conversion rate improvements of up to 35% and significantly increase average order values."
  },
  {
    id: 2,
    title: "Technical Development",
    icon: <Database className="h-8 w-8 text-fifa-blue" />,
    skills: [
      { name: "Theme Customization", value: 97 },
      { name: "App Integration", value: 91 },
      { name: "Performance Tuning", value: 89 }
    ],
    location: "Remote",
    description: "Expert Shopify development services including custom theme creation, app integration, and performance optimization to create a fast, functional, and unique online store.",
    longDescription: "Our Technical Development team specializes in customizing the Shopify platform to meet your specific business requirements. We excel in creating bespoke themes that perfectly align with your brand identity while ensuring optimal user experience across all devices. Our app integration expertise allows us to seamlessly connect your store with essential third-party services and custom functionality, creating a cohesive ecosystem that works together flawlessly. Performance tuning is a cornerstone of our technical approach - we meticulously optimize loading times, server responses, and code efficiency to ensure your store operates at peak performance, even during high traffic periods. All our technical solutions are built with scalability in mind, allowing your store to grow alongside your business."
  },
  {
    id: 3,
    title: "Mobile Commerce",
    icon: <Smartphone className="h-8 w-8 text-fifa-green" />,
    skills: [
      { name: "Responsive Design", value: 94 },
      { name: "PWA Implementation", value: 87 },
      { name: "Mobile UX", value: 93 }
    ],
    location: "Worldwide",
    description: "Mobile-first solutions that ensure your Shopify store delivers an exceptional experience on smartphones and tablets, capturing the growing mobile commerce market.",
    longDescription: "As mobile devices continue to dominate e-commerce traffic, our Mobile Commerce solutions ensure your Shopify store is optimized for this critical channel. Our responsive design approach guarantees your store looks and functions flawlessly across all screen sizes and devices. We specialize in Progressive Web App (PWA) implementation, bringing app-like experiences to your mobile web store with features like offline browsing, push notifications, and lightning-fast performance. Our mobile UX experts focus on creating intuitive, frictionless experiences specifically designed for touch interfaces and mobile contexts. Through careful attention to mobile checkout flows, thumb-friendly navigation, and optimized product displays, we help you capture the full potential of the mobile commerce market."
  },
];

const ExpertiseDisplay = () => {
  return (
    <>
      <SectionTitle
        title="Areas of Expertise"
        description="Specialized knowledge and skills in Shopify development"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expertiseAreas.map((area, index) => (
          <div key={area.id} className="h-[360px]">
            <div className="relative h-full rounded-lg border-[0.75px] border-border p-2 md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <GlareCard 
                className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-md border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6"
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-fifa-gold text-black font-bold text-xs px-4 py-1 rounded-bl-lg">
                    PRIMARY FOCUS
                  </div>
                )}
                
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-lg p-3 bg-gradient-to-br from-background to-muted border border-border">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{area.title}</h3>
                      <Badge variant="outline" className="mt-1 text-xs border-white/20 text-white/70">
                        {area.location}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4 border-t border-white/10 pt-4 flex-grow">
                    {area.skills.map((skill) => (
                      <div key={skill.name} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span className="text-white/70">{skill.name}</span>
                          <span className="text-fifa-green font-bold">{skill.value}%</span>
                        </div>
                        <Progress 
                          value={skill.value} 
                          className="h-2 bg-white/10" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center mt-2">
                  <Link to={`/expertise/${area.id}`}>
                    <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </GlareCard>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpertiseDisplay;
