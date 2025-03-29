
import { ShoppingBag, Code, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SplashCursor } from "@/components/ui/splash-cursor";

const EnhancedHero = () => {
  return (
    <div className="py-12 md:py-20 lg:py-28 relative overflow-hidden" id="hero">
      {/* Fluid animation background - now minimal */}
      <SplashCursor 
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        DENSITY_DISSIPATION={5}
        VELOCITY_DISSIPATION={3.5}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={3000}
        COLOR_UPDATE_SPEED={5}
        SHADING={false}
        minimal={true}
        BACK_COLOR={{
          r: 0,
          g: 0.05,
          b: 0.1
        }} 
      />
      
      {/* Background gradient overlay for better text visibility */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          backgroundImage: "radial-gradient(circle at 20% 25%, rgba(1, 255, 112, 0.15), transparent 40%), radial-gradient(circle at 80% 75%, rgba(0, 116, 217, 0.1), transparent 50%)",
          backgroundColor: "rgba(0, 31, 63, 0.8)"  // Increased opacity for better readability
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-fifa-blue/20">
              <span className="text-sm font-medium text-white flex items-center">
                <Zap size={16} className="mr-1.5 text-fifa-green" /> Shopify Partner & Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Design. Develop.<br />
              <span className="text-red-500">Dominate</span><br />
              <span className="fifa-text-gradient">E-commerce.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Expert Shopify development services that transform your vision into a high-converting online store. From custom themes to complex integrations, we build stores that sell.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-fifa-green hover:bg-fifa-green/90 text-black hover:text-black font-medium transition-colors duration-300" asChild>
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white hover:border-white/80 transition-colors duration-300" asChild>
                <Link to="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20 relative z-10">
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Shopify Store Development" className="object-cover w-full h-full opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-tr from-fifa-blue/40 to-fifa-green/20"></div>
          </div>
        </div>
        
        {/* Updated icons section - now full width and bigger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 lg:mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center">
            <div className="rounded-lg bg-fifa-green/20 p-4 mr-4">
              <ShoppingBag className="w-10 h-10 text-fifa-green" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Store Setup</h3>
              <p className="text-white/70">Launch your Shopify store quickly</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center">
            <div className="rounded-lg bg-fifa-blue/20 p-4 mr-4">
              <Code className="w-10 h-10 text-fifa-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Custom Development</h3>
              <p className="text-white/70">Tailored solutions for your needs</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center">
            <div className="rounded-lg bg-fifa-gold/20 p-4 mr-4">
              <TrendingUp className="w-10 h-10 text-fifa-gold" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Growth Strategy</h3>
              <p className="text-white/70">Scale your e-commerce business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
