import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-orange-700 text-white py-4 px-6 flex flex-col justify-center items-center shadow-md">
      
      <div className="flex flex-row items-center space-x-4 w-full">
        <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
        
      </div>
      <h1 className="p-2 text-xl md:text-xl font-bold text-center text-white drop-shadow-xl flex justify-center items-center h-full text-shadow-lg/20"  
                style={{ WebkitTextStroke: '1px black' }}>
        Sobre o Julio
      </h1>
    </nav>
  );
};

export default Navbar;
