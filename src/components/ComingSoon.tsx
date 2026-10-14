import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ComingSoon({
  title,
  description,
  icon,
}: ComingSoonProps) {
  return (
    <div className="container-max px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-20 text-center">
        <div className="relative mb-8 inline-flex">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-navy-50 to-accent-50">
            {icon ?? <Sparkles className="h-12 w-12 text-navy-500" />}
          </div>
          <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-navy-500 shadow-lg animate-pulse-soft">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-semibold text-accent-700 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          Coming Soon
        </div>

        <h1 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy-500">
          {description}
        </p>

        <Link
          to="/"
          className="btn-secondary mt-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
