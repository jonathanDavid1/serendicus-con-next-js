import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const sobreNosotros = () => {
  return (
    <>
      <Navbar />
      <section class="container mx-auto my-16 py-4 px-4">
        <h2 class="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p class="text-lg mb-8">En Serendicus, nos especializamos en ofrecer servicios inmobiliarios y tecnológicos de alta calidad. Nuestro objetivo es proporcionar soluciones integrales para la compra, venta y alquiler de propiedades, así como servicios tecnológicos avanzados para mejorar la experiencia de nuestros clientes.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Servicios Inmobiliarios</h3>
            <ul class="list-disc list-inside">
              <li>Compra y venta de propiedades residenciales y comerciales</li>
              <li>Alquiler de casas, apartamentos y locales comerciales</li>
              <li>Asesoramiento en inversiones inmobiliarias</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Servicios de Tecnología</h3>
            <ul class="list-disc list-inside">
              <li>Desarrollo de sitios web y aplicaciones móviles</li>
              <li>Implementación de soluciones de gestión de propiedades</li>
              <li>Consultoría en tecnología para el sector inmobiliario</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default sobreNosotros