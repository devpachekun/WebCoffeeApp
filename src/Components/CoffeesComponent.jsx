import React, { useState, useEffect } from 'react';
import CoffeeCardComponent from './CoffeeCardComponent';

function CoffeesComponent() {
  const [coffees, setCoffees] = useState([]);
  const accessToken = localStorage.getItem('access');
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function getCoffees() {
      try {
        const response = await fetch(`${API_URL}/get-coffees/`, {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {coffees.map((coffee) => (
                <CoffeeCardComponent
                  key={coffee.id_coffee}
                  title={coffee.name}
                  price={coffee.price}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CoffeesComponent;
