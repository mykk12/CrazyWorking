import { Target, Headphones, Timer, Volume2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

export default function FocusSessions() {
  return (
    <>
      <PageHeader
        badge="Feature"
        title="Deep focus study sessions"
        subtitle="Enter a distraction-free zone with ambient sounds, customizable timers, and session tracking designed for deep work."
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card-base card-hover p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-accent-600 shadow-lg mb-5">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900">
                Focus Mode
              </h3>
              <p className="mt-3 text-sm text-navy-500 leading-relaxed">
                Block distractions and enter a dedicated study zone. Choose from
                Pomodoro, deep work, or custom session lengths with gentle
                break reminders.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-navy-900">25:00</p>
                  <p className="text-xs text-navy-400">Focus</p>
                </div>
                <div className="h-8 w-px bg-navy-100" />
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-navy-900">5:00</p>
                  <p className="text-xs text-navy-400">Break</p>
                </div>
                <div className="h-8 w-px bg-navy-100" />
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-navy-900">4x</p>
                  <p className="text-xs text-navy-400">Rounds</p>
                </div>
              </div>
            </div>

            <div className="card-base card-hover p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-navy-600 shadow-lg mb-5">
                <Headphones className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900">
                Ambient Sounds
              </h3>
              <p className="mt-3 text-sm text-navy-500 leading-relaxed">
                Choose from rain, cafe, forest, or lo-fi beats to create the
                perfect study atmosphere. Mix and match to find your ideal
                focus soundtrack.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Rain', 'Cafe', 'Forest', 'Lo-Fi'].map((sound) => (
                  <div
                    key={sound}
                    className="flex items-center gap-2 rounded-xl border border-navy-50 bg-navy-50/30 p-3"
                  >
                    <Volume2 className="h-4 w-4 text-navy-500" />
                    <span className="text-sm font-medium text-navy-700">{sound}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Timer, title: 'Session History', desc: 'Review past focus sessions and see your total study time.' },
              { icon: Target, title: 'Streak Tracking', desc: 'Build daily focus streaks and stay motivated with milestones.' },
              { icon: Volume2, title: 'Custom Mixes', desc: 'Create your own ambient sound blends for the perfect vibe.' },
            ].map((item) => (
              <div key={item.title} className="card-base card-hover p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 mb-4">
                  <item.icon className="h-5 w-5 text-navy-600" />
                </div>
                <h4 className="font-display text-sm font-semibold text-navy-900">{item.title}</h4>
                <p className="mt-1.5 text-sm text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <ComingSoon
          title="Focus sessions coming soon"
          description="We're building a full-featured focus mode with ambient sounds, session tracking, and streaks. For now, try the Pomodoro timer on the Productivity Tools page!"
          icon={<Target className="h-12 w-12 text-navy-500" />}
        />
      </section>
    </>
  );
}
