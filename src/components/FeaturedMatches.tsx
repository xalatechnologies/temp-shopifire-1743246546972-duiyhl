
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad2, Sword, Eye, CheckCircle2 } from "lucide-react";

// Sample data for upcoming matches
const upcomingMatches = [
  {
    id: 1,
    player1: {
      id: 101,
      name: "AlexMaster",
      rank: 3,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    player2: {
      id: 102,
      name: "FIFADestroyer",
      rank: 5,
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    time: "Today, 18:00",
    stakes: "$25",
    status: "upcoming",
  },
  {
    id: 2,
    player1: {
      id: 103,
      name: "ProGamer99",
      rank: 1,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    player2: {
      id: 104,
      name: "FootballKing",
      rank: 2,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    time: "Today, 20:30",
    stakes: "$100",
    status: "featured",
  },
  {
    id: 3,
    player1: {
      id: 105,
      name: "SoccerLegend",
      rank: 7,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    player2: {
      id: 106,
      name: "UltimateGoal",
      rank: 10,
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    time: "Tomorrow, 16:45",
    stakes: "$50",
    status: "upcoming",
  },
  {
    id: 4,
    player1: {
      id: 107,
      name: "SkillMaster",
      rank: 15,
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    player2: {
      id: 108,
      name: "TacticianPro",
      rank: 12,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    time: "Live now",
    stakes: "$75",
    status: "live",
  },
];

const FeaturedMatches = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Matches</h2>
            <p className="text-foreground/70">Watch and bet on top FIFA players</p>
          </div>
          <Button variant="outline" className="border-fifa-green text-fifa-green hover:bg-fifa-green/10">
            View All Matches
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingMatches.map((match) => (
            <div key={match.id} className="match-card">
              {match.status === "featured" && (
                <Badge className="absolute top-3 right-3 bg-fifa-blue">Featured</Badge>
              )}
              {match.status === "live" && (
                <Badge className="absolute top-3 right-3 bg-red-500 animate-pulse">
                  Live Now
                </Badge>
              )}
              
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-1 text-sm">
                    <Gamepad2 size={14} className="text-fifa-green" />
                    <span className="text-foreground/70">{match.time}</span>
                  </div>
                  <Badge variant="outline" className="border-fifa-gold text-fifa-gold">
                    ${match.stakes}
                  </Badge>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="relative">
                      <img
                        src={match.player1.avatar}
                        alt={match.player1.name}
                        className="w-16 h-16 rounded-full mx-auto border-2 border-fifa-blue"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-card text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center border">
                        #{match.player1.rank}
                      </span>
                    </div>
                    <h3 className="mt-2 font-medium text-sm">{match.player1.name}</h3>
                  </div>

                  <div className="flex flex-col items-center">
                    <Sword size={24} className="text-fifa-green mb-1" />
                    <span className="text-xs font-medium uppercase text-foreground/60">VS</span>
                  </div>

                  <div className="text-center">
                    <div className="relative">
                      <img
                        src={match.player2.avatar}
                        alt={match.player2.name}
                        className="w-16 h-16 rounded-full mx-auto border-2 border-fifa-blue"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-card text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center border">
                        #{match.player2.rank}
                      </span>
                    </div>
                    <h3 className="mt-2 font-medium text-sm">{match.player2.name}</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {match.status === "live" ? (
                    <Button className="w-full bg-red-500 hover:bg-red-600">
                      <Eye className="mr-2 h-4 w-4" /> Watch Live
                    </Button>
                  ) : match.status === "upcoming" ? (
                    <Button 
                      className="w-full bg-fifa-blue hover:bg-fifa-blue/90"
                    >
                      <Gamepad2 className="mr-2 h-4 w-4" /> Challenge
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-fifa-green hover:bg-fifa-green/90"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Watch & Bet
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMatches;
