import WhatsAppIcon from "./WhatsAppIcon"
const PropertyDetail = ({property}) => {
  return (
    <div className="container mx-auto px-4 max-w-lg">
    <h1 className="text-3xl font-bold text-white mb-4 mt-2">{property.title}</h1>
    <p className="text-lg text-gray-100 mb-4">Precio: ${property.price.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}</p>
    <div className="relative mb-8">
      <img src={property.image} alt={property.title} className="w-full max-w-lg object-contain" />
      {/* ... */}
    </div>
    <p>{property.description}</p>
    <div>
    <video width="320" height="240" controls>
      <source src={property.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    <WhatsAppIcon/>
  </div>
  )
}
export default PropertyDetail