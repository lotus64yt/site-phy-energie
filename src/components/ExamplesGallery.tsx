'use client';

import { useState } from 'react';
import { energyChainExamples, getAllCategories } from '@/lib/energyChains';
import EnergyChainDiagram from './EnergyChainDiagram';

export default function ExamplesGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...getAllCategories()];

  const filteredExamples = selectedCategory === 'all' 
    ? energyChainExamples 
    : energyChainExamples.filter(example => example.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Galerie d&apos;Exemples
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez différents types de chaînes d&apos;énergie à travers des exemples concrets du quotidien
          </p>
        </div><div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExamples.map((example) => (
            <div
              key={example.id}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {example.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(example.difficulty)}`}>
                    {example.difficulty === 'beginner' ? 'Débutant' : 
                     example.difficulty === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full text-xs font-medium">
                    {example.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {example.description}
              </p>
              
              <EnergyChainDiagram
                title=""
                steps={example.steps}
              />
            </div>
          ))}
        </div>

        {filteredExamples.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Aucun exemple trouvé
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Essayez de sélectionner une autre catégorie
            </p>
          </div>
        )}
      </div>
    </section>
  );
}