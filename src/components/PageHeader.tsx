interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50/80 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-100/30 blur-3xl" />
      <div className="absolute -top-12 left-1/4 h-48 w-48 rounded-full bg-navy-100/40 blur-3xl" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy-600 shadow-sm border border-navy-50 mb-5">
            {badge}
          </div>
        )}
        <h1 className="animate-fade-in-up font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-in-up mt-4 mx-auto max-w-2xl text-base leading-relaxed text-navy-500 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
