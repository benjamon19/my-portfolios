import { useEffect, useState } from 'react';
import type { Game } from '../../data/data';

// (El bloque declare global sigue igual...)
declare global {
  interface Window {
    EJS_player: string;
    EJS_core: string;
    EJS_pathtodata: string;
    EJS_gameUrl: string;
    EJS_biosUrl?: string;
    EJS_startOnLoaded?: boolean;
    EJS_emulator?: any;
  }
}

interface Props {
  game: Game;
}

export const ArcadePlayer = ({ game }: Props) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
  }, [game]);

  const handleStart = () => {
    setIsReady(true);
  };

  useEffect(() => {
    if (isReady) {
      window.EJS_player = '#game-display';
      window.EJS_core = 'arcade';
      window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
      window.EJS_gameUrl = game.rom;
      if (game.bios) {
        window.EJS_biosUrl = game.bios;
      } else {
        delete window.EJS_biosUrl;
      }
      window.EJS_startOnLoaded = true;

      const script = document.createElement('script');
      script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        try {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
          // @ts-ignore
          delete window.EJS_emulator; 
        } catch (e) {
          console.error("Cleanup error", e);
        }
      };
    }
  }, [isReady, game]);

  return (
    // CAMBIO 1: `aspect-video` lo hace panorámico (más ancho).
    // CAMBIO 2: Estructura de borde pixelado usando boxShadow en lugar de border.
    <div 
      className="relative w-full aspect-video bg-black mt-8"
      style={{
        boxShadow: '-4px 0 0 0 #050505, 4px 0 0 0 #050505, 0 -4px 0 0 #050505, 0 4px 0 0 #050505, 0 0 0 4px #fbbf24' // Borde Negro + Borde Dorado Exterior
      }}
    >
      
      {/* EFECTO CRT SCANLINES (Siempre visible, da textura de pantalla) */}
      <div className="absolute inset-0 scanlines pointer-events-none z-50 opacity-30"></div>
      
      {/* EFECTO REFLEJO DE PANTALLA (Vignette sutil en las esquinas) */}
      <div className="absolute inset-0 z-40 pointer-events-none bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.6)_100%)]"></div>

      {!isReady ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
          
          {/* IMAGEN DE FONDO (Ahora iluminada y vibrante) */}
          <div className="absolute inset-0 z-10">
            <img 
              src={game.cover} 
              className="w-full h-full object-cover pixelated opacity-80 contrast-125 brightness-110 blur-[2px] scale-105" 
              alt="Cover"
            />
            {/* Tinte Ámbar sutil para unificar colores */}
            <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20"></div>
          </div>
          
          {/* UI CENTRAL */}
          <div className="relative z-30 flex flex-col items-center">
            
            {/* Título con sombra neón */}
            <h2 className="text-3xl md:text-5xl text-primary mb-8 uppercase text-center font-black tracking-widest leading-normal text-glow drop-shadow-[4px_4px_0_#000]">
              {game.title}
            </h2>
            
            {/* Botón INSERT COIN (Estilo 8-Bits Duro) */}
            <button
              onClick={handleStart}
              className="relative group bg-primary text-black px-8 py-4 uppercase font-bold text-xl tracking-widest hover:bg-[#fcd34d] active:translate-y-1 transition-all"
              style={{
                boxShadow: 'inset -4px -4px 0px 0px #b45309, 4px 4px 0px 0px #000'
              }}
            >
              <span className="animate-pulse">INSERT COIN</span>
              
              {/* Decoración de flechas a los lados del botón */}
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-4 h-4 border-t-4 border-r-4 border-primary rotate-45 animate-bounce delay-75"></div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-4 h-4 border-t-4 border-r-4 border-primary rotate-225 animate-bounce"></div>
            </button>
            
            <p className="mt-8 text-xs text-white bg-black/50 px-4 py-1 font-mono tracking-[0.5em] backdrop-blur-sm">
              1 CREDIT(S)
            </p>
          </div>
        </div>
      ) : (
        // CONTENEDOR DEL JUEGO
        <div className="relative w-full h-full bg-black">
           {/* El juego carga aquí */}
           <div id="game-display" className="w-full h-full pixelated"></div>
           
           {/* Marco decorativo interno cuando se juega */}
           <div className="absolute inset-0 pointer-events-none border border-white/10 z-50 mix-blend-overlay"></div>
        </div>
      )}
    </div>
  );
};