import type { ReactNode } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Props {
  children: ReactNode;
  className?: string;
  title?: string;
  badges?: string[];
  links?: { demo?: string; repo?: string };
  delay?: string;
  onClick?: () => void;
}

export const BentoCard = ({ children, className = "", title, badges, links, delay = "0s", onClick }: Props) => {
  return (
    <div 
      onClick={onClick}
      style={{ animationDelay: delay }}
      className={`
        group relative bg-surface p-4 md:p-6 flex flex-col
        transition-all duration-100
        ${onClick ? 'cursor-pointer hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {/* --- BORDE PIXELADO NES --- */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-200"
        style={{
          boxShadow: `
            -4px 0 0 0 var(--color-dark), 
            4px 0 0 0 var(--color-dark), 
            0 -4px 0 0 var(--color-dark), 
            0 4px 0 0 var(--color-dark)
          `
        }}
      />
      
      {/* Borde Dorado Hover */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          boxShadow: `
            -4px 0 0 0 var(--color-primary), 
            4px 0 0 0 var(--color-primary), 
            0 -4px 0 0 var(--color-primary), 
            0 4px 0 0 var(--color-primary)
          `
        }}
      />

      {/* --- TORNILLOS DECORATIVOS --- */}
      <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-dark/30 z-20 group-hover:bg-primary group-hover:animate-spin"></div>
      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-dark/30 z-20 group-hover:bg-primary group-hover:animate-spin"></div>
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-dark/30 z-20 group-hover:bg-primary group-hover:animate-spin"></div>
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-dark/30 z-20 group-hover:bg-primary group-hover:animate-spin"></div>

      {/* --- BADGES --- */}
      {badges && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 flex gap-2 z-30 flex-wrap justify-end max-w-[80%]">
          {badges.map((badge) => (
            <span 
              key={badge} 
              className="text-[8px] font-bold bg-primary text-dark border-2 border-dark px-2 py-1 uppercase tracking-widest shadow-md group-hover:-translate-y-1 transition-transform"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* --- TÍTULO RESPONSIVE (CORREGIDO) --- */}
      {/* - break-words: Fuerza el salto de línea si la palabra es muy larga.
         - leading-tight: Ajusta la altura de línea para que no se vea separado.
      */}
      {title && (
        <h3 className="relative z-20 mb-4 uppercase tracking-widest font-black font-mono leading-tight drop-shadow-md text-primary">
          <span 
            className="block text-lg md:text-2xl" 
            style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }} 
          >
            {title}
          </span>
        </h3>
      )}

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 flex-1 border-2 border-dark bg-dark/50 p-1 mb-4 group-hover:border-primary transition-colors min-h-0">
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none z-20"></div>
        {children}
      </div>

      {/* --- BOTONES DE ACCIÓN --- */}
      {links && (
        <div className="relative z-20 mt-auto pt-4 border-t-2 border-dashed border-dark/30 group-hover:border-primary/50 flex flex-wrap gap-2 md:gap-4">
          
          {links.demo && (
            <a 
              href={links.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 min-w-25 text-center bg-primary text-dark text-[10px] font-bold uppercase py-2 hover:bg-white active:translate-y-1 transition-all"
              style={{ boxShadow: 'inset -2px -2px 0px 0px var(--color-primary-dim), 2px 2px 0px 0px #000' }}
            >
              <span className="flex items-center justify-center gap-2">
                <FiExternalLink /> Live Demo
              </span>
            </a>
          )}
          
          {links.repo && (
            <a 
              href={links.repo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 min-w-25 text-center bg-surface text-primary border-2 border-primary text-[10px] font-bold uppercase py-2 hover:bg-primary hover:text-dark active:translate-y-1 transition-all"
              style={{ boxShadow: '2px 2px 0px 0px #000' }}
            >
              <span className="flex items-center justify-center gap-2">
                <FiGithub /> Code
              </span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};