import { Link } from 'react-router-dom';
import { BentoCard } from '../components/ui/BentoCard';
import { TechBadge } from '../components/ui/TechBadge';
import { HeroGlitch } from '../components/ui/HeroGlitch';
import { ArcadeRoom } from '../components/ArcadeRoom';
import { SKILLS, PROJECTS } from '../data/portfolio';

export const Home = () => {
  const featuredProject = PROJECTS[0]; 

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32 mb-0 overflow-x-hidden px-4 sm:px-6 lg:px-8">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-[85dvh] flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700 pt-10 sm:pt-8 md:pt-0">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 border-2 border-[#334155] bg-[#1e293b] px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest mb-6 sm:mb-8 md:mb-10 text-gray-300 rounded-sm">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e] rounded-full"></span>
          <span className="whitespace-nowrap">System Status: Online</span>
        </div>

        {/* Glitch Title & Intro */}
        <HeroGlitch />
        
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16 w-full sm:w-auto max-w-md sm:max-w-none">
          <Link to="/projects" className="btn-primary w-full sm:w-auto text-center justify-center py-3 sm:py-2.5 md:py-3 text-sm sm:text-base">
            VIEW_PROJECTS
          </Link>
          <Link to="/contact" className="btn-secondary w-full sm:w-auto text-center justify-center py-3 sm:py-2.5 md:py-3 text-sm sm:text-base">
            CONTACT_ME
          </Link>
        </div>
      </section>

      {/* --- BENTO GRID (PREVIEW) --- */}
      <section>
        {/* Header Decorativo */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
           <div className="h-px bg-[#334155] flex-1"></div>
           <h2 className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-400 font-bold uppercase tracking-wider sm:tracking-[0.2em] text-center whitespace-nowrap px-2">
             SYSTEM_MODULES
           </h2>
           <div className="h-px bg-[#334155] flex-1"></div>
        </div>

        {/* GRID SYSTEM RESPONSIVE - Añadido padding-top para dar espacio a badges que sobresalen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-auto md:auto-rows-[300px] pt-8 md:pt-12">
          
          {/* Skills Card */}
          <BentoCard className="md:col-span-1 md:row-span-2 bg-surface min-h-75 sm:min-h-87.5 md:min-h-0" title="TECH_STACK">
            <div className="flex flex-wrap gap-2 content-start mt-4 sm:mt-5 md:mt-6 pb-4">
              {SKILLS.map(skill => (
                <TechBadge key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </BentoCard>

          {/* Featured Project Card - REMOVIDO overflow-hidden para permitir que badges sobresalgan */}
          <BentoCard 
              className="md:col-span-2 md:row-span-2 group/project cursor-pointer relative h-75 sm:h-100 md:h-auto" 
              title="FEATURED_WORK"
              badges={featuredProject.badges}
          >
              {/* Contenedor de imagen con overflow-hidden INTERNO */}
              <div className="absolute inset-0 z-0 bg-black overflow-hidden">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title} 
                  className="w-full h-full object-cover opacity-60 md:opacity-40 group-hover/project:opacity-100 transition-all duration-500 grayscale group-hover/project:grayscale-0 pixelated" 
                />
                {/* Gradiente mejorado para legibilidad */}
                <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-[#020617]/50 to-transparent"></div>
              </div>
              
              {/* Contenido con más padding bottom para que el texto no se corte */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-5 md:p-6 pb-6 sm:pb-7 md:pb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 drop-shadow-md wrap-break-word leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-300 md:text-gray-400 text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3 md:line-clamp-2 max-w-lg wrap-break-word leading-relaxed">
                    {featuredProject.description}
                  </p>
              </div>
          </BentoCard>
        </div>
      </section>

      {/* --- ARCADE ROOM SECTION --- */}
      <section className="w-full relative pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        
        {/* Luz ambiental */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <ArcadeRoom />
        </div>
      </section>

    </div>
  );
};