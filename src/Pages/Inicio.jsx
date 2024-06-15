import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'

function Inicio() {
  return (
    <>
      <Navbar />
      <main className="container-xl bg-[#6C6061] p-4">
        <h1 className="text-4xl font-bold text-center my-8">Pacheco's Coffee Shop</h1>
        <p className="text-center text-gray-700">
          Proximamente, una nueva franquicia :v
        </p>
      </main>
      <Footer />
    </>
  )
}

export default Inicio