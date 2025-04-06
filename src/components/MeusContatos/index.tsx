'use client'
import React from "react";
import Image from 'next/image';     
import Link from "next/link";

const Contato: React.FC = () => {
return (
    <div className="container w-full md:w-full h-screen overflow-y-auto" style={{ animation: 'fadeIn 1.0s ease-in-out' }}>
        <div className="container bg-orange-600 w-full md:w-3/4 h-auto md:h-40 flex justify-center items-center mx-auto mt-10 relative rounded-sm">
            <div className="container w-1/4 md:w-1/8 h-8/10 md:h-8/10 absolute left-1/124 top-1/16 rounded-sm flex justify-center items-center">
                <Link href="/inicio">
                    <button className="group">
                        <Image src="/images/WhatsApp.svg.webp" alt="WPP" width={120} height={120} />
                    </button>
                </Link>
            </div>
            <div className="container bg-green-500 w-1/3 md:w-1/4 h-auto md:h-5/10 absolute left-2/10 top-1/4 rounded-sm flex justify-center items-center p-4 animate-pulse transform transition-transform duration-300 hover:scale-110 hover:bg-green-400">
                <Link href="https://wa.me/5511963618363">
                    <button> 
                        <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                        style={{ WebkitTextStroke: '1px black' }}> WhatsApp </h1>
                    </button>
                </Link>           
            </div>
            <div className="container bg-green-500 w-1/3 md:w-45/100 h-auto md:h-5/10 absolute left-2/4 top-1/4 rounded-sm flex justify-center items-center">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                style={{ WebkitTextStroke: '1px black' }}> 11-96361-8363</h1>
            </div>
        </div>

        <div className="container bg-orange-600 w-full md:w-3/4 h-auto md:h-40 flex justify-center items-center mx-auto mt-10 relative rounded-sm">
            <div className="container w-1/4 md:w-1/8 h-8/10 md:h-8/10 absolute left-1/124 top-1/16 rounded-sm flex justify-center items-center">
                <Link href="/inicio">
                    <button className="group">
                        <Image src="/images/linkedin.webp" alt="linkedin" width={120} height={120} />
                    </button>
                </Link>
            </div>
            <div className="container bg-blue-700 w-1/3 md:w-1/4 h-auto md:h-5/10 absolute left-2/10 top-1/4 rounded-sm flex justify-center items-center p-4 animate-pulse transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600">
                <Link href="https://www.linkedin.com/in/julio-cesar-nunes-mechi-8629b135a/">
                    <button> 
                        <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                        style={{ WebkitTextStroke: '1px black' }}> Linkedin </h1>
                    </button>
                </Link>           
            </div>
            <div className="container bg-blue-700 w-1/3 md:w-45/100 h-auto md:h-5/10 absolute left-2/4 top-1/4 rounded-sm flex justify-center items-center">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                style={{ WebkitTextStroke: '1px black' }}> https://www.linkedin.com/in/julio-cesar-nunes-mechi-8629b135a/</h1>
            </div>
        </div>

        <div className="container bg-orange-600 w-full md:w-3/4 h-auto md:h-40 flex justify-center items-center mx-auto mt-10 relative rounded-sm">
            <div className="container bg-white w-1/4 md:w-1/8 h-8/10 md:h-8/10 absolute left-1/124 top-1/16 rounded-sm flex justify-center items-center">
                <Link href="/inicio">
                    <button className="group">
                        <Image src="/images/gmail.png" alt="gmail" width={120} height={120} />
                    </button>
                </Link>
            </div>
            <div className="container bg-white w-1/3 md:w-1/4 h-auto md:h-5/10 absolute left-2/10 top-1/4 rounded-sm flex justify-center items-center p-4 animate-pulse transform transition-transform duration-300 hover:scale-110 hover:bg-gray-100">
                <Link href="mailto:juliomechi@gmail.com">
                    <button> 
                        <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                        style={{ WebkitTextStroke: '1px black' }}> Email </h1>
                    </button>
                </Link>           
            </div>
            <div className="container bg-white w-1/3 md:w-45/100 h-auto md:h-5/10 absolute left-2/4 top-1/4 rounded-sm flex justify-center items-center">
                <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                style={{ WebkitTextStroke: '1px black' }}> juliomechi@gmail.com</h1>
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

export default Contato;


