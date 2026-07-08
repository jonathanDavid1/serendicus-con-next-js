import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"

const Servicios = () => {
  const softwareServices = [
    {
      title: "Desarrollo a medida",
      description: "Creamos software personalizado que se adapta perfectamente a las necesidades únicas de tu negocio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: "Páginas web responsivas",
      description: "Diseñamos y desarrollamos sitios web modernos que se ven increíbles en cualquier dispositivo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      title: "Integración y automatización",
      description: "Conectamos tus sistemas y automatizamos procesos para maximizar la eficiencia operativa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
    },
    {
      title: "Consultoría tecnológica",
      description: "Te guiamos en tu transformación digital con asesoría estratégica y soluciones innovadoras.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
  ];

  const adServices = [
    {
      title: "Campañas en redes sociales",
      description: "Gestionamos tus campañas publicitarias en Facebook, Instagram y TikTok para maximizar tu alcance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
        </svg>
      ),
    },
    {
      title: "Optimización SEO",
      description: "Mejoramos el posicionamiento de tu sitio web en Google para que más clientes te encuentren.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v-5.5m3 5.5v-5.5m3 5.5v-5.5" />
        </svg>
      ),
    },
    {
      title: "Marketing de contenidos",
      description: "Creamos estrategias de contenido que conectan con tu audiencia y generan resultados reales.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Publicidad en línea",
      description: "Gestión profesional de anuncios en Google Ads y plataformas digitales para impulsar tu negocio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#e0f7fc] via-lightBlue/30 to-[#f9fbfc] text-gray-800 min-h-screen pt-20">
      <Head>
        <title>Servicios - Serendicus</title>
        <meta name="description" content="Servicios de software y publicidad de Serendicus. Desarrollo web, SEO, marketing digital y más." />
      </Head>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-mystery text-4xl md:text-5xl text-gray-900 drop-shadow-md">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Ofrecemos soluciones de software y publicidad diseñadas para ayudar a todo tipo de negocios a crecer y prosperar en el mercado digital.
          </p>
          <div className="w-16 h-1 bg-lightBlue mx-auto rounded-full mt-2"></div>
        </div>

        {/* Software Services */}
        <div className="mb-16">
          <h2 className="font-mystery text-3xl text-gray-900 text-center border-b border-lightBlue/30 pb-4 mb-10">
            Servicios de Software
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 hover:-translate-y-1 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-lightBlue/10 rounded-2xl flex items-center justify-center mx-auto text-lightBlue group-hover:bg-lightBlue group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Services */}
        <div className="mb-16">
          <h2 className="font-mystery text-3xl text-gray-900 text-center border-b border-lavenderPurple/30 pb-4 mb-10">
            Servicios de Publicidad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl border border-gray-100 hover:border-lavenderPurple/40 transition-all duration-300 hover:-translate-y-1 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-lavenderPurple/10 rounded-2xl flex items-center justify-center mx-auto text-lavenderPurple group-hover:bg-lavenderPurple group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-gray-900 group-hover:text-lavenderPurple transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-lightBlue/30 via-lavenderPurple/20 to-lightBlue/10 p-10 rounded-3xl text-center space-y-6 shadow-xl border border-white max-w-3xl mx-auto hover:shadow-[0_20px_50px_rgba(185,131,229,0.2)] transition-all duration-500">
          <h3 className="font-mystery text-3xl text-gray-900">
            ¿Listo para impulsar tu negocio?
          </h3>
          <p className="text-gray-700 text-base max-w-xl mx-auto leading-relaxed">
            Nos comprometemos a proporcionar soluciones innovadoras y efectivas que impulsen el éxito de nuestros clientes en el entorno digital.
          </p>
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lightBlue text-white font-bold font-sans px-8 py-3 rounded-full hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <Footer />
    </section>
  )
}
export default Servicios