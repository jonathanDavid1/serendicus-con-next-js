import Navbar from "../components/Navbar"
import PropertyCard from "../components/PropertyCard"

const alquileres = () => {
  const properties = [
    {
      id: 1,
      title: 'Casa en el centro',
      price: '$250.000',
      image: '/images/aji dulce 4.jpg',
      description: 'Amplia casa en el centro de la ciudad.',
    },
    {
      id: 1,
      title: 'Casa en el centro',
      price: '$250.000',
      image: '/images/aji dulce 4.jpg',
      description: 'Amplia casa en el centro de la ciudad.',
    },
    {
      id: 1,
      title: 'Casa en el centro',
      price: '$250.000',
      image: '/images/aji dulce 4.jpg',
      description: 'Amplia casa en el centro de la ciudad.',
    },
    {
      id: 1,
      title: 'Casa en el centro',
      price: '$250.000',
      image: '/images/aji dulce 4.jpg',
      description: 'Amplia casa en el centro de la ciudad.',
    },
    {
      id: 1,
      title: 'Casa en el centro',
      price: '$250.000',
      image: '/images/aji dulce 4.jpg',
      description: 'Amplia casa en el centro de la ciudad.',
    },
    {
      id: 1,
      title: 'Casa en el centro',
      price: '$250.000',
      image: '/images/aji dulce 4.jpg',
      description: 'Amplia casa en el centro de la ciudad.',
    },
    // ... otras propiedades
  ];
  return (
    <>
        <Navbar  />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  )
}
export default alquileres