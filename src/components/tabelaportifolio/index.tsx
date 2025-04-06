'use client'
import React from "react";
import Image from 'next/image'; 
import Link from "next/link";


const TabelaPortifolio: React.FC = () => {
return (
    <div className="container mx-auto w-90 md:w-100 h-120 md:h-130 px-4 py-2 bg-gray-300 mt-6 rounded-md shadow-md border-double" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
            <div className = 'container bg mx-auto y-200 w-40 md:w-40 h-50 md:h-50 px-4 py-1 mt-1 rounded-md shadow-xl border border-solid mb-4'>
                    <Image src="/images/imagemminha.jpg" alt="Portifólio" width={150} height={100} className="mx-auto my-auto mt-2 mb-2 " />
            </div>
            <div className = 'container bg mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 mt-1 rounded-md shadow-xl border border-solid  '>
                <h1 
                    className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{WebkitTextStroke: '1px black' }}
                >
                    Portifólio
                </h1>
            </div>
            <div className="mt-12">
                <div className='container bg-orange-700 mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-8 transform transition-transform duration-300 hover:scale-110 hover:bg-gray-500'>
                    <Link href="/formacao">
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Formação
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-4">
                <div className='container bg-orange-700 mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-1 transform transition-transform duration-300 hover:scale-110 hover:bg-gray-500'>
                <Link href="/experiencia">
                    <button 
                        className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20 "  
                        style={{ WebkitTextStroke: '1px black' }}
                    > Experiência
                    </button>
                </Link>
                </div>
            </div>
            <div className="mt-6">
                <div className='container bg-orange-700 mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-1 transform transition-transform duration-300 hover:scale-110 hover:bg-gray-500'>
                    <Link href="/mostraprj">
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Projetos
                        </button>
                    </Link>
                </div>
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


export default TabelaPortifolio;