
import EnhancedHero from "@/components/EnhancedHero";
import Navbar from "@/components/Navbar";
import ServiceShowcase from "@/components/ServiceShowcase";
import ExpertiseDisplay from "@/components/ExpertiseDisplay";
import PortfolioSection from "@/components/PortfolioSection";
import CollaborationProcess from "@/components/CollaborationProcess";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section - no container needed as it has its own styling */}
      <div id="hero">
        <EnhancedHero />
      </div>
      
      {/* Call to Action section - moved up to appear right after hero */}
      <CallToAction />
      
      {/* Services section - now using primary background to match collaboration section */}
      <SectionContainer variant="primary" className="bg-transparent" id="services">
        <ServiceShowcase />
      </SectionContainer>
      
      {/* Expertise section - alternate background */}
      <SectionContainer variant="alternate">
        <ExpertiseDisplay />
      </SectionContainer>
      
      {/* Portfolio section - moved up, now using primary background */}
      <SectionContainer variant="primary" id="portfolio">
        <PortfolioSection />
      </SectionContainer>
      
      {/* Collaboration section - moved down, now using alternate background */}
      <SectionContainer variant="alternate">
        <CollaborationProcess />
      </SectionContainer>
      
      {/* Contact Section - updated to use primary background */}
      <SectionContainer variant="primary" id="contact">
        <SectionTitle title="Get In Touch" description="Ready to elevate your Shopify store? Contact us for a free consultation and let's discuss how we can help you achieve your e-commerce goals." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-fifa-blue/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-fifa-blue" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-foreground/70">+47 940 77 006</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fifa-green/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-fifa-green" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-foreground/70">info@xala.no</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fifa-gold/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-fifa-gold" />
                </div>
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-foreground/70">Nesbruveien 75, 1394 Nesbru, Norway</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg border">
            <h2 className="text-2xl font-bold mb-6 relative">
              Send Us a Message
              <span className="absolute -bottom-1 left-0 w-10 h-1 bg-fifa-blue"></span>
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              
              <Button className="w-full bg-fifa-blue hover:bg-fifa-blue/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </SectionContainer>
      
      <Footer />
    </div>;
};

export default Index;
