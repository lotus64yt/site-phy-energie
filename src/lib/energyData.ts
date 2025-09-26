export const nucleaireData = {
  title: "Énergie Nucléaire",
  description: "Production d'électricité par fission nucléaire",
  
  ressourcesPrimaires: {
    titre: "Ressources Primaires",
    elements: [
      {
        nom: "Uranium 235",
        description: "Isotope fissile naturel (0,7% de l'uranium naturel)",
        origine: "Mines d'uranium (Niger, Kazakhstan, Canada)",
        enrichissement: "Enrichi à 3-5% pour les réacteurs PWR"
      },
      {
        nom: "Uranium 238",
        description: "Isotope fertile majoritaire (99,3%)",
        role: "Peut être converti en Plutonium 239 (fissile)"
      }
    ]
  },

  convertisseurs: [
    {
      etape: "Fission nucléaire",
      conversion: "Énergie de liaison → Énergie cinétique",
      lieu: "Cœur du réacteur",
      efficacite: "~200 MeV par fission"
    },
    {
      etape: "Générateur de vapeur",
      conversion: "Énergie thermique → Vapeur sous pression",
      lieu: "Circuit primaire → Circuit secondaire",
      efficacite: "~33%"
    },
    {
      etape: "Turbine à vapeur",
      conversion: "Énergie thermique → Énergie mécanique",
      lieu: "Salle des machines",
      efficacite: "~85%"
    },
    {
      etape: "Alternateur",
      conversion: "Énergie mécanique → Énergie électrique",
      lieu: "Salle des machines",
      efficacite: "~98%"
    }
  ],

  rendement: {
    global: 33,
    details: {
      thermodynamique: "~33% (cycle de Carnot limité par T°)",
      pertes_thermiques: "~65% évacuées par condenseur",
      pertes_mecaniques: "~2%"
    }
  },

  production: {
    pourcentage: 67.1,
    puissance_installee: "61,4 GW",
    nb_reacteurs: 56,
    production_annuelle: "379 TWh (2023)"
  },

  centrales: [
    {
      nom: "Gravelines",
      region: "Hauts-de-France",
      puissance: "5,4 GW",
      nb_reacteurs: 6,
      coordonnees: { lat: 51.013, lng: 2.134 }
    },
    {
      nom: "Paluel",
      region: "Normandie", 
      puissance: "5,3 GW",
      nb_reacteurs: 4,
      coordonnees: { lat: 49.858, lng: 0.632 }
    },
    {
      nom: "Cattenom",
      region: "Grand Est",
      puissance: "5,2 GW", 
      nb_reacteurs: 4,
      coordonnees: { lat: 49.416, lng: 6.218 }
    },
    {
      nom: "Blayais",
      region: "Nouvelle-Aquitaine",
      puissance: "3,6 GW",
      nb_reacteurs: 4,
      coordonnees: { lat: 45.256, lng: -0.692 }
    },
    {
      nom: "Flamanville",
      region: "Normandie",
      puissance: "2,6 GW + EPR",
      nb_reacteurs: 3,
      coordonnees: { lat: 49.536, lng: -1.882 }
    }
  ]
};

export const hydroelectriqueData = {
  title: "Énergie Hydroélectrique",
  description: "Production d'électricité par la force de l'eau",

  ressourcesPrimaires: {
    titre: "Ressources Primaires",
    elements: [
      {
        nom: "Eau en mouvement",
        description: "Énergie potentielle gravitationnelle",
        origine: "Précipitations, fonte des neiges, fleuves",
        facteurs: "Débit (m³/s) × Hauteur de chute (m)"
      },
      {
        nom: "Relief topographique",
        description: "Dénivelé naturel ou artificiel",
        role: "Crée la différence de potentiel énergétique"
      }
    ]
  },

  convertisseurs: [
    {
      etape: "Barrage/Retenue",
      conversion: "Énergie cinétique → Énergie potentielle",
      lieu: "Cours d'eau",
      efficacite: "~95%"
    },
    {
      etape: "Conduite forcée",
      conversion: "Énergie potentielle → Énergie cinétique",
      lieu: "Pente du barrage",
      efficacite: "~98%"
    },
    {
      etape: "Turbine hydraulique",  
      conversion: "Énergie cinétique → Énergie mécanique",
      lieu: "Centrale hydroélectrique",
      efficacite: "~90-95%"
    },
    {
      etape: "Alternateur",
      conversion: "Énergie mécanique → Énergie électrique", 
      lieu: "Centrale hydroélectrique",
      efficacite: "~98%"
    }
  ],

  rendement: {
    global: 85,
    details: {
      turbine: "~90-95%",
      alternateur: "~98%", 
      pertes_conduites: "~2%",
      total: "Un des meilleurs rendements"
    }
  },

  production: {
    pourcentage: 11.2,
    puissance_installee: "25,7 GW",
    production_annuelle: "63 TWh (2023)",
    variation: "Dépend de la pluviométrie"
  },

  types: [
    {
      nom: "Haute chute",
      hauteur: "> 300m",
      puissance: "Élevée",
      localisation: "Montagnes (Alpes, Pyrénées)"
    },
    {
      nom: "Moyenne chute", 
      hauteur: "30-300m",
      puissance: "Modérée",
      localisation: "Vallées, moyennes montagnes"
    },
    {
      nom: "Basse chute",
      hauteur: "< 30m",
      puissance: "Élevée (gros débit)",
      localisation: "Fleuves (Rhin, Rhône)"
    }
  ],

  centrales: [
    {
      nom: "Grand Maison",
      region: "Auvergne-Rhône-Alpes",
      puissance: "1,8 GW",
      type: "Station de pompage-turbinage",
      coordonnees: { lat: 45.127, lng: 6.073 }
    },
    {
      nom: "Génissiat",
      region: "Auvergne-Rhône-Alpes", 
      puissance: "420 MW",
      type: "Barrage sur le Rhône",
      coordonnees: { lat: 46.059, lng: 5.872 }
    },
    {
      nom: "Serre-Ponçon",
      region: "Provence-Alpes-Côte d'Azur",
      puissance: "364 MW",
      type: "Barrage-réservoir",
      coordonnees: { lat: 44.511, lng: 6.347 }
    },
    {
      nom: "Tignes",
      region: "Auvergne-Rhône-Alpes",
      puissance: "333 MW", 
      type: "Barrage de haute montagne",
      coordonnees: { lat: 45.467, lng: 6.906 }
    }
  ]
};