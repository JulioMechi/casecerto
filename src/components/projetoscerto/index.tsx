'use client'
import React from "react";
import Image from 'next/image';     
import Link from "next/link";

const ProjetosCerto: React.FC = () => {
return (
    <div className="container w-full md:w-full h-screen overflow-y-auto" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
        <div className="container bg-orange-600 w-full md:w-3/4 h-auto md:h-40 flex justify-center items-center mx-auto mt-10 relative rounded-sm">
            <div className="container w-1/4 md:w-1/8 h-8/10 md:h-8/10 absolute left-1/124 top-1/16 rounded-sm flex justify-center items-center">
                <Link href="/inicio">
                    <button className="group">
                        <Image src="/images/flutterflow.jpg" alt="Flutterflowlogo" width={120} height={120} />
                    </button>
                </Link>
            </div>
            <div className="container bg-gray-300 w-1/3 md:w-1/4 h-auto md:h-5/10 absolute left-2/10 top-1/4 rounded-sm flex justify-center items-center p-4">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{ WebkitTextStroke: '1px black' }}> Nome: App em Flutterflow </h1>
            </div>
            <div className="container bg-gray-300 w-1/3 md:w-45/100 h-auto md:h-5/10 absolute left-2/4 top-1/4 rounded-sm flex justify-center items-center">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{ WebkitTextStroke: '1px black' }}> Descrição: Uso de Flutterflow para construir um app de cadastro para uma empresa</h1>
            </div>
        </div>

        <div className="container bg-orange-600 w-full md:w-3/4 h-auto md:h-40 flex justify-center items-center mx-auto mt-10 relative rounded-sm">
            <div className="container bg-white w-1/4 md:w-1/9 h-8/10 md:h-8/10 absolute left-1/124 top-1/16 rounded-sm flex justify-center items-center">
                <Link href="/inicio">
                    <button className="group">
                        <Image src="/images/django.png" alt="Flutterflowlogo" width={120} height={120} />
                    </button>
                </Link>
            </div>
            <div className="container bg-gray-300 w-1/3 md:w-1/4 h-auto md:h-5/10 absolute left-2/10 top-1/4 rounded-sm flex justify-center items-center p-4">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{ WebkitTextStroke: '1px black' }}> Nome: Banco de dados em Django </h1>
            </div>
            <div className="container bg-gray-300 w-1/3 md:w-45/100 h-auto md:h-5/10 absolute left-2/4 top-1/4 rounded-sm flex justify-center items-center">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{ WebkitTextStroke: '1px black' }}> Descrição: Uso de Django para formar uma aplicação para guardar e retornar dados</h1>
            </div>
        </div>

        <div className="container bg-orange-600 w-full md:w-3/4 h-auto md:h-40 flex justify-center items-center mx-auto mt-10 relative rounded-sm">
            <div className="container bg-white w-1/4 md:w-1/8 h-8/10 md:h-8/10 absolute left-1/124 top-1/16 rounded-sm flex justify-center items-center">
                <Link href="/inicio">
                    <button className="group">
                        <Image src="/images/next-js-logo.webp" alt="Flutterflowlogo" width={120} height={120} />
                    </button>
                </Link>
            </div>
            <div className="container bg-gray-300 w-1/3 md:w-1/4 h-auto md:h-5/10 absolute left-2/10 top-1/4 rounded-sm flex justify-center items-center p-4">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{ WebkitTextStroke: '1px black' }}> Nome: Site em Next-JS </h1>
            </div>
            <div className="container bg-gray-300 w-1/3 md:w-45/100 h-auto md:h-5/10 absolute left-2/4 top-1/4 rounded-sm flex justify-center items-center">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                    style={{ WebkitTextStroke: '1px black' }}> Descrição: Uso de NEXT para formar esse site de portifólio</h1>
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

export default ProjetosCerto;


