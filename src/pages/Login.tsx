import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  LogIn,
  Sparkles,
} from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function Login() {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    if (!form.password) e.password = 'Please enter your password';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Frontend prototype — simulate login
    setTimeout(() => {
      setLoading(false);
      showToast('Login functionality is a frontend prototype. Authentication backend not configured.', 'info');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-navy-50/60 via-white to-accent-50/30 pt-20 pb-12">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-navy-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-100/30 blur-3xl" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <div className="card-base animate-fade-in-up p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-accent-600 shadow-lg">
                <LogIn className="h-7 w-7 text-white" />
              </div>
              <h1 className="font-display text-2xl font-bold text-navy-900">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-navy-500">
                Log in to continue your learning journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-navy-300" />
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`input-field pl-11 ${errors.email ? 'border-rose-300 bg-rose-50/30' : ''}`}
                    placeholder="jane@example.com"
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-navy-300" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className={`input-field pl-11 pr-11 ${errors.password ? 'border-rose-300 bg-rose-50/30' : ''}`}
                    placeholder="••••••••"
                    aria-invalid={!!errors.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-300 transition-colors hover:text-navy-500"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-rose-500">{errors.password}</p>
                )}
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                    className="h-4 w-4 rounded border-navy-200 text-navy-600 focus:ring-navy-400"
                  />
                  <span className="text-sm text-navy-500">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => showToast('Password reset is not available in this prototype.', 'info')}
                  className="text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin-slow rounded-full border-2 border-white/30 border-t-white" />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-navy-400">
                This is a frontend prototype — authentication is not connected to a backend.
              </p>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-navy-500">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-semibold text-navy-600 hover:text-navy-700 transition-colors"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-navy-400">
            <Sparkles className="h-3.5 w-3.5" />
            <Link to="/" className="hover:text-navy-600 transition-colors">
              Back to Study Space
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
