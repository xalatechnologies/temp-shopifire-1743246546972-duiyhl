
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Shopifire</h1>
          <p className="text-lg text-foreground/70 mb-8">
            We're a team of passionate Shopify experts dedicated to helping businesses succeed online.
          </p>
          
          <div className="bg-card rounded-lg overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Our Team" 
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-foreground/70">
              Founded in 2018, Shopifire started with a simple mission: to help entrepreneurs and businesses build 
              exceptional e-commerce experiences on Shopify. What began as a small team of developers has grown into 
              a full-service Shopify agency with clients across the globe.
            </p>
            <p className="text-foreground/70">
              Our team combines technical expertise with a deep understanding of e-commerce trends and consumer 
              behavior. We don't just build stores; we create shopping experiences that convert visitors into 
              loyal customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="bg-fifa-blue/10 p-3 rounded-full mr-3">
                  <Code className="h-6 w-6 text-fifa-blue" />
                </div>
                <h3 className="text-xl font-bold">Technical Excellence</h3>
              </div>
              <p className="text-foreground/70">
                Our developers stay at the cutting edge of Shopify development, ensuring your store leverages the 
                latest technologies and best practices.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="bg-fifa-green/10 p-3 rounded-full mr-3">
                  <Award className="h-6 w-6 text-fifa-green" />
                </div>
                <h3 className="text-xl font-bold">Results Driven</h3>
              </div>
              <p className="text-foreground/70">
                We measure our success by your success. Our solutions are designed to increase conversions, 
                enhance user experience, and drive business growth.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="bg-fifa-gold/10 p-3 rounded-full mr-3">
                  <Users className="h-6 w-6 text-fifa-gold" />
                </div>
                <h3 className="text-xl font-bold">Client Partnership</h3>
              </div>
              <p className="text-foreground/70">
                We build lasting relationships with our clients, providing ongoing support and strategic guidance 
                to help their businesses thrive.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="bg-fifa-blue/10 p-3 rounded-full mr-3">
                  <Globe className="h-6 w-6 text-fifa-blue" />
                </div>
                <h3 className="text-xl font-bold">Global Perspective</h3>
              </div>
              <p className="text-foreground/70">
                With clients and team members around the world, we bring a diverse perspective to every project, 
                ensuring your store appeals to a global audience.
              </p>
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Ready to transform your Shopify store?</h2>
            <p className="text-center text-foreground/70 mb-6">
              Let's discuss how we can help you achieve your e-commerce goals.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact"
                className="bg-fifa-blue hover:bg-fifa-blue/90 text-white px-6 py-3 rounded-md font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
