'use client';

import Card from './ui/Card';
import Button from './ui/Button';
import EnergyChainDiagram from './EnergyChainDiagram';

export default function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><section id="concepts" className="mb-20">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-4xl mr-4">📚</span>
            Concepts Fondamentaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Définition</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  [Contenu à définir : Qu&apos;est-ce qu&apos;une chaîne d&apos;énergie...]
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Principes de base</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  [Contenu à définir : Conservation de l&apos;énergie, transformations...]
                </p>
              </div>
            </div>
            <EnergyChainDiagram
              title="Chaîne d'énergie générique"
              steps={[
                { name: 'Source', type: 'source', icon: '🔋' },
                { name: 'Convertir', type: 'transformation', icon: '⚡' },
                { name: 'Transporter', type: 'transmission', icon: '🔌' },
                { name: 'Utiliser', type: 'utilization', icon: '💡' }
              ]}
            />
          </div>
        </div>
      </section><section id="types" className="mb-20">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-4xl mr-4">🔗</span>
            Types de Chaînes d&apos;Énergie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Type 1</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                [Description du premier type de chaîne...]
              </p>
              <div className="w-full h-32 bg-white dark:bg-gray-800 rounded border-2 border-dashed border-green-300 dark:border-green-600 flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400">Schéma</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Type 2</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                [Description du deuxième type de chaîne...]
              </p>
              <div className="w-full h-32 bg-white dark:bg-gray-800 rounded border-2 border-dashed border-orange-300 dark:border-orange-600 flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400">Schéma</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Type 3</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                [Description du troisième type de chaîne...]
              </p>
              <div className="w-full h-32 bg-white dark:bg-gray-800 rounded border-2 border-dashed border-blue-300 dark:border-blue-600 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400">Schéma</span>
              </div>
            </div>
          </div>
        </div>
      </section><section id="exemples" className="mb-20">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-4xl mr-4">⚙️</span>
            Exemples Pratiques
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lampe électrique</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Exemple classique de chaîne d&apos;énergie électrique simple
                </p>
                <EnergyChainDiagram
                  title=""
                  steps={[
                    { name: 'Pile', type: 'source', icon: '🔋' },
                    { name: 'Interrupteur', type: 'transmission', icon: '🔘' },
                    { name: 'Filament', type: 'transformation', icon: '🌡️' },
                    { name: 'Lumière', type: 'utilization', icon: '💡' }
                  ]}
                />
              </div>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Véhicule thermique</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Chaîne d&apos;énergie d&apos;un moteur à combustion
                </p>
                <EnergyChainDiagram
                  title=""
                  steps={[
                    { name: 'Carburant', type: 'source', icon: '⛽' },
                    { name: 'Moteur', type: 'transformation', icon: '🔧' },
                    { name: 'Transmission', type: 'transmission', icon: '⚙️' },
                    { name: 'Mouvement', type: 'utilization', icon: '🚗' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section><section id="exercices" className="mb-20">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-4xl mr-4">✏️</span>
            Exercices et Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              title="Exercice 1" 
              gradient="from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                [Énoncé de l&apos;exercice...]
              </p>
              <Button size="sm" onClick={() => console.log('Exercise 1 started')}>
                Commencer
              </Button>
            </Card>
            <Card 
              title="Exercice 2" 
              gradient="from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                [Énoncé de l&apos;exercice...]
              </p>
              <Button size="sm" onClick={() => console.log('Exercise 2 started')}>
                Commencer
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}