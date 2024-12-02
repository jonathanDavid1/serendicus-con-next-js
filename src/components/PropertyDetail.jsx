import BottonMap from "./BottonMap"
import WhatsAppIcon from "./WhatsAppIcon"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const PropertyDetail = ({property}) => {
  return (
    <div className="container mx-auto px-4 pt-16 max-w-lg mb-10">
      <h1 className="text-3xl font-bold text-white mb-4 mt-2">{property.title}</h1>
      <p className="text-lg text-gray-100 mb-4">Precio: ${property.price.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}</p>
      <div>
        {/* Resto de tu componente */}
        <Carousel>
          {property.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen ${index + 1} de la propiedad`} />
            </div>
          ))}
        </Carousel>
      </div>
      <p>{property.description}</p>
      <div>
      {property.videos.map((videoUrl, index) => (
        <div key={index} className="relative w-full h-72 mb-8">
          <iframe
            className="w-full h-full"
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
      <BottonMap lat={property.lat} lng={property.lng} />
      <WhatsAppIcon />
    </div>
  )
}
export default PropertyDetail