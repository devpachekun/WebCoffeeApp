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
          <img className='h-auto w-full object-cover' src="/coffee-background2.webp" />
          <div className="bg-black opacity-80 absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
            <h1 className="xl:text-8xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-bold text-[#DFDFDF]">Pacheco's Coffee Shop</h1>
            <p className="xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-sm text-[#C7C7C7]">El verdadero sabor del Café</p>
          </div>
        </div>
        <div className="bg-[#494D47] p-8 w-full h-auto flex flex-col">
          <div className='flex justify-center items-center mb-2'>
            <h3 className='sm:text-2xl text-xl text-white font-bold'>POTENCIADO POR</h3>
          </div>
          <div className='flex justify-evenly items-center mt-2'>
            <img className='h-auto xl:w-32 lg:w-32 md:w-32 sm:w-32 w-24 object-cover' src="/cruzeiro_coffee.webp" />
            <img className='h-auto xl:w-14 lg:w-14 md:w-14 sm:w-14 w-12 object-cover' src="/marley_coffee.webp" />
            <img className='h-auto xl:w-32 lg:w-32 md:w-32 sm:w-32 w-24 object-cover' src="/nescafe_coffee.webp" />
            <img className='h-auto xl:w-24 lg:w-24 md:w-24 sm:w-24 w-20 object-cover' src="/native_coffee.webp" />
          </div>
        </div>
        <CardContainerComponent />
      </main>
      <Footer />
    </div>
  )
}

export default Inicio
