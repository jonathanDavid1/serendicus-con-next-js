import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer'
import WhatsAppIcon from '../components/WhatsAppIcon'
import lugares from '../utils/lugares.json';
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in a real use case)
    const timer = setTimeout(() => {
        setLoading(false);
    }, 200); // Set loading to false after 2 seconds

    return () => clearTimeout(timer); // Clear the timeout if component unmounts
  }, []);

  if (loading) {
    return <Loading />;
  }

  //images for slider
  const images = lugares.map(lugar => lugar.image)
  
  return (
    <section className='bg-lightBlue text-black font-mystery mx-auto grid mt-10'>
      <Head>
        <title >Serendicus</title>
        <meta name="description" content="Descripción de mi aplicación" />
      </Head>
      <Navbar />
      <h2 className=' font-bold text-center mt-14 mb-10 text-lg'>Corozal y California lugares hermosos conectados con la naturaleza y el bienestar</h2>
       <div >
        <ImageSlider images= {images}/>
        </div>
      <section className='mt-10 mr-10 ml-10'>
        <p>En el corazón del municipio de Los Patios, Norte de Santander, Colombia, se encuentra la Vereda California,
          un
          refugio de paz y belleza natural que invita a la aventura y la conexión con la tierra.</p><br />
        <h2 className='font-bold text-lg'>Paisajes encantadores:</h2><br />
        <p><b>Lagunas artificiales:</b> Disfruta de un paseo tranquilo o una emocionante excursión en bicicleta por las
          riberas de las lagunas artificiales, admirando la flora y fauna local.
          <br />
          <br /></p>
          <img src="/Lugares/Images/21.jpg" alt="laguna los patos" className='lg:w-1/2 m-auto'/>
          <br />
          <br />
        <p><b>Campos de cultivo:</b> Déjate llevar por los vibrantes colores de los cultivos que se extienden por la
          vereda, donde se producen maracuyá, tomates, pimentones, melones, ají dulce, lechosa, cebollas, yuca, mangos
          y mucho más.</p><br />

          <img src="Lugares/Images/103.jpg" alt="campos de cultivo" className='lg:w-1/2 m-auto' />
          <br />
          <br />
        <h2 className='font-bold text-lg'>Fauna diversa:</h2>

        <p><b>Aves:</b>Observa la gran variedad de guacharacas, patos salvajes y otras aves que habitan cerca de las
          lagunas y en los bosques circundantes.</p>
          <img src="Lugares/Images/86.jpg" alt="" className='lg:w-1/2 m-auto'/>
          <br />
          <br />
        <p><b>Animales de granja: </b>Conoce las gallinas ponedoras, los pollos de engorde y el ganado que se crían en
          la zona, tanto para carne como para producción de leche.

        </p>
        <img src="Lugares/Images/130.jpg" alt="" className='lg:w-1/2 m-auto'/>
        <br />
        <br />
      
        <p><b>Animales exóticos:</b> <br />Descubre la presencia de cabras camuras y cerdos, que añaden un toque único al
          paisaje de la vereda.

        </p>
        <img src="Lugares/Images/98.jpg" alt="" className='lg:w-1/2 m-auto'/>

        <br />
        <br />

        <h2 className='font-bold text-lg'>Un espectáculo de color:</h2>
        <p><b>Cañaguates en flor:</b>Déjate sorprender por la explosión de color amarillo que invade la vereda en
          ciertas temporadas, cuando los cañaguates florecen en todo su esplendor.

        </p>
        <img src="Lugares/Images/100.jpg" alt="" className='lg:w-1/2 m-auto'/>

        <p><b>Chulos:</b>Observa la gran cantidad de chulos que habitan en una zona específica de la vereda,
          convirtiéndola en un punto de partida importante para estas aves que se dirigen a Cúcuta y sus alrededores.

        </p><br />
        <h2 className='font-bold text-lg'>La Vereda California es un lugar ideal para:</h2>
        <p><b>Amantes de la naturaleza: </b>Disfrutar de caminatas, paseos en bicicleta, observación de aves y conexión
          con el entorno natural.
        </p>
        <img src="Lugares/Images/121.jpg" alt="" className='lg:w-1/2 m-auto' />
        <br />
        <br />
        <p><b>Familias:</b>Experimentar un ambiente tranquilo y seguro, perfecto para disfrutar en familia.
        </p>
        <br />
        <img src="Lugares/Images/26.jpg" alt="" className='lg:w-1/2 m-auto' />
        <br />
        <p><b>Emprendedores:</b>Explorar oportunidades de negocio en el sector agropecuario o ecoturismo.</p>
        
        <img src="Lugares/Images/36.jpg" alt="" className='lg:w-1/2 m-auto'  />


        <h3>Ven a descubrir la Vereda California y déjate cautivar por su encanto natural, su riqueza cultural y su
          gente amable.</h3><br />
        <h3>¡Te esperamos!</h3>
        <br />
        <br />
        


      </section>
      <Footer/>
      <WhatsAppIcon/>


    </section>
  );
};

export default Home;