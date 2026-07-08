import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import PropertyCardA from "../components/PropertyCardA"
import propiedades_en_alquiler from '../utils/propiedades_en_alquiler.json';

const alquileres = () => {
  return (
    <section className="bg-gradient-to-b from-[#e0f7fc] via-lightBlue/30 to-[#f9fbfc] text-gray-800 min-h-screen pt-20">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-mystery text-4xl md:text-5xl text-gray-900 drop-shadow-md">
            Alquileres Disponibles
          </h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto font-light">
            Encuentra el espacio perfecto para ti y tu familia en el mejor entorno campestre y natural de Corozal y California.
          </p>
          <div className="w-16 h-1 bg-lightBlue mx-auto rounded-full mt-2"></div>
        </div>

        {/* Grid de propiedades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propiedades_en_alquiler.map((property) => (
            <PropertyCardA key={property.id} property={property} />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  )
}
export default alquileres