import { useState } from 'react';
import { GAMES, type Game } from '../data/data';
import { ArcadeCard } from './arcade/ArcadeCard';
import { ArcadePlayer } from './arcade/ArcadePlayer';

export const ArcadeRoom = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="relative w-full font-mono">
      
      {/* HEADER: MENSAJE DE RECOMPENSA */}
      {!selectedGame && (
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 px-2">
          
          {/* TÍTULO RESPONSIVE FLUIDO */}
          {/* text-[5vw] asegura que nunca se desborde en pantallas pequeñas */}
          <div className="inline-block border-b-4 border-primary pb-2 mb-6">
            <h2 className="text-[5vw] md:text-3xl font-black uppercase tracking-tighter text-text drop-shadow-[3px_3px_0px_var(--color-primary)] wrap-break-word leading-tight">
              SECRET_STASH_FOUND
            </h2>
          </div>
          
          <div className="max-w-xl mx-auto bg-surface/50 p-6 border-2 border-primary-dim border-dashed relative mt-2">
             {/* Icono decorativo */}
             <div className="absolute -top-4 -left-3 text-3xl drop-shadow-md">🎁</div>
             
             <p className="text-text text-xs md:text-sm leading-relaxed font-sans md:font-mono">
               ¡Has desbloqueado la zona oculta! <br/>
               <span className="text-primary font-bold">Tómate un descanso y prueba mi colección de clásicos.</span>
             </p>
          </div>

          <p className="text-dim text-[10px] mt-8 uppercase tracking-[0.2em] animate-pulse">
            {'>'} CLICK CARTRIDGE TO LOAD_
          </p>
        </div>
      )}

      {/* HEADER: ESTADO DE JUEGO ACTIVO */}
      {selectedGame && (
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b-2 border-primary/30 pb-4 animate-in fade-in gap-4">
          <div className="text-center md:text-left">
            <span className="text-[10px] text-primary-dim uppercase tracking-widest block mb-1">CURRENTLY MOUNTED:</span>
            <h2 className="text-lg md:text-2xl text-primary font-bold uppercase tracking-widest drop-shadow-md leading-none">
              {selectedGame.title}
            </h2>
          </div>
          <button 
            onClick={() => setSelectedGame(null)}
            className="btn-primary text-[10px] py-3 px-6 w-full md:w-auto"
          >
            [ EJECT ]
          </button>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative min-h-100">
        
        {!selectedGame ? (
          // GRID: 1 columna en móvil (para ver las portadas grandes), 2 en tablet, 4 en PC
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
            {GAMES.map((game) => (
              <ArcadeCard 
                key={game.id} 
                game={game} 
                onClick={setSelectedGame} 
              />
            ))}
          </div>
        ) : (
          // REPRODUCTOR
          <div className="w-full max-w-5xl mx-auto animate-in fade-in zoom-in duration-300 pb-10">
             <ArcadePlayer key={selectedGame.id} game={selectedGame} />
             
             <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-dim uppercase bg-black/50 p-4 border border-primary-dim gap-3 text-center md:text-left">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <span>PLAYER 1: READY</span>
                  <span className="text-primary animate-blink">INSERT COIN: FREE</span>
                </div>
                <div>Status: Connected</div>
             </div>
          </div>
        )}
      </div>

    </div>
  );
};