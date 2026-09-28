import React, { useState, useEffect } from 'react';
import { Check, Clock, Play, Pause, RotateCcw } from 'lucide-react';
import { Exercise } from '../types';
import { ExerciseIllustration } from './ExerciseIllustrations';

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  isCompleted,
  onToggleComplete,
}) => {
  const hasTimer = Boolean(exercise.durationSeconds);
  const initialSeconds = exercise.durationSeconds || 30;
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (!isCompleted) {
        onToggleComplete(exercise.id);
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, isCompleted, exercise.id, onToggleComplete]);

  const handleResetTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRunning(false);
    setTimeLeft(initialSeconds);
  };

  const handleToggleTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRunning(!isRunning);
  };

  return (
    <article
      className={`group relative rounded-3xl transition-all duration-300 border ${
        isCompleted
          ? 'bg-gradient-to-b from-pink-50/70 to-rose-50/40 border-pink-200/80 shadow-xs'
          : 'bg-white border-pink-100/80 shadow-xs shadow-pink-900/5 hover:border-pink-200 hover:shadow-sm'
      } overflow-hidden`}
    >
      {/* Category & Level Badges - Clean unboxed / subtle pill without any emoji */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
        <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-pink-50 text-pink-700 border border-pink-100/60">
          {exercise.category === 'kalca' ? 'Kalça' : 'Karın & Core'}
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded-full text-slate-500 bg-slate-50">
          {exercise.difficulty}
        </span>
      </div>

      {/* Done Checkmark Action */}
      <div className="absolute top-3.5 right-3.5 z-10">
        <button
          type="button"
          onClick={() => onToggleComplete(exercise.id)}
          aria-label={`${exercise.name} egzersizini ${isCompleted ? 'tamamlandı olarak işaretleme' : 'tamamla'}`}
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl transition-all duration-200 active:scale-95 cursor-pointer ${
            isCompleted
              ? 'bg-rose-500 text-white shadow-sm shadow-rose-200'
              : 'bg-pink-50 text-pink-400 hover:bg-pink-100/80 hover:text-pink-600'
          }`}
        >
          <Check className={`w-4 h-4 ${isCompleted ? 'stroke-[2.5]' : 'opacity-40'}`} />
        </button>
      </div>

      {/* Aesthetic Fitness Illustration */}
      <div className="pt-12 pb-2 px-4 flex justify-center items-center bg-gradient-to-b from-pink-50/30 to-transparent">
        <div className="w-full max-w-[220px] transition-transform duration-300">
          <ExerciseIllustration id={exercise.illustrationId} className="w-full h-32" />
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 pt-1">
        {/* Title and Sets / Reps */}
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
            {exercise.name}
            {isCompleted && (
              <span className="text-[11px] font-normal text-rose-500">· Tamamlandı</span>
            )}
          </h3>
          <span className="text-xs font-semibold text-rose-600 bg-rose-50/80 px-2.5 py-0.5 rounded-lg border border-rose-100/70 whitespace-nowrap">
            {exercise.sets} × {exercise.repsOrDuration}
          </span>
        </div>

        {/* Short & polite instructions */}
        <div className="mb-3">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Nasıl Yapılır?
          </span>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            {exercise.description}
          </p>
        </div>

        {/* Form note / focus tip */}
        <div className="bg-pink-50/60 border-l-2 border-pink-400 rounded-r-xl px-3 py-2 text-[11px] text-slate-700 leading-relaxed mb-3">
          <span className="font-semibold text-pink-800 block mb-0.5">Dikkat Edilmesi Gereken Nokta:</span>
          {exercise.focusTip}
        </div>

        {/* Timed exercise countdown widget if available */}
        {hasTimer && (
          <div className="mt-2 pt-2.5 border-t border-pink-100/60 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-xs font-medium tabular-nums">
                Süre: <strong className="font-semibold">{timeLeft} sn</strong>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleToggleTimer}
                aria-label={isRunning ? 'Sayacı durdur' : 'Sayacı başlat'}
                className="min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-medium bg-rose-500 text-white hover:bg-rose-600 active:scale-95 transition-all flex items-center gap-1 cursor-pointer shadow-xs"
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3 h-3 fill-current" /> Durdur
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" /> Başlat
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleResetTimer}
                aria-label="Sayacı sıfırla"
                className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl text-xs text-slate-500 bg-pink-50 hover:bg-pink-100 active:scale-95 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile completion toggle button */}
        <div className="mt-3 pt-1">
          <button
            type="button"
            onClick={() => onToggleComplete(exercise.id)}
            className={`w-full min-h-[44px] py-2.5 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              isCompleted
                ? 'bg-rose-50 text-rose-700 border border-rose-200/80 hover:bg-rose-100/80'
                : 'bg-rose-500 text-white hover:bg-rose-600 active:scale-[0.98] shadow-xs'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            <span>{isCompleted ? 'Tamamlandı (Geri Al)' : 'Tamamla'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
