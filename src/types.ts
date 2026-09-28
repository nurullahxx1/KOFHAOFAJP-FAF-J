export type AppStage = 
  | 'black_initial'     // Initial ~1s black screen
  | 'click_m'           // Screen 1: "Tıkla M"
  | 'click_again'       // Screen 2: "Bir daha tıkla"
  | 'apology_1'         // Screen 3: "Çok Özür dilerim"
  | 'apology_2'         // Screen 4: "Gerçekten çok özür dilerim" + right bottom "İstersen tıkla"
  | 'main_theme';       // Screen 6+: Soft flamingo pink main experience

export type ExerciseCategory = 'kalca' | 'core';

export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  categoryTitle: string;
  sets: string;
  repsOrDuration: string;
  description: string;
  focusTip: string;
  difficulty: 'Başlangıç' | 'Orta Seviye';
  illustrationId: string;
  durationSeconds?: number;
}
