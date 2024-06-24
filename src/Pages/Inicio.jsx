import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import CardContainerComponent from '../Components/CardContainerComponent';

function Inicio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#6A6D69] flex flex-col justify-center items-center relative">
        <div className="relative w-full h-full">
          <img className='h-auto w-full object-cover' src="/coffee-background2.png" />
          <div className="bg-black opacity-80 absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
            <h1 className="text-8xl font-bold text-[#DFDFDF]">Pacheco's Coffee Shop</h1>
            <p className="text-xl text-[#C7C7C7]">El verdadero sabor del Café</p>
          </div>
        </div>
        <div className="bg-[#979f90] p-4 w-full h-20 flex items-center justify-center">
          Hola
        </div>
        <CardContainerComponent />
      </main>
      <Footer />
    </div>
  )
}

export default Inicio
