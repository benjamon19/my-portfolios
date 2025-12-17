import { Link, useLocation } from 'react-router-dom';
import { FiGrid, FiCpu, FiUser, FiMail } from 'react-icons/fi';

const LINKS = [
  { name: 'Home', path: '/', icon: FiGrid },
  { name: 'Projs', path: '/projects', icon: FiCpu },
  { name: 'About', path: '/about', icon: FiUser },
  { name: 'Mail', path: '/contact', icon: FiMail },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    // CAMBIO: w-[95%] para móviles, max-w-3xl para escritorio. Top ajustado.
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-full max-w-3xl">
      <div className="bg-[#1e293b] border-2 md:border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,0.5)] px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 relative">
        
        {/* LOGO */}
        <Link to="/" className="text-sm md:text-lg font-bold tracking-widest text-primary hover:text-white transition-colors uppercase">
          &lt;Benjamín.Dev/&gt;
        </Link>
        
        {/* LINKS (Scroll horizontal en móviles muy pequeños si hace falta) */}
        <ul className="flex gap-4 md:gap-8 w-full md:w-auto justify-center overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
          {LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="shrink-0">
                <Link 
                  to={link.path} 
                  className={`
                    text-[10px] md:text-xs uppercase font-bold tracking-wide transition-colors flex items-center gap-1
                    ${isActive ? 'text-white border-b-2 border-primary pb-1' : 'text-gray-500 hover:text-primary'}
                  `}
                >
                  {/* Icono solo en móvil para ahorrar espacio visual, o opcional */}
                  <span className="md:hidden text-lg"><link.icon /></span>
                  <span className="hidden md:inline">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};