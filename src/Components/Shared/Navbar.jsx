import React from 'react';
import { LoginContext } from '../../App';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const navigate = useNavigate();
  const userRole = getUserRole();

  function getUserRole() {
    return localStorage.getItem('rol');  // Obtiene el rol del usuario del localStorage
  }

  const Logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-[#494D47] p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/logo_pachecos_coffee_shop.webp" alt="logo-coffee-shop" className="h-12" />
            <div className="text-white text-xl">Pacheco's Coffee Shop</div>
          </div>
          <div>
            <a href="/" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Inicio</a>
            <a href="#" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Coffee</a>
            <a href="#" className="py-2 px-2 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Acerca de</a>
            {userRole === 'ADMIN' && (
              <>
              <a href="/admin/gestion-coffees" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Gestión Coffees</a>
              <a href="/admin/gestion-clientes" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Clientes</a>
              </>
            )}
            {isLoggedIn ? (
              <a href="/" onClick={Logout} className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">
                Salir
              </a>
            ) : (
              <>
              <a href="/login" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Iniciar Sesión</a>
              <a href="/register" className="py-2 px-2 mx-1 font-medium text-white rounded hover:bg-[#5C655C] hover:text-white transition duration-300">Registrarse</a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
