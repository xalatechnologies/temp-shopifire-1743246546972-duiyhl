
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, ShoppingBasket, Code, Briefcase, Phone, Flame } from "lucide-react";
import { MenuBar } from "@/components/ui/menu-bar";

const menuItems = [
  {
    icon: Home,
    label: "Home",
    href: "#hero",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: Code,
    label: "Services",
    href: "#services",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-fifa-green",
  },
  {
    icon: Briefcase,
    label: "Portfolio",
    href: "#portfolio",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-fifa-gold",
  },
  {
    icon: Phone,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-fifa-blue",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");
  
  // Update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all section elements with proper offsets and heights
      const sections = menuItems.map(item => {
        const element = document.querySelector(item.href);
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        const offset = scrollPosition + rect.top;
        return {
          id: item.label,
          offset,
          height: rect.height
        };
      }).filter(Boolean);
      
      // Find the section that is currently in view
      // A section is in view if the scroll position is between its offset and offset + height
      // Or if we're at the top of the page, select the first section
      if (sections.length > 0) {
        if (scrollPosition < 100) {
          setActiveItem("Home");
        } else {
          for (const section of sections) {
            if (section && scrollPosition >= section.offset - 200 && 
                scrollPosition < section.offset + section.height - 200) {
              setActiveItem(section.id);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial call to set the active item based on the current position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const scrollToSection = (label: string) => {
    setActiveItem(label);
    const item = menuItems.find(i => i.label === label);
    if (item) {
      // Only attempt to scroll if we're on the homepage
      if (location.pathname === '/') {
        const element = document.querySelector(item.href);
        if (element) {
          // Close mobile menu if open
          if (isOpen) {
            setIsOpen(false);
          }
          
          // Get the element's position
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          
          // Scroll with offset of 20px
          window.scrollTo({
            top: elementPosition - 20,
            behavior: 'smooth'
          });
        }
      } else {
        // If not on homepage, navigate to homepage and then scroll
        window.location.href = `/${item.href}`;
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <ShoppingBasket className="h-8 w-8 text-fifa-green" />
                <Flame className="h-4 w-4 text-[#ea384c] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-2xl font-bold fifa-text-gradient">ShopiFire</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <MenuBar 
              items={menuItems}
              activeItem={activeItem}
              onItemClick={scrollToSection}
            />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              aria-label="Menu" 
              className="text-foreground hover:text-foreground hover:bg-muted/50 p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-background border-b`}>
        <div className="px-4 py-2 space-y-2">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="block px-3 py-2 rounded-md hover:bg-muted transition-colors" 
              onClick={(e) => { 
                e.preventDefault();
                scrollToSection(item.label); 
              }}
            >
              <div className="flex items-center space-x-2">
                <item.icon size={18} />
                <span>{item.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
