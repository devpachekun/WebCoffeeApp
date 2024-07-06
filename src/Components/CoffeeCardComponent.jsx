import React, { useState } from 'react';
import OpinionesComponent from './OpinionesComponent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CoffeeCardComponent({ title, price, image64, description, testimonials, idCoffee }) {
  const [showOpiniones, setShowOpiniones] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState("");

  const toggleOpiniones = () => {
    setShowOpiniones(!showOpiniones);
  };

  const handleTestimonialChange = (e) => {
    setNewTestimonial(e.target.value);
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('token');
    const API_URL = import.meta.env.VITE_API_URL;

    const newTestimonialData = {
      username: 'admin',  // Este valor puede ser dinámico dependiendo de tu lógica de autenticación
      testimonial: newTestimonial,
      idCoffee: idCoffee
    };

    try {

      console.log(newTestimonialData)

      const response = await fetch(`${API_URL}/api/testimonials/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(newTestimonialData)
      });

      if (response.ok) {
        const addedTestimonial = await response.json();
        toast.success('Testimonio enviado correctamente');
        // Opcional: puedes actualizar el estado de los testimonios aquí
      } else {
        console.error('Error al enviar el testimonio:', response.statusText);
        toast.error('Ha ocurrido un error al enviar el testimonio');
      }
    } catch (error) {
      console.error('ERROR al enviar el testimonio:', error);
      toast.error('Ha ocurrido un error al enviar el testimonio');
    }

    setNewTestimonial("");
  };

  return (
    <div className="p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="coffee" className="object-cover object-center w-full h-full block" src={image64} />
      </a>
      <div className="mt-4 flex flex-col">
        <h2 className="text-white title-font text-lg font-medium">{title}</h2>
        <p>{description}</p>
        <span className="mt-1 text-[#fff5b1]">$ {price}</span>
        <button className='bg-[#494D47] rounded-md p-1 text-white my-2' onClick={toggleOpiniones}>
          Opiniones
        </button>
      </div>

      {showOpiniones && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-[#494D47] rounded-lg p-4 max-w-lg w-full mx-4">
            <button
              className="absolute top-2 right-2 px-2 text-white hover:text-gray-900"
              onClick={toggleOpiniones}
            >
              X
            </button>
            <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonios</h1>
            <div className='p-2'>
              <form className='flex gap-2' onSubmit={handleTestimonialSubmit}>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder='Escriba su reseña...'
                  value={newTestimonial}
                  onChange={handleTestimonialChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button type="submit" className='bg-white px-2 rounded-lg'>Enviar</button>
              </form>
            </div>
            <OpinionesComponent 
              testimonials={testimonials}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CoffeeCardComponent;
