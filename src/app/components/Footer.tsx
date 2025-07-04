
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-white/10 text-gray-300 px-6 py-8 w-full mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Nome/logo da loja */}
        <div className="text-white text-xl font-semibold">Loja de Jogos</div>
        
        {/* Links de navegação */}
        <ul className="flex space-x-6 text-sm">
          <li><a href="/quem-somos" className="hover:text-white transition">Quem somos</a></li>
          <li><a href="/contato" className="hover:text-white transition">Contato</a></li>
          <li><a href="/suporte" className="hover:text-white transition">Suporte</a></li>
        </ul>

        {/* Ícones sociais */}
        <div className="flex space-x-4">
          <a href="mailto:contato@lojadejogos.com" className="hover:text-white transition"><FaEnvelope /></a>
          <a href="https://instagram.com" target="_blank" className="hover:text-white transition"><FaInstagram /></a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition"><FaGithub /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Loja de Jogos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
