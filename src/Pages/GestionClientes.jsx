import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import GestionClienteComponent from '../Components/GestionClienteComponent';

function GestionClientes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#6A6D69] flex justify-center items-center">
        <div className='flex-grow'>
          <GestionClienteComponent />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default GestionClientes