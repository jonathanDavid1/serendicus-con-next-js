import React from 'react';

const BotonMap = ({ lat, lng }) => {
  const handleClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.location.href = url;
  };

  return (
    <button onClick={handleClick} 
    className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 mb-6 rounded">
      Ver en google maps
    </button>
  );
};

export default BotonMap;