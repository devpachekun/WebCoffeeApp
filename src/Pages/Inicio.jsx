import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import CardContainer from '../Components/CardContainer';

function Inicio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#7a7d79] flex flex-col justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold text-center">Pacheco's Coffee Shop</h1>
          <p className="text-center text-gray-700">
            Proximamente, una nueva franquicia :v
          </p>
        </div>
        <div>
          <CardContainer />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Inicio