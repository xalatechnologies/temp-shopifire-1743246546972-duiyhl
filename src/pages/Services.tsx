
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceShowcase from "@/components/ServiceShowcase";
import CallToAction from "@/components/CallToAction";
import { SectionContainer } from "@/components/ui/section-container";

const Services = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <SectionContainer variant="primary" id="services">
        <ServiceShowcase />
      </SectionContainer>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Services;
