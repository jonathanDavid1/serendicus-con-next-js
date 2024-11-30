import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Importa los estilos CSS de Splide
import lugares from '../utils/lugares.json'

const ImageSlider = () => {


  const images = lugares.map(lugar => lugar.image);
  
  
  return (
    <div className="container mx-auto w-3/4"> {/* Centers the carousel */}
      <Splide options={{
        perPage: 1, 
        loop: true, 
        autoplay: true,
        interval: 2500,
        speed: 500,
        type: 'fade'
        
      }}
             className="carousel md:w-3/4 md:mx-auto lg:w-[600px] lg:mx-auto"> {/* Responsive width */}
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image}
              alt={`Imagen ${index}`}
              className=" object-cover rounded-lg" // Image styles
            />
           
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageSlider;