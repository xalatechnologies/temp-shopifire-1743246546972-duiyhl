
import { ShoppingBag, Code, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient and patterns */}
      <div
        className="absolute inset-0 bg-hero-pattern"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(1, 255, 112, 0.15), transparent 40%), radial-gradient(circle at 80% 75%, rgba(0, 116, 217, 0.1), transparent 50%)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-fifa-blue/10 border border-fifa-blue/20">
              <span className="text-sm font-medium text-fifa-blue flex items-center">
                <Zap size={16} className="mr-1.5" /> Shopify Partner & Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Design. Develop. <span className="fifa-text-gradient">Dominate E-commerce.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              Expert Shopify development services that transform your vision into a high-converting online store. From custom themes to complex integrations, we build stores that sell.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-fifa-blue hover:bg-fifa-blue/90 text-white"
                asChild
              >
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-fifa-green text-fifa-green hover:bg-fifa-green/10"
                asChild
              >
                <Link to="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-fifa-blue/10 flex items-center justify-center mb-2">
                  <ShoppingBag className="w-6 h-6 text-fifa-blue" />
                </div>
                <p className="text-sm font-medium">Store Setup</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-fifa-green/10 flex items-center justify-center mb-2">
                  <Code className="w-6 h-6 text-fifa-green" />
                </div>
                <p className="text-sm font-medium">Custom Development</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-fifa-gold/10 flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-fifa-gold" />
                </div>
                <p className="text-sm font-medium">Growth Strategy</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl animate-pulse-glow border border-fifa-green/30">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Shopify Store Development" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
