import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=3105787397&text=Hola,%20quiero%20consultarte%algo."
      target="_blank"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
    >
      <img src="/public/WhatsAppIcon.png" alt="WhatsApp" className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;