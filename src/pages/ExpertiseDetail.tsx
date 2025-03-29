
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { expertiseAreas } from "@/components/ExpertiseDisplay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SectionContainer } from "@/components/ui/section-container";

const ExpertiseDetail = () => {
  const { id } = useParams();
  const expertise = expertiseAreas.find((area) => area.id === Number(id));

  if (!expertise) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto py-16 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Expertise not found</h2>
          <p className="mb-8">The expertise area you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <SectionContainer variant="dark" className="py-16">
          <div className="container mx-auto px-4">
            <Link to="/#expertise" className="inline-flex items-center text-white/70 hover:text-white mb-8">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Expertise Areas
            </Link>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="rounded-lg p-4 bg-gradient-to-br from-background to-muted border border-border">
                {expertise.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold">{expertise.title}</h1>
                <Badge variant="outline" className="mt-2 text-sm border-white/20 text-white/70">
                  {expertise.location}
                </Badge>
              </div>
            </div>
            
            <p className="text-lg text-white/80 max-w-2xl mt-4">{expertise.description}</p>
          </div>
        </SectionContainer>
        
        {/* Main Content */}
        <SectionContainer variant="default">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  About This Expertise
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-fifa-green"></span>
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-8">{expertise.longDescription}</p>
                </div>
                
                <div className="mt-12 space-y-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Our {expertise.title} Services?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-fifa-gold" />
                        <h4 className="font-medium">Expert Team</h4>
                      </div>
                      <p className="text-white/70">Our specialists have years of experience in {expertise.title.toLowerCase()} for Shopify stores.</p>
                    </div>
                    
                    <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-fifa-gold" />
                        <h4 className="font-medium">Custom Solutions</h4>
                      </div>
                      <p className="text-white/70">Tailored approaches based on your specific business needs and goals.</p>
                    </div>
                    
                    <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-fifa-gold" />
                        <h4 className="font-medium">Proven Results</h4>
                      </div>
                      <p className="text-white/70">Track record of success with measurable improvements for our clients.</p>
                    </div>
                    
                    <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="h-5 w-5 text-fifa-gold" />
                        <h4 className="font-medium">Ongoing Support</h4>
                      </div>
                      <p className="text-white/70">We provide continued assistance and optimization after implementation.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-card rounded-lg p-6 shadow-lg border border-white/10 mb-8">
                  <h3 className="text-lg font-bold mb-4">Core Competencies</h3>
                  
                  <div className="space-y-5">
                    {expertise.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-white/70">{skill.name}</span>
                          <span className="text-fifa-green font-bold">{skill.value}%</span>
                        </div>
                        <Progress 
                          value={skill.value} 
                          className="h-2 bg-white/10" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-lg border border-white/10">
                  <h3 className="text-lg font-bold mb-4">Ready to get started?</h3>
                  <p className="text-white/70 mb-6">Contact us today to discuss how our {expertise.title} services can help your business grow.</p>
                  <Link to="/contact">
                    <Button className="w-full bg-fifa-blue hover:bg-fifa-blue/90">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExpertiseDetail;
