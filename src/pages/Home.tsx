import { Link } from 'react-router-dom';
import {
  BookOpen,
  StickyNote,
  CalendarDays,
  Wrench,
  TrendingUp,
  Target,
  ArrowRight,
  Check,
  UserPlus,
  Search,
  BarChart3,
  Clock,
  Layers,
  Sparkles,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Zap,
  FolderTree,
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50/60 via-white to-white pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-accent-100/40 to-navy-100/40 blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-navy-100/30 blur-3xl animate-float-slow" />

        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Text content */}
            <div className="text-center lg:text-left">
              <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-4 py-1.5 text-xs font-semibold text-navy-600 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-accent-500" />
                Your all-in-one learning platform
              </div>

              <h1 className="animate-fade-in-up mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                Your Journey to{' '}
                <span className="text-gradient">Smarter Learning</span> Starts
                Here.
              </h1>

              <p className="animate-fade-in-up mt-6 mx-auto max-w-xl text-base leading-relaxed text-navy-500 sm:text-lg lg:mx-0">
                Study Space brings your learning resources, study tools,
                productivity, and academic goals together in one focused
                environment.
              </p>

              <div className="animate-fade-in-up mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Link to="/study-resources" className="btn-primary w-full sm:w-auto">
                  Explore Study Space
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/register" className="btn-secondary w-full sm:w-auto">
                  <GraduationCap className="h-4 w-4" />
                  Start Learning
                </Link>
              </div>

              {/* Stats */}
              <div className="animate-fade-in-up mt-12 grid grid-cols-3 gap-4 lg:gap-8">
                {[
                  { value: '500+', label: 'Resources' },
                  { value: '10k+', label: 'Students' },
                  { value: '4.9', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-navy-400 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual composition */}
            <div className="relative animate-fade-in hidden lg:block">
              <div className="relative mx-auto max-w-md">
                {/* Main card */}
                <div className="animate-float rounded-3xl bg-white p-6 shadow-2xl shadow-navy-900/10 border border-navy-50">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-navy-500 to-accent-600">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-display text-sm font-semibold text-navy-800">
                        Study Dashboard
                      </span>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-4">
                    {[
                      { label: 'Mathematics', value: 75, color: 'from-navy-400 to-navy-600' },
                      { label: 'Computer Science', value: 60, color: 'from-accent-400 to-accent-600' },
                      { label: 'Physics', value: 45, color: 'from-cyan-400 to-cyan-600' },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-medium text-navy-700">{bar.label}</span>
                          <span className="text-navy-400">{bar.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-navy-50 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${bar.color} transition-all duration-1000`}
                            style={{ width: `${bar.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating note card */}
                <div className="animate-float-slow absolute -bottom-8 -left-12 rounded-2xl bg-white p-4 shadow-xl shadow-navy-900/10 border border-navy-50 w-48">
                  <div className="flex items-center gap-2 mb-2">
                    <StickyNote className="h-4 w-4 text-amber-500" />
                    <span className="text-xs font-semibold text-navy-700">Quick Notes</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-navy-100 w-full" />
                    <div className="h-2 rounded-full bg-navy-100 w-3/4" />
                    <div className="h-2 rounded-full bg-navy-100 w-5/6" />
                  </div>
                </div>

                {/* Floating planner card */}
                <div className="animate-float absolute -top-6 -right-8 rounded-2xl bg-white p-4 shadow-xl shadow-navy-900/10 border border-navy-50 w-44">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarDays className="h-4 w-4 text-navy-500" />
                    <span className="text-xs font-semibold text-navy-700">Today's Plan</span>
                  </div>
                  <div className="space-y-2">
                    {['Review notes', 'Practice quiz', 'Read chapter 5'].map((task, i) => (
                      <div key={task} className="flex items-center gap-2">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                            i < 2
                              ? 'border-green-400 bg-green-400'
                              : 'border-navy-200'
                          }`}
                        >
                          {i < 2 && <Check className="h-2.5 w-2.5 text-white" />}
                        </div>
                        <span
                          className={`text-xs ${
                            i < 2 ? 'text-navy-300 line-through' : 'text-navy-600'
                          }`}
                        >
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating focus card */}
                <div className="animate-float-slow absolute bottom-12 -right-10 rounded-2xl bg-gradient-to-br from-navy-600 to-accent-700 p-4 shadow-xl shadow-navy-600/30 w-40 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4" />
                    <span className="text-xs font-semibold">Focus Timer</span>
                  </div>
                  <p className="font-display text-2xl font-bold">25:00</p>
                  <p className="text-xs text-navy-200">Pomodoro Session</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Study Space */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 text-xs font-semibold text-navy-600 mb-5">
                <Lightbulb className="h-3.5 w-3.5" />
                About Study Space
              </div>
              <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                One platform for your entire learning journey
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-500">
                Study Space is a centralized learning platform designed to help
                students study efficiently, organize resources, develop
                productive habits, and track their academic progress — all in
                one distraction-free environment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-500">
                Whether you're preparing for exams, managing multiple courses,
                or building better study routines, Study Space gives you the
                tools to learn smarter, not harder.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: FolderTree, text: 'Organized resources' },
                  { icon: ShieldCheck, text: 'Distraction-free zone' },
                  { icon: Clock, text: 'Better time management' },
                  { icon: Zap, text: 'Personalized experience' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-xl border border-navy-50 bg-navy-50/30 p-3"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                      <item.icon className="h-4.5 w-4.5 text-navy-600" />
                    </div>
                    <span className="text-sm font-medium text-navy-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-100/40 to-accent-100/40 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-2xl shadow-navy-900/20 overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-navy-400/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-navy-500">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        Study Space Platform
                      </h3>
                      <p className="text-xs text-navy-200">All-in-one learning hub</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: BookOpen, label: 'Resources', count: '500+' },
                      { icon: StickyNote, label: 'Notes', count: '1,200+' },
                      { icon: CalendarDays, label: 'Plans', count: 'Active' },
                      { icon: TrendingUp, label: 'Progress', count: 'Tracked' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm"
                      >
                        <item.icon className="h-5 w-5 text-accent-300 mb-2" />
                        <p className="font-display text-lg font-bold text-white">
                          {item.count}
                        </p>
                        <p className="text-xs text-navy-200">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-navy-200">
                        Weekly Study Goal
                      </span>
                      <span className="text-xs font-bold text-white">82%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-400 to-navy-300"
                        style={{ width: '82%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-navy-50/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy-600 shadow-sm border border-navy-50 mb-4">
              <Layers className="h-3.5 w-3.5" />
              Features
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Everything you need to learn smarter
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base text-navy-500">
              Powerful tools designed to streamline your study process and keep
              you focused on what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={BookOpen}
              title="Study Resources"
              description="Access curated study materials, textbooks, video lectures, and reference guides across subjects."
              to="/study-resources"
              accent="navy"
            />
            <FeatureCard
              icon={StickyNote}
              title="Notes & Materials"
              description="Create, organize, and search your study notes with a clean, distraction-free editor."
              to="/notes"
              accent="amber"
            />
            <FeatureCard
              icon={CalendarDays}
              title="Smart Study Planner"
              description="Plan your study sessions with an intelligent calendar that adapts to your schedule."
              to="/study-planner"
              accent="accent"
            />
            <FeatureCard
              icon={Wrench}
              title="Productivity Tools"
              description="Pomodoro timers, task managers, and focus tools to maximize your study efficiency."
              to="/productivity-tools"
              accent="cyan"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Progress Tracking"
              description="Visualize your study progress with detailed analytics and performance insights."
              to="/features/progress-tracking"
              accent="green"
            />
            <FeatureCard
              icon={Target}
              title="Focus & Study Sessions"
              description="Deep work sessions with ambient sounds, timers, and distraction blocking."
              to="/features/focus-sessions"
              accent="rose"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Study Space */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-semibold text-accent-700 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Why Study Space
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Why choose Study Space?
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base text-navy-500">
              We've built a platform that addresses the real challenges
              students face every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: FolderTree,
                title: 'All in one place',
                desc: 'No more juggling between apps. Everything you need is here.',
              },
              {
                icon: ShieldCheck,
                title: 'Distraction-free',
                desc: 'A clean, focused environment built for deep learning.',
              },
              {
                icon: Clock,
                title: 'Better time management',
                desc: 'Plan, track, and optimize how you spend your study time.',
              },
              {
                icon: BookOpen,
                title: 'Easy access',
                desc: 'All your materials organized and searchable in seconds.',
              },
              {
                icon: Zap,
                title: 'Personalized',
                desc: 'A consistent experience tailored to your learning style.',
              },
            ].map((benefit, i) => (
              <div
                key={benefit.title}
                className="group card-base card-hover p-6 text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-50 to-accent-50 transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-7 w-7 text-navy-600" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-navy-50/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy-600 shadow-sm border border-navy-50 mb-4">
              <Zap className="h-3.5 w-3.5" />
              How It Works
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Get started in three simple steps
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-navy-200 via-accent-200 to-navy-200" />

            {[
              {
                step: '01',
                icon: UserPlus,
                title: 'Create your account',
                desc: 'Sign up for free and set up your learning profile in under a minute.',
              },
              {
                step: '02',
                icon: Search,
                title: 'Explore resources & tools',
                desc: 'Browse study materials, notes, planners, and productivity tools.',
              },
              {
                step: '03',
                icon: BarChart3,
                title: 'Organize & track progress',
                desc: 'Build study plans, track your progress, and achieve your goals.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-100 to-accent-100 animate-pulse-soft" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg border border-navy-50">
                    <item.icon className="h-8 w-8 text-navy-600" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-navy-600 to-accent-600 text-xs font-bold text-white shadow-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent-600/15 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-navy-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-navy-100 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent-300" />
            Join thousands of students
          </div>

          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Make Every Study Session Count.
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-base text-navy-200 sm:text-lg">
            Build better habits, stay organized, and take control of your
            learning journey.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-800 shadow-xl transition-all duration-300 hover:bg-navy-50 hover:-translate-y-0.5"
            >
              Join Study Space
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
