
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer'
import WhatsAppIcon from '../components/WhatsAppIcon'
const Home = () => {
  
  return (
    <section className='bg-lightBlue text-black mx-auto grid'>
      <Head>
        <title>Serendicus</title>
        <meta name="description" content="Descripción de mi aplicación" />
      </Head>
      <Navbar />
      <h2 className=' font-bold text-center mt-8 mb-10 text-lg'>Corozal y California lugares hermosos conectados con la naturaleza y el bienestar</h2>
       <div >
        <ImageSlider/>
        </div>
      <section className='mt-10 mr-10 ml-10'>
        <p>En el corazón del municipio de Los Patios, Norte de Santander, Colombia, se encuentra la Vereda California,
          un
          refugio de paz y belleza natural que invita a la aventura y la conexión con la tierra.</p><br />
        <h2 className='font-bold text-lg'>Paisajes encantadores:</h2><br />
        <p><b>Lagunas artificiales:</b> Disfruta de un paseo tranquilo o una emocionante excursión en bicicleta por las
          riberas de las lagunas artificiales, admirando la flora y fauna local.</p>
        <p><b>Campos de cultivo:</b> Déjate llevar por los vibrantes colores de los cultivos que se extienden por la
          vereda, donde se producen maracuyá, tomates, pimentones, melones, ají dulce, lechosa, cebollas, yuca, mangos
          y mucho más.</p><br />
        <h2 className='font-bold text-lg'>Fauna diversa:</h2>

        <p><b>Aves:</b>Observa la gran variedad de guacharacas, patos salvajes y otras aves que habitan cerca de las
          lagunas y en los bosques circundantes.</p>
        <p><b>Animales de granja: </b>Conoce las gallinas ponedoras, los pollos de engorde y el ganado que se crían en
          la zona, tanto para carne como para producción de leche.

        </p>
        <p><b>Animales exóticos:</b> <br />Descubre la presencia de cabras camuras y cerdos, que añaden un toque único al
          paisaje de la vereda.

        </p>

        <h2 className='font-bold text-lg'>Un espectáculo de color:</h2>
        <p><b>Cañaguates en flor:</b>Déjate sorprender por la explosión de color amarillo que invade la vereda en
          ciertas temporadas, cuando los cañaguates florecen en todo su esplendor.

        </p>

        <p><b>Chulos:</b>Observa la gran cantidad de chulos que habitan en una zona específica de la vereda,
          convirtiéndola en un punto de partida importante para estas aves que se dirigen a Cúcuta y sus alrededores.

        </p><br />
        <h2 className='font-bold text-lg'>La Vereda California es un lugar ideal para:</h2>
        <p><b>Amantes de la naturaleza: </b>Disfrutar de caminatas, paseos en bicicleta, observación de aves y conexión
          con el entorno natural.
        </p>
        <p><b>Familias:</b>Experimentar un ambiente tranquilo y seguro, perfecto para disfrutar en familia.
        </p>
        <p><b>Emprendedores:</b>Explorar oportunidades de negocio en el sector agropecuario o ecoturismo.</p>

        <h3>Ven a descubrir la Vereda California y déjate cautivar por su encanto natural, su riqueza cultural y su
          gente amable.</h3><br />
        <h3>¡Te esperamos!</h3>
        


      </section>
      <Footer/>
      <WhatsAppIcon/>


    </section>
  );
};

export default Home;