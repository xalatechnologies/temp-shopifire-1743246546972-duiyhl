
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Ready to elevate your Shopify store? Contact us for a free consultation and let's discuss 
              how we can help you achieve your e-commerce goals.
            </p>
            
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
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
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
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
