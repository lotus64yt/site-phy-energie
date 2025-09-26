'use client';

import { useState } from 'react';
import { nucleaireData, hydroelectriqueData } from '@/lib/energyData';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';
import { usePageLoading } from '@/hooks/usePageLoading';

export default function ComparaisonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, handleLoadingComplete } = usePageLoading();
  const comparisonData = [
    {
      critere: "Rendement global",
      nucleaire: `${nucleaireData.rendement.global}%`,
      hydroelectrique: `${hydroelectriqueData.rendement.global}%`,
      avantage: "hydroelectrique"
    },
    {
      critere: "Part dans la production française",
      nucleaire: `${nucleaireData.production.pourcentage}%`,
      hydroelectrique: `${hydroelectriqueData.production.pourcentage}%`,
      avantage: "nucleaire"
    },
    {
      critere: "Puissance installée",
      nucleaire: nucleaireData.production.puissance_installee,
      hydroelectrique: hydroelectriqueData.production.puissance_installee,
      avantage: "nucleaire"
    },
    {
      critere: "Impact environnemental",
      nucleaire: "Déchets radioactifs, pas de CO₂",
      hydroelectrique: "Impact sur écosystèmes aquatiques",
      avantage: "equilibre"
    },
    {
      critere: "Régularité de production",
      nucleaire: "Constante (facteur de charge ~75%)",
      hydroelectrique: "Variable selon météo et saisons",
      avantage: "nucleaire"
    },
    {
      critere: "Durée de vie",
      nucleaire: "40-60 ans (prolongation possible)",
      hydroelectrique: "80-100 ans voire plus",
      avantage: "hydroelectrique"
    },
    {
      critere: "Coût d'investissement",
      nucleaire: "Très élevé (10-15 Md€/EPR)",
      hydroelectrique: "Élevé mais variable",
      avantage: "hydroelectrique"
    }
  ];

  const getAdvantageColor = (avantage: string) => {
    switch (avantage) {
      case 'nucleaire':
        return 'text-red-600 dark:text-red-400';
      case 'hydroelectrique':
        return 'text-blue-600 dark:text-blue-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getAdvantageIcon = (avantage: string) => {
    switch (avantage) {
      case 'nucleaire':
        return '⚛️';
      case 'hydroelectrique':
        return '💧';
      default:
        return '⚖️';
    }
  };

  if (isLoading) {
    return (
      <LoadingScreen 
        title="Comparaison Énergétique"
        icon="⚖️"
        onComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800"><header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              ⚖️ Comparaison Énergétique
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Accueil
              </Link>
              <Link href="/nucleaire" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Nucléaire
              </Link>
              <Link href="/hydroelectrique" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Hydroélectrique
              </Link>
            </nav><button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 transition-transform duration-200 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div><div className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`px-4 py-2 space-y-2 transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-2'}`}>
              <Link 
                href="/" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/nucleaire" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nucléaire
              </Link>
              <Link 
                href="/hydroelectrique" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hydroélectrique
              </Link>
            </div>
          </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nucléaire vs Hydroélectrique
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Comparaison détaillée des deux principales sources d&apos;énergie décarbonée en France
          </p>
        </section><section className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Comparaison Technique
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                      Critère
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-red-600 dark:text-red-400">
                      ⚛️ Nucléaire
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-600 dark:text-blue-400">
                      💧 Hydroélectrique
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">
                      Avantage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-100 dark:border-gray-800 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}>
                      <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
                        {row.critere}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">
                        {row.nucleaire}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">
                        {row.hydroelectrique}
                      </td>
                      <td className={`py-4 px-4 text-center font-semibold ${getAdvantageColor(row.avantage)}`}>
                        {getAdvantageIcon(row.avantage)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section><section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center">
                <span className="text-3xl mr-3">⚛️</span>
                Énergie Nucléaire
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                    ✅ Avantages
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Production massive et constante</li>
                    <li>• Très faibles émissions de CO₂</li>
                    <li>• Indépendance énergétique</li>
                    <li>• Emprise au sol réduite</li>
                    <li>• Production prévisible</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                    ❌ Inconvénients
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Déchets radioactifs à gérer</li>
                    <li>• Risques d&apos;accidents majeurs</li>
                    <li>• Investissements très élevés</li>
                    <li>• Temps de construction long</li>
                    <li>• Acceptabilité sociale difficile</li>
                  </ul>
                </div>
              </div>
            </div><div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
                <span className="text-3xl mr-3">💧</span>
                Énergie Hydroélectrique
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                    ✅ Avantages
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Excellent rendement énergétique</li>
                    <li>• Énergie 100% renouvelable</li>
                    <li>• Très longue durée de vie</li>
                    <li>• Réactivité de production</li>
                    <li>• Usages multiples (eau, loisirs)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                    ❌ Inconvénients
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Dépendance aux conditions météo</li>
                    <li>• Impact sur écosystèmes aquatiques</li>
                    <li>• Sites géographiques limités</li>
                    <li>• Déplacement de populations</li>
                    <li>• Production variable selon saisons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section><section className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="text-4xl mr-4">🗺️</span>
              Répartition Géographique en France
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
                  Centrales Nucléaires
                </h3>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li><strong>Côtes:</strong> Refroidissement par eau de mer</li>
                    <li><strong>Fleuves:</strong> Gravelines, Paluel (Manche)</li>
                    <li><strong>Vallée du Rhône:</strong> 4 sites majeurs</li>
                    <li><strong>Vallée de la Loire:</strong> 4 sites</li>
                    <li><strong>Est:</strong> Cattenom, Fessenheim</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Centrales Hydroélectriques
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li><strong>Alpes:</strong> 60% de la production hydro</li>
                    <li><strong>Pyrénées:</strong> 25% de la production</li>
                    <li><strong>Vosges:</strong> Centrales de moyenne puissance</li>
                    <li><strong>Massif Central:</strong> Nombreux barrages</li>
                    <li><strong>Vallée du Rhône:</strong> Aménagements CNR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section><section className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="text-4xl mr-4">🔮</span>
              Perspectives d&apos;Avenir
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                  Nucléaire - Horizon 2050
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Construction de 6 EPR2 planifiée</li>
                  <li>• Prolongation du parc existant à 50-60 ans</li>
                  <li>• Développement des SMR (Small Modular Reactors)</li>
                  <li>• Objectif : maintenir 50% du mix électrique</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Hydroélectrique - Développement
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Rénovation et optimisation du parc existant</li>
                  <li>• Développement de la petite hydroélectricité</li>
                  <li>• STEP (stations de pompage) pour stockage</li>
                  <li>• Objectif : +2 GW d&apos;ici 2030</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}