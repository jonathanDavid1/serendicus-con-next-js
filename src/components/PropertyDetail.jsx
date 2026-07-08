import BottonMap from "./BottonMap"
import WhatsAppIcon from "./WhatsAppIcon"
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PropertyDetail = ({ property }) => {
  const title = property.title || `Lote / Propiedad #${property.id}`;
  
  return (
    <div className="bg-gradient-to-b from-[#e0f7fc] via-lightBlue/10 to-[#f9fbfc] text-gray-800 min-h-screen py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 md:p-10 shadow-2xl space-y-8 mt-10">
        
        {/* Title & Price Header */}
        <div className="border-b border-gray-100 pb-6 space-y-2">
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight">
            {title}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-2xl font-black text-lightBlue font-sans">
              ${property.price.toLocaleString('es-ES')} COP
            </span>
            <span className="bg-lightBlue/10 text-lightBlue font-sans text-sm font-semibold px-4 py-1.5 rounded-full border border-lightBlue/20">
              Alquiler Disponible
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 max-w-3xl mx-auto">
          <Carousel 
            showArrows={true} 
            showThumbs={true} 
            infiniteLoop={true}
            className="property-carousel"
          >
            {property.images.map((image, index) => (
              <div key={index} className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full">
                <Image 
                  src={image} 
                  alt={`Imagen ${index + 1} de la propiedad`}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : 'lazy'}
                  className="object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Description Section */}
        <div className="space-y-4">
          <h2 className="font-sans font-bold text-xl text-gray-900 border-b border-lightBlue/20 pb-2">
            Descripción de la Propiedad
          </h2>
          <p className="text-gray-700 leading-relaxed text-base font-sans font-light">
            {property.description}
          </p>
        </div>

        {/* Videos Section */}
        {property.videos && property.videos.length > 0 && (
          <div className="space-y-6">
            <h2 className="font-sans font-bold text-xl text-gray-900 border-b border-lightBlue/20 pb-2">
              Video Recorrido
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.videos.map((videoUrl, index) => (
                <div key={index} className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={videoUrl}
                    title={`YouTube video player ${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map & Actions Section */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="w-full md:w-auto">
            <BottonMap lat={property.lat} lng={property.lng} />
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-gray-500 font-sans">¿Interesado en esta propiedad?</p>
            <a 
              href="https://wa.me/573000000000" // Remplace or keep generic depending on WhatsAppIcon implementation
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold font-sans px-6 py-3 rounded-full hover:bg-green-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
      <WhatsAppIcon />
    </div>
  )
}
export default PropertyDetail