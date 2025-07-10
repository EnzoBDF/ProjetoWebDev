'use client';
import { FaGamepad } from "react-icons/fa";
import AboutCard from "../components/AboutCard";
import Card from "../components/Card"
import Footer from "../components/Footer";
import Navbar from "../components/SideMenu";
import Title from "../components/Title";
import { useEffect, useState } from 'react';

export default function Start() {
    type Game = { title: string; description: string; price: number; image: string };
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('games');
            setGames(stored ? JSON.parse(stored) : []);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen">
            <Navbar/>
            <Title text="Loja de Jogos" icon={<FaGamepad className="text-[6rem]"/>}></Title>

            <section className="min-h-auto bg-transparent mt-[35rem] px-4">
                <h2 className="text-white text-3xl font-bold text-center mb-10">Quem somos</h2>
                <AboutCard
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--hw1WIOW8_S_4jTiEeAHBTKmt44m241c8g&s"
                    title="Nossa Missão"
                    description="Somos apaixonados por jogos e tecnologia. Nossa missão é entregar nostalgia, diversão e inovação através de uma curadoria de produtos gamer retrô e modernos. Desde 2023, estamos conectando jogadores e experiências."
                />
            </section>

            <div className="mt-[2rem] space-y-6 flex flex-col items-center justify-center">
                <h3 className="text-white text-4xl font-bold mb-12">Conheça nosso catálogo</h3>
                {games.length === 0 ? (
                    <p className="text-white text-lg">Nenhum jogo cadastrado ainda. Cadastre um novo jogo!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {games.map((game, idx) => (
                            <Card key={idx} title={game.title} description={game.description} price={game.price} image={game.image} />
                        ))}
                    </div>
                )}
            </div>

            <Footer/>
        </div>
    )
}