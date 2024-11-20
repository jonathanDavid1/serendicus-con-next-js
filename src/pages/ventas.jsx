import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import data from '../utils/data.json';


const ventas = () => {


  return (
    <>
      <Navbar/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        {data.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
    </>
  );
};

export default ventas;