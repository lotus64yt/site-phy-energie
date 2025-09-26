'use client';

import { hydroelectriqueData } from '@/lib/energyData';
import HydroPlantDiagram from '@/components/HydroPlantDiagram';
import Link from 'next/link';
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { usePageLoading } from '@/hooks/usePageLoading';

export default function HydroelectriquePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, showContent, handleLoadingComplete } = usePageLoading();
  if (isLoading) {
    return (
      <LoadingScreen 
        title="Énergie Hydroélectrique"
        icon="💧"
        onComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
      <header className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-700 ${
        showContent ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href="/" className="text-lg sm:text-xl xl:text-2xl font-bold text-blue-600 dark:text-blue-400 truncate">
              <span className="hidden sm:inline">💧 Énergie Hydroélectrique</span>
              <span className="sm:hidden">💧 Hydro</span>
            </Link><nav className="hidden md:flex space-x-3 lg:space-x-6">
              <Link href="/" className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Accueil
              </Link>
              <Link href="/nucleaire" className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Nucléaire
              </Link>
              <Link href="/comparaison" className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Comparaison
              </Link>
            </nav><button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg
                className="h-5 w-5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div><div className={`md:hidden border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-48 opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
            <div className={`pt-3 space-y-2 transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-2'}`}>
                <Link
                  href="/"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/nucleaire"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nucléaire
                </Link>
                <Link
                  href="/comparaison"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comparaison
                </Link>
              </div>
            </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8"><section className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            L&apos;Énergie Hydroélectrique
          </h1>
          <p className="text-base sm:text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            {hydroelectriqueData.description} - Énergie renouvelable à haut rendement
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 sm:p-4 lg:p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {hydroelectriqueData.production.pourcentage}%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Production électrique
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {hydroelectriqueData.production.puissance_installee}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Puissance installée
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {hydroelectriqueData.production.production_annuelle}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Production annuelle
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {hydroelectriqueData.rendement.global}%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Rendement global
                </div>
              </div>
            </div>
          </div>
        </section><section className="mb-8 sm:mb-12">
          <div className="overflow-x-auto">
            <HydroPlantDiagram />
          </div>
        </section><section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-3xl sm:text-4xl xl:text-5xl mr-3 sm:mr-4">💧</span>
              <span className="leading-tight">{hydroelectriqueData.ressourcesPrimaires.titre}</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {hydroelectriqueData.ressourcesPrimaires.elements.map((element, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {element.nom}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                    {element.description}
                  </p>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <p><strong>Origine:</strong> {element.origine}</p>
                    {element.facteurs && (
                      <p><strong>Facteurs:</strong> {element.facteurs}</p>
                    )}
                    {element.role && (
                      <p><strong>Rôle:</strong> {element.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section><section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-3xl sm:text-4xl xl:text-5xl mr-3 sm:mr-4">🏔️</span>
              <span className="leading-tight">Types d&apos;Installations Hydroélectriques</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {hydroelectriqueData.types.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 sm:p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {type.nom}
                  </h3>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="font-medium">Hauteur:</span>
                      <span className="text-blue-600 dark:text-blue-400">{type.hauteur}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="font-medium">Puissance:</span>
                      <span className="text-blue-600 dark:text-blue-400">{type.puissance}</span>
                    </div>
                    <div>
                      <span className="font-medium">Localisation:</span>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-xs sm:text-sm">{type.localisation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section><section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-3xl sm:text-4xl xl:text-5xl mr-3 sm:mr-4">🔄</span>
              <span className="leading-tight">Convertisseurs d&apos;Énergie</span>
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {hydroelectriqueData.convertisseurs.map((convertisseur, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 sm:gap-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {index + 1}. {convertisseur.etape}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto">
                      {convertisseur.efficacite}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="break-words">
                      <strong>Conversion:</strong> {convertisseur.conversion}
                    </div>
                    <div className="break-words">
                      <strong>Lieu:</strong> {convertisseur.lieu}
                    </div>
                    <div className="break-words">
                      <strong>Efficacité:</strong> {convertisseur.efficacite}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section><section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <span className="text-3xl sm:text-4xl xl:text-5xl mr-0 sm:mr-4">📊</span>
              <span className="leading-tight">Rendement Global: {hydroelectriqueData.rendement.global}%</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6">
              {Object.entries(hydroelectriqueData.rendement.details).map(([key, value]) => (
                <div key={key} className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 capitalize text-sm sm:text-base">
                    {key.replace('_', ' ')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm break-words">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section><section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-3xl sm:text-4xl xl:text-5xl mr-3 sm:mr-4">🗺️</span>
              <span className="leading-tight">Principales Centrales Hydroélectriques en France</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {hydroelectriqueData.centrales.map((centrale, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 sm:p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {centrale.nom}
                  </h3>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>Région:</strong> {centrale.region}</p>
                    <p><strong>Puissance:</strong> {centrale.puissance}</p>
                    <p><strong>Type:</strong> {centrale.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}