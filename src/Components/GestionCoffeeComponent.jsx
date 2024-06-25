import React from 'react'

function GestionCoffeesComponent() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 m-24 p-8">
        <div className="col-span-1 m-2">
            <div className="w-full bg-[#494D47] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">Nuevo Coffee</h2>
            <div className="relative mb-4">
                <label htmlFor="coffee-name" className="leading-7 text-sm text-white">Nombre del Coffee</label>
                <input type="text" id="coffee-name" name="coffee-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="coffee-description" className="leading-7 text-sm text-white">Descripción</label>
                <input type="text" id="coffee-description" name="coffee-description" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="coffee-price" className="leading-7 text-sm text-white">Precio</label>
                <input type="text" id="coffee-price" name="coffee-price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="coffee-image" className="leading-7 text-sm text-white">Foto</label>
                <input type="file" id="coffee-image" name="coffee-image" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' accept="image/*" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Crear</button>
        </div>
        </div>
        <div className="col-span-2 flex-grow m-2 bg-[#494D47] rounded-lg border-2 border-[#494D47]">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>ID</th>
                        <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>Nombre</th>
                        <th className='bg-[#494D47] p-2 text-white'>Descripción</th>
                        <th className='bg-[#494D47] p-2 rounded-tr-lg text-white'>Precio</th>
                        <th className='bg-[#494D47] p-2 rounded-tr-lg text-white'>Acciones</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr className='bg-[#6A6D69]'>
                        <td>1</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        <td>
                            <button className='bg-white border-2 border-[#000]'>Editar</button>
                            <button className='bg-white border-2 border-[#000]'>Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                        <td>
                            <button className='bg-white border-2 border-[#000]'>Editar</button>
                            <button className='bg-white border-2 border-[#000]'>Borrar</button>
                        </td>
                    </tr>
                    <tr className='bg-[#6A6D69]'>
                        <td>3</td>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        <td>
                            <button className='bg-white border-2 border-[#000]'>Editar</button>
                            <button className='bg-white border-2 border-[#000]'>Borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default GestionCoffeesComponent