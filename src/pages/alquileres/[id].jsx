import { useRouter } from 'next/router';
import propiedades_en_alquiler from '../../utils/propiedades_en_alquiler.json';

import Navbar from '../../components/Navbar';
import PropertyDetail from '../../components/PropertyDetail';
import Footer from '../../components/Footer';

function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = propiedades_en_alquiler.find(objeto => objeto.id === parseInt(id));

  if (!property) {
    return <p>Propiedad no encontrada.</p>;
  }

  return (
    <>
    <Navbar/>
    <PropertyDetail property ={property}/>
    <Footer/>
    </>
  );
}

export default PropertyDetailPage;