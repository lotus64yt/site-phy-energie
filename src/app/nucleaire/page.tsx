'use client';

import { useState } from 'react';
import { nucleaireData } from '@/lib/energyData';
import NuclearPlantDiagram from '@/components/NuclearPlantDiagram';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';
import { usePageLoading } from '@/hooks/usePageLoading';

export default function NucleairePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, handleLoadingComplete } = usePageLoading();
  if (isLoading) {
    return (
      <LoadingScreen 
        title="Énergie Nucléaire"
        icon="⚛️"
        onComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800"><header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-red-600 dark:text-red-400">
              ⚛️ Énergie Nucléaire
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Accueil
              </Link>
              <Link href="/hydroelectrique" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Hydroélectrique
              </Link>
              <Link href="/comparaison" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
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
                href="/" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/hydroelectrique" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hydroélectrique
              </Link>
              <Link 
                href="/comparaison" 
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Comparaison
              </Link>
            </div>
          </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            L&apos;Énergie Nucléaire
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {nucleaireData.description} - Premier producteur d&apos;électricité en France
          </p>
          <div className="bg-red-100 dark:bg-red-900/30 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  {nucleaireData.production.pourcentage}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Production électrique
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  {nucleaireData.production.nb_reacteurs}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Réacteurs
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  {nucleaireData.production.puissance_installee}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Puissance installée
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                  {nucleaireData.rendement.global}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Rendement global
                </div>
              </div>
            </div>
          </div>
        </section><section className="mb-12">
          <NuclearPlantDiagram />
        </section><section className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-4xl mr-4">⛽</span>
              {nucleaireData.ressourcesPrimaires.titre}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nucleaireData.ressourcesPrimaires.elements.map((element, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {element.nom}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {element.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Origine:</strong> {element.origine}</p>
                    {element.enrichissement && (
                      <p><strong>Enrichissement:</strong> {element.enrichissement}</p>
                    )}
                    {element.role && (
                      <p><strong>Rôle:</strong> {element.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section><section className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-4xl mr-4">🔄</span>
              Convertisseurs d&apos;Énergie
            </h2>
            <div className="space-y-4">
              {nucleaireData.convertisseurs.map((convertisseur, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-red-50 dark:from-gray-800 dark:to-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {index + 1}. {convertisseur.etape}
                    </h3>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      {convertisseur.efficacite}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Conversion:</strong> {convertisseur.conversion}
                    </div>
                    <div>
                      <strong>Lieu:</strong> {convertisseur.lieu}
                    </div>
                    <div>
                      <strong>Efficacité:</strong> {convertisseur.efficacite}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section><section className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-4xl mr-4">📊</span>
              Rendement Global: {nucleaireData.rendement.global}%
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(nucleaireData.rendement.details).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                    {key.replace('_', ' ')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section><section className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-4xl mr-4">🗺️</span>
              Principales Centrales Nucléaires en France
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nucleaireData.centrales.map((centrale, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {centrale.nom}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>Région:</strong> {centrale.region}</p>
                    <p><strong>Puissance:</strong> {centrale.puissance}</p>
                    <p><strong>Réacteurs:</strong> {centrale.nb_reacteurs}</p>
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