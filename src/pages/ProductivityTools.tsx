import { useState, useEffect, useRef } from 'react';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  CheckSquare,
  Square,
  Plus,
  Target,
  Zap,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

interface Task {
  id: number;
  text: string;
  done: boolean;
}

export default function ProductivityTools() {
  const [timerMode, setTimerMode] = useState<'focus' | 'break'>('focus');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Review calculus notes', done: true },
    { id: 2, text: 'Complete physics problem set', done: false },
    { id: 3, text: 'Read chapter 5 — Data Structures', done: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const switchMode = (mode: 'focus' | 'break') => {
    setTimerMode(mode);
    setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
    setIsRunning(false);
  };

  const reset = () => {
    setTimeLeft(timerMode === 'focus' ? 25 * 60 : 5 * 60);
    setIsRunning(false);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  const addTask = () => {
    const text = newTask.trim();
    if (!text) return;
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }]);
    setNewTask('');
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = timerMode === 'focus'
    ? ((25 * 60 - timeLeft) / (25 * 60)) * 100
    : ((5 * 60 - timeLeft) / (5 * 60)) * 100;

  const completedTasks = tasks.filter((t) => t.done).length;

  return (
    <>
      <PageHeader
        badge="Productivity Tools"
        title="Tools that keep you focused"
        subtitle="Pomodoro timers, task managers, and focus tools designed to help you make the most of every study session."
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Pomodoro Timer */}
            <div className="card-base p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-navy-600" />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Focus Timer
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/focus-timer"
                    className="flex items-center gap-1 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-600 transition-all hover:bg-navy-100"
                  >
                    Full Timer
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={() => setSoundOn((v) => !v)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-400 transition-colors hover:bg-navy-50 hover:text-navy-600"
                    aria-label={soundOn ? 'Mute sounds' : 'Unmute sounds'}
                  >
                    {soundOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Mode tabs */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => switchMode('focus')}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-all ${
                    timerMode === 'focus'
                      ? 'bg-gradient-to-r from-navy-600 to-accent-600 text-white shadow-lg shadow-navy-600/20'
                      : 'bg-navy-50 text-navy-500 hover:bg-navy-100'
                  }`}
                >
                  Focus (25 min)
                </button>
                <button
                  onClick={() => switchMode('break')}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-all ${
                    timerMode === 'break'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/20'
                      : 'bg-navy-50 text-navy-500 hover:bg-navy-100'
                  }`}
                >
                  Break (5 min)
                </button>
              </div>

              {/* Timer display */}
              <div className="relative flex flex-col items-center">
                <div className="relative h-48 w-48">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="#eef2ff"
                      strokeWidth="12"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke={timerMode === 'focus' ? '#3d5bf0' : '#22c55e'}
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 90}`}
                      strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-4xl font-bold text-navy-900 tabular-nums">
                      {String(minutes).padStart(2, '0')}:
                      {String(seconds).padStart(2, '0')}
                    </span>
                    <span className="mt-1 text-xs font-medium text-navy-400 uppercase tracking-wide">
                      {timerMode === 'focus' ? 'Focus Time' : 'Break Time'}
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={() => setIsRunning((v) => !v)}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-navy-600 to-accent-600 text-white shadow-lg shadow-navy-600/25 transition-all hover:scale-105 active:scale-95"
                    aria-label={isRunning ? 'Pause timer' : 'Start timer'}
                  >
                    {isRunning ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={reset}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 text-navy-500 transition-all hover:bg-navy-50"
                    aria-label="Reset timer"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Task Manager */}
            <div className="card-base p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-navy-600" />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Task Manager
                  </h3>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  {completedTasks}/{tasks.length} done
                </span>
              </div>

              {/* Add task */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTask()}
                  placeholder="Add a new task..."
                  className="input-field"
                  aria-label="Add new task"
                />
                <button
                  onClick={addTask}
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-accent-600 text-white shadow-lg transition-all hover:scale-105"
                  aria-label="Add task"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              {/* Task list */}
              <div className="space-y-2 max-h-[320px] overflow-y-auto">
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex w-full items-center gap-3 rounded-xl border border-navy-50 p-3 text-left transition-all hover:border-navy-100 hover:bg-navy-50/30"
                  >
                    {task.done ? (
                      <CheckSquare className="h-5 w-5 flex-shrink-0 text-green-500" />
                    ) : (
                      <Square className="h-5 w-5 flex-shrink-0 text-navy-300" />
                    )}
                    <span
                      className={`text-sm ${
                        task.done
                          ? 'text-navy-300 line-through'
                          : 'text-navy-700'
                      }`}
                    >
                      {task.text}
                    </span>
                  </button>
                ))}
                {tasks.length === 0 && (
                  <p className="text-center text-sm text-navy-400 py-8">
                    No tasks yet. Add one above to get started!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Additional tools preview */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Zap, title: 'Focus Music', desc: 'Ambient sounds and lo-fi beats for deep work sessions.' },
              { icon: Target, title: 'Goal Tracker', desc: 'Set weekly study goals and track your streaks over time.' },
              { icon: Timer, title: 'Session Analytics', desc: 'See how much time you spend on each subject and optimize.' },
            ].map((tool) => (
              <div key={tool.title} className="card-base card-hover p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-accent-50 mb-4">
                  <tool.icon className="h-6 w-6 text-navy-600" />
                </div>
                <h4 className="font-display text-base font-semibold text-navy-900">
                  {tool.title}
                </h4>
                <p className="mt-2 text-sm text-navy-500">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <ComingSoon
          title="More tools on the way"
          description="We're building focus music, goal tracking, session analytics, and more. The Pomodoro timer and task manager above are fully functional — try them out!"
          icon={<Zap className="h-12 w-12 text-navy-500" />}
        />
      </section>
    </>
  );
}
