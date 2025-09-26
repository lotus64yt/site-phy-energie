'use client';

import { useState } from 'react';

interface NuclearPlantStep {
  id: string;
  name: string;
  description: string;
  temperature?: string;
  pressure?: string;
  color: string;
}

export default function NuclearPlantDiagram() {
  const [activeStep, setActiveStep] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const steps: NuclearPlantStep[] = [
    {
      id: 'reactor',
      name: 'Réacteur nucléaire',
      description: 'Fission de l\'uranium 235 dans le cœur du réacteur. La réaction en chaîne contrôlée produit de la chaleur.',
      temperature: '320°C',
      pressure: '155 bars',
      color: 'bg-red-500'
    },
    {
      id: 'steam-generator',
      name: 'Générateur de vapeur',
      description: 'L\'eau du circuit primaire chauffe l\'eau du circuit secondaire qui se transforme en vapeur.',
      temperature: '280°C',
      pressure: '70 bars',
      color: 'bg-orange-500'
    },
    {
      id: 'turbine',
      name: 'Turbine',
      description: 'La vapeur sous pression fait tourner la turbine qui entraîne l\'alternateur.',
      temperature: '250°C',
      pressure: '70 bars',
      color: 'bg-blue-500'
    },
    {
      id: 'alternator',
      name: 'Alternateur',
      description: 'Conversion de l\'énergie mécanique de rotation en énergie électrique.',
      temperature: '60°C',
      color: 'bg-yellow-500'
    },
    {
      id: 'condenser',
      name: 'Condenseur',
      description: 'La vapeur est refroidie et condensée pour recommencer le cycle.',
      temperature: '30°C',
      pressure: '0,05 bar',
      color: 'bg-cyan-500'
    },
    {
      id: 'cooling-tower',
      name: 'Tour de refroidissement',
      description: 'Évacuation de la chaleur résiduelle vers l\'atmosphère.',
      temperature: '25°C',
      color: 'bg-gray-500'
    }
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setActiveStep(steps[currentIndex].id);
      currentIndex++;
      
      if (currentIndex >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsAnimating(false);
          setActiveStep('');
        }, 1000);
      }
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-2">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
          Centrale Nucléaire - Schéma Interactif
        </h3>
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
        >
          {isAnimating ? 'Animation...' : 'Démarrer l\'animation'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"><div className="lg:col-span-2">
          <div className="relative bg-gradient-to-b from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 h-64 sm:h-80 lg:h-96 overflow-hidden"><div className="absolute top-2 left-2 w-20 h-20 sm:top-3 sm:left-3 sm:w-24 sm:h-24 lg:top-4 lg:left-4 lg:w-32 lg:h-32 border-2 sm:border-3 lg:border-4 border-gray-600 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <div 
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full transition-all duration-500 cursor-pointer ${
                  activeStep === 'reactor' ? 'bg-red-500 animate-pulse' : 'bg-red-300'
                }`}
                onClick={() => setActiveStep('reactor')}
                title="Réacteur nucléaire"
              >
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">⚛️</div>
              </div>
            </div><div 
              className={`absolute top-4 left-24 w-12 h-16 sm:top-6 sm:left-32 sm:w-16 sm:h-18 lg:top-8 lg:left-44 lg:w-20 lg:h-24 rounded-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'steam-generator' ? 'bg-orange-500 animate-pulse' : 'bg-orange-300'
              }`}
              onClick={() => setActiveStep('steam-generator')}
              title="Générateur de vapeur"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">🏭</div>
            </div><div 
              className={`absolute top-6 left-40 w-10 h-10 sm:top-8 sm:left-52 sm:w-12 sm:h-12 lg:top-12 lg:left-72 lg:w-16 lg:h-16 rounded-full transition-all duration-500 cursor-pointer ${
                activeStep === 'turbine' ? 'bg-blue-500 animate-spin' : 'bg-blue-300'
              }`}
              onClick={() => setActiveStep('turbine')}
              title="Turbine"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">⚙️</div>
            </div><div 
              className={`absolute top-6 right-12 w-10 h-10 sm:top-8 sm:right-16 sm:w-12 sm:h-12 lg:top-12 lg:left-96 lg:w-16 lg:h-16 rounded-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'alternator' ? 'bg-yellow-500 animate-pulse' : 'bg-yellow-300'
              }`}
              onClick={() => setActiveStep('alternator')}
              title="Alternateur"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">⚡</div>
            </div><div 
              className={`absolute bottom-4 left-36 w-12 h-10 sm:bottom-6 sm:left-48 sm:w-16 sm:h-12 lg:bottom-8 lg:left-72 lg:w-20 lg:h-16 rounded-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'condenser' ? 'bg-cyan-500 animate-pulse' : 'bg-cyan-300'
              }`}
              onClick={() => setActiveStep('condenser')}
              title="Condenseur"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">❄️</div>
            </div><div 
              className={`absolute bottom-2 right-2 w-10 h-12 sm:bottom-3 sm:right-3 sm:w-12 sm:h-16 lg:bottom-4 lg:right-4 lg:w-16 lg:h-20 rounded-t-full transition-all duration-500 cursor-pointer ${
                activeStep === 'cooling-tower' ? 'bg-gray-500 animate-pulse' : 'bg-gray-300'
              }`}
              onClick={() => setActiveStep('cooling-tower')}
              title="Tour de refroidissement"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">💨</div>
            </div><svg className="absolute inset-0 w-full h-full pointer-events-none"><path
                d="M 68 68 Q 140 68 140 80 Q 180 80 180 120"
                stroke="#ef4444"
                strokeWidth="4"
                fill="none"
                className={activeStep === 'reactor' || activeStep === 'steam-generator' ? 'animate-pulse' : ''}
              /><path
                d="M 180 100 Q 280 100 280 120"
                stroke="#3b82f6"
                strokeWidth="4"
                fill="none"
                className={activeStep === 'steam-generator' || activeStep === 'turbine' ? 'animate-pulse' : ''}
              /><path
                d="M 280 160 Q 280 200 180 200 Q 180 180 180 140"
                stroke="#06b6d4"
                strokeWidth="4"
                fill="none"
                className={activeStep === 'condenser' ? 'animate-pulse' : ''}
              />
            </svg>{activeStep && (
              <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
                <div className="text-xs font-semibold text-gray-800 dark:text-white">
                  Étape active: {steps.find(s => s.id === activeStep)?.name}
                </div>
              </div>
            )}
          </div>
        </div><div className="space-y-3 sm:space-y-4">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Composants de la centrale
          </h4>
          
          <div className="space-y-2 sm:space-y-3 max-h-64 sm:max-h-80 overflow-y-auto">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`p-2 sm:p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  activeStep === step.id
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                onClick={() => setActiveStep(activeStep === step.id ? '' : step.id)}
              >
                <div className="flex items-center mb-1 sm:mb-2">
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${step.color} mr-2`}></div>
                  <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                    {step.name}
                  </h5>
                </div>
                
                {activeStep === step.id && (
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <p>{step.description}</p>
                    {step.temperature && (
                      <p><strong>Température:</strong> {step.temperature}</p>
                    )}
                    {step.pressure && (
                      <p><strong>Pression:</strong> {step.pressure}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div><div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Circuits:</h5>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-1 bg-red-500 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Circuit primaire (radioactif)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-blue-500 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Circuit secondaire (vapeur)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-cyan-500 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Circuit de refroidissement</span>
          </div>
        </div>
      </div>
    </div>
  );
}