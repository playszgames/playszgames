import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, Users } from "lucide-react";
import { Game } from "@/lib/games";
import { Link } from "wouter";

interface GameCardProps {
  game: Game;
  variant?: "default" | "compact" | "featured";
}

export function GameCard({ game, variant = "default" }: GameCardProps) {
  const formatPlays = (plays: number) => {
    if (plays >= 1000000) return `${(plays / 1000000).toFixed(1)}M`;
    if (plays >= 1000) return `${(plays / 1000).toFixed(1)}K`;
    return plays.toString();
  };

  if (variant === "compact") {
    return (
      <Link href={`/game/${game.id}`}>
        <a className="block group">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200 h-full">
            <div className="relative h-32 overflow-hidden bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{game.title.charAt(0)}</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play size={24} className="text-white" />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm text-gray-900 line-clamp-2">{game.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{game.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-orange-600">{game.rating}⭐</span>
                <span className="text-xs text-gray-500">{formatPlays(game.plays)}</span>
              </div>
            </div>
          </Card>
        </a>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/game/${game.id}`}>
        <a className="block group">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-200">
            <div className="relative h-56 overflow-hidden bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{game.title.charAt(0)}</div>
                  <p className="text-white text-sm">{game.subcategory}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                  <Play size={20} /> Play Now
                </Button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{game.title}</h3>
                  <p className="text-sm text-gray-500">{game.category}</p>
                </div>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {game.rating}⭐
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{game.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{formatPlays(game.plays)} plays</span>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {game.difficulty}
                </span>
              </div>
            </div>
          </Card>
        </a>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/game/${game.id}`}>
      <a className="block group">
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200">
          <div className="relative h-48 overflow-hidden bg-gray-200">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">{game.title.charAt(0)}</span>
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                <Play size={20} /> Play
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{game.title}</h3>
                <p className="text-sm text-gray-500">{game.category}</p>
              </div>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                {game.rating}⭐
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{game.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{formatPlays(game.plays)} plays</span>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Play
              </Button>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}
