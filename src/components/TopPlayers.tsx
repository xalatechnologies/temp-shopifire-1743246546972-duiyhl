
import { Trophy, Award, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Sample data for top players
const topPlayers = [
  {
    id: 1,
    name: "ProGamer99",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rank: 1,
    wins: 152,
    losses: 23,
    winRate: 87,
    country: "Brazil",
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
  },
];

const TopPlayers = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-fifa-darkblue to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">Top Players</h2>
            <p className="text-white/70">The best FIFA players on our platform</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 text-white border-white/20 hover:bg-white/10">
            View Leaderboard <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPlayers.map((player, index) => (
            <div 
              key={player.id} 
              className="rounded-xl overflow-hidden bg-card-gradient border border-white/10 hover:border-fifa-green/50 transition-all"
            >
              <div className="relative p-6">
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-fifa-gold text-black font-bold text-xs px-4 py-1 rounded-bl-lg">
                    #1 CHAMPION
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-20 h-20 rounded-full border-2 border-fifa-blue"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-fifa-blue rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm border-2 border-background">
                      {player.rank}
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{player.name}</h3>
                    <Badge variant="outline" className="mt-1 text-xs border-white/20 text-white/70">
                      {player.country}
                    </Badge>
                  </div>
                  
                  {index === 0 && (
                    <Trophy className="ml-auto h-8 w-8 text-fifa-gold" />
                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-sm border-t border-white/10 pt-4">
                  <div className="text-center">
                    <div className="text-white/70">Wins</div>
                    <div className="text-fifa-green font-bold text-lg">{player.wins}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/70">Losses</div>
                    <div className="text-white font-bold text-lg">{player.losses}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/70">Win Rate</div>
                    <div className="text-fifa-blue font-bold text-lg">{player.winRate}%</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 text-white border-white/20 hover:bg-white/10"
                  asChild
                >
                  <Link to={`/players/${player.id}`}>
                    View Profile
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

export default TopPlayers;
