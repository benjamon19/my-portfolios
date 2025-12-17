import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar'; // Asegúrate que la ruta sea correcta
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen font-mono selection:bg-primary selection:text-dark relative">
      
      {/* --- FONDO FORZADO (Solo Negro y Dorado) --- */}
      <div className="fixed inset-0 bg-dark z-[-2]"></div>
      
      {/* Textura de puntos global */}
      <div className="dither-overlay"></div>

      <Navbar />
      
      {/* Contenido Principal */}
      <main className="relative z-10 pt-32 px-4 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};