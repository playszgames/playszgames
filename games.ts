// Games Database and Utilities
// This file manages all game data and provides helper functions

export interface Game {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  guide: string;
  rating: number;
  plays: number;
  difficulty: string;
  tags: string[];
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

// Sample games data - In production, this would come from an API
export const gamesData: Game[] = [
  {
    id: "1v1-lol",
    title: "1v1 LOL",
    category: "Battle",
    subcategory: "Competitive",
    description: "Epic 1v1 battles in this competitive gaming experience. Build, fight, and dominate in real-time combat.",
    guide: "Master the art of building and combat. Practice your aim, build structures quickly, and outmaneuver your opponent. Key tips: Always maintain high ground, manage your materials, and stay mobile.",
    rating: 4.8,
    plays: 2500000,
    difficulty: "Medium",
    tags: ["pvp", "competitive", "action", "multiplayer"],
    image: "1v1-lol.jpg"
  },
  {
    id: "10x10",
    title: "10x10",
    category: "Puzzle",
    subcategory: "Block Puzzle",
    description: "Challenge your mind with this addictive puzzle game. Place blocks strategically to clear lines and score big.",
    guide: "Think ahead and plan your moves. Try to clear multiple lines at once for bonus points. The key to high scores is positioning blocks efficiently and avoiding dead zones.",
    rating: 4.6,
    plays: 1800000,
    difficulty: "Easy",
    tags: ["puzzle", "blocks", "casual", "strategy"],
    image: "10x10.jpg"
  },
  {
    id: "2048",
    title: "2048",
    category: "Puzzle",
    subcategory: "Number Puzzle",
    description: "The classic number puzzle that took the world by storm. Combine tiles to reach 2048 and beyond.",
    guide: "Keep your highest numbers in one corner. Combine tiles strategically to create space. Focus on building towards 2048 while maintaining board control.",
    rating: 4.7,
    plays: 3200000,
    difficulty: "Medium",
    tags: ["puzzle", "numbers", "strategy", "classic"],
    image: "2048.jpg"
  },
  {
    id: "snake-game",
    title: "Snake Game",
    category: "Casual",
    subcategory: "Arcade",
    description: "The timeless classic Snake game. Eat food, grow longer, and avoid hitting walls and yourself.",
    guide: "Start slow and plan your path. Avoid creating situations where you trap yourself. Use the edges strategically to navigate the board safely.",
    rating: 4.5,
    plays: 2100000,
    difficulty: "Easy",
    tags: ["arcade", "classic", "casual", "retro"],
    image: "snake.jpg"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    category: "Casual",
    subcategory: "Arcade",
    description: "Navigate a bird through pipes in this challenging arcade game. Simple controls, addictive gameplay.",
    guide: "Tap to fly up, release to fall. Time your taps carefully to navigate through the pipes. Practice makes perfect - this game rewards consistency.",
    rating: 4.4,
    plays: 1900000,
    difficulty: "Hard",
    tags: ["arcade", "casual", "challenging", "mobile"],
    image: "flappy-bird.jpg"
  },
  {
    id: "tetris",
    title: "Tetris",
    category: "Puzzle",
    subcategory: "Block Puzzle",
    description: "The legendary Tetris game. Stack falling blocks and clear lines to achieve high scores.",
    guide: "Rotate pieces strategically. Keep the board level. Create opportunities for Tetris (4-line clears) for maximum points. Stay focused as speed increases.",
    rating: 4.9,
    plays: 2800000,
    difficulty: "Medium",
    tags: ["puzzle", "classic", "blocks", "arcade"],
    image: "tetris.jpg"
  },
  {
    id: "pac-man",
    title: "Pac-Man",
    category: "Casual",
    subcategory: "Arcade",
    description: "Guide Pac-Man through the maze, eating dots and avoiding ghosts. A true arcade classic.",
    guide: "Learn the ghost patterns. Use power-ups strategically. Plan escape routes before eating pellets. Memorize maze layouts for better performance.",
    rating: 4.7,
    plays: 2200000,
    difficulty: "Medium",
    tags: ["arcade", "classic", "maze", "retro"],
    image: "pac-man.jpg"
  },
  {
    id: "space-invaders",
    title: "Space Invaders",
    category: "Action",
    subcategory: "Shooter",
    description: "Defend Earth from alien invaders. Shoot down waves of enemies and survive as long as possible.",
    guide: "Keep moving to avoid enemy fire. Aim carefully before shooting. Destroy enemies in patterns to maximize efficiency. Stay alert as difficulty increases.",
    rating: 4.6,
    plays: 1700000,
    difficulty: "Medium",
    tags: ["action", "shooter", "arcade", "classic"],
    image: "space-invaders.jpg"
  },
  {
    id: "breakout",
    title: "Breakout",
    category: "Casual",
    subcategory: "Arcade",
    description: "Break bricks with a bouncing ball. Control the paddle and clear all blocks to advance.",
    guide: "Position your paddle carefully. Aim for multiple brick hits per bounce. Use walls to your advantage. Try to hit bricks from different angles.",
    rating: 4.5,
    plays: 1500000,
    difficulty: "Easy",
    tags: ["arcade", "casual", "classic", "blocks"],
    image: "breakout.jpg"
  },
  {
    id: "chess",
    title: "Chess",
    category: "Strategy",
    subcategory: "Board Game",
    description: "The ultimate strategy game. Play chess against AI or other players. Master the ancient game.",
    guide: "Control the center of the board. Develop your pieces early. Protect your king. Learn basic tactics and openings. Practice endgames.",
    rating: 4.8,
    plays: 2400000,
    difficulty: "Hard",
    tags: ["strategy", "board", "classic", "competitive"],
    image: "chess.jpg"
  }
];

export const categoriesData: Category[] = [
  {
    id: "action",
    name: "Action",
    description: "Fast-paced games with exciting gameplay and real-time challenges",
    icon: "⚡",
    count: 85
  },
  {
    id: "puzzle",
    name: "Puzzle",
    description: "Brain-teasing games that challenge your logic and problem-solving skills",
    icon: "🧩",
    count: 120
  },
  {
    id: "battle",
    name: "Battle",
    description: "Competitive games where you fight against opponents or AI",
    icon: "⚔️",
    count: 95
  },
  {
    id: "racing",
    name: "Racing",
    description: "Speed and competition in thrilling racing games",
    icon: "🏎️",
    count: 65
  },
  {
    id: "sports",
    name: "Sports",
    description: "Sports-themed games including football, basketball, and more",
    icon: "⚽",
    count: 75
  },
  {
    id: "casual",
    name: "Casual",
    description: "Relaxing and fun games perfect for all ages",
    icon: "🎮",
    count: 110
  },
  {
    id: "strategy",
    name: "Strategy",
    description: "Games requiring tactical thinking and planning",
    icon: "♟️",
    count: 85
  },
  {
    id: "adventure",
    name: "Adventure",
    description: "Explore worlds and embark on exciting quests",
    icon: "🗺️",
    count: 70
  }
];

// Helper functions
export function getGameById(id: string): Game | undefined {
  return gamesData.find(game => game.id === id);
}

export function getGamesByCategory(categoryId: string): Game[] {
  return gamesData.filter(game => game.category.toLowerCase() === categoryId.toLowerCase());
}

export function getTopGames(limit: number = 10): Game[] {
  return [...gamesData].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getMostPlayedGames(limit: number = 10): Game[] {
  return [...gamesData].sort((a, b) => b.plays - a.plays).slice(0, limit);
}

export function searchGames(query: string): Game[] {
  const lowerQuery = query.toLowerCase();
  return gamesData.filter(game =>
    game.title.toLowerCase().includes(lowerQuery) ||
    game.description.toLowerCase().includes(lowerQuery) ||
    game.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getCategoryById(id: string): Category | undefined {
  return categoriesData.find(cat => cat.id === id);
}

export function getRelatedGames(gameId: string, limit: number = 5): Game[] {
  const game = getGameById(gameId);
  if (!game) return [];

  return gamesData
    .filter(g => g.id !== gameId && g.category === game.category)
    .slice(0, limit);
}

export function getGamesByDifficulty(difficulty: string): Game[] {
  return gamesData.filter(game => game.difficulty.toLowerCase() === difficulty.toLowerCase());
}

export function getGamesByTag(tag: string): Game[] {
  return gamesData.filter(game => game.tags.includes(tag.toLowerCase()));
}
