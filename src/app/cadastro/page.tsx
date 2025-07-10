'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const newGame = { title, description, price: Number(price), image };
    const stored = localStorage.getItem('games');
    const games = stored ? JSON.parse(stored) : [];
    games.push(newGame);
    localStorage.setItem('games', JSON.stringify(games));
    router.push('/home');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <h1 className="text-white text-4xl font-bold mb-8">Cadastrar Novo Jogo</h1>
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
        <input className="p-2 rounded" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea className="p-2 rounded" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required />
        <input className="p-2 rounded" placeholder="Preço" type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} required />
        <input className="p-2 rounded" placeholder="URL da Imagem" value={image} onChange={e => setImage(e.target.value)} required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Cadastrar</button>
      </form>
    </div>
  );
}