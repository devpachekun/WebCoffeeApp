import React from 'react';
import Card from './Card';



function CardContainer() {
  return (
    <div className="flex">
      <Card 
        Titulo="Nuestras Máquinas" 
        Descripcion="Descubre la excelencia en cada taza con nuestras máquinas de café de última generación, diseñadas para extraer el máximo sabor y aroma." 
        NombreBoton="Comprar Ahora" 
      />
      <Card 
        Titulo="Nuestros Granos" 
        Descripcion="Seleccionamos los mejores granos de café de todo el mundo para ofrecerte una taza rica y llena de matices. Cada grano es tostado a la perfección para resaltar su sabor único y ofrecerte una experiencia verdaderamente deliciosa." 
        NombreBoton="Ver Más" 
      />
      <Card 
        Titulo="Sucursales" 
        Descripcion="Visítanos en nuestras sucursales distribuidas a lo largo de Chile. Desde Santiago hasta Valparaíso, estamos cerca de ti para brindarte el mejor café y un servicio excepcional en cada visita." 
        NombreBoton="Explorar" 
      />
    </div>
  );
}

export default CardContainer;
