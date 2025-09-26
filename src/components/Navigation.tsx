'use client';

export default function Navigation() {
  const sections = [
    {
      id: 'concepts',
      title: 'Concepts Fondamentaux',
      icon: '📚',
      description: 'Les bases théoriques des chaînes d\'énergie'
    },
    {
      id: 'types',
      title: 'Types de Chaînes',
      icon: '🔗',
      description: 'Classification et caractéristiques'
    },
    {
      id: 'exemples',
      title: 'Exemples Pratiques',
      icon: '⚙️',
      description: 'Applications concrètes et cas d\'usage'
    },
    {
      id: 'exercices',
      title: 'Exercices',
      icon: '✏️',
      description: 'Mettez vos connaissances en pratique'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Navigation du Cours
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {section.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}