import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footercomdados: React.FC = () => { 
  return (
    <footer className="bg-orange-700 text-white py-6 mt-10 fixed bottom-0 w-full" >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <nav className="flex space-x-4 my-4 md:my-0">
          <Link href="/sobre" className="hover:underline text-xl gray-700" style={{ WebkitTextStroke: '0.75px black' }}>Sobre</Link>
          <Link href="/contato" className="hover:underline text-xl" style={{ WebkitTextStroke: '0.75px black' }}>Contato</Link>
          <Link href="/privacidade" className="hover:underline text-xl" style={{ WebkitTextStroke: '0.75px black' }}>Privacidade</Link>
        </nav>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-2xl hover:text-gray-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footercomdados;
