import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Pin,
  PinOff,
  Pencil,
  Trash2,
  Plus,
  Check,
  X,
  Volume2,
  VolumeX,
  Clock,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

interface Preset {
  id: string;
  minutes: number;
  pinned: boolean;
}

const STORAGE_KEY = 'focus-timer-presets';
const MAX_PRESETS = 6;

const defaultPresets: Preset[] = [
  { id: 'p1', minutes: 5, pinned: false },
  { id: 'p2', minutes: 10, pinned: false },
  { id: 'p3', minutes: 15, pinned: false },
  { id: 'p4', minutes: 30, pinned: false },
  { id: 'p5', minutes: 45, pinned: false },
  { id: 'p6', minutes: 60, pinned: false },
];

function loadPresets(): Preset[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Preset[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return defaultPresets;
}

export default function FocusTimer() {
  const [presets, setPresets] = useState<Preset[]>(loadPresets);
  const [selectedId, setSelectedId] = useState<string>(() => {
    const initial = loadPresets();
    return initial[0]?.id ?? 'p1';
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const initial = loadPresets();
    return (initial[0]?.minutes ?? 25) * 60;
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [customMinutes, setCustomMinutes] = useState('');
  const [soundOn, setSoundOn] = useState(true);

  const selectedPreset = presets.find((p) => p.id === selectedId) ?? presets[0];
  const totalSeconds = (selectedPreset?.minutes ?? 25) * 60;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
  }, [presets]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if (soundOn) {
              try {
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.frequency.value = 880;
                gain.gain.setValueAtTime(0.3, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
                osc.start();
                osc.stop(ctx.currentTime + 1.5);
              } catch {
                // ignore audio errors
              }
            }
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
  }, [isRunning, soundOn]);

  const selectPreset = useCallback((preset: Preset) => {
    setSelectedId(preset.id);
    setTimeLeft(preset.minutes * 60);
    setIsRunning(false);
  }, []);

  const togglePin = (id: string) => {
    setPresets((prev) =>
      prev.map((p) => (p.id === id ? { ...p, pinned: !p.pinned } : p)),
    );
  };

  const startEdit = (preset: Preset) => {
    setEditingId(preset.id);
    setEditValue(String(preset.minutes));
  };

  const confirmEdit = () => {
    const val = parseInt(editValue, 10);
    if (isNaN(val) || val < 1 || val > 180) return;
    setPresets((prev) =>
      prev.map((p) =>
        p.id === editingId ? { ...p, minutes: val } : p,
      ),
    );
    if (editingId === selectedId) {
      setTimeLeft(val * 60);
      setIsRunning(false);
    }
    setEditingId(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const removePreset = (id: string) => {
    setPresets((prev) => {
      if (prev.length <= 1) return prev;
      const filtered = prev.filter((p) => p.id !== id);
      if (id === selectedId && filtered.length > 0) {
        setSelectedId(filtered[0].id);
        setTimeLeft(filtered[0].minutes * 60);
        setIsRunning(false);
      }
      return filtered;
    });
  };

  const addCustomPreset = () => {
    const val = parseInt(customMinutes, 10);
    if (isNaN(val) || val < 1 || val > 180) return;
    const newPreset: Preset = {
      id: `c${Date.now()}`,
      minutes: val,
      pinned: false,
    };
    setPresets((prev) => {
      let next = [...prev];
      if (next.length >= MAX_PRESETS) {
        const lastUnpinnedIdx = [...next]
          .reverse()
          .findIndex((p) => !p.pinned);
        if (lastUnpinnedIdx !== -1) {
          const realIdx = next.length - 1 - lastUnpinnedIdx;
          next = next.filter((_, i) => i !== realIdx);
        }
      }
      next.push(newPreset);
      return next;
    });
    setSelectedId(newPreset.id);
    setTimeLeft(val * 60);
    setIsRunning(false);
    setCustomMinutes('');
  };

  const reset = () => {
    setTimeLeft(totalSeconds);
    setIsRunning(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0;

  return (
    <>
      <PageHeader
        badge="Focus Timer"
        title="Your distraction-free study timer"
        subtitle="Pick a preset, hit start, and dive into deep work. Customize presets to match your study rhythm."
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Timer Display */}
            <div className="card-base p-6 sm:p-8 flex flex-col items-center">
              <div className="flex w-full items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-navy-600" />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Focus Timer
                  </h3>
                </div>
                <button
                  onClick={() => setSoundOn((v) => !v)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-400 transition-colors hover:bg-navy-50 hover:text-navy-600"
                  aria-label={soundOn ? 'Mute sounds' : 'Unmute sounds'}
                >
                  {soundOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                </button>
              </div>

              {/* Circular Timer */}
              <div className="relative h-48 w-48 sm:h-56 sm:w-56">
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
                    stroke="#3d5bf0"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 90}`}
                    strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-4xl font-bold text-navy-900 tabular-nums sm:text-5xl">
                    {String(minutes).padStart(2, '0')}:
                    {String(seconds).padStart(2, '0')}
                  </span>
                  <span className="mt-1 text-xs font-medium text-navy-400 uppercase tracking-wide">
                    {selectedPreset?.minutes ?? 0} min session
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

              {timeLeft === 0 && !isRunning && (
                <div className="mt-4 animate-fade-in rounded-xl bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                  Session complete! Take a break.
                </div>
              )}
            </div>

            {/* Presets Panel */}
            <div className="card-base p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-navy-600" />
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  Timer Presets
                </h3>
              </div>

              {/* Preset grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {presets.map((preset) => {
                  const isSelected = preset.id === selectedId;
                  const isEditing = preset.id === editingId;
                  return (
                    <div
                      key={preset.id}
                      className={`group relative flex flex-col items-center justify-center rounded-xl border-2 p-4 transition-all duration-200 ${
                        isSelected
                          ? 'border-navy-500 bg-navy-50/50 shadow-md shadow-navy-500/10'
                          : 'border-navy-100 hover:border-navy-300 hover:bg-navy-50/30'
                      }`}
                    >
                      {/* Pin button */}
                      <button
                        onClick={() => togglePin(preset.id)}
                        className={`absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-md transition-all ${
                          preset.pinned
                            ? 'text-accent-600 opacity-100'
                            : 'text-navy-300 opacity-0 group-hover:opacity-100 hover:text-navy-500'
                        }`}
                        aria-label={preset.pinned ? 'Unpin preset' : 'Pin preset'}
                      >
                        {preset.pinned ? (
                          <Pin className="h-3.5 w-3.5 fill-current" />
                        ) : (
                          <PinOff className="h-3.5 w-3.5" />
                        )}
                      </button>

                      {isEditing ? (
                        <div className="flex flex-col items-center gap-2 py-1">
                          <input
                            type="number"
                            min={1}
                            max={180}
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') confirmEdit();
                              if (e.key === 'Escape') cancelEdit();
                            }}
                            autoFocus
                            className="w-16 rounded-lg border border-navy-300 px-2 py-1 text-center text-lg font-bold text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                          />
                          <div className="flex gap-1">
                            <button
                              onClick={confirmEdit}
                              className="flex h-7 w-7 items-center justify-center rounded-md bg-green-500 text-white transition-colors hover:bg-green-600"
                              aria-label="Confirm edit"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="flex h-7 w-7 items-center justify-center rounded-md bg-navy-100 text-navy-500 transition-colors hover:bg-navy-200"
                              aria-label="Cancel edit"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => selectPreset(preset)}
                            className="flex flex-col items-center"
                          >
                            <span className="font-display text-2xl font-bold text-navy-900">
                              {preset.minutes}
                            </span>
                            <span className="text-xs font-medium text-navy-400">
                              min
                            </span>
                          </button>

                          {/* Hover actions: edit & remove */}
                          <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                startEdit(preset);
                              }}
                              className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-navy-400 shadow-sm border border-navy-100 transition-colors hover:bg-navy-50 hover:text-navy-600"
                              aria-label="Edit preset"
                            >
                              <Pencil className="h-3 w-3" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removePreset(preset.id);
                              }}
                              disabled={presets.length <= 1}
                              className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-navy-400 shadow-sm border border-navy-100 transition-colors hover:bg-rose-50 hover:text-rose-500 disabled:opacity-40 disabled:cursor-not-allowed"
                              aria-label="Remove preset"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Add custom preset */}
              <div className="mt-6 rounded-xl border-2 border-dashed border-navy-100 bg-navy-50/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Plus className="h-4 w-4 text-navy-500" />
                  <p className="text-sm font-medium text-navy-600">
                    Add custom preset
                  </p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={1}
                    max={180}
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addCustomPreset()}
                    placeholder="Minutes (1–180)"
                    className="input-field flex-1"
                    aria-label="Custom preset minutes"
                  />
                  <button
                    onClick={addCustomPreset}
                    disabled={!customMinutes || parseInt(customMinutes, 10) < 1}
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-accent-600 text-white shadow-lg transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    aria-label="Add custom preset"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-2 text-xs text-navy-400">
                  New presets replace the last unpinned one when the limit of {MAX_PRESETS} is reached. Pin presets to protect them.
                </p>
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-navy-400">
                <span className="flex items-center gap-1.5">
                  <Pin className="h-3 w-3 fill-current text-accent-600" />
                  Pinned — safe from auto-removal
                </span>
                <span className="flex items-center gap-1.5">
                  <Pencil className="h-3 w-3" />
                  Edit
                </span>
                <span className="flex items-center gap-1.5">
                  <Trash2 className="h-3 w-3" />
                  Remove
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
