/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { IntroFlow } from './components/IntroFlow';
import { MainTheme } from './components/MainTheme';

export default function App() {
  const [showMainTheme, setShowMainTheme] = useState(false);
  const [introKey, setIntroKey] = useState(0);

  const handleIntroComplete = () => {
    setShowMainTheme(true);
  };

  const handleReplayIntro = () => {
    setShowMainTheme(false);
    setIntroKey((prev) => prev + 1);
  };

  return (
    <div className="w-full min-h-screen bg-black">
      {!showMainTheme ? (
        <IntroFlow key={introKey} onComplete={handleIntroComplete} />
      ) : (
        <div className="animate-in fade-in duration-700 ease-out">
          <MainTheme onReplayIntro={handleReplayIntro} />
        </div>
      )}
    </div>
  );
}
