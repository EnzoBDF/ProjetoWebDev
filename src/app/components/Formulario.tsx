
import { useState } from "react";

interface FormularioProps {
  onSubmit: (data: {
    title: string;
    price: number;
    description: string;
    image: string;
  }) => void;
  initialValues?: {
    title: string;
    price: number;
    description: string;
    image: string;
  };
  buttonLabel?: string;
}

export default function Formulario({
  onSubmit,
  initialValues,
  buttonLabel = "Salvar Jogo",
}: FormularioProps) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [price, setPrice] = useState(initialValues?.price.toString() || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [image, setImage] = useState(initialValues?.image || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      price: parseFloat(price),
      description,
      image,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-white block mb-1">Nome do jogo</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 rounded bg-[#1C1F26] text-white border border-gray-600"
        />
      </div>

      <div>
        <label className="text-white block mb-1">Preço (R$)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          step="0.01"
          className="w-full p-2 rounded bg-[#1C1F26] text-white border border-gray-600"
        />
      </div>

      <div>
        <label className="text-white block mb-1">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
          className="w-full p-2 rounded bg-[#1C1F26] text-white border border-gray-600 resize-none"
        />
      </div>

      <div>
        <label className="text-white block mb-1">URL da imagem</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="w-full p-2 rounded bg-[#1C1F26] text-white border border-gray-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
