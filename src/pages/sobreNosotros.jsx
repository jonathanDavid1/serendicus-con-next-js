import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"

const SobreNosotros = () => {
  const inmobiliarios = [
    {
      text: "Compra y venta de propiedades residenciales y comerciales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      text: "Alquiler de casas, apartamentos y locales comerciales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      ),
    },
    {
      text: "Asesoramiento en inversiones inmobiliarias",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
    },
  ];

  const tecnologia = [
    {
      text: "Desarrollo de sitios web y aplicaciones móviles",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      text: "Implementación de soluciones de gestión de propiedades",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
    },
    {
      text: "Consultoría en tecnología para el sector inmobiliario",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#e0f7fc] via-lightBlue/30 to-[#f9fbfc] text-gray-800 min-h-screen pt-20">
      <Head>
        <title>Sobre Nosotros - Serendicus</title>
        <meta name="description" content="Conoce a Serendicus. Servicios inmobiliarios y tecnológicos de alta calidad en Corozal y California, Norte de Santander." />
      </Head>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-mystery text-4xl md:text-5xl text-gray-900 drop-shadow-md">
            Sobre Nosotros
          </h1>
          <div className="w-16 h-1 bg-lavenderPurple mx-auto rounded-full mt-2"></div>
        </div>

        {/* Intro Card */}
        <div className="backdrop-blur-md bg-white/60 p-8 md:p-10 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 mb-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans text-center">
            En <span className="font-bold text-lightBlue">Serendicus</span>, nos especializamos en ofrecer servicios inmobiliarios y tecnológicos de alta calidad.
            Nuestro objetivo es proporcionar soluciones integrales para la compra, venta y alquiler de propiedades,
            así como servicios tecnológicos avanzados para mejorar la experiencia de nuestros clientes.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Inmobiliarios */}
          <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-lightBlue/10 rounded-2xl flex items-center justify-center text-lightBlue group-hover:bg-lightBlue group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
              </div>
              <h2 className="font-sans font-bold text-2xl text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                Servicios Inmobiliarios
              </h2>
            </div>
            <ul className="space-y-4">
              {inmobiliarios.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-lightBlue mt-0.5">{item.icon}</span>
                  <span className="text-base leading-relaxed font-sans">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnología */}
          <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-gray-100 hover:border-lavenderPurple/40 transition-all duration-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-lavenderPurple/10 rounded-2xl flex items-center justify-center text-lavenderPurple group-hover:bg-lavenderPurple group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h2 className="font-sans font-bold text-2xl text-gray-900 group-hover:text-lavenderPurple transition-colors duration-300">
                Servicios de Tecnología
              </h2>
            </div>
            <ul className="space-y-4">
              {tecnologia.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-lavenderPurple mt-0.5">{item.icon}</span>
                  <span className="text-base leading-relaxed font-sans">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission CTA */}
        <div className="bg-gradient-to-r from-lavenderPurple/20 via-lightBlue/20 to-lavenderPurple/10 p-10 rounded-3xl text-center space-y-6 shadow-xl border border-white max-w-3xl mx-auto hover:shadow-[0_20px_50px_rgba(92,207,230,0.2)] transition-all duration-500">
          <h3 className="font-mystery text-3xl text-gray-900">
            Nuestra Misión
          </h3>
          <p className="text-gray-700 text-base max-w-xl mx-auto leading-relaxed font-sans">
            Conectar a personas con su hogar ideal y brindar soluciones tecnológicas que transformen la manera en que nuestros clientes viven, trabajan y crecen.
          </p>
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lavenderPurple text-white font-bold font-sans px-8 py-3 rounded-full hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Hablemos
          </a>
        </div>
      </div>

      <Footer />
    </section>
  )
}
export default SobreNosotros