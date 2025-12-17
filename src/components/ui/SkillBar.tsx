import { motion } from 'framer-motion';

interface Props {
  name: string;
  level: number;
  color?: string; 
}

export const SkillBar = ({ name, level }: Props) => (
  <div className="mb-6 group">
    <div className="flex justify-between text-[10px] font-mono uppercase mb-2 text-primary">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    
    {/* Contenedor de la barra (Borde negro duro) */}
    <div className="h-4 bg-dark border-2 border-primary-dim p-0.5 relative">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        // CORREGIDO: Usamos una transición válida
        transition={{ duration: 1, ease: "circOut" }} 
        className="h-full bg-primary relative"
      >
        {/* CORREGIDO: h-0.5 en lugar de h-[2px] */}
        {/* Brillo superior para efecto volumen */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-white/30"></div>
      </motion.div>
    </div>
  </div>
);