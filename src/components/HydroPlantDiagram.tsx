'use client';

import { useState } from 'react';

interface HydroPlantStep {
  id: string;
  name: string;
  description: string;
  hauteur?: string;
  debit?: string;
  puissance?: string;
  color: string;
}

export default function HydroPlantDiagram() {
  const [activeStep, setActiveStep] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const steps: HydroPlantStep[] = [
    {
      id: 'reservoir',
      name: 'Réservoir d\'eau',
      description: 'Accumulation d\'eau en amont du barrage. L\'eau stockée possède une énergie potentielle gravitationnelle importante.',
      hauteur: '50-200m',
      color: 'bg-blue-600'
    },
    {
      id: 'dam',
      name: 'Barrage',
      description: 'Structure de retenue qui crée une différence de niveau (chute d\'eau) entre l\'amont et l\'aval.',
      hauteur: '20-300m',
      color: 'bg-gray-600'
    },
    {
      id: 'penstock',
      name: 'Conduite forcée',
      description: 'Canalisation sous pression qui dirige l\'eau vers la turbine en convertissant l\'énergie potentielle en énergie cinétique.',
      debit: '100-500 m³/s',
      color: 'bg-blue-500'
    },
    {
      id: 'turbine',
      name: 'Turbine hydraulique',
      description: 'La force de l\'eau fait tourner les pales de la turbine (Francis, Pelton ou Kaplan selon la hauteur de chute).',
      debit: '100-500 m³/s',
      puissance: '100-800 MW',
      color: 'bg-green-500'
    },
    {
      id: 'generator',
      name: 'Alternateur',
      description: 'Convertit l\'énergie mécanique de rotation de la turbine en énergie électrique.',
      puissance: '100-800 MW',
      color: 'bg-yellow-500'
    },
    {
      id: 'transformer',
      name: 'Transformateur',
      description: 'Élève la tension électrique pour le transport sur le réseau électrique.',
      color: 'bg-purple-500'
    },
    {
      id: 'tailrace',
      name: 'Canal de fuite',
      description: 'Évacuation de l\'eau vers l\'aval du barrage après passage dans la turbine.',
      color: 'bg-cyan-500'
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
          Centrale Hydroélectrique - Schéma Interactif
        </h3>
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
        >
          {isAnimating ? 'Animation...' : 'Démarrer l\'animation'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-b from-blue-50 via-green-50 to-cyan-50 dark:from-blue-900/20 dark:via-green-900/20 dark:to-cyan-900/20 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 h-64 sm:h-80 lg:h-96 overflow-hidden">
            
            {/* Réservoir d'eau */}
            <div 
              className={`absolute top-2 left-2 w-32 h-16 sm:top-3 sm:left-3 sm:w-40 sm:h-20 lg:top-4 lg:left-4 lg:w-48 lg:h-24 rounded-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'reservoir' ? 'bg-blue-600 animate-pulse scale-105' : 'bg-blue-500'
              }`}
              onClick={() => setActiveStep('reservoir')}
              title="Réservoir d'eau"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg"></div>
                <div className="relative z-10">🏞️</div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-blue-300 rounded-t-lg ${activeStep === 'reservoir' ? 'animate-pulse' : ''}`}></div>
              </div>
            </div>

            {/* Barrage */}
            <div 
              className={`absolute top-4 left-40 w-6 h-20 sm:top-6 sm:left-48 sm:w-8 sm:h-24 lg:top-8 lg:left-60 lg:w-10 lg:h-32 rounded-b-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'dam' ? 'bg-gray-700 animate-pulse scale-105' : 'bg-gray-600'
              }`}
              onClick={() => setActiveStep('dam')}
              title="Barrage"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                🏗️
              </div>
            </div>

            {/* Conduite forcée */}
            <div 
              className={`absolute top-16 left-48 w-16 h-4 sm:top-20 sm:left-60 sm:w-20 sm:h-6 lg:top-28 lg:left-76 lg:w-24 lg:h-8 rounded-full transition-all duration-500 cursor-pointer ${
                activeStep === 'penstock' ? 'bg-blue-600 animate-pulse scale-105' : 'bg-blue-500'
              }`}
              onClick={() => setActiveStep('penstock')}
              title="Conduite forcée"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                🔵
              </div>
            </div>

            {/* Turbine */}
            <div 
              className={`absolute bottom-12 left-60 w-12 h-12 sm:bottom-16 sm:left-76 sm:w-16 sm:h-16 lg:bottom-20 lg:left-96 lg:w-20 lg:h-20 rounded-full transition-all duration-500 cursor-pointer ${
                activeStep === 'turbine' ? 'bg-green-500 animate-spin' : 'bg-green-400'
              }`}
              onClick={() => setActiveStep('turbine')}
              title="Turbine hydraulique"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                🌊
              </div>
            </div>

            {/* Alternateur */}
            <div 
              className={`absolute bottom-12 right-20 w-10 h-10 sm:bottom-16 sm:right-24 sm:w-12 sm:h-12 lg:bottom-20 lg:right-32 lg:w-16 lg:h-16 rounded-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'generator' ? 'bg-yellow-500 animate-pulse' : 'bg-yellow-400'
              }`}
              onClick={() => setActiveStep('generator')}
              title="Alternateur"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">⚡</div>
            </div>

            {/* Transformateur */}
            <div 
              className={`absolute top-8 right-8 w-8 h-12 sm:top-10 sm:right-12 sm:w-10 sm:h-16 lg:top-12 lg:right-16 lg:w-12 lg:h-20 rounded-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'transformer' ? 'bg-purple-500 animate-pulse' : 'bg-purple-400'
              }`}
              onClick={() => setActiveStep('transformer')}
              title="Transformateur"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">🔌</div>
            </div>

            {/* Canal de fuite */}
            <div 
              className={`absolute bottom-2 left-40 w-24 h-6 sm:bottom-4 sm:left-52 sm:w-32 sm:h-8 lg:bottom-6 lg:left-72 lg:w-40 lg:h-10 rounded-lg transition-all duration-500 cursor-pointer ${
                activeStep === 'tailrace' ? 'bg-cyan-500 animate-pulse scale-105' : 'bg-cyan-400'
              }`}
              onClick={() => setActiveStep('tailrace')}
              title="Canal de fuite"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                💧
              </div>
            </div>

            {/* Flèches et flux d'eau avec SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Flux d'eau du réservoir vers le barrage */}
              <path
                d="M 140 40 Q 160 40 180 60"
                stroke="#3b82f6"
                strokeWidth="4"
                fill="none"
                className={activeStep === 'reservoir' || activeStep === 'dam' ? 'animate-pulse' : ''}
              />
              
              {/* Conduite forcée - flux sous pression */}
              <path
                d="M 190 80 Q 240 90 280 140"
                stroke="#1d4ed8"
                strokeWidth="6"
                fill="none"
                className={activeStep === 'penstock' || activeStep === 'turbine' ? 'animate-pulse' : ''}
              />
              
              {/* Ligne électrique vers transformateur */}
              <path
                d="M 320 180 Q 340 120 360 80"
                stroke="#eab308"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                className={activeStep === 'generator' || activeStep === 'transformer' ? 'animate-pulse' : ''}
              />
              
              {/* Canal de fuite - retour à l'aval */}
              <path
                d="M 280 200 Q 240 220 200 220"
                stroke="#06b6d4"
                strokeWidth="4"
                fill="none"
                className={activeStep === 'tailrace' ? 'animate-pulse' : ''}
              />

              {/* Flèches directionnelles */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                 refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#1d4ed8" />
                </marker>
                <marker id="arrowhead-electric" markerWidth="10" markerHeight="7" 
                 refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#eab308" />
                </marker>
              </defs>

              {/* Flèche sur conduite forcée */}
              <path
                d="M 240 100 L 250 105"
                stroke="#1d4ed8"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                className={activeStep === 'penstock' ? 'animate-pulse' : ''}
              />

              {/* Flèche électrique */}
              <path
                d="M 340 110 L 350 100"
                stroke="#eab308"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead-electric)"
                className={activeStep === 'generator' ? 'animate-pulse' : ''}
              />
            </svg>

            {/* Indicateur de l'étape active */}
            {activeStep && (
              <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
                <div className="text-xs font-semibold text-gray-800 dark:text-white">
                  Étape active: {steps.find(s => s.id === activeStep)?.name}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Panneau d'informations */}
        <div className="space-y-3 sm:space-y-4">
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
                    {step.hauteur && (
                      <p><strong>Hauteur de chute:</strong> {step.hauteur}</p>
                    )}
                    {step.debit && (
                      <p><strong>Débit:</strong> {step.debit}</p>
                    )}
                    {step.puissance && (
                      <p><strong>Puissance:</strong> {step.puissance}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Légende des flux */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Flux d&apos;énergie:</h5>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-1 bg-blue-500 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Eau sous pression</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-green-500 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Énergie mécanique</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-yellow-500 mr-2 border-dashed border border-yellow-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Énergie électrique</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-cyan-500 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Évacuation eau</span>
          </div>
        </div>
      </div>

      {/* Informations techniques */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Conversion d&apos;énergie:</h5>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <p><span className="font-medium">1.</span> Énergie potentielle (réservoir) → Énergie cinétique (conduite)</p>
          <p><span className="font-medium">2.</span> Énergie cinétique → Énergie mécanique (turbine)</p>
          <p><span className="font-medium">3.</span> Énergie mécanique → Énergie électrique (alternateur)</p>
          <p><span className="font-medium">4.</span> Transformation de tension (transformateur) → Réseau électrique</p>
        </div>
      </div>
    </div>
  );
}