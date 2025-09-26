import { EnergyChain } from './types';

export const energyChainExamples: EnergyChain[] = [
  {
    id: 'electric-lamp',
    title: 'Lampe électrique',
    description: 'Chaîne d\'énergie électrique simple pour l\'éclairage',
    category: 'Électrique',
    difficulty: 'beginner',
    steps: [
      {
        name: 'Pile',
        type: 'source',
        icon: '🔋',
        description: 'Source d\'énergie chimique'
      },
      {
        name: 'Interrupteur',
        type: 'transmission',
        icon: '🔘',
        description: 'Contrôle du flux électrique'
      },
      {
        name: 'Filament',
        type: 'transformation',
        icon: '🌡️',
        description: 'Conversion électrique → thermique → lumineuse'
      },
      {
        name: 'Lumière',
        type: 'utilization',
        icon: '💡',
        description: 'Éclairage utile'
      }
    ]
  },
  {
    id: 'thermal-vehicle',
    title: 'Véhicule thermique',
    description: 'Chaîne d\'énergie d\'un moteur à combustion interne',
    category: 'Thermique',
    difficulty: 'intermediate',
    steps: [
      {
        name: 'Carburant',
        type: 'source',
        icon: '⛽',
        description: 'Énergie chimique stockée'
      },
      {
        name: 'Moteur',
        type: 'transformation',
        icon: '🔧',
        description: 'Combustion → énergie mécanique'
      },
      {
        name: 'Transmission',
        type: 'transmission',
        icon: '⚙️',
        description: 'Adaptation et transmission du couple'
      },
      {
        name: 'Mouvement',
        type: 'utilization',
        icon: '🚗',
        description: 'Déplacement du véhicule'
      }
    ]
  },
  {
    id: 'wind-turbine',
    title: 'Éolienne',
    description: 'Conversion de l\'énergie éolienne en électricité',
    category: 'Renouvelable',
    difficulty: 'intermediate',
    steps: [
      {
        name: 'Vent',
        type: 'source',
        icon: '💨',
        description: 'Énergie cinétique de l\'air'
      },
      {
        name: 'Pales',
        type: 'transformation',
        icon: '🌪️',
        description: 'Conversion énergie cinétique → rotation'
      },
      {
        name: 'Générateur',
        type: 'transformation',
        icon: '⚡',
        description: 'Conversion mécanique → électrique'
      },
      {
        name: 'Réseau',
        type: 'utilization',
        icon: '🏠',
        description: 'Distribution électrique'
      }
    ]
  },
  {
    id: 'bicycle',
    title: 'Vélo',
    description: 'Chaîne d\'énergie humaine pour le transport',
    category: 'Mécanique',
    difficulty: 'beginner',
    steps: [
      {
        name: 'Muscles',
        type: 'source',
        icon: '💪',
        description: 'Énergie chimique (glucose) → mécanique'
      },
      {
        name: 'Pédales',
        type: 'transmission',
        icon: '🚴',
        description: 'Transmission de la force'
      },
      {
        name: 'Chaîne',
        type: 'transmission',
        icon: '🔗',
        description: 'Transmission du mouvement'
      },
      {
        name: 'Roues',
        type: 'utilization',
        icon: '🚲',
        description: 'Propulsion et déplacement'
      }
    ]
  }
];

export const getEnergyChainById = (id: string): EnergyChain | undefined => {
  return energyChainExamples.find(chain => chain.id === id);
};

export const getEnergyChainsByCategory = (category: string): EnergyChain[] => {
  return energyChainExamples.filter(chain => chain.category === category);
};

export const getEnergyChainsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): EnergyChain[] => {
  return energyChainExamples.filter(chain => chain.difficulty === difficulty);
};

export const getAllCategories = (): string[] => {
  return [...new Set(energyChainExamples.map(chain => chain.category))];
};