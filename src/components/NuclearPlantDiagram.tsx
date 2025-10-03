"use client";

interface NuclearPlantStep {
  id: string;
  name: string;
  description: string;
  temperature?: string;
  pression?: string;
  puissance?: string;
  color: string;
}

export default function NuclearPlantDiagram() {
  const steps: NuclearPlantStep[] = [
    {
      id: "reactor",
      name: "Réacteur nucléaire",
      description:
        "Fission des atomes d'uranium dans le cœur. Produit une grande quantité de chaleur.",
      temperature: "300-330 °C",
      puissance: "900-1600 MW",
      color: "bg-red-600",
    },
    {
      id: "primaryLoop",
      name: "Circuit primaire",
      description:
        "Eau sous pression qui transporte la chaleur du réacteur vers le générateur de vapeur.",
      pression: "150 bar",
      color: "bg-orange-500",
    },
    {
      id: "steamGenerator",
      name: "Générateur de vapeur",
      description:
        "Transfère la chaleur du circuit primaire à un circuit secondaire. L’eau du secondaire devient de la vapeur.",
      temperature: "270 °C",
      color: "bg-yellow-500",
    },
    {
      id: "turbine",
      name: "Turbine à vapeur",
      description:
        "La vapeur entraîne les pales de la turbine et convertit l’énergie thermique en énergie mécanique.",
      puissance: "600-1500 MW",
      color: "bg-green-500",
    },
    {
      id: "generator",
      name: "Alternateur",
      description:
        "Transforme l’énergie mécanique de la turbine en électricité.",
      puissance: "600-1500 MW",
      color: "bg-blue-500",
    },
    {
      id: "transformer",
      name: "Transformateur",
      description:
        "Élève la tension de l’électricité pour l’acheminer sur le réseau électrique.",
      color: "bg-purple-500",
    },
    {
      id: "cooling",
      name: "Condenseur et tour de refroidissement",
      description:
        "La vapeur se condense en eau et est refroidie avant de retourner dans le circuit.",
      temperature: "25-40 °C",
      color: "bg-cyan-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Centrale Nucléaire
      </h3>

      {/* Liste des étapes */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-2">
              <div className={`w-4 h-4 rounded-full ${step.color} mr-2`} />
              <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                {step.name}
              </h5>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <p>{step.description}</p>
              {step.temperature && (
                <p>
                  <strong>T°:</strong> {step.temperature}
                </p>
              )}
              {step.pression && (
                <p>
                  <strong>Pression:</strong> {step.pression}
                </p>
              )}
              {step.puissance && (
                <p>
                  <strong>Puissance:</strong> {step.puissance}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Légende */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
          Circuits et flux d’énergie :
        </h5>
        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2" /> Circuit
            primaire
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" /> Circuit
            secondaire
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2" /> Transmission
            mécanique
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" /> Câbles
            électriques
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2" /> Lignes
            haute tension
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2" /> Circuit de
            refroidissement
          </li>
        </ul>
      </div>

      {/* Conversion */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
          Conversion d’énergie :
        </h5>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>1. Fission nucléaire → Chaleur</li>
          <li>2. Chaleur → Vapeur</li>
          <li>3. Vapeur → Énergie mécanique</li>
          <li>4. Énergie mécanique → Électricité</li>
          <li>5. Électricité → Transport HT</li>
          <li>6. Vapeur → Eau (refroidissement)</li>
        </ul>
      </div>
    </div>
  );
}
