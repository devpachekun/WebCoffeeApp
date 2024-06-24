import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'
import RegisterComponent from '../Components/RegisterComponent';

function Register() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-[#6A6D69] flex flex-col justify-center items-center">
            <RegisterComponent />
        </main>
        <Footer />
    </div>
  )
}

export default Register
