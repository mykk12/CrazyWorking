import { TrendingUp, BarChart3, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

export default function ProgressTracking() {
  return (
    <>
      <PageHeader
        badge="Feature"
        title="Track your academic progress"
        subtitle="Visualize your study progress with detailed analytics, performance insights, and goal tracking that keeps you motivated."
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {[
              { icon: Target, label: 'Study Streak', value: '12 days', color: 'from-orange-500 to-orange-700' },
              { icon: BarChart3, label: 'Total Hours', value: '147h', color: 'from-navy-500 to-navy-700' },
              { icon: Award, label: 'Goals Met', value: '23/30', color: 'from-green-500 to-green-700' },
              { icon: TrendingUp, label: 'Avg Score', value: '88%', color: 'from-accent-500 to-accent-700' },
            ].map((stat) => (
              <div key={stat.label} className="card-base card-hover p-6 text-center">
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg mb-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="font-display text-2xl font-bold text-navy-900">{stat.value}</p>
                <p className="mt-1 text-sm text-navy-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="card-base p-8">
            <h3 className="font-display text-lg font-semibold text-navy-900 mb-6">
              Weekly Study Hours
            </h3>
            <div className="flex items-end justify-between gap-2 h-48">
              {[
                { day: 'Mon', hours: 3 },
                { day: 'Tue', hours: 5 },
                { day: 'Wed', hours: 2 },
                { day: 'Thu', hours: 4 },
                { day: 'Fri', hours: 6 },
                { day: 'Sat', hours: 3 },
                { day: 'Sun', hours: 1 },
              ].map((bar) => (
                <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full items-end justify-center" style={{ height: '160px' }}>
                    <div
                      className="w-full max-w-[40px] rounded-t-lg bg-gradient-to-t from-navy-600 to-accent-500 transition-all duration-1000 hover:from-navy-700 hover:to-accent-600"
                      style={{ height: `${(bar.hours / 6) * 100}%` }}
                      title={`${bar.hours} hours`}
                    />
                  </div>
                  <span className="text-xs text-navy-400">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <ComingSoon
          title="Detailed analytics coming soon"
          description="We're building comprehensive progress dashboards with subject-level insights, trend analysis, and AI-powered study recommendations. The stats above are sample data to preview the experience."
          icon={<TrendingUp className="h-12 w-12 text-navy-500" />}
        />
      </section>
    </>
  );
}
