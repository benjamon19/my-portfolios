import { motion } from 'framer-motion';

export const HeroGlitch = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 overflow-hidden select-none">
      
      {/* BADGE */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-3 py-1 mb-4 sm:mb-6 border-2 border-transparent bg-dark"
        style={{ boxShadow: '-2px -2px 0 #b45309, 2px 2px 0 #fbbf24' }}
      >
        <span className="font-mono text-[10px] sm:text-xs md:text-sm text-primary tracking-wider sm:tracking-[0.2em] animate-pulse whitespace-nowrap">
          ● SYSTEM_READY
        </span>
      </motion.div>
      
      {/* TÍTULO RESPONSIVE: 
          text-4xl (36px) en móvil pequeño
          text-5xl (48px) en móvil
          text-6xl (60px) en tablet
          text-7xl (72px) en tablet grande
          text-8xl (96px) en desktop
          text-9xl (128px) en desktop grande
      */}
      <h1 
        className="
          w-full text-center
          text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
          font-bold uppercase leading-none tracking-tighter 
          text-transparent bg-clip-text bg-primary 
          drop-shadow-[2px_2px_0px_#b45309] md:drop-shadow-[3px_3px_0px_#b45309] lg:drop-shadow-[4px_4px_0px_#b45309]
          py-2 sm:py-3 md:py-4
          wrap-break-word
        "
      >
        Benjamín Flores
      </h1>
      
      {/* SUBTÍTULO */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-6 font-mono text-[10px] xs:text-xs sm:text-sm md:text-base text-text uppercase tracking-wider sm:tracking-widest leading-relaxed text-center wrap-break-word"
      >
        {'>'} Full Stack Architect &{' '}
        <span className="inline-block px-1 font-bold bg-primary/10 text-primary">
          Pixel Engineer
        </span>
      </motion.p>

    </div>
  );
};