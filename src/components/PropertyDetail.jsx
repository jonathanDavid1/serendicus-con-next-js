const PropertyDetail = ({property}) => {
  return (
    <div className="container mx-auto px-4 max-w-lg">
    <h1 className="text-3xl font-bold text-white mb-4 mt-2">{property.title}</h1>
    <p className="text-lg text-gray-100 mb-4">Precio: ${property.price.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}</p>
    <div className="relative mb-8">
      <img src={property.image} alt={property.title} className="w-full max-w-lg object-contain" />
      {/* ... */}
    </div>
    <p className="text-gray-700">{property.description}</p>
  </div>
  )
}
export default PropertyDetail