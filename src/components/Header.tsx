import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, User, LogIn } from 'lucide-react';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import { dropdownNavItems } from '@/lib/navigation';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-sm shadow-navy-900/5 border-b border-navy-50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-18">
          {/* Left: Logo + Dropdown */}
          <div className="flex items-center gap-6">
            <Logo />
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-600 transition-all duration-200 hover:bg-navy-50"
                aria-label="Toggle navigation menu"
                aria-expanded={dropdownOpen}
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 animate-slide-down origin-top-left rounded-2xl border border-navy-50 bg-white p-2 shadow-xl shadow-navy-900/10">
                  <div className="px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">
                      Navigation
                    </p>
                  </div>
                  {dropdownNavItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-navy-50 text-navy-700'
                            : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                        }`}
                      >
                        <item.icon className="h-4.5 w-4.5 flex-shrink-0" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right: Social + Auth (desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <SocialIcons size="sm" />
            <div className="mx-1 h-6 w-px bg-navy-100" />
            <Link
              to="/register"
              className="rounded-full bg-gradient-to-r from-navy-600 to-accent-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-navy-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-navy-600/30 hover:-translate-y-0.5"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-1.5 rounded-full border border-navy-100 px-5 py-2 text-sm font-semibold text-navy-700 transition-all duration-300 hover:border-navy-300 hover:bg-navy-50"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-navy-50 md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-slide-down border-t border-navy-50 bg-white md:hidden">
          <div className="container-max px-4 py-4 space-y-1">
            {dropdownNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-navy-50 text-navy-700'
                      : 'text-navy-600 hover:bg-navy-50'
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-navy-50">
              <SocialIcons />
            </div>
            <div className="flex gap-3 pt-3">
              <Link
                to="/register"
                className="btn-primary flex-1"
              >
                <User className="h-4 w-4" />
                Register
              </Link>
              <Link
                to="/login"
                className="btn-secondary flex-1"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
