'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '4',
      label: 'Étapes principales',
      description: 'Dans une chaîne d\'énergie complète',
      icon: '🔗'
    },
    {
      number: '100%',
      label: 'Conservation',
      description: 'L\'énergie totale est toujours conservée',
      icon: '⚖️'
    },
    {
      number: '∞',
      label: 'Applications',
      description: 'Nombre d\'exemples dans la nature',
      icon: '🌍'
    },
    {
      number: '3',
      label: 'Lois fondamentales',
      description: 'Principes de thermodynamique',
      icon: '📏'
    }
  ];

  return (
    <section className="py-16 bg-indigo-600 dark:bg-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quelques chiffres clés
          </h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            Les chaînes d&apos;énergie suivent des principes universels et fondamentaux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-indigo-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-indigo-200 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}