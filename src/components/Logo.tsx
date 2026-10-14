import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export default function Logo({
  variant = 'dark',
  showText = true,
}: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';

  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 group"
      aria-label="Study Space home"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-accent-600 shadow-lg shadow-navy-600/20 transition-transform duration-300 group-hover:scale-105">
        <GraduationCap className="h-6 w-6 text-white" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display text-lg font-bold ${textColor}`}>
            Study Space
          </span>
          <span
            className={`text-[10px] font-medium ${
              variant === 'light' ? 'text-navy-200' : 'text-navy-400'
            }`}
          >
            Your Space. Your Pace.
          </span>
        </div>
      )}
    </Link>
  );
}
