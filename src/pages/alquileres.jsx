import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import PropertyCardA from "../components/PropertyCardA"
import propiedades_en_alquiler from '../utils/propiedades_en_alquiler.json';

const alquileres = () => {
 
    // ... otras propiedades
 
  return (
    <>
        <Navbar  />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        {propiedades_en_alquiler.map((property) => (
          <PropertyCardA key={property.id} property={property} />
        ))}
      </div>
      <Footer/>
    </>
  )
}
export default alquileres