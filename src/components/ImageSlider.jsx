import { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change image every 3 seconds

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
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStart, touchEnd]);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div ref={sliderRef} className="relative">
      {images.map((image, index) => (
        <div key={index} className={index === current ? 'block' : 'hidden'}>
          <img 
            src={image} 
            alt={`Slide ${index}`} 
            className="w-full md:w-1/2 lg:w-1/3 mx-auto px-4 md:px-0" 
          />
        </div>
      ))}
      <button 
        onClick={prevSlide} 
        className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
      >
        &lt;
      </button>
      <button 
        onClick={nextSlide} 
        className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
