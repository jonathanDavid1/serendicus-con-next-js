import { Script } from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="equals after interactive" // Carga el script después de que la página esté interactiva
        src={`https://www.googletagmanager.com/gtag/js?id=G-TG5263QRW7`}
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TG5263QRW7');
        }}
       
      />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;