import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const urlLogo = "/logo.png";
  const facebookIcon = "/facebookIcon.png"
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 text-white p-4 fixed top-0 w-screen z-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          {urlLogo? <img src={urlLogo} alt="Logo" className="h-10 w-auto" /> : <p className="text-2xl font-bold">Mi Sitio Web</p>}
        </div>
        <div className="md:flex hidden items-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className='text-lavenderPurple '>Inicio</Link>
            </li>
            <li>
              <Link href="/ventas" className='text-lavenderPurple'>Ventas</Link>
            </li>
            <li>
              <Link href="/alquileres" className='text-lavenderPurple'>Alquileres</Link>
            </li>
            <li>
              <Link href="/servicios" className='text-lavenderPurple'>Servicios</Link>
            </li>
            <li>
              <Link href="/sobreNosotros" className='text-lavenderPurple'>Sobre nosotros</Link>
            </li>
            {/* ... otros enlaces */}
          </ul>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full h-screen duration-300 ease-in-out bg-gray-800 z-40`}>
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/ventas">Ventas</Link>
            </li>
            <li>
              <Link href="/alquileres">Alquileres</Link>
            </li>
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <Link href="/sobreNosotros">Sobre nosotros</Link>
            </li>
            {/* ... otros enlaces */}
          </ul>
        </div>
      </div>
      <div
  className={`md:hidden fixed bottom-0 right-0 p-4 z-50 transition-all duration-300 ease-in-out ${
    isMenuOpen ? 'block' : 'hidden'
  }`}
>
  <ul className="flex flex-col space-y-4 p-6">
    {/* ... otros enlaces ... */}
    <li className="mt-4">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-white"
      >
        <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
        <span>Serendicus</span>
      </a>
    </li>
  </ul>
</div>
    </nav>
  );
};

export default Navbar;