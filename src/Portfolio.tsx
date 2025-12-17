import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; 
import { ArcadeRoom } from './components/ArcadeRoom';
import { HeroGlitch } from './components/ui/HeroGlitch';
import { SkillBar } from './components/ui/SkillBar';
import { BentoCard } from './components/ui/BentoCard';
import { SectionTitle } from './components/ui/SectionTitle'; // Asegúrate de tener este (te lo pasé antes)
import { PROJECTS, SKILLS } from './data/portfolio';

export const Portfolio = () => {
  const [showArcade, setShowArcade] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden relative selection:bg-primary selection:text-dark font-mono text-text">
      
      {/* --- CAPAS DE FONDO --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Textura de puntos (Dithering) definida en index.css */}
        <div className="dither-overlay"></div>
        {/* Grilla muy sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      {/* --- NAVBAR (Estilo Bloque Pixelado) --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl">
        <div className="pixel-box px-6 py-3 flex justify-between items-center bg-surface shadow-[4px_4px_0_#000]">
          <span className="text-primary font-bold hidden md:block">BENJA.DEV_OS</span>
          <div className="flex gap-4 md:gap-8 mx-auto md:mx-0">
            {['home', 'projects', 'skills', 'contact'].map((item) => (
              <ScrollLink 
                key={item}
                to={item} 
                smooth={true} 
                duration={500} 
                className="text-primary-dim hover:text-primary uppercase text-[10px] md:text-xs font-bold tracking-widest cursor-pointer hover:underline decoration-2 underline-offset-4 decoration-primary"
                activeClass="text-primary"
                spy={true}
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      {/* --- SECTION 1: HERO --- */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 z-10 px-4">
        <HeroGlitch />
        
        {/* BOTONES DE ACCIÓN */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 items-center relative z-20">
          
          {/* Botón Scroll (Estilo Pixel Button) */}
          <ScrollLink 
            to="projects" 
            smooth={true} 
            className="btn-pixel cursor-pointer text-xs md:text-sm"
          >
            INITIALIZE_SYSTEM
          </ScrollLink>
          
          {/* Botón Arcade (Estilo Rojo/Alerta) */}
          <button 
            onClick={() => setShowArcade(true)}
            className="group relative px-8 py-3 bg-accent text-white font-bold uppercase tracking-widest text-xs md:text-sm transition-transform active:translate-y-1"
            style={{ boxShadow: 'inset -4px -4px 0px 0px #991b1b, 4px 4px 0px 0px #000' }}
          >
            <span className="flex items-center gap-2 animate-pulse">
              INSERT COIN <span className="w-2 h-4 bg-white animate-bounce"></span>
            </span>
          </button>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-primary-dim">SCROLL TO START</span>
          <div className="w-1 h-8 bg-primary-dim"></div> {/* Línea gruesa */}
        </motion.div>
      </section>

      {/* --- SECTION 2: PROJECTS --- */}
      <section id="projects" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <SectionTitle title="MISSION_LOG" subtitle="RECENT_DEPLOYMENTS" />

          {/* Grid de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <BentoCard 
                  className="h-full"
                  title={project.title}
                  badges={project.badges}
                  links={project.links}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden bg-black border-b-4 border-dark">
                    <img 
                      src={project.image} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-75 grayscale group-hover:grayscale-0 pixelated" 
                      alt={project.title} 
                    />
                    {/* Scanlines sobre la imagen */}
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative z-10 mt-auto pt-6">
                    <p className="text-text mb-6 text-xs leading-relaxed line-clamp-4 bg-dark/80 p-2 border border-primary-dim">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-[8px] font-bold bg-dark text-primary border border-primary px-1 py-0.5 uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SKILLS --- */}
      <section id="skills" className="py-32 px-4 relative z-10 bg-dark border-y-4 border-primary-dim">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="CHARACTER_STATS" subtitle="ABILITY_LEVELS" />
          
          {/* Layout estilo RPG Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Columna Izquierda: Info */}
            <div>
               <div className="pixel-box p-6 mb-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">LVL. 24</div>
                  <div className="text-[10px] text-primary-dim uppercase tracking-widest">Current Level</div>
               </div>
               <p className="text-sm text-text leading-loose font-mono text-justify">
                  {'>'} SYSTEM ANALYSIS:<br/>
                  Arquitectura optimizada para alto rendimiento. Especializado en ecosistemas React y desarrollo móvil híbrido.
               </p>
            </div>

            {/* Columna Derecha: Barras */}
            <div className="pixel-box p-8 bg-surface">
              {SKILLS.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level === "Advanced" ? 90 : skill.level === "Intermediate" ? 75 : 50} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CONTACT --- */}
      <section id="contact" className="py-32 text-center relative overflow-hidden z-10">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="pixel-box p-12 bg-surface"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8 text-primary drop-shadow-[4px_4px_0_#000]">
              NEW GAME+ ?
            </h2>
            <p className="text-text mb-12 text-sm md:text-base max-w-lg mx-auto">
              ¿Tienes una idea desafiante? Iniciemos el protocolo de desarrollo y creemos algo legendario.
            </p>
            
            <a 
              href="mailto:tuemail@ejemplo.com"
              className="btn-pixel text-sm md:text-base"
            >
              START_ADVENTURE
            </a>
          </motion.div>
          
          <footer className="mt-24 text-primary-dim text-[10px] uppercase tracking-widest">
             /// END OF LINE_
          </footer>
        </div>
      </section>

      {/* --- ARCADE ROOM (MODAL) --- */}
      <AnimatePresence>
        {showArcade && (
          <motion.div 
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 15 }} // Más rebote
            className="fixed inset-0 z-90 bg-dark overflow-y-auto"
          >
            {/* Botón cerrar estilo pixel */}
            <button 
              onClick={() => setShowArcade(false)}
              className="fixed top-6 right-6 z-100 bg-accent text-white border-4 border-white px-4 py-2 font-bold uppercase hover:bg-red-600 shadow-[4px_4px_0_#000] active:translate-y-1 active:shadow-none transition-all"
            >
              [X] EXIT
            </button>
            
            {/* Contenido */}
            <ArcadeRoom />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};