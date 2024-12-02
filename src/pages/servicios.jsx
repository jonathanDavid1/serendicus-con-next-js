import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const servicios = () => {
  return (
    <>
      <Navbar />
      <section className="m-6 pt-14">
        <h2 class="text-3xl font-bold mb-4 ">Servicios de Software y Publicidad</h2>
        <p class="text-lg mb-8">En Serendicus, ofrecemos una amplia gama de servicios de software y publicidad diseñados para ayudar a todo tipo de negocios a crecer y prosperar en el mercado digital.</p>

        <h3 class="text-xl font-bold mb-4">Servicios de Software</h3>
        <ul class="list-disc list-inside">
          <li>Desarrollo de software a medida</li>
          <li>Desarrollo de páginas web responsivas</li>
          <li>Integración de sistemas y automatización de procesos</li>
          <li>Consultoría en tecnología y transformación digital</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">Servicios de Publicidad</h3>
        <ul class="list-disc list-inside">
          <li>Gestión de campañas publicitarias en redes sociales</li>
          <li>Optimización de motores de búsqueda (SEO)</li>
          <li>Marketing de contenidos y creación de estrategias</li>
          <li>Publicidad en línea y gestión de anuncios</li>
        </ul>

        <p class="mb-4">Nos comprometemos a proporcionar soluciones innovadoras y efectivas que impulsen el éxito de nuestros clientes en el entorno digital.</p>
      </section>
      <Footer />
    </>
  )
}
export default servicios