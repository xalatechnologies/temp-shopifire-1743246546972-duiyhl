
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Medal, Star, Search, Filter, MessageSquare, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Sample players data
const players = [
  {
    id: 1,
    name: "ProGamer99",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rank: 1,
    wins: 152,
    losses: 23,
    winRate: 87,
    country: "Brazil",
    badges: ["champion", "streamer", "veteran"],
    status: "online",
  },
  {
    id: 2,
    name: "FootballKing",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rank: 2,
    wins: 143,
    losses: 31,
    winRate: 82,
    country: "France",
    badges: ["tournament", "veteran"],
    status: "offline",
  },
  {
    id: 3,
    name: "AlexMaster",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rank: 3,
    wins: 138,
    losses: 42,
    winRate: 77,
    country: "Germany",
    badges: ["tournament", "streamer"],
    status: "online",
  },
  {
    id: 4,
    name: "FIFADestroyer",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rank: 5,
    wins: 125,
    losses: 48,
    winRate: 72,
    country: "Spain",
    badges: ["veteran"],
    status: "online",
  },
  {
    id: 5,
    name: "SoccerLegend",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rank: 7,
    wins: 118,
    losses: 51,
    winRate: 70,
    country: "Argentina",
    badges: ["rising"],
    status: "offline",
  },
  {
    id: 6,
    name: "UltimateGoal",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    rank: 10,
    wins: 105,
    losses: 60,
    winRate: 64,
    country: "England",
    badges: ["streamer"],
    status: "online",
  },
  {
    id: 7,
    name: "SkillMaster",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rank: 15,
    wins: 95,
    losses: 62,
    winRate: 61,
    country: "Portugal",
    badges: ["rising"],
    status: "offline",
  },
  {
    id: 8,
    name: "TacticianPro",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rank: 12,
    wins: 102,
    losses: 68,
    winRate: 60,
    country: "Italy",
    badges: ["rising"],
    status: "online",
  },
];

const Players = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-hero-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FIFA Players
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Connect with top players, challenge opponents, and make new friends
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
              placeholder="Search players..."
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
              Rank
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              Win Rate
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <div 
              key={player.id} 
              className="border rounded-xl overflow-hidden hover:border-fifa-green/50 transition-all bg-card"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-16 h-16 rounded-full border-2 border-fifa-blue object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-card text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center border">
                      #{player.rank}
                    </div>
                    <div 
                      className={`absolute -top-1 -right-1 rounded-full w-3 h-3 border border-card
                        ${player.status === "online" ? "bg-fifa-green" : "bg-gray-400"}
                      `}
                    ></div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">{player.name}</h3>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {player.country}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {player.badges.includes("champion") && (
                    <Badge className="bg-fifa-gold text-black">Champion</Badge>
                  )}
                  {player.badges.includes("tournament") && (
                    <Badge className="bg-fifa-blue">Tournament Winner</Badge>
                  )}
                  {player.badges.includes("streamer") && (
                    <Badge className="bg-purple-500">Streamer</Badge>
                  )}
                  {player.badges.includes("veteran") && (
                    <Badge className="bg-gray-500">Veteran</Badge>
                  )}
                  {player.badges.includes("rising") && (
                    <Badge className="bg-orange-500">Rising Star</Badge>
                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-sm border-t border-border pt-4 mb-4">
                  <div className="text-center">
                    <div className="text-foreground/70">Wins</div>
                    <div className="text-fifa-green font-bold text-lg">{player.wins}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-foreground/70">Losses</div>
                    <div className="font-bold text-lg">{player.losses}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-foreground/70">Win Rate</div>
                    <div className="text-fifa-blue font-bold text-lg">{player.winRate}%</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-fifa-blue text-fifa-blue hover:bg-fifa-blue/10"
                  >
                    <MessageSquare className="mr-1 h-4 w-4" />
                    Message
                  </Button>
                  <Button 
                    className="flex-1 bg-fifa-green hover:bg-fifa-green/90"
                  >
                    <Gamepad2 className="mr-1 h-4 w-4" />
                    Challenge
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Players;
