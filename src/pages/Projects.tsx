import { BentoCard } from '../components/ui/BentoCard';
import { PROJECTS } from '../data/portfolio';

export const Projects = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title inline - responsive */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-text drop-shadow-[2px_2px_0px_var(--color-primary)] sm:drop-shadow-[3px_3px_0px_var(--color-primary)] wrap-break-word">
            PROJECT_DATABASE<span className="text-primary animate-blink">_</span>
          </h2>
          <p className="text-[10px] xs:text-xs sm:text-sm text-primary-dim uppercase tracking-wider sm:tracking-widest mt-2 wrap-break-word">
            ARCHIVED_DEPLOYMENTS_2024-2025
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <BentoCard 
              key={project.id} 
              className="h-full" 
              delay={`${index * 0.1}s`}
              title={project.title}
              badges={project.badges}
              links={{
                repo: project.links?.repo,
                demo: project.links?.demo
              }}
            >
              {/* Contenido Visual (Imagen + Descripcion) */}
              <div className="flex flex-col h-full">
                {/* Imagen responsiva con ratios adaptables */}
                <div className="h-40 sm:h-44 md:h-48 lg:h-52 bg-black border-b-2 sm:border-b-4 border-dark overflow-hidden relative group/img mb-4 sm:mb-6">
                  <img 
                    src={project.image} 
                    className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500 pixelated" 
                    alt={project.title} 
                  />
                  <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
                </div>

                {/* Descripción con texto responsivo */}
                <div className="flex-1 flex flex-col">
                  <p className="text-text text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-6 font-mono">
                    {project.description}
                  </p>
                  
                  {/* Stack Tags responsivos */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {project.stack.slice(0, 3).map(tech => (
                      <span 
                        key={tech} 
                        className="text-[8px] sm:text-[9px] uppercase px-1 sm:px-1.5 py-0.5 border border-primary-dim text-primary-dim whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </div>
  );
};