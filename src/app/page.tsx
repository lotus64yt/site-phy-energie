'use client';

import { useState } from 'react';
import Link from 'next/link';
import { nucleaireData, hydroelectriqueData } from '@/lib/energyData';
import LoadingScreen from '@/components/LoadingScreen';
import { usePageLoading } from '@/hooks/usePageLoading';
import Footer from '@/components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, showContent, handleLoadingComplete } = usePageLoading();
  if (isLoading) {
    return (
      <LoadingScreen 
        title="Chaînes d'énergie"
        icon="⚡"
        onComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800"><header className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-700 ${
        showContent ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ⚡ Énergies de France
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/nucleaire" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Nucléaire
              </Link>
              <Link href="/hydroelectrique" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Hydroélectrique
              </Link>
              <Link href="/comparaison" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Comparaison
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
                href="/nucleaire" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nucléaire
              </Link>
              <Link 
                href="/hydroelectrique" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hydroélectrique
              </Link>
              <Link 
                href="/comparaison" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Comparaison
              </Link>
            </div>
          </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><section className={`text-center py-20 transition-all duration-700 delay-200 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Les Énergies de France
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Découvrez le nucléaire et l&apos;hydroélectrique, les deux piliers de la production électrique française décarbonée
          </p>
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  {nucleaireData.production.pourcentage + hydroelectriqueData.production.pourcentage}%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Production décarbonée totale
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  87 GW
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Puissance installée combinée
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  442 TWh
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Production annuelle totale
                </div>
              </div>
            </div>
          </div>
        </section><section className={`py-16 transition-all duration-700 delay-400 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Explorez les Technologies Énergétiques
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"><Link href="/nucleaire" className="group">
              <div className="bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-red-200 dark:border-red-800">
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">⚛️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Énergie Nucléaire
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Fission atomique et production massive
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {nucleaireData.production.pourcentage}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Du mix électrique
                    </div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {nucleaireData.production.nb_reacteurs}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Réacteurs en service
                    </div>
                  </div>
                </div>
                
                <div className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  Découvrir le nucléaire →
                </div>
              </div>
            </Link><Link href="/hydroelectrique" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">💧</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Énergie Hydroélectrique
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Force de l&apos;eau et énergie renouvelable
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {hydroelectriqueData.production.pourcentage}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Du mix électrique
                    </div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {hydroelectriqueData.rendement.global}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Rendement global
                    </div>
                  </div>
                </div>
                
                <div className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  Découvrir l&apos;hydroélectrique →
                </div>
              </div>
            </Link>
          </div><div className="flex justify-center">
            <Link href="/comparaison" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-purple-200 dark:border-purple-800 max-w-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚖️</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Comparaison Détaillée
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Analyse comparative des deux technologies
                  </p>
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                    Comparer les énergies →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section><section className={`py-16 bg-white/50 dark:bg-gray-900/50 rounded-2xl transition-all duration-700 delay-600 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Pourquoi ces Technologies ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Décarbonées
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Très faibles émissions de CO₂ lors de la production d&apos;électricité
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Production Massive
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Capacité à produire de grandes quantités d&apos;électricité
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🇫🇷</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Souveraineté Énergétique
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Indépendance énergétique et maîtrise technologique française
                </p>
              </div>
            </div>
          </div>
        </section>
      </div><div className={`transition-all duration-700 delay-800 ${
        showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <Footer />
      </div>
    </div>
  );
}
