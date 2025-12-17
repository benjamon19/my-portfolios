interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-text drop-shadow-[2px_2px_0px_var(--color-primary)] sm:drop-shadow-[3px_3px_0px_var(--color-primary)] wrap-break-word">
        {title}<span className="text-primary animate-blink">_</span>
      </h2>
      {subtitle && (
        <p className="text-[10px] xs:text-xs sm:text-sm text-primary-dim uppercase tracking-wider sm:tracking-widest mt-2 wrap-break-word">
          {subtitle}
        </p>
      )}
    </div>
  );
};