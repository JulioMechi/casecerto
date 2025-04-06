'use client'
import React from "react";
import Image from 'next/image'; 
import Link from "next/link";


const SobreMim: React.FC = () => {
return (
    <div className="container mx-auto w-90 md:w-200 h-120 md:h-130 px-4 py-2 bg-gray-300 mt-6 rounded-md shadow-md border-double" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
            <div className = 'container bg mx-auto y-200 w-40 md:w-40 h-50 md:h-50 px-4 py-1 mt-1 rounded-md shadow-xl border border-solid mb-4'>
                    <Image src="/images/imagemminha.jpg" alt="Portifólio" width={150} height={100} className="mx-auto my-auto mt-2 mb-2 " />
            </div>
            <div className = 'container bg mx-auto y-200 w-80 md:w-80 h-50 md:h-10 px-6 py-4 mt-1 rounded-md shadow-xl border border-solid  '>
                <h1 
                    className="text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{WebkitTextStroke: '1px black' }}
                >
                    Sobre Mim
                </h1>
            </div>
            <div className="mt-4">
                <div className='container bg-orange-700 mx-auto y-200 w-80 md:w-140 h-40 md:h-40 px-6 py-4 rounded-md shadow-xl border-3 border-dashed mb-8'>
                    <h1
                    className="text-base md:text-sm font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20 text-justify"  
                    style={{WebkitTextStroke: '0.2px black' }}
                    >
                        Olá! Me chamo Julio Cesar Nunes Mechi e tenho 18 anos, nascido no dia 02/05/2006. 
                        Morei toda a minha vida em São Paulo, completando meu ensino médio e agora cursando minha facudade 
                        no local. Atualmente, estou cursando ciência da computação no Mackenzie, além de participar da empresa
                         junior EJEM como Trainee. Para mais informações, por favor requisitar através de "contatos"
                    </h1>
                        
                </div>
                <div className="mt-4 flex justify-center items-center">
                    <audio controls>
                        <source src="/audio/audioapresenta.mp4" type="audio/mpeg" />
                    </audio>
                </div>
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
);
};


export default SobreMim;