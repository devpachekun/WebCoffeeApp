import React from 'react';
import { LoginContext } from '../../App';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-[#979f90] p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/logo_pachecos_coffee_shop.png" alt="Club de Tenis Graneros" className="h-12" />
            <div className="text-white text-xl">Pacheco's Coffee Shop</div>
          </div>
          <div>
            <a href="/" className="py-2 px-2 mx-2 font-medium text-white rounded hover:bg-[#838E83] hover:text-white transition duration-300">Inicio</a>
            <a href="#" className="py-2 px-2 font-medium text-white rounded hover:bg-[#838E83] hover:text-white transition duration-300">Coffee</a>
            <a href="#" className="py-2 px-2 font-medium text-white rounded hover:bg-[#838E83] hover:text-white transition duration-300">Acerca de</a>
            {isLoggedIn ? (
              <a onClick={Logout} className="py-2 px-2 font-medium text-white rounded hover:bg-[#838E83] hover:text-white transition duration-300">
                Logout
              </a>
            ) : (
              <>
              <a href="/login" className="py-2 px-2 font-medium text-white rounded hover:bg-[#838E83] hover:text-white transition duration-300">Iniciar Sesión</a>
              <a href="/register" className="py-2 px-2 font-medium text-white rounded hover:bg-[#838E83] hover:text-white transition duration-300">Registrarse</a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
