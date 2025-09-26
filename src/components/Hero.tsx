'use client';

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center"><h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Les Chaînes d&apos;Énergie
        </h1><p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Découvrez les concepts fondamentaux de la physique énergétique
        </p><p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-4xl mx-auto">
          Explorez les différents types de chaînes d&apos;énergie, comprenez les transformations énergétiques 
          et maîtrisez les principes qui gouvernent le monde qui nous entoure.
        </p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
            Commencer l&apos;exploration
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Voir les exemples
          </button>
        </div>
      </div><div className="absolute top-10 left-10 w-20 h-20 bg-indigo-200 dark:bg-indigo-800 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full blur-xl opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full blur-xl opacity-30"></div>
    </section>
  );
}