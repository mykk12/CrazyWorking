import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="Empowering students to learn smarter"
        subtitle="Study Space was created with a simple mission: give students a single, focused platform where they can organize, plan, and track their entire learning journey."
      />

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To provide students with an all-in-one platform that simplifies learning, boosts productivity, and helps them achieve academic success.',
                color: 'from-navy-500 to-navy-700',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'A world where every student has access to organized, efficient, and personalized learning tools regardless of their background.',
                color: 'from-accent-500 to-accent-700',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Simplicity, accessibility, and student-first design guide everything we build. We believe learning should be joyful, not stressful.',
                color: 'from-rose-500 to-rose-700',
              },
            ].map((card) => (
              <div key={card.title} className="card-base card-hover p-8">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} shadow-lg`}
                >
                  <card.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-navy-900 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-accent-600/15 blur-3xl" />
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: Users, value: '10,000+', label: 'Active Students' },
              { icon: BookOpen, value: '500+', label: 'Study Resources' },
              { icon: TrendingUp, value: '85%', label: 'Improved Grades' },
              { icon: Award, value: '4.9/5', label: 'User Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm mb-3">
                  <stat.icon className="h-6 w-6 text-accent-300" />
                </div>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-navy-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              What makes us different
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base text-navy-500">
              We're not just another study app. We're a complete learning
              environment built by students, for students.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: 'Built by students',
                desc: 'We understand the challenges because we\'ve been there. Every feature solves a real problem.',
              },
              {
                icon: ShieldCheck,
                title: 'Privacy-first',
                desc: 'Your data belongs to you. We use industry-standard encryption and never sell your information.',
              },
              {
                icon: Target,
                title: 'Goal-oriented',
                desc: 'Every tool is designed to help you reach a specific academic goal, not just look pretty.',
              },
              {
                icon: BookOpen,
                title: 'Comprehensive',
                desc: 'From notes to planners to focus tools — everything works together in one place.',
              },
              {
                icon: TrendingUp,
                title: 'Data-driven',
                desc: 'Track your progress with real metrics so you can see what works and what doesn\'t.',
              },
              {
                icon: Heart,
                title: 'Always free',
                desc: 'Core features will always be free for students. Premium tools are optional and affordable.',
              },
            ].map((item) => (
              <div key={item.title} className="card-base card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50">
                    <item.icon className="h-5.5 w-5.5 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-navy-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-50/40">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-navy-600 to-accent-700 p-8 sm:p-12 text-center shadow-2xl shadow-navy-600/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to transform your learning?
            </h2>
            <p className="relative mt-3 text-navy-100">
              Join Study Space today and take the first step toward smarter studying.
            </p>
            <Link
              to="/register"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-800 shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
