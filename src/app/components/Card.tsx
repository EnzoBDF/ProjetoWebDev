// components/GameCard.tsx

interface CardProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function Card({ title, price, description, image }: CardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={`Capa do jogo ${title}`}
        className="rounded-lg mb-4 object-cover w-full h-40"
      />
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-green-400 font-bold text-lg">R$ {price.toFixed(2)}</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md text-sm transition">
          Comprar
        </button>
      </div>
    </div>
  );
}
