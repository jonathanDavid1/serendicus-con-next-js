import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Importa los estilos CSS de Splide

const ImageSlider = ({ images }) => {
  return (
    <div className="container mx-auto"> {/* Centers the carousel */}
      <Splide options={{
        perPage: 1, // Show only 1 image at a time
        loop: true, // Enable infinite looping
        // Add other Splide options if needed
      }}
             className="carousel md:w-3/4 lg:w-1/2"> {/* Responsive width */}
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