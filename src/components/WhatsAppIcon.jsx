import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+57 3105787397&text=Hola vengo de la pagina serendicus y me gustaria saber mas informacion"
      target="_blank"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
    >
      <img src="/WhatsAppIcon.png" alt="WhatsApp" className="h-10 w-10" />
    </a>
  );
};

export default WhatsAppButton;