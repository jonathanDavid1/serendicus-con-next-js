import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  const desktopLinkClass = (href) => {
    const active = isActive(href);
    return [
      'relative px-3 py-2 font-sans text-sm font-medium tracking-wide transition-all duration-200 rounded-lg',
      active
        ? 'text-lightBlue'
        : 'text-gray-600 hover:text-lightBlue hover:bg-lightBlue/5',
    ].join(' ');
  };

  const mobileLinkClass = (href) => {
    const active = isActive(href);
    return [
      'block py-3.5 px-4 rounded-xl font-sans text-base transition-all duration-200',
      active
        ? 'bg-lightBlue/15 text-gray-900 font-semibold border border-lightBlue/30'
        : 'text-gray-700 hover:bg-white/70 hover:text-lightBlue',
    ].join(' ');
  };

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-lightBlue/20'
          : 'bg-white/55 backdrop-blur-sm border-b border-white/50',
      ].join(' ')}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <img
              src="/logo.png"
              alt="Serendicus"
              className="h-9 md:h-10 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={desktopLinkClass(href)}>
                  {label}
                  {isActive(href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lavenderPurple" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop social + mobile toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-1 pl-3 border-l border-lightBlue/20">
              <span className="font-sans text-xs text-gray-500 mr-1 hidden xl:inline">
                Síguenos
              </span>
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="p-2 rounded-full transition-all duration-200 hover:bg-lightBlue/10 hover:scale-110"
                >
                  <img src={icon} alt={alt} className="h-6 w-6 object-contain" />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-lightBlue/10 hover:text-lightBlue transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={[
          'lg:hidden fixed inset-0 top-16 md:top-[4.5rem] z-40 transition-all duration-300',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <button
          type="button"
          className="absolute inset-0 bg-gray-900/20 backdrop-blur-[2px]"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Cerrar menú"
        />

        <div
          className={[
            'relative mx-4 mt-2 rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md shadow-xl overflow-hidden transition-transform duration-300',
            isMenuOpen ? 'translate-y-0' : '-translate-y-4',
          ].join(' ')}
        >
          <ul className="p-3 space-y-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={mobileLinkClass(href)} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-4 py-4 border-t border-lightBlue/15 bg-gradient-to-r from-lightBlue/5 to-lavenderPurple/5">
            <p className="font-sans text-xs uppercase tracking-wider text-gray-500 mb-3 text-center">
              Síguenos en redes
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="p-2.5 rounded-full bg-white shadow-sm border border-gray-100 transition-all duration-200 hover:border-lightBlue/40 hover:shadow-md hover:scale-105"
                >
                  <img src={icon} alt={alt} className="h-7 w-7 object-contain" />
                </a>
              ))}
            </div>
            <p className="font-mystery text-center text-gray-800 mt-4 text-lg">Serendicus</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
