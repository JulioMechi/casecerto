"use client"
import Image from 'next/image'; 
import React from "react";
import Link from "next/link";


const BotaoImagem = () => {

    return (
        <div>
            <div className="w-full md:w-auto flex justify-center items-center">
                <h1 
                    className="text-lg md:text-xl lg:text-2xl font-bold text-center text-white leading-tight tracking-wide drop-shadow-md hover:text-gray-500"  
                    style={{ paddingTop: '10px', textShadow: '2px 2px 4px black', WebkitTextStroke: '1px black' }}
                >

                    <Link href="/sobreaapag" className="text-white hover:text-gray-500">Sobre a Página</Link>
            
                </h1>
            </div>
            <div className="w-full md:w-auto flex justify-center items-center drop-shadow-xl contrast-120 ]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '70vh', paddingTop: '60px' }}>
                <Link href="/inicio">
                    <button className="group">
                        <Image 
                            src="/images/image-removebg-preview.png" 
                            alt="Panda Vermelho" 
                            width={0} 
                            height={0} 
                            sizes="(max-width: 768px) 150px, (max-width: 1200px) 250px, 600px" 
                            className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110 animate-bounce" 
                        />  
                    </button>
                </Link>
            </div>
            <div className="w-full md:w-auto flex justify-center items-center fade-in-animation" style={{ marginTop: '-150px' }}>    
                <h1 
                    className="text-lg md:text-lg lg:text-2xl font-bold text-center text-white leading-tight tracking-wide drop-shadow-md py- "  
                    style={{ textShadow: '2px 2px 4px black', WebkitTextStroke: '1px black' }}
                >
                    Clique no panda para avançar!
                </h1>
            </div>
        </div>
    );
};

export default BotaoImagem;

