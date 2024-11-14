import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const urlLogo = "/logo.png";
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 text-white p-4">
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
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-12 left-0 w-full bg-gray-800`}>
          <ul className="flex flex-col space-y-4">
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
    </nav>
  );
};

export default Navbar;