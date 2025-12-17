import type { IconType } from 'react-icons';

interface Props {
  name: string;
  icon: IconType;
}

export const TechBadge = ({ name, icon: Icon }: Props) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-surface text-text border border-primary-dim hover:bg-primary hover:text-dark hover:border-primary transition-colors cursor-default select-none">
      <Icon className="text-sm" />
      <span className="text-[10px] font-mono uppercase tracking-wide">
        {name}
      </span>
    </div>
  );
};