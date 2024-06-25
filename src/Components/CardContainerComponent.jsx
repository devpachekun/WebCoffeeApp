import React from 'react';
import Card from './Card';

function CardContainer() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-7/8 border-2 border-[#49494999] border-opacity-60 rounded-lg overflow-hidden bg-[#494D47]">
              <div className="relative">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/card1.jpg" alt="blog" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">INFORMACIÓN</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-black">Nuestras Máquinas</h1>
                <p className="leading-relaxed mb-3 text-white">Descubre la excelencia en cada taza con nuestras máquinas de café de última generación. Diseñadas para extraer el máximo sabor y aroma.</p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Conocer más
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-white inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-7/8 border-2 border-[#49494999] border-opacity-60 rounded-lg overflow-hidden bg-[#494D47]">
              <div className="relative">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/card2.jpg" alt="blog" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">INFORMACIÓN</h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">Nuestros Granos</h1>
                <p className="leading-relaxed mb-3 text-white">Seleccionamos los mejores granos de café de todo el mundo para ofrecerte una taza rica y llena de matices. Cada grano es tostado a la perfección.</p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Ver catálogo
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-white inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-7/8 border-2 border-[#49494999] border-opacity-60 rounded-lg overflow-hidden bg-[#494D47]">
              <div className="relative">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/card3.jpg" alt="blog" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">INFORMACIÓN</h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">Sucursales</h1>
                <p className="leading-relaxed mb-3 text-white">Visítanos en nuestras sucursales distribuidas a lo largo de Chile, estamos cerca de ti para brindarte el mejor café y un servicio excepcional en cada visita.</p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Ubicaciones
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-white inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
