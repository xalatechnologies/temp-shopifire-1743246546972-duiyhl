import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Calendar, Users, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Sample tournaments data - expanded
const tournaments = [
  {
    id: 1,
    title: "FIFA World Championship",
    status: "registration",
    startDate: "June 15, 2023",
    entryFee: 50,
    prizePool: 5000,
    participants: 42,
    maxParticipants: 64,
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    format: "Single Elimination",
    region: "Global",
  },
  {
    id: 2,
    title: "European Masters Cup",
    status: "ongoing",
    startDate: "Ongoing",
    entryFee: 25,
    prizePool: 2500,
    participants: 32,
    maxParticipants: 32,
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    format: "Group Stage + Playoffs",
    region: "Europe",
  },
  {
    id: 3,
    title: "Weekend Tournament",
    status: "upcoming",
    startDate: "This Weekend",
    entryFee: 10,
    prizePool: 1000,
    participants: 12,
    maxParticipants: 16,
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    format: "Double Elimination",
    region: "Americas",
  },
  {
    id: 4,
    title: "Asian Championship",
    status: "registration",
    startDate: "July 5, 2023",
    entryFee: 30,
    prizePool: 3000,
    participants: 18,
    maxParticipants: 32,
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    format: "Round Robin",
    region: "Asia",
  },
  {
    id: 5,
    title: "Pro League Season 2",
    status: "upcoming",
    startDate: "August 1, 2023",
    entryFee: 100,
    prizePool: 10000,
    participants: 8,
    maxParticipants: 16,
    image: "https://images.unsplash.com/photo-1511886929837-354d1a8e48c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    format: "League Format",
    region: "Global",
  },
  {
    id: 6,
    title: "Amateur Cup",
    status: "registration",
    startDate: "June 25, 2023",
    entryFee: 5,
    prizePool: 500,
    participants: 28,
    maxParticipants: 32,
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    format: "Single Elimination",
    region: "Global",
  },
];

const Tournaments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-hero-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FIFA Tournaments
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Browse and join competitive events, showcase your skills, and win prizes
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60" size={18} />
            <Input
              type="text"
              placeholder="Search tournaments..."
              className="pl-10 w-full md:w-80"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={14} />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              All Regions
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              Entry Fee
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              Prize Pool
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="w-full max-w-md grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="tournament-card group border border-border">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`
                            ${tournament.status === "registration" ? "bg-fifa-blue" : 
                              tournament.status === "ongoing" ? "bg-fifa-green" : 
                              "bg-fifa-gold"}
                          `}
                        >
                          {tournament.status === "registration" ? "Registration Open" : 
                           tournament.status === "ongoing" ? "Ongoing" : 
                           "Upcoming"}
                        </Badge>
                        <span className="text-white text-sm font-medium">
                          ${tournament.entryFee} Entry
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                    
                    <div className="flex justify-between text-sm text-foreground/70 mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{tournament.startDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy size={14} className="mr-1 text-fifa-gold" />
                        <span>${tournament.prizePool}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-foreground/70 mb-4">
                      <div>Format: {tournament.format}</div>
                      <div>Region: {tournament.region}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground/70">Participants</span>
                        <span className="font-medium">
                          {tournament.participants}/{tournament.maxParticipants}
                        </span>
                      </div>
                      <Progress 
                        value={(tournament.participants / tournament.maxParticipants) * 100} 
                        className="h-2 bg-muted"
                        indicatorClassName={cn(
                          tournament.status === "registration" ? "bg-fifa-blue" :
                          tournament.status === "ongoing" ? "bg-fifa-green" :
                          "bg-fifa-gold"
                        )}
                      />
                    </div>
                    
                    <Button
                      className={`w-full ${
                        tournament.status === "registration"
                          ? "bg-fifa-blue hover:bg-fifa-blue/90"
                          : tournament.status === "ongoing"
                          ? "bg-fifa-green hover:bg-fifa-green/90"
                          : "bg-fifa-gold hover:bg-fifa-gold/90 text-black"
                      }`}
                    >
                      {tournament.status === "registration"
                        ? "Register Now"
                        : tournament.status === "ongoing"
                        ? "View Matches"
                        : "Get Notified"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="registration" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments
                .filter((t) => t.status === "registration")
                .map((tournament) => (
                  <div key={tournament.id} className="tournament-card group border border-border">
                    {/* Tournament card content - same structure as above */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tournament.image}
                        alt={tournament.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center">
                          <Badge className="bg-fifa-blue">Registration Open</Badge>
                          <span className="text-white text-sm font-medium">
                            ${tournament.entryFee} Entry
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                      
                      <div className="flex justify-between text-sm text-foreground/70 mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{tournament.startDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Trophy size={14} className="mr-1 text-fifa-gold" />
                          <span>${tournament.prizePool}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-foreground/70 mb-4">
                        <div>Format: {tournament.format}</div>
                        <div>Region: {tournament.region}</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground/70">Participants</span>
                          <span className="font-medium">
                            {tournament.participants}/{tournament.maxParticipants}
                          </span>
                        </div>
                        <Progress 
                          value={(tournament.participants / tournament.maxParticipants) * 100} 
                          className="h-2 bg-muted"
                          indicatorClassName="bg-fifa-blue"
                        />
                      </div>
                      
                      <Button className="w-full bg-fifa-blue hover:bg-fifa-blue/90">
                        Register Now
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ongoing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments
                .filter((t) => t.status === "ongoing")
                .map((tournament) => (
                  <div key={tournament.id} className="tournament-card group border border-border">
                    {/* Tournament card content - similar structure as above but with status-specific details */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tournament.image}
                        alt={tournament.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center">
                          <Badge className="bg-fifa-green">Ongoing</Badge>
                          <span className="text-white text-sm font-medium">
                            ${tournament.entryFee} Entry
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                      
                      <div className="flex justify-between text-sm text-foreground/70 mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{tournament.startDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Trophy size={14} className="mr-1 text-fifa-gold" />
                          <span>${tournament.prizePool}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-foreground/70 mb-4">
                        <div>Format: {tournament.format}</div>
                        <div>Region: {tournament.region}</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground/70">Participants</span>
                          <span className="font-medium">
                            {tournament.participants}/{tournament.maxParticipants}
                          </span>
                        </div>
                        <Progress 
                          value={(tournament.participants / tournament.maxParticipants) * 100} 
                          className="h-2 bg-muted"
                          indicatorClassName="bg-fifa-green"
                        />
                      </div>
                      
                      <Button className="w-full bg-fifa-green hover:bg-fifa-green/90">
                        View Matches
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments
                .filter((t) => t.status === "upcoming")
                .map((tournament) => (
                  <div key={tournament.id} className="tournament-card group border border-border">
                    {/* Tournament card content - similar structure as above but with status-specific details */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tournament.image}
                        alt={tournament.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center">
                          <Badge className="bg-fifa-gold text-black">Upcoming</Badge>
                          <span className="text-white text-sm font-medium">
                            ${tournament.entryFee} Entry
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                      
                      <div className="flex justify-between text-sm text-foreground/70 mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{tournament.startDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Trophy size={14} className="mr-1 text-fifa-gold" />
                          <span>${tournament.prizePool}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-foreground/70 mb-4">
                        <div>Format: {tournament.format}</div>
                        <div>Region: {tournament.region}</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground/70">Participants</span>
                          <span className="font-medium">
                            {tournament.participants}/{tournament.maxParticipants}
                          </span>
                        </div>
                        <Progress 
                          value={(tournament.participants / tournament.maxParticipants) * 100} 
                          className="h-2 bg-muted"
                          indicatorClassName="bg-fifa-gold"
                        />
                      </div>
                      
                      <Button className="w-full bg-fifa-gold hover:bg-fifa-gold/90 text-black">
                        Get Notified
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tournaments;
