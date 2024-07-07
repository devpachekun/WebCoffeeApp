import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

function AcercaDe() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow bg-[#6a6d69] text-white flex flex-col justify-center items-center relative p-6">
        <h1 className="text-4xl font-bold mb-8">Acerca de</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#494D47] text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#bfb7a5]">Nuestra Historia</h2>
            <p className='text-white'>
              Pacheco's Coffee Shop fue fundado en 2020 con la misión de ofrecer el mejor café de la región, 
              en un ambiente acogedor y familiar. Nuestros granos son seleccionados cuidadosamente de las 
              mejores fincas y tostados con precisión para asegurar un sabor excepcional en cada taza.
            </p>
          </div>
          
          <div className="bg-[#494D47] text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#bfb7a5]">Misión</h2>
            <p className='text-white'>
              Nuestra misión es proporcionar una experiencia única a nuestros clientes, ofreciendo café de 
              alta calidad y un servicio excepcional en un entorno cálido y acogedor.
            </p>
          </div>
          
          <div className="bg-[#494D47] text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#bfb7a5]">Visión</h2>
            <p className='text-white'>
              Nos esforzamos por ser el referente en el mercado del café, reconocidos por nuestra dedicación a la 
              calidad, la sostenibilidad y la innovación en cada aspecto de nuestro negocio.
            </p>
          </div>
          
          <div className="bg-[#494D47] text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#bfb7a5]">Nuestros Valores</h2>
            <ul className="list-disc list-inside text-white">
              <li>Calidad</li>
              <li>Sostenibilidad</li>
              <li>Innovación</li>
              <li>Comunicación</li>
              <li>Compromiso</li>
            </ul>
          </div>
          
          <div className="bg-[#494D47] text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#bfb7a5]">Nuestro Equipo</h2>
            <p className='text-white'>
              Contamos con un equipo de baristas apasionados por el café y dedicados a brindar la mejor experiencia 
              posible a nuestros clientes. Cada miembro de nuestro equipo es cuidadosamente entrenado para garantizar 
              que cada taza de café sea perfecta.
            </p>
          </div>
          
          <div className="bg-[#494D47] text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#bfb7a5]">Contáctanos</h2>
            <p className='text-white'>
              Nos encantaría saber de ti. Puedes visitarnos en nuestra tienda o contactarnos a través de nuestras 
              redes sociales o correo electrónico.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AcercaDe;
