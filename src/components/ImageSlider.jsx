import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Change image every 4 seconds for a more relaxed premium feel

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      if (touchStart - touchEnd > 50) {
        nextSlide();
      }

      if (touchStart - touchEnd < -50) {
        prevSlide();
      }

      setTouchStart(null);
      setTouchEnd(null);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchmove', handleTouchMove);
      slider.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchmove', handleTouchMove);
        slider.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [touchStart, touchEnd]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div ref={sliderRef} className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md bg-white/5 p-2 md:p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(92,207,230,0.3)]">
      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden">
        {images.map((image, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={image.startsWith('/') ? image : `/${image}`}
                alt={`Veredas California y Corozal - Slide ${index}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-11 flex items-end p-6">
                <span className="text-white font-sans text-sm md:text-base font-medium tracking-wide bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Imagen {index + 1} de {images.length}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 shadow-lg hover:bg-lightBlue hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 z-20 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 shadow-lg hover:bg-lightBlue hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-6 bg-lightBlue' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

