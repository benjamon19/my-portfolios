import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('SENDING');

    // REEMPLAZA ESTOS VALORES CON LOS DE TU PANEL DE EMAILJS
    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Ej: "service_xyz"
      'YOUR_TEMPLATE_ID',  // Ej: "template_abc"
      formRef.current,
      'YOUR_PUBLIC_KEY'    // Ej: "user_123456"
    ).then(() => {
        setStatus('SUCCESS');
        formRef.current?.reset();
        // Resetear estado después de 5 segundos
        setTimeout(() => setStatus('IDLE'), 5000);
      }, (error) => {
        console.error(error);
        setStatus('ERROR');
      });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title inline - responsive */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-text drop-shadow-[2px_2px_0px_var(--color-primary)] sm:drop-shadow-[3px_3px_0px_var(--color-primary)] wrap-break-word">
            ESTABLISH_UPLINK<span className="text-primary animate-blink">_</span>
          </h2>
          <p className="text-[10px] xs:text-xs sm:text-sm text-primary-dim uppercase tracking-wider sm:tracking-widest mt-2 wrap-break-word">
            SEND_TRANSMISSION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          
          {/* --- COLUMNA IZQUIERDA: INFO --- */}
          <div className="pixel-box p-4 sm:p-6 lg:p-8 bg-surface h-fit">
            <h3 className="text-base sm:text-lg lg:text-xl text-primary font-bold uppercase mb-4 sm:mb-6 border-b-2 border-[#334155] pb-2 wrap-break-word">
              CHANNEL_INFO
            </h3>
            <div className="space-y-6 sm:space-y-8 text-xs sm:text-sm font-mono text-gray-300">
              <p className="leading-relaxed wrap-break-word">
                Actualmente estoy disponible para proyectos freelance y oportunidades full-time. 
                Si tienes una misión clase S, iniciemos la comunicación.
              </p>
              
              <div className="flex items-center gap-3 sm:gap-4 text-primary">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary flex items-center justify-center bg-black shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] shrink-0">
                  <FiMail size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider sm:tracking-widest">
                    DIRECT_MSG
                  </span>
                  <span className="font-bold text-white select-all text-xs sm:text-sm break-all">
                    tuemail@ejemplo.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-primary">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary flex items-center justify-center bg-black shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] shrink-0">
                  <FiMapPin size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider sm:tracking-widest">
                    BASE_COORD
                  </span>
                  <span className="font-bold text-white text-xs sm:text-sm">
                    Calama, Chile
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: FORMULARIO TERMINAL --- */}
          <div className="relative">
            {/* Overlay de Éxito */}
            {status === 'SUCCESS' && (
              <div className="absolute inset-0 z-10 bg-black/90 flex flex-col items-center justify-center text-center p-4 sm:p-6 border-2 border-green-500 animate-in fade-in">
                <FiCheckCircle className="text-4xl sm:text-5xl text-green-500 mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl text-green-500 font-bold uppercase mb-2 wrap-break-word">
                  Transmission Sent
                </h3>
                <p className="text-gray-400 text-xs">Stand by for response...</p>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[10px] sm:text-xs text-primary uppercase tracking-wider sm:tracking-widest font-bold block">
                  {'>'} SENDER_ID (NAME)
                </label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="ENTER NAME..."
                  disabled={status === 'SENDING'}
                  className="w-full bg-dark border-2 border-[#334155] p-2.5 sm:p-3 text-white placeholder-gray-700 focus:border-primary focus:outline-none font-mono text-xs sm:text-sm transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[10px] sm:text-xs text-primary uppercase tracking-wider sm:tracking-widest font-bold block">
                  {'>'} FREQUENCY (EMAIL)
                </label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="ENTER EMAIL..."
                  disabled={status === 'SENDING'}
                  className="w-full bg-dark border-2 border-[#334155] p-2.5 sm:p-3 text-white placeholder-gray-700 focus:border-primary focus:outline-none font-mono text-xs sm:text-sm transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[10px] sm:text-xs text-primary uppercase tracking-wider sm:tracking-widest font-bold block">
                  {'>'} DATA_PACKET (MESSAGE)
                </label>
                <textarea 
                  rows={5}
                  name="message"
                  required
                  placeholder="TYPE MESSAGE..."
                  disabled={status === 'SENDING'}
                  className="w-full bg-dark border-2 border-[#334155] p-2.5 sm:p-3 text-white placeholder-gray-700 focus:border-primary focus:outline-none font-mono text-xs sm:text-sm transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {status === 'ERROR' && (
                <div className="flex items-center gap-2 text-red-500 text-[10px] sm:text-xs font-bold bg-red-500/10 p-2 border border-red-500 wrap-break-word">
                  <FiAlertCircle className="shrink-0" /> 
                  <span>ERROR: SIGNAL LOST. TRY AGAIN.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'SENDING'}
                className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-2.5 sm:py-3"
              >
                <span className="flex items-center justify-center gap-2">
                  {status === 'SENDING' ? 'TRANSMITTING...' : 'TRANSMIT_DATA'} 
                  {status === 'IDLE' && <FiSend className="group-hover:translate-x-1 transition-transform" />}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};