"use client"
import Image from 'next/image'; 
import React from "react";
import Link from "next/link";


const BotaoImagem = () => {

    return (
        <div className="bg-[url(/images/bambuufundo.webp)] backdrop-opacity-50 min-h-screen md:min-h-[40vh] pb-10" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
            <div className="w-full md:w-auto flex justify-center items-center">
            <h1 //Pagina para botão, uma div maior em volta das menores, os bg para background, url para vir a imagem em public
            //Style pois precisei criar uma animação, lg para lenght, md para responsividade, cor do texto, grossura, sombra, hover para animação ao toque
                className="text-lg md:text-xl lg:text-2xl font-bold text-center text-white leading-tight tracking-wide drop-shadow-md hover:text-gray-500"  
                style={{ paddingTop: '5px', textShadow: '2px 2px 4px black', WebkitTextStroke: '1px black' }}
            >
                <Link href="/sobreaapag" className="text-white hover:text-gray-500">Sobre a Página</Link> 
            </h1>
            </div>
            <div className="w-full md:w-auto flex justify-center items-center drop-shadow-xl contrast-120" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '60vh', paddingTop: '50px' }}>
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
            <div className="w-full md:w-auto flex justify-center items-center fade-in-animation" style={{ marginTop: '-50px' }}>    
                <h1 
                    className="text-lg md:text-lg lg:text-2xl font-bold text-center text-white leading-tight tracking-wide drop-shadow-md py-"  
                    style={{ textShadow: '2px 2px 4px black', WebkitTextStroke: '1px black' }}
                >
                    Clique no panda para avançar!
                </h1>
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

export default BotaoImagem;

// Não estou conseguindo comentar lá em cima, mas enfim. A imagem do panda é um button, a animate é padrão do tailwind
// e o hover para mudar ao toque, url para ir a outra pag e as outras coisas são mais para dimenção, também precisei declarar
// a animação de fade para usar em styles.