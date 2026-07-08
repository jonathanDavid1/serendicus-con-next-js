import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/ventas', label: 'Ventas' },
  { href: '/alquileres', label: 'Alquileres' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobreNosotros', label: 'Sobre nosotros' },
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=61563529753803',
    icon: '/facebookIcon.png',
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/serendicus/',
    icon: '/instagramIcon.png',
    alt: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@serendicus',
    icon: '/tiktokIcon.png',
    alt: 'TikTok',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-lightBlue/20 bg-white/70 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lightBlue to-lavenderPurple" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left lg:col-span-5">
            <Link href="/" className="inline-block group">
              <img
                src="/logo.png"
                alt="Serendicus"
                className="h-10 w-auto mx-auto md:mx-0 transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="font-mystery text-2xl text-gray-900">Serendicus</p>
            <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0">
              Compra, venta y alquiler de lotes y casas en Corozal y California, Los Patios — Norte de Santander.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-gray-600 hover:text-lightBlue transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="space-y-8 text-center md:text-left lg:col-span-4">
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:jhernadezcorrea@gmail.com"
                    className="font-sans text-sm text-gray-600 hover:text-lightBlue transition-colors duration-200 break-all"
                  >
                    jhernadezcorrea@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=573105787397&text=Hola%20vengo%20de%20la%20pagina%20serendicus%20y%20me%20gustaria%20saber%20mas%20informacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                  >
                    <img src="/WhatsAppIcon.png" alt="" className="h-5 w-5" aria-hidden="true" />
                    +57 310 578 7397
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Síguenos
              </h3>
              <div className="flex gap-2 justify-center md:justify-start">
                {socialLinks.map(({ href, icon, alt }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={alt}
                    className="p-2.5 rounded-full bg-white border border-gray-100 shadow-sm transition-all duration-200 hover:border-lightBlue/40 hover:shadow-md hover:scale-105"
                  >
                    <img src={icon} alt={alt} className="h-6 w-6 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-lightBlue/15 text-center">
          <p className="font-sans text-xs text-gray-500">
            © {currentYear} Serendicus. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
