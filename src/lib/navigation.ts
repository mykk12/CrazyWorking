import {
  Home,
  Info,
  BookOpen,
  StickyNote,
  CalendarDays,
  Wrench,
  Phone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const dropdownNavItems: NavItem[] = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'About Us', path: '/about', icon: Info },
  { label: 'Study Resources', path: '/study-resources', icon: BookOpen },
  { label: 'Notes', path: '/notes', icon: StickyNote },
  { label: 'Study Planner', path: '/study-planner', icon: CalendarDays },
  { label: 'Productivity Tools', path: '/productivity-tools', icon: Wrench },
  { label: 'Contact Us', path: '/contact', icon: Phone },
];

export const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Study Resources', path: '/study-resources' },
      { label: 'Study Planner', path: '/study-planner' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Notes', path: '/notes' },
      { label: 'Productivity Tools', path: '/productivity-tools' },
      { label: 'Progress Tracking', path: '/features/progress-tracking' },
      { label: 'Focus Sessions', path: '/features/focus-sessions' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Register', path: '/register' },
      { label: 'Login', path: '/login' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
];
