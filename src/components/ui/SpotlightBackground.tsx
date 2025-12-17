import { useRef, useState } from 'react';

export const SpotlightBackground = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="fixed inset-0 z-0 overflow-hidden bg-dark"
    >
      {/* Grilla Base (Dorado muy tenue) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" 
      />

      {/* El Foco */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(251, 191, 36, 0.08), transparent 40%)`,
        }}
      />
    </div>
  );
};