import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyCardA = ({ property }) => {
  const { id, title, price, images, description } = property;

  return (
    <>
    <div className="max-w-xs mx-auto my-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/alquileres/${id}`}>
        
          <Image
            src={images[1]}
            alt={title}
            width={300}
            height={200}
            className="rounded-t-lg w-full object-cover"
          />
        
      </Link>
      <div className="p-4">
        <Link href={`/alquileres/${id}`}>
          
            <h5 className="text-gray-900 font-bold text-lg tracking-tight dark:text-white">{title}</h5>
          
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-400">{price}</span>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
    </>
  );
};

export default PropertyCardA;