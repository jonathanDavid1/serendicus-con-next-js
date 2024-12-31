import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import propiedades_en_venta from '../utils/propiedades_en_venta.json';
import Footer from "../components/Footer";
import Loading from '../components/Loading'
import { useEffect, useState } from "react";


const ventas = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in a real use case)
    const timer = setTimeout(() => {
        setLoading(false);
    }, 100); // Set loading to false after 2 seconds

    return () => clearTimeout(timer); // Clear the timeout if component unmounts
  }, []);

  if (loading) {
    return <Loading />;
  }


  return (
    <>
      <Navbar/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 mb-20">
        {propiedades_en_venta.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Footer/>
      
    </>
  );
};

export default ventas;