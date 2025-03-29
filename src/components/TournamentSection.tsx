import { Calendar, Users, Trophy, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

// Sample tournaments data
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
  },
];

const TournamentSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Tournaments</h2>
            <p className="text-foreground/70">
              Compete in organized events for glory and prizes
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/tournaments">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="tournament-card group">
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
                
                <Button
                  className={`w-full ${
                    tournament.status === "registration"
                      ? "bg-fifa-blue hover:bg-fifa-blue/90"
                      : tournament.status === "ongoing"
                      ? "bg-fifa-green hover:bg-fifa-green/90"
                      : "bg-fifa-gold hover:bg-fifa-gold/90 text-black"
                  }`}
                  asChild
                >
                  <Link to={`/tournaments/${tournament.id}`}>
                    {tournament.status === "registration"
                      ? "Register Now"
                      : tournament.status === "ongoing"
                      ? "View Matches"
                      : "Get Notified"}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentSection;
