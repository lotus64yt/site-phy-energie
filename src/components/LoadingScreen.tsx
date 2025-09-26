'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  title: string;
  icon: string;
  onComplete: () => void;
}

export default function LoadingScreen({ title, icon, onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'initial' | 'filling' | 'pause' | 'complete' | 'slideOut'>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('filling');
      let currentProgress = 0;
      const fillInterval = setInterval(() => {
        currentProgress += 2;
        setProgress(currentProgress);
        if (currentProgress >= 50) {
          clearInterval(fillInterval);
          setPhase('pause');
          
          setTimeout(() => {
            setPhase('complete');
            const completeInterval = setInterval(() => {
              currentProgress += 4;
              setProgress(currentProgress);
              if (currentProgress >= 100) {
                clearInterval(completeInterval);
                setProgress(100);
                
                setTimeout(() => {
                  setPhase('slideOut');
                  setTimeout(() => {
                    onComplete();
                  }, 500);
                }, 200);
              }
            }, 25);
          }, 200);
        }
      }, 20);
    }, 100);

    return () => clearTimeout(timer1);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 z-50 flex items-center justify-center transition-transform duration-500 ${
      phase === 'slideOut' ? 'translate-y-full' : 'translate-y-0'
    }`}>
      <div className="text-center"><div className="text-6xl mb-4 animate-pulse">
          {icon}
        </div><h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {title}
        </h1><div className="w-64 mx-auto">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-200 ease-out"
              style={{ 
                width: `${progress}%`,
                transition: phase === 'filling' ? 'width 800ms ease-out' : 
                           phase === 'complete' ? 'width 500ms ease-out' : 
                           'width 200ms ease-out'
              }}
            />
          </div><p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {progress < 50 ? 'Initialisation...' : 
             progress < 100 ? 'Chargement...' : 
             'Prêt !'}
          </p>
        </div>
      </div>
    </div>
  );
}