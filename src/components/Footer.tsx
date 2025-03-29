
import { Link } from "react-router-dom";
import { ShoppingBasket, Twitter, Instagram, Linkedin, Github, Flame } from "lucide-react";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { servicesData } from "@/data/services";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Fluid animation background - minimal version */}
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
        BACK_COLOR={{ r: 0, g: 0.05, b: 0.1 }}
      />
      
      {/* Background gradient overlay for better text visibility */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(1, 255, 112, 0.15), transparent 40%), radial-gradient(circle at 80% 75%, rgba(0, 116, 217, 0.1), transparent 50%)",
          backgroundColor: "rgba(0, 31, 63, 0.8)",  // Increased opacity for better readability
        }}
      ></div>

      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <ShoppingBasket className="h-8 w-8 text-fifa-green" />
                <Flame className="h-4 w-4 text-[#ea384c] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-2xl font-bold fifa-text-gradient">
                Shopifire
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Expert Shopify development and design solutions. Transform your vision into a high-converting online store with our professional services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-fifa-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-fifa-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-fifa-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-fifa-green transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#hero')} className="text-white/70 hover:text-fifa-green transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-white/70 hover:text-fifa-green transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#portfolio')} className="text-white/70 hover:text-fifa-green transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-white/70 hover:text-fifa-green transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {servicesData.map((service, index) => (
                <li key={index}>
                  <Link to={`/services/${service.slug}`} className="text-white/70 hover:text-fifa-green transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full-width bottom section aligned to flex-end */}
      <div className="w-full backdrop-blur-md bg-background/80 py-4 border-t border-white/10 mt-8 relative z-20">
        <div className="container mx-auto px-4 flex justify-end">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Shopifire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
