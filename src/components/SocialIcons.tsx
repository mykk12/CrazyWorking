import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/context/ToastContext';
import type { LucideIcon } from 'lucide-react';

interface SocialIconsProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

const socials: { Icon: LucideIcon; label: string }[] = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Youtube, label: 'YouTube' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Twitter, label: 'X' },
];

export default function SocialIcons({
  variant = 'dark',
  size = 'md',
}: SocialIconsProps) {
  const { showToast } = useToast();

  const handleClick = (label: string) => {
    showToast(`${label} — Coming Soon!`);
  };

  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const btnSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';

  const baseColor =
    variant === 'light'
      ? 'text-navy-200 hover:text-white hover:bg-white/10'
      : 'text-navy-400 hover:text-navy-700 hover:bg-navy-50';

  return (
    <div className="flex items-center gap-1.5">
      {socials.map(({ Icon, label }) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={`flex ${btnSize} items-center justify-center rounded-full transition-all duration-200 ${baseColor}`}
          aria-label={`${label} — Coming Soon`}
          title={`${label} — Coming Soon`}
        >
          <Icon className={iconSize} />
        </button>
      ))}
    </div>
  );
}
