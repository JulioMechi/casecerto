import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-orange-700 text-white py-4 px-6 flex flex-col justify-center items-center shadow-md">
      
      <div className="flex flex-row items-center space-x-4 w-full">
        <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
        
      </div>
      <h1 className="text-xl font-semibold text-white hover:text-gray-400 transition-colors duration-300" style={{ textShadow: "2px 2px 4px black" }}>
        Sobre o Julio
      </h1>
    </nav>
  );
};

export default Navbar;
