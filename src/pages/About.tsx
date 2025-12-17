import { SectionTitle } from '../components/ui/SectionTitle';
import { PERSONAL_INFO } from '../data/portfolio';

export const About = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto font-mono">
        <SectionTitle title="USER_PROFILE" subtitle="IDENTITY_VERIFICATION" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* --- TEXTO BIO --- */}
          <div className="space-y-4 sm:space-y-6 text-text leading-relaxed text-sm sm:text-base lg:text-lg">
            <div className="pixel-box p-4 sm:p-6 bg-surface relative">
              {/* Decoración tipo chat */}
              <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4 bg-primary text-dark text-[10px] sm:text-xs font-bold px-2 py-1 uppercase border-2 border-dark">
                Message_Log.txt
              </div>
              
              <p className="wrap-break-word">
                {'>'} Init sequence... <br/>
                Hola, soy <strong className="text-primary bg-primary/10 px-1">{PERSONAL_INFO.name}</strong>. 
                Llevo programando desde que descubrí que podía doblegar la máquina a mi voluntad (casi siempre).
              </p>
              <p className="mt-3 sm:mt-4 wrap-break-word">
                Mi viaje comenzó con <span className="text-primary font-bold">Python</span>, automatizando scripts en la terminal. 
                Luego evolucioné al desarrollo frontend con <span className="text-primary font-bold">React</span> y 
                actualmente compilo arquitecturas móviles con <span className="text-primary font-bold">Flutter</span>.
              </p>
              <p className="mt-3 sm:mt-4 border-l-2 sm:border-l-4 border-primary pl-3 sm:pl-4 text-primary-dim italic text-xs sm:text-sm lg:text-base wrap-break-word">
                "Busco misiones que desafíen mis parámetros técnicos y me permitan renderizar interfaces de alto impacto."
              </p>
            </div>
          </div>

          {/* --- STATS SHEET (Estilo RPG) --- */}
          <div className="pixel-box p-4 sm:p-6 lg:p-8 bg-surface">
            <h3 className="text-base sm:text-lg lg:text-xl text-primary font-bold uppercase border-b-2 sm:border-b-4 border-dark pb-3 sm:pb-4 mb-4 sm:mb-6 tracking-wider sm:tracking-widest flex justify-between items-center wrap-break-word">
              <span>STATS</span>
              <span className="animate-pulse text-sm sm:text-base">///</span>
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-dashed border-primary/30 pb-2 gap-2">
                <span className="text-primary-dim truncate">LOCATION_</span>
                <span className="text-primary font-bold uppercase text-right wrap-break-word">{PERSONAL_INFO.location || "Calama, CL"}</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-primary/30 pb-2 gap-2">
                <span className="text-primary-dim truncate">EXP_POINTS_</span>
                <span className="text-primary font-bold text-right">3+ YEARS</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-primary/30 pb-2 gap-2">
                <span className="text-primary-dim truncate">CAFFEINE_LVL_</span>
                <span className="text-primary font-bold text-right">∞</span>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <p className="text-[10px] sm:text-xs text-primary-dim mb-3 sm:mb-4 uppercase tracking-wider sm:tracking-[0.2em] wrap-break-word">
                [ CORE_STACK_DISTRIBUTION ]
              </p>
              
              {/* Barra de progreso Segmentada - Responsive */}
              <div className="h-5 sm:h-6 w-full bg-dark border border-primary-dim sm:border-2 flex p-0.5 sm:p-1 gap-0.5 sm:gap-1">
                <div className="h-full bg-[#3776AB] w-[40%] relative group cursor-help">
                  <span className="absolute -top-7 sm:-top-8 left-0 bg-dark text-white text-[9px] sm:text-[10px] p-1 border border-white hidden group-hover:block whitespace-nowrap z-10">
                    Python 40%
                  </span>
                </div>
                <div className="h-full bg-primary w-[35%] relative group cursor-help">
                  <span className="absolute -top-7 sm:-top-8 left-0 bg-dark text-white text-[9px] sm:text-[10px] p-1 border border-white hidden group-hover:block whitespace-nowrap z-10">
                    JS/React 35%
                  </span>
                </div>
                <div className="h-full bg-[#02569B] w-[25%] relative group cursor-help">
                  <span className="absolute -top-7 sm:-top-8 right-0 bg-dark text-white text-[9px] sm:text-[10px] p-1 border border-white hidden group-hover:block whitespace-nowrap z-10">
                    Flutter 25%
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-[8px] sm:text-[9px] uppercase mt-2 text-primary-dim font-bold">
                <span>Python</span>
                <span>React</span>
                <span>Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};