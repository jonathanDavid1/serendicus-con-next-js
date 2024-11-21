import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Importa los estilos CSS de Splide
import data from '../utils/data.json'

const ImageSlider = () => {
  const imagesOptions = [32,56,61,77]
  const nuevoArreglo = imagesOptions.map(numero => numero - 1);
  const images = nuevoArreglo.map(index => data[index].image);
  
  
  return (
    <div className="container mx-auto w-3/4"> {/* Centers the carousel */}
      <Splide options={{
        perPage: 1, 
        loop: true, 
        
      }}
             className="carousel md:w-3/4 md:mx-auto lg:w-[600px] lg:mx-auto"> {/* Responsive width */}
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image}
              alt={`Imagen ${index}`}
              className="w-full h-64 object-cover rounded-lg" // Image styles
            />
           
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageSlider;