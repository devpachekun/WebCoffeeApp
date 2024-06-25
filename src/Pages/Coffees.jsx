import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import CoffeesComponent from '../Components/CoffeesComponent'

function Coffees() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow bg-[#6A6D69] flex justify-center items-center">
      <div className='flex-grow'>
        <CoffeesComponent />
      </div>
    </main>
    <Footer />
  </div>
  )
}

export default Coffees