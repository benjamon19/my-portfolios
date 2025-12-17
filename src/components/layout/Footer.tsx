import { FiGithub, FiLinkedin, FiTerminal, FiCpu, FiWifi } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="relative bg-dark mt-20 border-t-4 border-dim overflow-hidden">
      
      {/* HAZARD STRIPES */}
      <div 
        className="h-2 md:h-4 w-full border-b-2 md:border-b-4 border-black"
        style={{
            backgroundImage: 'repeating-linear-gradient(45deg, var(--color-primary), var(--color-primary) 10px, var(--color-dark) 10px, var(--color-dark) 20px)'
        }}
      ></div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* 1. SYSTEM STATS */}
        <div className="w-full md:w-auto text-center md:text-left font-mono order-2 md:order-1">
           <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-primary border-b-2 border-primary pb-2 w-fit mx-auto md:mx-0">
              <FiCpu className="text-xl animate-pulse" />
              <span className="text-sm md:text-lg font-bold tracking-widest">SYSTEM_LOGS</span>
           </div>
           
           <div className="space-y-2 text-xs text-dim">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 bg-primary animate-ping"></span>
                CORE_TEMP: <span className="text-text">NORMAL</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FiWifi />
                NET_STATUS: <span className="text-text animate-pulse">CONNECTED</span>
              </p>
              <p className="opacity-50">
                {'>'} UPTIME: 99.9%
              </p>
           </div>
        </div>

        {/* 2. GAME OVER TITLE */}
        <div className="text-center order-1 md:order-2 w-full">
          <h2 
            className="font-black text-primary mb-2"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', // Responsivo sin corchetes
              filter: 'drop-shadow(4px 4px 0px #000)' 
            }}
          >
            GAME OVER
          </h2>
          <p className="text-text text-xs tracking-widest uppercase mb-6 animate-pulse font-bold">
            INSERT COIN TO CONTINUE
          </p>
          <div className="text-xs text-dim font-mono border-t border-dim pt-4 w-fit mx-auto">
            © 2025 Benjamon19 <br/>
            ALL RIGHTS RESERVED
          </div>
        </div>
        
        {/* 3. BOTONES SOCIALES */}
        <div className="flex flex-col gap-4 w-full md:w-auto order-3">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto justify-center"
          >
            <FiGithub className="mr-2 text-lg" />
            <span>GITHUB</span>
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full md:w-auto justify-center bg-dark"
          >
            <FiLinkedin className="mr-2 text-lg" />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
      
      {/* EASTER EGG BAR */}
      <div className="w-full bg-dark border-t border-dim py-3 text-center">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-mono opacity-50 hover:opacity-100 transition-opacity cursor-help">
           <FiTerminal />
           <span>console.log("Made with React");</span>
        </div>
      </div>

    </footer>
  );
};