import { Link } from 'react-router-dom';
import {
  BookOpen,
  Video,
  FileText,
  Calculator,
  Atom,
  Globe,
  Code,
  Palette,
  ArrowRight,
  Search,
  Filter,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

const subjects = [
  { icon: Calculator, name: 'Mathematics', count: 120, color: 'from-blue-500 to-blue-700' },
  { icon: Atom, name: 'Physics', count: 85, color: 'from-cyan-500 to-cyan-700' },
  { icon: Code, name: 'Computer Science', count: 150, color: 'from-navy-500 to-navy-700' },
  { icon: Globe, name: 'History', count: 60, color: 'from-amber-500 to-amber-700' },
  { icon: Palette, name: 'Arts & Design', count: 45, color: 'from-rose-500 to-rose-700' },
  { icon: FileText, name: 'Literature', count: 70, color: 'from-accent-500 to-accent-700' },
];

const resourceTypes = [
  { icon: FileText, name: 'PDF Guides', count: 230 },
  { icon: Video, name: 'Video Lectures', count: 180 },
  { icon: BookOpen, name: 'E-Books', count: 95 },
];

export default function StudyResources() {
  return (
    <>
      <PageHeader
        badge="Study Resources"
        title="Explore curated learning materials"
        subtitle="Browse a growing library of textbooks, video lectures, study guides, and reference materials across multiple subjects."
      />

      {/* Resource Types */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
            {resourceTypes.map((type) => (
              <div
                key={type.name}
                className="card-base card-hover flex items-center gap-4 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-accent-50">
                  <type.icon className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {type.name}
                  </h3>
                  <p className="text-sm text-navy-400">{type.count} available</p>
                </div>
              </div>
            ))}
          </div>

          {/* Search bar (visual) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-300" />
              <input
                type="text"
                placeholder="Search for resources, subjects, or topics..."
                className="input-field pl-12"
                aria-label="Search resources"
              />
            </div>
            <button className="btn-secondary">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          {/* Subject cards */}
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">
            Browse by Subject
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="group card-base card-hover overflow-hidden"
              >
                <div
                  className={`relative h-28 bg-gradient-to-br ${subject.color} p-5`}
                >
                  <subject.icon className="h-10 w-10 text-white/90" />
                  <span className="absolute bottom-3 right-4 text-xs font-semibold text-white/80">
                    {subject.count} resources
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {subject.name}
                  </h3>
                  <p className="mt-1 text-sm text-navy-500">
                    Guides, lectures, and practice materials
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="pb-20">
        <ComingSoon
          title="Full resource library coming soon"
          description="We're curating high-quality study materials for every subject. In the meantime, explore what we have and check back soon for a much larger collection."
        />
      </section>
    </>
  );
}
