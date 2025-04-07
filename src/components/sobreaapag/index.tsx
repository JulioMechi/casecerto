"use client"
import Image from 'next/image'; 
import React from "react";
import Link from "next/link";


const SobreaPag = () => {

    return (
        <div>
            <div 
                className="w-full md:w-auto flex justify-center items-center fade-in-animation"
                style={{ animation: 'fadeIn 1.0s ease-in-out' }}
            >
                <h1 
                    className="text-lg md:text-xl lg:text-2xl font-bold text-center text-white leading-tight tracking-wide drop-shadow-md hover:text-gray-500"  
                    style={{ paddingTop: '20px', textShadow: '2px 2px 4px black', WebkitTextStroke: '1px black' }}
                >
                    <Link href="/sobreaapag" className="text-white hover:text-gray-500">Propósito da aplicação</Link>
                </h1>
            </div>

            <div 
                className="w-full md:w-auto flex justify-center items-center fade-in-animation"
                style={{ animation: 'fadeIn 1.0s ease-in-out' }}
            > 
                <p 
                    className="text-lg md:text-lg lg:text-2xl font-bold text-center text-white leading-tight tracking-wide drop-shadow-md p-8 "  
                    style={{ paddingTop: '50px', textShadow: '2px 2px 4px black', WebkitTextStroke: '1px black' }}
                >
                    A aplicação tem como objetivo apresentar projetos realizados por Julio Cesar Nunes Mechi, além de apresentar alguns asectos e informaçãoe do mesmo no processo.
                </p>
            </div>

            <div 
                className="w-full md:w-auto flex justify-center items-center fade-in-animation"
                style={{ animation: 'fadeIn 1.0s ease-in-out' }}
            > 
                <a href="/" className="group text-lg md:text-lg lg:text-2xl font-bold text-center text-white leading-tight tracking-wide drop-shadow-md p-8"  
                    style={{ paddingTop: '50px', textShadow: '2px 2px 4px black', WebkitTextStroke: '1px black' }}
                >
                    Voltar ao início
                </a>
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
//Essa aqui explica o que é o site e propósitos, no caso é o componente principal que aparece nela
export default SobreaPag;

