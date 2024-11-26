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
    <div className="relative w-full h-72 mb-8">
    <iframe className="w-full h-full"  src= "https://www.youtube.com/embed/RAlKiQOfNTg?si=U3_5Zmj2AJQghjVG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <WhatsAppIcon/>
  </div>
  )
}
export default PropertyDetail