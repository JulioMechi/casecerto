'use client';
import React from "react";
import Image from 'next/image'; 
import Link from "next/link";


const Empresa: React.FC = () => {
return (
//Aqui [e a da ejem, uma div maior para comportar a tabela, o back em publi feito no canva, py para padding, mx para tamanho max, w para width, h para altura, shadow para sombra, border para borda... 
        <div className="container mx-auto w-250 md:w-250 h-180 md:h-130 px-4 py-2 bg-gray-300 bg-opacity-75 mt-6 rounded-md shadow-md border-double bg-[url(/images/bgejem.png)] backdrop-opacity-50" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                <div className = 'container bg mx-auto y-200 w-40 md:w-40 h-50 md:h-50 px-4 py-1 mt-1 rounded-md shadow-xl border border-solid mb-4 bg-gray-300 bg-opacity-75' >
                        <Image src="/images/ejemlogo.png" alt="Portifólio" width={150} height={100} className="mx-auto my-auto mt-2 mb-2 " />
                </div>
                <div className = 'container bg mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 mt-1 rounded-md shadow-xl border border-solid bg-gray-300 bg-opacity-75'>
                    <h1 
                        className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                        style={{WebkitTextStroke: '1px black' }}
                    >
                        EJEM
                    </h1>
                </div>
                <div className="mt-12">
                    <div className='container bg-orange-700 mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-8' style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Ocupação: Trainee
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <div className='container bg-orange-700 mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-1' style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Setor: Tecnologia
                        </button>
                    </div>
                </div>
                <div className="mt-6">
                    <div className='container bg-orange-700 mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-1' style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Projetos realizados: 3
                        </button>
                    </div>
                </div>
                <div>
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
                
        </div>
   
);
};
// Também usei hover dnv para animações, text xl para tamanho de texto, justify center para colocar no centro, 
// shadow para sombra e style para colocar contorno nas letras

export default Empresa;