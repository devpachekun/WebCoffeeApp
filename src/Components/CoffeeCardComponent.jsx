import React from 'react';

function CoffeeCardComponent({ title, price, image64 }) {
  return (
    <div className="p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="coffee" className="object-cover object-center w-full h-full block" src={image64} />
      </a>
      <div className="mt-4 flex flex-col">
        <h2 className="text-white title-font text-lg font-medium">{title}</h2>
        <p className="mt-1 text-[#fff5b1]">$ {price}</p>
        <button className='bg-[#494D47] rounded-md p-1 text-white my-2'>Opiniones</button>
      </div>
    </div>
  );
}

export default CoffeeCardComponent;
