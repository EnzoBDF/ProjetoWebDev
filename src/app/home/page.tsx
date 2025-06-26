'use client';

import Card from "../components/Card"

export default function Start() {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen">
            <div className="w-[80%] top-0 h-8/12 absolute flex items-center justify-center rounded-b-4xl overflow-hidden text-left shadow-2xl">
          
                <div className="absolute inset-0 bg-[url('https://techcentre.com/wp-content/uploads/2023/11/ConsolePile.webp')] bg-cover bg-center filter blur-xs scale-105"></div>

             
                <h1 className="relative font-bold text-white text-[3rem] z-10 text-left">
                    Loja  de <br /> Jogos
                </h1>
            </div>

            <div className="mt-[40rem] space-y-6 flex flex-col items-center justify-center">
                <h3 className="text-white text-3xl">Quem somos?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                   
                </div>
            </div>
        </div>
    )
}