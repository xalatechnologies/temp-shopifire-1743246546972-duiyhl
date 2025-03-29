
import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/data/services";

const ServiceShowcase = () => {
  return (
    <>
      <SectionTitle title="Our Services" description="We offer comprehensive Shopify development solutions to help businesses establish and grow their online presence." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceShowcase;
