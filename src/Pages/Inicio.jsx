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
            <h1 className="text-8xl font-bold text-[#DFDFDF]">Pacheco's Coffee Shop</h1>
            <p className="text-xl text-[#C7C7C7]">El verdadero sabor del Café</p>
          </div>
        </div>
        <div className="bg-[#494D47] p-8 w-full h-auto flex flex-col">
          <div className='flex justify-center items-center mb-2'>
            <h3 className='text-3xl text-white font-bold'>POTENCIADO POR</h3>
          </div>
          <div className='flex justify-evenly items-center mt-2'>
            <img className='h-auto w-32 object-cover' src="/cruzeiro_coffee.webp" />
            <img className='h-auto w-14 object-cover' src="/marley_coffee.webp" />
            <img className='h-auto w-32 object-cover' src="/nescafe_coffee.webp" />
            <img className='h-auto w-24 object-cover' src="/native_coffee.webp" />
          </div>
        </div>
        <CardContainerComponent />
      </main>
      <Footer />
    </div>
  )
}

export default Inicio
