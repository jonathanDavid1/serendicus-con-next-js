import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
  const { id, price, image, images, description } = property;
  const title = property.title || `Lote / Propiedad #${id}`;

  // price can be a number or a pre-formatted string in the dataset
  const formattedPrice =
    typeof price === 'number'
      ? `$${price.toLocaleString('es-ES')} COP`
      : price;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-lavenderPurple/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        <Link href={`/ventas/${id}`} className="block relative h-56 w-full overflow-hidden bg-gray-100">
          <Image
            src={image || (images && images[0])}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-lavenderPurple/80 backdrop-blur-md text-white font-sans text-xs px-3 py-1 rounded-full border border-white/20">
            En Venta
          </div>
        </Link>

        <div className="p-6 space-y-3">
          <Link href={`/ventas/${id}`}>
            <h3 className="font-sans font-bold text-xl text-gray-900 group-hover:text-lavenderPurple transition-colors duration-300 line-clamp-1">
              {title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between mt-4">
        <span className="text-lg font-bold text-gray-900 font-sans">
          {formattedPrice}
        </span>
        <Link
          href={`/ventas/${id}`}
          className="text-xs font-bold font-sans text-white bg-lavenderPurple px-4 py-2 rounded-full hover:bg-black hover:scale-105 transition-all duration-300"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;