'use client';

'use client';

interface EnergyChainDiagramProps {
  title: string;
  steps: Array<{
    name: string;
    type: 'source' | 'transformation' | 'transmission' | 'utilization';
    icon: string;
  }>;
  className?: string;
}

export default function EnergyChainDiagram({ title, steps, className = '' }: EnergyChainDiagramProps) {
  const getStepColor = (type: string) => {
    switch (type) {
      case 'source':
        return 'bg-green-100 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-600 dark:text-green-300';
      case 'transformation':
        return 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-300';
      case 'transmission':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-600 dark:text-yellow-300';
      case 'utilization':
        return 'bg-red-100 border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-600 dark:text-red-300';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800 dark:bg-gray-900/30 dark:border-gray-600 dark:text-gray-300';
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 ${className}`}>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">{title}</h4>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center"><div className={`${getStepColor(step.type)} border-2 rounded-lg p-4 min-w-[120px] text-center transition-all hover:scale-105`}>
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="font-medium text-sm">{step.name}</div>
              <div className="text-xs mt-1 opacity-75 capitalize">{step.type}</div>
            </div>{index < steps.length - 1 && (
              <div className="flex items-center mx-2">
                <svg
                  className="w-6 h-6 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div><div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-300 dark:bg-green-600 rounded mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Source</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-300 dark:bg-blue-600 rounded mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Transformation</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-300 dark:bg-yellow-600 rounded mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Transmission</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-300 dark:bg-red-600 rounded mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Utilisation</span>
          </div>
        </div>
      </div>
    </div>
  );
}