'use client';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Title from '../components/Title';
import { FaGamepad } from 'react-icons/fa';

export default function ListaProdutos() {
  type Game = { title: string; description: string; price: number; image: string };
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('games');
      setGames(stored ? JSON.parse(stored) : []);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <Title text="Lista de Produtos" icon={<FaGamepad className="text-[4rem]" />} />
      <div className="mt-8 w-full flex flex-col items-center">
        {games.length === 0 ? (
          <p className="text-white text-lg">Nenhum jogo cadastrado ainda.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {games.map((game, idx) => (
              <Card key={idx} title={game.title} description={game.description} price={game.price} image={game.image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
