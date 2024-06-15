import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl">Pacheco's Coffee Shop</div>
          <div>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Inicio</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Coffee</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Acerca de</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Iniciar Sesión</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Registrarse</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
