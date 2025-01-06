import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
  const { id, title, price, images, image, description } = property;

  return (
    <>
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 font-mystery">
      <Link href={`/ventas/${id}`}>
        
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            style={{ width: "440px", height: "380px", objectFit: "cover" }}
            className="rounded-t-lg w-full rounded m-0"
          />
        
      </Link>
      <div className="p-4">
        <Link href={`/ventas/${id}`}>
          
            <h5 className="text-gray-900 font-bold text-lg tracking-tight dark:text-white">{title}</h5>
          
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-400">Precio: ${property.price.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}</span>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
    </>
  );
};

export default PropertyCard;