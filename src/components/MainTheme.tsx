import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Exercise, ExerciseCategory } from '../types';
import { exercises, sweetCatMessages } from '../data/exercises';
import { ExerciseCard } from './ExerciseCard';
import {
  CatStretching,
  CatCurled,
  CatCheering,
  FlamingoEmblem,
} from './CatIllustrations';

interface MainThemeProps {
  onReplayIntro: () => void;
}

export const MainTheme: React.FC<MainThemeProps> = ({ onReplayIntro }) => {
  const [activeTab, setActiveTab] = useState<'all' | ExerciseCategory>('all');
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [catMessageIndex, setCatMessageIndex] = useState(0);

  const toggleComplete = (id: string) => {
    setCompletedIds((prev) => {
      const isAlreadyCompleted = prev.includes(id);
      const next = isAlreadyCompleted
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      if (!isAlreadyCompleted) {
        try {
          confetti({
            particleCount: 25,
            spread: 45,
            origin: { y: 0.7 },
            colors: ['#f472b6', '#fb7185', '#fed7e2', '#e9d5ff'],
            ticks: 120,
            gravity: 0.9,
          });
        } catch {
          // safe fallback
        }
      }

      return next;
    });
  };

  const handleNextCatMessage = () => {
    setCatMessageIndex((prev) => (prev + 1) % sweetCatMessages.length);
  };

  const filteredExercises = exercises.filter((ex) => {
    if (activeTab === 'all') return true;
    return ex.category === activeTab;
  });

  const kalcaExercises = exercises.filter((ex) => ex.category === 'kalca');
  const coreExercises = exercises.filter((ex) => ex.category === 'core');

  const completedCount = completedIds.length;
  const totalCount = exercises.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-[#FFF8FA] to-[#FDF2F5] text-slate-800 relative overflow-x-hidden selection:bg-pink-100 selection:text-pink-900 pb-16">
      {/* Subtle ambient decorative shapes: soft hearts and stars floating slowly */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30 select-none">
        <div className="absolute top-16 left-6 text-pink-300 animate-soft-float text-sm">✦</div>
        <div className="absolute top-48 right-8 text-rose-300 animate-soft-float text-xs" style={{ animationDelay: '1.2s' }}>✧</div>
        <div className="absolute top-96 left-5 text-purple-200 animate-soft-float text-xs" style={{ animationDelay: '2.5s' }}>✦</div>
        <div className="absolute bottom-80 right-6 text-pink-300 animate-soft-float text-sm" style={{ animationDelay: '1.8s' }}>✧</div>
        <div className="absolute bottom-36 left-8 text-rose-200 animate-soft-float text-xs" style={{ animationDelay: '0.6s' }}>✦</div>
      </div>

      {/* Mobile container - centered for 360px-430px */}
      <div className="relative z-10 max-w-md mx-auto px-4 pt-safe">
        {/* Top Minimal Brand Bar */}
        <header className="pt-4 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white shadow-xs flex items-center justify-center border border-pink-100/80 p-1">
              <FlamingoEmblem className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-800 tracking-tight block">
                Tatlı Adımlar
              </span>
              <span className="text-[10px] text-pink-600 font-normal block">
                Zarif & Nazik Rehber
              </span>
            </div>
          </div>

          {/* Interactive small cat note toggle */}
          <button
            type="button"
            onClick={handleNextCatMessage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-pink-100 shadow-xs hover:bg-pink-50/70 active:scale-95 transition-all text-xs font-medium text-pink-700 cursor-pointer"
            aria-label="Kedi mesajını değiştir"
          >
            <span className="text-xs">🐾</span>
            <span className="text-[11px]">Küçük Not</span>
          </button>
        </header>

        {/* Section 7 — Main Header */}
        <div className="mt-4 mb-5 text-center px-2">
          <h1 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight leading-snug">
            Biraz da güzel şeyler için
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xs mx-auto">
            Umarım yüzünde küçücük de olsa bir gülümseme bırakır.
          </p>
        </div>

        {/* Subtle Cat Greeting Box */}
        <div className="mb-5 bg-gradient-to-r from-pink-50/80 via-white to-purple-50/50 rounded-2xl p-3.5 border border-pink-100/70 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <CatStretching className="w-14 h-12" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-700 leading-relaxed italic">
                "{sweetCatMessages[catMessageIndex]}"
              </p>
            </div>
          </div>
        </div>

        {/* Workout Progress Indicator */}
        <div className="mb-5 bg-white rounded-2xl p-3.5 border border-pink-100/80 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center text-rose-500">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <span>Egzersiz Takibi</span>
                <span className="text-[11px] font-medium text-rose-600 bg-rose-50 px-2 py-0.2 rounded-full">
                  {completedCount} / {totalCount}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {completedCount === totalCount
                  ? 'Tüm hareketleri tamamladın, tebrikler!'
                  : 'Kendi temponda, keyifle ilerle'}
              </p>
            </div>
          </div>

          <div className="w-16 text-right">
            <span className="text-xs font-bold text-rose-600 tabular-nums">
              %{progressPercent}
            </span>
            <div className="w-full h-1.5 bg-pink-100/70 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-rose-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Section 8 — Clean Category Filter Tabs (Strictly NO Emojis) */}
        <div className="mb-4 p-1 bg-pink-100/50 rounded-2xl flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tümü ({exercises.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kalca')}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'kalca'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kalça Egzersizleri ({kalcaExercises.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('core')}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'core'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Karın & Core ({coreExercises.length})
          </button>
        </div>

        {/* Category Description */}
        <div className="mb-3 px-1">
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            {activeTab === 'all' && 'Egzersiz Listesi'}
            {activeTab === 'kalca' && 'Kalça Egzersizleri'}
            {activeTab === 'core' && 'Karın & Core Egzersizleri'}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {activeTab === 'kalca'
              ? 'Kalça kaslarını güvenle çalıştırmaya ve güçlendirmeye yardımcı egzersizler.'
              : activeTab === 'core'
              ? 'Gövde dengesini ve derin core kaslarını destekleyen nazik hareketler.'
              : 'Ev ortamında rahatça uygulayabileceğin başlangıç ve orta seviye hareketler.'}
          </p>
        </div>

        {/* Exercise Cards */}
        <div className="space-y-4">
          {filteredExercises.map((exercise, index) => (
            <div key={exercise.id} className="relative">
              {/* Little surprise cat illustration peaking next to card 3 */}
              {index === 2 && (
                <div className="absolute -top-4 -right-1 z-20 pointer-events-none select-none opacity-85">
                  <CatCurled className="w-10 h-10" />
                </div>
              )}
              <ExerciseCard
                exercise={exercise}
                isCompleted={completedIds.includes(exercise.id)}
                onToggleComplete={toggleComplete}
              />
            </div>
          ))}
        </div>

        {/* Completion Celebration if all completed */}
        {completedCount === totalCount && (
          <div className="mt-8 bg-white border border-pink-200/80 rounded-3xl p-5 text-center shadow-xs">
            <div className="flex justify-center mb-2">
              <CatCheering className="w-14 h-14" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Harika bir antrenmandı!
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto leading-relaxed">
              Bugün kendine bu zamanı ayırdığın için teşekkürler.
            </p>
          </div>
        )}

        {/* Section 11 — Special Bottom Section (Final Apology Message) */}
        <section
          aria-label="Özel Mesaj"
          className="mt-12 pt-8 pb-4 border-t border-pink-200/50"
        >
          <div className="bg-gradient-to-b from-white via-pink-50/50 to-rose-50/60 rounded-3xl p-6 border border-pink-100 shadow-xs text-center relative overflow-hidden">
            {/* Minimal delicate heart icon */}
            <div className="flex justify-center mb-3">
              <div className="w-8 h-8 rounded-full bg-rose-100/70 flex items-center justify-center text-rose-500">
                <Heart className="w-4 h-4 fill-current stroke-none opacity-85" />
              </div>
            </div>

            {/* Final Apology Statement - Strictly exact text required */}
            <p className="font-handwriting text-2xl sm:text-3xl text-slate-800 font-normal tracking-wide leading-relaxed">
              Gerçekten tekrardan özür dilerim.
            </p>

            {/* Little resting cat at the very bottom */}
            <div className="flex justify-center mt-4">
              <CatCurled className="w-11 h-11 opacity-75" />
            </div>

            {/* Subtle Replay Option */}
            <div className="mt-5 pt-3 border-t border-pink-100/60 flex justify-center">
              <button
                type="button"
                onClick={onReplayIntro}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium text-slate-500 hover:text-slate-800 bg-white/70 hover:bg-white active:scale-95 transition-all cursor-pointer border border-pink-100/60"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Giriş ekranını tekrar göster</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
