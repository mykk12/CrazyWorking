import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { useToast } from '@/context/ToastContext';

export default function Register() {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    else if (form.name.trim().length < 2) e.name = 'Name must be at least 2 characters';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    if (!form.password) e.password = 'Please enter a password';
    else if (form.password.length < 8)
      e.password = 'Password must be at least 8 characters';
    if (form.confirmPassword !== form.password)
      e.confirmPassword = 'Passwords do not match';
    if (!form.terms)
      e.terms = 'Please accept the terms and conditions to continue';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Frontend prototype — simulate registration
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      showToast('Account created successfully! Welcome to Study Space.', 'success');
    }, 1800);
  };

  const passwordStrength = () => {
    let strength = 0;
    if (form.password.length >= 8) strength++;
    if (/[A-Z]/.test(form.password)) strength++;
    if (/[0-9]/.test(form.password)) strength++;
    if (/[^A-Za-z0-9]/.test(form.password)) strength++;
    return strength;
  };

  const strengthLabels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-rose-400', 'bg-rose-400', 'bg-amber-400', 'bg-blue-400', 'bg-green-400'];

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-navy-50/60 to-white px-4 pt-20">
        <div className="card-base animate-scale-in max-w-md p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 mb-5">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <h2 className="font-display text-2xl font-bold text-navy-900">
            Welcome to Study Space!
          </h2>
          <p className="mt-3 text-sm text-navy-500">
            Your account has been created successfully. Start exploring study
            resources, tools, and planners to begin your learning journey.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link to="/" className="btn-primary w-full">
              Go to Homepage
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/login" className="btn-ghost w-full">
              Continue to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-navy-50/60 via-white to-accent-50/30 pt-20 pb-12">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-accent-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-navy-100/30 blur-3xl" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <div className="card-base animate-fade-in-up p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-accent-600 shadow-lg">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h1 className="font-display text-2xl font-bold text-navy-900">
                Create your account
              </h1>
              <p className="mt-2 text-sm text-navy-500">
                Join thousands of students learning smarter with Study Space
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-navy-300" />
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`input-field pl-11 ${errors.name ? 'border-rose-300 bg-rose-50/30' : ''}`}
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                )}
              </div>

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
                {form.password && (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                            i < passwordStrength() ? strengthColors[passwordStrength()] : 'bg-navy-100'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-navy-400">
                      {strengthLabels[passwordStrength()]}
                    </p>
                  </div>
                )}
                {errors.password && (
                  <p className="mt-1 text-xs text-rose-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-navy-300" />
                  <input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    className={`input-field pl-11 pr-11 ${errors.confirmPassword ? 'border-rose-300 bg-rose-50/30' : ''}`}
                    placeholder="••••••••"
                    aria-invalid={!!errors.confirmPassword}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-300 transition-colors hover:text-navy-500"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-rose-500">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-navy-200 text-navy-600 focus:ring-navy-400"
                  />
                  <span className="text-sm text-navy-500">
                    I agree to the{' '}
                    <Link to="/terms-of-service" className="font-medium text-navy-600 hover:text-navy-700 underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" className="font-medium text-navy-600 hover:text-navy-700 underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-xs text-rose-500">{errors.terms}</p>
                )}
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
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-navy-400">
                This is a frontend prototype — accounts are not actually created or stored.
              </p>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-navy-500">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-semibold text-navy-600 hover:text-navy-700 transition-colors"
                >
                  Login here
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
