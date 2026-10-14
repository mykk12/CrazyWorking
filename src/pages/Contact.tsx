import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useToast } from '@/context/ToastContext';

export default function Contact() {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter your message';
    else if (form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    // Frontend prototype — simulate submission
    setTimeout(() => {
      setSending(false);
      setSent(true);
      showToast('Message sent! We\'ll get back to you soon.', 'success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@studyspace.edu',
      href: 'mailto:hello@studyspace.edu',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 010-2025',
      href: 'tel:+15550102025',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Learning Ave, Boston, MA 02101',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Fri, 9:00 AM – 6:00 PM EST',
    },
  ];

  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="We'd love to hear from you"
        subtitle="Have a question, suggestion, or just want to say hello? Reach out and our team will get back to you within 24 hours."
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="card-base p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-accent-50">
                      <info.icon className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="mt-1 block text-sm font-medium text-navy-800 hover:text-navy-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-navy-800">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="card-base p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="h-5 w-5 text-navy-600" />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Send us a message
                  </h3>
                </div>

                {sent && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 p-4 animate-fade-in">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <p className="text-sm font-medium text-green-700">
                      Thank you! Your message has been sent. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-700">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`input-field ${errors.name ? 'border-rose-300 bg-rose-50/30' : ''}`}
                        placeholder="Jane Doe"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-700">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`input-field ${errors.email ? 'border-rose-300 bg-rose-50/30' : ''}`}
                        placeholder="jane@example.com"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-navy-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={`input-field ${errors.subject ? 'border-rose-300 bg-rose-50/30' : ''}`}
                      placeholder="How can we help?"
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`input-field resize-none ${errors.message ? 'border-rose-300 bg-rose-50/30' : ''}`}
                      placeholder="Tell us more about your question or feedback..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {sending ? (
                      <>
                        <span className="h-4 w-4 animate-spin-slow rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-navy-400">
                    This is a frontend prototype — messages are not actually sent or stored.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
