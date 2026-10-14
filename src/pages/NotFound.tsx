import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-navy-50/60 to-white px-4 pt-20">
      <div className="text-center">
        <h1 className="font-display text-7xl font-bold text-gradient sm:text-9xl">
          404
        </h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-navy-900 sm:text-2xl">
          Page not found
        </h2>
        <p className="mt-3 text-sm text-navy-500 max-w-sm">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
