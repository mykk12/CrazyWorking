import { CalendarDays, Clock, Check, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

const daysInMonth = 31;
const firstDayOffset = 2; // October 2026 starts on a Thursday (index 4, but we use 0=Sun)
const today = 14;

const studySessions = [
  { day: 14, title: 'Calculus Review', time: '10:00 AM', duration: '90 min', color: 'bg-blue-500' },
  { day: 14, title: 'CS Lab Practice', time: '2:00 PM', duration: '60 min', color: 'bg-navy-500' },
  { day: 15, title: 'Physics Problem Set', time: '9:00 AM', duration: '45 min', color: 'bg-cyan-500' },
  { day: 16, title: 'History Reading', time: '4:00 PM', duration: '30 min', color: 'bg-amber-500' },
  { day: 20, title: 'Exam Prep: Math', time: '10:00 AM', duration: '120 min', color: 'bg-rose-500' },
];

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function StudyPlanner() {
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOffset; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <>
      <PageHeader
        badge="Study Planner"
        title="Plan your study sessions smartly"
        subtitle="Organize your study time with an intelligent calendar that helps you balance subjects, track sessions, and stay on top of your goals."
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <div className="card-base p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    October 2026
                  </h3>
                  <div className="flex gap-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-navy-100 text-navy-500 transition-colors hover:bg-navy-50">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-navy-100 text-navy-500 transition-colors hover:bg-navy-50">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="pb-2 text-center text-xs font-semibold text-navy-400"
                    >
                      {day}
                    </div>
                  ))}
                  {calendarDays.map((day, i) => {
                    const sessions = day ? studySessions.filter((s) => s.day === day) : [];
                    const isToday = day === today;
                    return (
                      <div
                        key={i}
                        className={`min-h-[60px] rounded-lg border p-1.5 text-xs transition-colors sm:min-h-[80px] ${
                          day
                            ? isToday
                              ? 'border-navy-400 bg-navy-50/50'
                              : 'border-navy-50 hover:border-navy-100 hover:bg-navy-50/30'
                            : 'border-transparent'
                        }`}
                      >
                        {day && (
                          <>
                            <span
                              className={`block font-medium ${
                                isToday ? 'text-navy-700' : 'text-navy-500'
                              }`}
                            >
                              {day}
                            </span>
                            <div className="mt-1 space-y-1">
                              {sessions.map((s, idx) => (
                                <div
                                  key={idx}
                                  className={`hidden sm:block truncate rounded px-1 py-0.5 text-[10px] text-white ${s.color}`}
                                >
                                  {s.title}
                                </div>
                              ))}
                              {sessions.length > 0 && (
                                <div className="flex gap-0.5 sm:hidden">
                                  {sessions.map((_, idx) => (
                                    <span
                                      key={idx}
                                      className={`h-1.5 w-1.5 rounded-full ${sessions[idx].color}`}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Upcoming sessions */}
            <div className="space-y-4">
              <div className="card-base p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-navy-600" />
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    Upcoming Sessions
                  </h3>
                </div>
                <div className="space-y-3">
                  {studySessions.slice(0, 4).map((session, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-navy-50 p-3"
                    >
                      <div
                        className={`mt-0.5 h-3 w-3 flex-shrink-0 rounded-full ${session.color}`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-navy-800">
                          {session.title}
                        </p>
                        <div className="mt-1 flex items-center gap-3 text-xs text-navy-400">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3" />
                            Oct {session.day}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {session.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    Weekly Goal
                  </h3>
                  <span className="text-sm font-bold text-navy-600">14/20h</span>
                </div>
                <div className="h-3 rounded-full bg-navy-50 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-navy-500 to-accent-500 transition-all duration-1000"
                    style={{ width: '70%' }}
                  />
                </div>
                <p className="mt-3 text-xs text-navy-400">
                  70% of your weekly study goal completed. Keep going!
                </p>
              </div>

              <button
                onClick={() => {}}
                className="btn-primary w-full"
              >
                <Plus className="h-4 w-4" />
                Add Study Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <ComingSoon
          title="Smart scheduling coming soon"
          description="We're adding AI-powered scheduling suggestions, recurring sessions, reminders, and calendar sync. The planner above is a preview of what's coming."
          icon={<CalendarDays className="h-12 w-12 text-navy-500" />}
        />
      </section>
    </>
  );
}
