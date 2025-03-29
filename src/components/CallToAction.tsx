
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const CallToAction = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <HeroGeometric 
          badge="Shopify Expert"
          title1="Ready to Transform"
          title2="Your Shopify Store?"
          description="Let's collaborate on your next project. Our expert team is ready to build a high-converting, custom Shopify solution tailored to your business needs."
        />
        
        <div className="absolute inset-0 flex items-end justify-center pb-16 sm:pb-20">
          <div className="container relative z-20 mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                className="bg-fifa-green hover:bg-fifa-green/90 text-black hover:text-black font-semibold group transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/60 group transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">
                  <ShoppingBag className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
