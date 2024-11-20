import { useRouter } from 'next/router';
import data from '../utils/data.json';
import Navbar from '../components/Navbar';
import PropertyDetail from '../components/PropertyDetail';

function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = data.find(objeto => objeto.id === parseInt(id));

  if (!property) {
    return <p>Propiedad no encontrada.</p>;
  }

  return (
    <>
    <Navbar/>
    <PropertyDetail property ={property}/>
    </>
  );
}

export default PropertyDetailPage;