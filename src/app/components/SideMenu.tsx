// components/SideMenu.tsx

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Cadastro", href: "/cadastro" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white text-white shadow-lg hover:bg-white transition"
      >
        {open ? <FaTimes size={20} className="text-black"/> : <FaBars size={20} className="text-black"/>}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0B0C10] text-white shadow-lg transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <h2 className="text-2xl font-bold">Navegação</h2>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg hover:text-gray-300 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
