
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { servicesData } from "@/data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the service by id
  const service = servicesData.find(s => s.slug === id);
  
  useEffect(() => {
    // If service not found, redirect to services page
    if (!service) {
      navigate("/services");
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [service, navigate]);
  
  if (!service) return null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <SectionContainer variant="alternate" className="py-16">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center gap-2"
          onClick={() => navigate("/services")}
        >
          <ArrowLeft size={16} />
          Back to Services
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-fit rounded-full border-[0.5px] border-border bg-muted/50 p-4 text-primary">
                {service.icon}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
            </div>
            
            <p className="text-lg text-foreground/70">{service.description}</p>
            
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="text-foreground/80">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <p className="text-foreground/70">
                  We bring years of experience in {service.title.toLowerCase()}, delivering custom solutions that drive results. 
                  Our team of experts ensures your project is completed on time and exceeds expectations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-foreground/70">Contact us today to discuss your {service.title.toLowerCase()} needs and get a free consultation.</p>
            <Button size="lg" className="w-full bg-fifa-green hover:bg-fifa-green/90 text-black" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </SectionContainer>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
