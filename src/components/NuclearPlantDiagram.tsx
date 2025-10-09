'use client';

import Image from 'next/image';
import { useState } from 'react';

interface NuclearStep {
  id: string;
  name: string;
  description: string;
  color: string;
}

export default function NuclearPlantDiagram() {
  const [activeStep, setActiveStep] = useState<string>('');

  const steps: NuclearStep[] = [
    {
      id: 'reacteur',
      name: 'Réacteur nucléaire',
      description:
        'Lieu des fissions nucléaires. La chaleur produite chauffe le circuit primaire (eau sous pression).',
      color: 'bg-purple-600',
    },
    {
      id: 'circuitPrimaire',
      name: 'Circuit primaire',
      description:
        'Boucle fermée où circule l’eau pressurisée. Elle transporte la chaleur du réacteur vers le générateur de vapeur.',
      color: 'bg-pink-600',
    },
    {
      id: 'generateurVapeur',
      name: 'Générateur de vapeur',
      description:
        'Transfère la chaleur du circuit primaire vers le circuit secondaire. La vapeur est produite ici.',
      color: 'bg-red-500',
    },
    {
      id: 'turbine',
      name: 'Turbine',
      description:
        'La vapeur entraîne la turbine en rotation, convertissant l’énergie thermique en énergie mécanique.',
      color: 'bg-green-500',
    },
    {
      id: 'generateur',
      name: 'Générateur électrique',
      description:
        'Transforme l’énergie mécanique de la turbine en électricité. Représenté par un cercle jaune (ampoule).',
      color: 'bg-yellow-400',
    },
    {
      id: 'condenseur',
      name: 'Condenseur',
      description:
        'Refroidit la vapeur en la condensant pour reformer de l’eau, renvoyée ensuite vers le générateur de vapeur.',
      color: 'bg-cyan-500',
    },
    {
      id: 'tourRefroidissement',
      name: 'Tour de refroidissement',
      description:
        'Évacue la chaleur vers l’atmosphère via l’eau du circuit tertiaire. Produit un panache de vapeur visible.',
      color: 'bg-blue-400',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Centrale Nucléaire - Schéma et Étapes
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative w-full h-80 sm:h-96 rounded-xl overflow-hidden">
          <Image
            src="/assets/diagrams/nuclearpowerplant.png"
            alt="Schéma de centrale nucléaire"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Étapes du fonctionnement
          </h4>
          <div className="space-y-2 sm:space-y-3 max-h-80 overflow-y-auto">
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
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
          Circuits d’énergie
        </h5>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-1 bg-purple-600 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Circuit primaire (chaleur du réacteur)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-red-500 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Circuit secondaire (vapeur → turbine)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-blue-400 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Circuit de refroidissement</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Électricité produite (ampoule)</span>
          </div>
        </div>
      </div>
    </div>
  );
}