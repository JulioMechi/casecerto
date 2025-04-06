'use client';
import React from "react";
import Image from 'next/image'; 
import Link from "next/link";


const Formacao: React.FC = () => {
return (
   
        <div className="container mx-auto w-150 md:w-300 h-180 md:h-130 px-4 py-2 bg-gray-300 bg-opacity-75 mt-6 rounded-md shadow-md border-double bg-[url(/images/mackenziecapa.jpg)] backdrop-opacity-50" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                <div className="container bg-gray-300 bg-opacity-30 mx-auto y-200 w-40 md:w-40 h-50 md:h-50 px-4 py-1 mt-1 rounded-md shadow-xl border border-solid mb-4 shadow-xl drop-shadow-xl" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                        <Image src="/images/Mackenzie_M.svg.png" alt="PortifólMackenio" width={150} height={100} className="mx-auto my-auto mt-2 mb-2" />
                </div>
                <div className = 'container bg mx-auto y-200 w-80 md:w-80 h-14 md:h-14 px-6 py-4 mt-1 rounded-md shadow-xl border border-solid drop-shadow-xl' style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                    <h1 
                        className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                        style={{WebkitTextStroke: '1px black' }}
                    >
                        Universidade Presbiteriana Mackenzie
                    </h1>
                </div>
                <div className="mt-12">
                    <div className='container bg-orange-700 mx-auto y-200 w-120 md:w-120 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-8 shadow-xl' style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Curso: Ciência da Computação
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <div className='container bg-orange-700 mx-auto y-200 w-120 md:w-120 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-1' style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Semestre atual: 1º Semestre
                        </button>
                    </div>
                </div>
                <div className="mt-6">
                    <div className='container bg-orange-700 mx-auto y-200 w-120 md:w-120 h-50 md:h-10 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-1' style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
                        <button 
                            className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                            style={{ WebkitTextStroke: '1px black' }}
                        > Previsão de formatura: 2029
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


export default Formacao;