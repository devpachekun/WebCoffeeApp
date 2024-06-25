import React from 'react'

function GestionClienteComponent() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 m-24 p-8">
        <div className="col-span-1 m-2">
            <div className="w-full bg-[#494D47] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">Editar Cliente</h2>
            <div className="relative mb-4">
                <label htmlFor="coffee-name" className="leading-7 text-sm text-white">Username</label>
                <input type="text" id="coffee-name" name="coffee-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="coffee-description" className="leading-7 text-sm text-white">Email</label>
                <input type="text" id="coffee-description" name="coffee-description" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Crear</button>
        </div>
        </div>
        <div className="col-span-2 flex-grow m-2 bg-[#494D47] rounded-lg border-2 border-[#494D47]">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>ID</th>
                        <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>Username</th>
                        <th className='bg-[#494D47] p-2 text-white'>Correo</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr className='bg-[#6A6D69] hover:bg-[#7D817C]'>
                        <td>1</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                    </tr>
                    <tr className='hover:bg-[#5B5F59]'>
                        <td>2</td>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                    </tr>
                    <tr className='bg-[#6A6D69] hover:bg-[#7D817C]'>
                        <td>3</td>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default GestionClienteComponent