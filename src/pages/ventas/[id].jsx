import { useRouter } from 'next/router';
import propiedades_en_venta from '../../utils/propiedades_en_venta.json';

import Navbar from '../../components/Navbar';
import PropertyDetail from '../../components/PropertyDetail';
import Footer from '../../components/Footer';

function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = propiedades_en_venta.find(objeto => objeto.id === parseInt(id));

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