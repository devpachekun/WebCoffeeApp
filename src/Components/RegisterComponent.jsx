import React from 'react'

function RegisterComponent() {
  return (
    <div class="lg:w-2/6 md:w-1/2 bg-[#979f90] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
        <h2 class="text-white text-lg font-medium title-font mb-5">Formulario de Registro</h2>
        <div class="relative mb-4">
            <label for="username" class="leading-7 text-sm text-white">Username</label>
            <input type="text" id="username" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-white">Contraseña</label>
            <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
            <label for="confirm-password" class="leading-7 text-sm text-white">Confirmar Contraseña</label>
            <input type="password" id="confirm-password" name="confirm-password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Registrarme</button>
    </div>
  )
}

export default RegisterComponent
