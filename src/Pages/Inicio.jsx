import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import CardContainerComponent from '../Components/CardContainerComponent';

function Inicio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#7a7d79] flex flex-col justify-center items-center">
        <div>
          <img className='pt-8 h-48 w-full' src="/coffee-background.png" />
        </div>
        <CardContainerComponent />
      </main>
      <Footer />
    </div>
  )
}

export default Inicio