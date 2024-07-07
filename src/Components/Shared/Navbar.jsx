import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(user?.rol);

  return (
    <nav className="bg-[#494D47] p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/logo_pachecos_coffee_shop.webp" alt="logo-coffee-shop" className="h-12" />
            <div className="text-white text-xl">Pacheco&#39;s Coffee Shop</div>
          </div>
          <div className="hidden lg:flex">
            <a href="/" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Inicio</a>
            <a href="/coffees" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Coffees</a>
            <a href="/acerca-de" className="py-2 px-2 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Acerca de</a>
            {user?.rol === 'ADMIN' && (
              <>
                <a href="/admin/gestion-coffees" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Gestión Coffees</a>
                <a href="/admin/gestion-clientes" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Clientes</a>
              </>
            )}
            {user ? (
              <a href="/" onClick={logout} className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Salir</a>
            ) : (
              <>
                <a href="/login" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Iniciar Sesión</a>
                <a href="/register" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Registrarse</a>
              </>
            )}
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4 text-center">
          <a href="/" className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Inicio</a>
          <a href="/coffees" className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Coffees</a>
          <a href="/acerca-de" className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Acerca de</a>
          {user?.rol === 'ADMIN' && (
            <>
              <a href="/admin/gestion-coffees" className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Gestión Coffees</a>
              <a href="/admin/gestion-clientes" className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Clientes</a>
            </>
          )}
          {user ? (
            <a href="/" onClick={logout} className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Salir</a>
          ) : (
            <>
              <a href="/login" className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Iniciar Sesión</a>
              <a href="/register" className="block py-2 px-4 text-white hover:bg-[#5C655C] transition duration-300">Registrarse</a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
