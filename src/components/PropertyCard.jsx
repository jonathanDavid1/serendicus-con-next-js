import React from 'react';
import Image from 'next/image';

const PropertyCard = ({ property }) => {
  const { id, title, price, image, description } = property;

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href={`/properties/${id}`}>
        <Image
          src={image}
          alt={title}
          width={300} // Replace with your actual image width
          height={200} // Replace with your actual image height
          className="rounded-t-lg w-full object-cover"
        />
      </a>
      <div className="p-4">
        <a href={`/properties/${id}`}>
          <h5 className="text-gray-900 font-bold text-lg tracking-tight dark:text-white">{title}</h5>
        </a>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-400">{price}</span>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;