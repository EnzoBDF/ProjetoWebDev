'use client';
import AboutCard from "../components/AboutCard";
import Card from "../components/Card"
import Footer from "../components/Footer";
import Navbar from "../components/SideMenu";

export default function Start() {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen">
            <Navbar/>
            <div className="w-[80%] top-0 h-8/12 absolute flex items-center justify-center rounded-b-4xl overflow-hidden text-left shadow-2xl">

                <div className="absolute inset-0 bg-[url('https://techcentre.com/wp-content/uploads/2023/11/ConsolePile.webp')] bg-cover bg-center filter blur-xs scale-105"></div>


                <h1 className="relative font-bold text-white text-[3rem] z-10 text-left">
                    Loja  de <br /> Jogos
                </h1>
            </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                    <Card title="socorro" description="socorro socorro socorro socorro" price={90} image="https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png" />
                </div>
            </div>

            <Footer/>
        </div>
    )
}