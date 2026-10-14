import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  accent?: 'navy' | 'accent' | 'green' | 'amber' | 'rose' | 'cyan';
}

const accentMap = {
  navy: {
    bg: 'from-navy-500 to-navy-700',
    glow: 'group-hover:shadow-navy-500/20',
    text: 'text-navy-600',
  },
  accent: {
    bg: 'from-accent-500 to-accent-700',
    glow: 'group-hover:shadow-accent-500/20',
    text: 'text-accent-600',
  },
  green: {
    bg: 'from-green-500 to-green-700',
    glow: 'group-hover:shadow-green-500/20',
    text: 'text-green-600',
  },
  amber: {
    bg: 'from-amber-500 to-amber-700',
    glow: 'group-hover:shadow-amber-500/20',
    text: 'text-amber-600',
  },
  rose: {
    bg: 'from-rose-500 to-rose-700',
    glow: 'group-hover:shadow-rose-500/20',
    text: 'text-rose-600',
  },
  cyan: {
    bg: 'from-cyan-500 to-cyan-700',
    glow: 'group-hover:shadow-cyan-500/20',
    text: 'text-cyan-600',
  },
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  to,
  accent = 'navy',
}: FeatureCardProps) {
  const colors = accentMap[accent];

  return (
    <Link
      to={to}
      className={`group card-base card-hover relative overflow-hidden p-6 ${colors.glow}`}
    >
      {/* Decorative gradient blob */}
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${colors.bg} opacity-5 transition-all duration-500 group-hover:opacity-10 group-hover:scale-125`}
      />

      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.bg} shadow-lg`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">
        {description}
      </p>

      <div
        className={`mt-4 flex items-center gap-1.5 text-sm font-medium ${colors.text} opacity-0 transition-all duration-300 group-hover:opacity-100`}
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
