import type { Game } from '../../data/data';

interface Props {
  game: Game;
  onClick: (game: Game) => void;
  isActive?: boolean;
}

export const ArcadeCard = ({ game, onClick, isActive }: Props) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className={`
        group relative cursor-pointer transition-all duration-200
        ${isActive ? 'translate-y-2' : 'hover:-translate-y-1'}
      `}
    >
      {/* --- CONTENEDOR DEL CARTUCHO --- */}
      <div 
        className={`
          relative w-full aspect-square overflow-hidden border-4
          transition-all duration-200
          ${isActive 
            ? 'border-primary bg-black animate-pulse' // Activo: Borde dorado parpadeante
            : 'border-primary-dim/50 hover:border-primary bg-black/50 hover:bg-black' // Inactivo: Borde sutil
          }
        `}
        // La sombra dura solo aparece al hover o si está activo, para dar sensación de "libertad" inicial
        style={{
          boxShadow: isActive || 'group-hover' 
            ? '4px 4px 0px 0px #000' 
            : 'none'
        }}
      >
        
        {/* Overlay de Scanlines y Brillo */}
        <div className="absolute inset-0 z-20 scanlines opacity-20 pointer-events-none"></div>
        {/* Brillo dorado al hover */}
        <div className="absolute inset-0 z-10 bg-primary mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>

        {/* --- IMAGEN DEL JUEGO (SIEMPRE COLOR) --- */}
        <img 
          src={game.cover} 
          alt={game.title} 
          className={`
            h-full w-full object-cover pixelated transition-all duration-300
            ${isActive 
              ? 'opacity-100 contrast-125 brightness-110' // Activo: Muy vibrante
              : 'opacity-80 contrast-110 hover:opacity-100 hover:contrast-125 hover:brightness-110' // Inactivo: Color pero un poco apagado -> Vibrante al hover
            }
          `}
        />
      </div>

      {/* --- TÍTULO FLOTANTE --- */}
      <div className={`
        mt-3 text-center transition-all duration-200
        ${isActive ? 'text-primary animate-blink' : 'text-primary-dim group-hover:text-primary'}
      `}>
        <span className="text-[10px] tracking-widest uppercase font-bold leading-none block drop-shadow-[2px_2px_0_#000]">
          {isActive ? '> INSERTED <' : game.title}
        </span>
      </div>

    </div>
  );
};