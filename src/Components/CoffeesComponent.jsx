import React, { useState, useEffect } from 'react';
import CoffeeCardComponent from './CoffeeCardComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CoffeesComponent() {
  const [coffees, setCoffees] = useState([]);
  const accessToken = localStorage.getItem('access');
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function getCoffees() {

      console.log(API_URL)
      try {
        const response = await fetch(`${API_URL}/api/coffee/`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setCoffees(data);
      } catch (error) {
        console.error('ERROR al obtener los Coffees:', error);
      }
    }

    getCoffees();
  }, [API_URL, accessToken]);


  return (
    <div className='flex justify-center'>
      <div className='w-full'>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {coffees.map((coffee) => (
                  
                  <React.Fragment key={coffee.idCoffee}>
                    <CoffeeCardComponent
                      title={coffee.name}
                      price={coffee.price}
                      image64={coffee.image64} // Asegúrate de que el nombre coincida con el campo recibido del backend
                      description={coffee.description}
                  />
                  </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CoffeesComponent;
