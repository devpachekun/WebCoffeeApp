import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import RegisterComponent from '../Components/RegisterComponent';

function Register() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow bg-black flex flex-col justify-center items-center relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
        >
          <source src="coffee-video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full">
          <RegisterComponent />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Register
