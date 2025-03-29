
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Medal, ChevronUp, Search, Filter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    name: "ProGamer99",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rank: 1,
    wins: 152,
    losses: 23,
    winRate: 87,
    country: "Brazil",
    points: 2450,
    trend: "up",
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
    points: 2380,
    trend: "up",
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
    points: 2310,
    trend: "down",
  },
  {
    id: 4,
    name: "FIFADestroyer",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rank: 4,
    wins: 132,
    losses: 44,
    winRate: 75,
    country: "Spain",
    points: 2290,
    trend: "same",
  },
  {
    id: 5,
    name: "GoalMachine",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rank: 5,
    wins: 125,
    losses: 48,
    winRate: 72,
    country: "Netherlands",
    points: 2240,
    trend: "up",
  },
  {
    id: 6,
    name: "SoccerLegend",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rank: 6,
    wins: 118,
    losses: 51,
    winRate: 70,
    country: "Argentina",
    points: 2200,
    trend: "down",
  },
  {
    id: 7,
    name: "UltimateGoal",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    rank: 7,
    wins: 105,
    losses: 60,
    winRate: 64,
    country: "England",
    points: 2180,
    trend: "up",
  },
  {
    id: 8,
    name: "SkillMaster",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rank: 8,
    wins: 95,
    losses: 62,
    winRate: 61,
    country: "Portugal",
    points: 2150,
    trend: "same",
  },
  {
    id: 9,
    name: "TacticianPro",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rank: 9,
    wins: 102,
    losses: 68,
    winRate: 60,
    country: "Italy",
    points: 2120,
    trend: "up",
  },
  {
    id: 10,
    name: "DefenderKing",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    rank: 10,
    wins: 90,
    losses: 70,
    winRate: 56,
    country: "Belgium",
    points: 2080,
    trend: "down",
  },
];

const Leaderboards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-hero-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FIFA Leaderboards
            </h1>
            <p className="text-white/80 text-lg mb-8">
              See who's dominating the competition and where you stand
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
              <Globe size={14} className="mr-1" />
              All Regions
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              Season 2023
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="global" className="mb-8">
          <TabsList className="w-full max-w-md grid grid-cols-3">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="global" className="mt-6">
            <div className="bg-card rounded-lg shadow overflow-hidden border">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40">
                      <TableHead className="w-16 text-center">Rank</TableHead>
                      <TableHead>Player</TableHead>
                      <TableHead className="text-center">Country</TableHead>
                      <TableHead className="text-center">Wins</TableHead>
                      <TableHead className="text-center">Losses</TableHead>
                      <TableHead className="text-center">Win Rate</TableHead>
                      <TableHead className="text-center">Points</TableHead>
                      <TableHead className="text-center">Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboardData.map((player) => (
                      <TableRow 
                        key={player.id}
                        className="hover:bg-muted/30 transition-colors"
                      >
                        <TableCell className="text-center font-bold">
                          {player.rank <= 3 ? (
                            <span 
                              className={`inline-flex items-center justify-center h-8 w-8 rounded-full 
                                ${player.rank === 1 ? 'bg-fifa-gold text-black' : 
                                  player.rank === 2 ? 'bg-gray-300 text-gray-800' : 
                                  'bg-amber-700 text-white'}
                              `}
                            >
                              {player.rank}
                            </span>
                          ) : (
                            player.rank
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img 
                              src={player.avatar} 
                              alt={player.name} 
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            <span className="font-medium">{player.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          {player.country}
                        </TableCell>
                        <TableCell className="text-center text-fifa-green font-medium">
                          {player.wins}
                        </TableCell>
                        <TableCell className="text-center">
                          {player.losses}
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          {player.winRate}%
                        </TableCell>
                        <TableCell className="text-center font-bold">
                          {player.points}
                        </TableCell>
                        <TableCell className="text-center">
                          {player.trend === "up" ? (
                            <span className="text-fifa-green">▲</span>
                          ) : player.trend === "down" ? (
                            <span className="text-red-500">▼</span>
                          ) : (
                            <span className="text-gray-400">–</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="regional" className="mt-6">
            <div className="bg-card p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-2">Regional Rankings</h3>
              <p className="text-foreground/70 mb-6">
                Select your region to view local leaderboards
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="sm" variant="outline">Europe</Button>
                <Button size="sm" variant="outline">North America</Button>
                <Button size="sm" variant="outline">South America</Button>
                <Button size="sm" variant="outline">Asia</Button>
                <Button size="sm" variant="outline">Africa</Button>
                <Button size="sm" variant="outline">Oceania</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="friends" className="mt-6">
            <div className="bg-card p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-2">Friends Leaderboard</h3>
              <p className="text-foreground/70 mb-6">
                Sign in to compare your stats with friends
              </p>
              
              <Button className="bg-fifa-blue hover:bg-fifa-blue/90">
                Sign In to View
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Leaderboards;
