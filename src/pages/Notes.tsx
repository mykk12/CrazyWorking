import { Link } from 'react-router-dom';
import {
  StickyNote,
  Plus,
  Search,
  Tag,
  Clock,
  ArrowRight,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

const sampleNotes = [
  {
    title: 'Calculus: Integration by Parts',
    subject: 'Mathematics',
    date: 'Oct 12, 2026',
    excerpt: 'The integration by parts formula is derived from the product rule for differentiation...',
    color: 'border-l-blue-400',
    tags: ['calculus', 'integration', 'exam-prep'],
  },
  {
    title: 'Data Structures: Binary Trees',
    subject: 'Computer Science',
    date: 'Oct 10, 2026',
    excerpt: 'A binary tree is a hierarchical data structure where each node has at most two children...',
    color: 'border-l-navy-400',
    tags: ['data-structures', 'trees', 'algorithms'],
  },
  {
    title: 'Newton\'s Laws of Motion',
    subject: 'Physics',
    date: 'Oct 8, 2026',
    excerpt: 'Newton\'s three laws describe the relationship between a body and the forces acting upon it...',
    color: 'border-l-cyan-400',
    tags: ['mechanics', 'forces', 'motion'],
  },
  {
    title: 'The French Revolution — Causes',
    subject: 'History',
    date: 'Oct 5, 2026',
    excerpt: 'The French Revolution (1789–1799) was caused by a combination of social, political, and economic factors...',
    color: 'border-l-amber-400',
    tags: ['history', 'europe', 'revolution'],
  },
];

export default function Notes() {
  return (
    <>
      <PageHeader
        badge="Notes"
        title="Your digital notebook"
        subtitle="Create, organize, and search your study notes with a clean, distraction-free editor designed for learning."
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Search & new note */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-300" />
              <input
                type="text"
                placeholder="Search your notes..."
                className="input-field pl-12"
                aria-label="Search notes"
              />
            </div>
            <button
              className="btn-primary"
              onClick={() => {}}
            >
              <Plus className="h-4 w-4" />
              New Note
            </button>
          </div>

          {/* Notes grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleNotes.map((note) => (
              <div
                key={note.title}
                className={`group card-base card-hover border-l-4 ${note.color} p-5`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600">
                    <StickyNote className="h-3 w-3" />
                    {note.subject}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-navy-400">
                    <Clock className="h-3 w-3" />
                    {note.date}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-navy-900 group-hover:text-navy-700 transition-colors">
                  {note.title}
                </h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed line-clamp-3">
                  {note.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-navy-50/50 px-2 py-0.5 text-xs text-navy-400"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Add new note card */}
            <button
              onClick={() => {}}
              className="group flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-navy-100 bg-navy-50/20 p-5 transition-all duration-300 hover:border-navy-300 hover:bg-navy-50/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 transition-transform duration-300 group-hover:scale-110">
                <Plus className="h-6 w-6 text-navy-400" />
              </div>
              <p className="mt-3 text-sm font-medium text-navy-500">
                Create a new note
              </p>
            </button>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <ComingSoon
          title="Note editor coming soon"
          description="We're building a powerful, distraction-free note editor with markdown support, syntax highlighting, and real-time sync. Your notes above are samples to preview the experience."
          icon={<StickyNote className="h-12 w-12 text-navy-500" />}
        />
      </section>
    </>
  );
}
