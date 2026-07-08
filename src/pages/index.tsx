import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import lugares from '../utils/lugares.json';
import Image from 'next/image';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const images = lugares.map(lugar => lugar.image);

  return (
    <section className="bg-gradient-to-b from-[#e0f7fc] via-lightBlue/30 to-[#f9fbfc] text-gray-800 min-h-screen pt-20">
      <Head>
        <title>Descubre Corozal y California - Serendicus</title>
        <meta name="description" content="Explora Corozal y California, dos veredas del municipio de Los Patios, Norte de Santander, Colombia. Descubre las lujosas casas de Corozal, su clima fresco y desarrollo, y la tranquilidad y belleza verde de California, con cabañas, lagunas artificiales y diversidad de cultivos y animales." />
        <meta property="og:title" content="Descubre Corozal y California - Blog de Mi Sitio Web" />
        <meta property="og:description" content="Explora Corozal y California, dos veredas del municipio de Los Patios, Norte de Santander, Colombia. Descubre las lujosas casas de Corozal, su clima fresco y desarrollo, y la tranquilidad y belleza verde de California, con cabañas, lagunas artificiales y diversidad de cultivos y animales." />
        <meta property="og:image" content="/path/to/home-image.jpg" />
      </Head>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        {/* Header Section */}
        <div className="text-center my-12 space-y-4">
          <h1 className="font-mystery text-4xl md:text-5xl lg:text-6xl text-gray-900 drop-shadow-md leading-tight">
            Corozal y California
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-sans max-w-3xl mx-auto font-light leading-relaxed">
            Lugares hermosos conectados con la naturaleza, el bienestar y un estilo de vida campestre excepcional.
          </p>
          <div className="w-24 h-1 bg-lightBlue mx-auto rounded-full mt-4"></div>
        </div>

        {/* Hero Slider container */}
        <div className="my-10 relative">
          <ImageSlider images={images} />
        </div>

        {/* Content Section with Premium Card layout */}
        <div className="mt-16 space-y-16">
          <div className="backdrop-blur-md bg-white/60 p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans text-center">
              En el corazón del municipio de Los Patios, Norte de Santander, Colombia, se encuentra la Vereda California,
              un refugio de paz y belleza natural que invita a la aventura y la conexión con la tierra.
            </p>
          </div>

          <h2 className="font-mystery text-3xl text-gray-900 text-center border-b border-lightBlue/30 pb-4">
            Explora las Maravillas Locales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Laguna Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <h3 className="font-sans font-bold text-xl text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                  Lagunas artificiales
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Disfruta de un paseo tranquilo o una emocionante excursión en bicicleta por las riberas de las lagunas artificiales, admirando la flora y fauna local.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/21.jpg"
                  alt="laguna los patos"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Campos Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <h3 className="font-sans font-bold text-xl text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                  Campos de cultivo
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Déjate llevar por los vibrantes colores de los cultivos que se extienden por la vereda, donde se producen maracuyá, tomates, pimentones, melones, ají dulce y melocotones.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/103.jpg"
                  alt="campos de cultivo"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Aves Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <h3 className="font-sans font-bold text-xl text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                  Fauna diversa: Aves
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Observa la gran variedad de guacharacas, patos salvajes y otras aves que habitan cerca de las lagunas y en los bosques circundantes.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/86.jpg"
                  alt="Aves en California"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Animales Granja Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <h3 className="font-sans font-bold text-xl text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                  Animales de granja
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Conoce las gallinas ponedoras, los pollos de engorde y el ganado que se crían en la zona, tanto para carne como para producción de leche.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/130.jpg"
                  alt="Animales de granja"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Animales Exóticos Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <h3 className="font-sans font-bold text-xl text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                  Animales exóticos
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Descubre la presencia de cabras camuras y cerdos, que añaden un toque único al paisaje rural de la vereda.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/98.jpg"
                  alt="Animales exóticos"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Cañaguates Card */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-lightBlue/40 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <h3 className="font-sans font-bold text-xl text-gray-900 group-hover:text-lightBlue transition-colors duration-300">
                  Cañaguates en flor
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Déjate sorprender por la explosión de color amarillo que invade la vereda en ciertas temporadas, cuando los cañaguates florecen en todo su esplendor.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/100.jpg"
                  alt="Cañaguates en flor"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <h2 className="font-mystery text-3xl text-gray-900 text-center border-b border-lightBlue/30 pb-4 mt-10">
            Un Lugar Perfecto Para
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Amantes Naturaleza */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/121.jpg"
                  alt="Amantes de la naturaleza"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-sans font-bold text-lg text-gray-900 mb-2">Amantes de la naturaleza</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Caminatas guiadas, paseos ecológicos en bicicleta, observación de aves silvestres y pura desconexión total.
                </p>
              </div>
            </div>

            {/* Familias */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/26.jpg"
                  alt="Familias"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-sans font-bold text-lg text-gray-900 mb-2">Familias</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Un entorno sumamente seguro, tranquilo y espacioso para que tanto adultos como niños disfruten al aire libre.
                </p>
              </div>
            </div>

            {/* Emprendedores */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/Lugares/Images/36.jpg"
                  alt="Emprendedores"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-sans font-bold text-lg text-gray-900 mb-2">Emprendedores</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Excelente potencial para impulsar proyectos innovadores en agricultura sostenible y ecoturismo vivencial.
                </p>
              </div>
            </div>
          </div>

          {/* Invitation Section */}
          <div className="bg-gradient-to-r from-lightBlue/30 via-lavenderPurple/20 to-lightBlue/10 p-10 rounded-3xl text-center space-y-6 shadow-xl border border-white max-w-3xl mx-auto hover:shadow-[0_20px_50px_rgba(185,131,229,0.2)] transition-all duration-500">
            <h3 className="font-mystery text-3xl text-gray-900">
              ¡Ven a descubrir la Vereda California!
            </h3>
            <p className="text-gray-700 text-base max-w-xl mx-auto leading-relaxed">
              Déjate cautivar por su encanto natural incomparable, su gran riqueza cultural y la maravillosa amabilidad de su gente.
            </p>
            <p className="font-bold text-lg text-gray-900 tracking-wider">
              ¡Te esperamos con los brazos abiertos!
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppIcon />
    </section>
  );
};

export default Home;