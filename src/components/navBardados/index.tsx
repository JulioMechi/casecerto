'use client';
import React from "react";
import Link from "next/link";

const Navbarcomdados: React.FC = () => {
  return (
    <nav className="bg-orange-700 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <span className="text-xl font-semibold pt-2 text-shadow-md stroke-black" style={{ WebkitTextStroke: 'px black' }}>
                Portifólio Julio Cesar - Trainee EJEM</span >
      </div>
      <div className="space-x-6">
        <Link href="/inicio" className="text-xl font-semibold pt-2 text-shadow-md stroke-black" style={{ WebkitTextStroke: '1px black' }}>Início</Link>
        <Link href="/sobre" className="text-xl font-semibold pt-2 text-shadow-md stroke-black" style={{ WebkitTextStroke: '1px black' }}>Sobre</Link>
        <Link href="/contato" className="text-xl font-semibold pt-2 text-shadow-md stroke-black" style={{ WebkitTextStroke: '1px black' }}>Contato</Link>
        <style jsx>{`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    .fade-in-animation {
                        animation: fadeIn 1.5s ease-in-out;
                    }
        `}</style>
      </div>
    </nav>
  );
};

export default Navbarcomdados;