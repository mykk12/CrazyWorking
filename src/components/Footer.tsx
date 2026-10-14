import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, FileText } from 'lucide-react';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import { footerLinks } from '@/lib/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-600/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-navy-500/10 blur-3xl" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200">
              Your Space. Your Pace. Your Future. A centralized learning
              platform designed to help students study efficiently and achieve
              their academic goals.
            </p>
            <div className="mt-6">
              <SocialIcons variant="light" />
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-navy-200 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info bar */}
        <div className="flex flex-col gap-4 border-t border-navy-700/50 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-navy-200 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-navy-400" />
              hello@studyspace.edu
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-navy-400" />
              +1 (555) 010-2025
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-navy-400" />
              123 Learning Ave, Boston, MA
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-navy-700/50 py-6 sm:flex-row">
          <p className="text-xs text-navy-300">
            &copy; {year} Study Space. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="flex items-center gap-1.5 text-xs text-navy-300 transition-colors hover:text-white"
            >
              <Shield className="h-3.5 w-3.5" />
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="flex items-center gap-1.5 text-xs text-navy-300 transition-colors hover:text-white"
            >
              <FileText className="h-3.5 w-3.5" />
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
