import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from '@/context/ToastContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import StudyResources from '@/pages/StudyResources';
import Notes from '@/pages/Notes';
import StudyPlanner from '@/pages/StudyPlanner';
import ProductivityTools from '@/pages/ProductivityTools';
import Contact from '@/pages/Contact';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import ProgressTracking from '@/pages/ProgressTracking';
import FocusSessions from '@/pages/FocusSessions';
import FocusTimer from '@/pages/FocusTimer';
import LegalPage from '@/pages/LegalPage';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/study-resources" element={<StudyResources />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/study-planner" element={<StudyPlanner />} />
            <Route path="/productivity-tools" element={<ProductivityTools />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features/progress-tracking" element={<ProgressTracking />} />
            <Route path="/features/focus-sessions" element={<FocusSessions />} />
            <Route path="/focus-timer" element={<FocusTimer />} />
            <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="/terms-of-service" element={<LegalPage type="terms" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
