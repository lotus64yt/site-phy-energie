"use client";

import React, { useEffect, useRef, useState } from "react";

type PlantType = "dam" | "run-of-river";

interface HydroPlantStep {
  id: string;
  name: string;
  description: string;
  hauteur?: string;
  debit?: string;
  color: string;
}

export default function HydroPlantDiagram() {
  const [activeStep, setActiveStep] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [plantType, setPlantType] = useState<PlantType>("dam");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const elemsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const [paths, setPaths] = useState<
    { id: string; d: string; active: boolean }[]
  >([]);

  const steps: HydroPlantStep[] = [
    {
      id: "reservoir",
      name: "Réservoir/Retenue",
      description: "Accumulation d'eau en amont. Energie potentielle stockée.",
      hauteur: "50-200m",
      color: "bg-blue-600",
    },
    {
      id: "dam",
      name: "Barrage",
      description: "Structure de retenue qui crée la différence de niveau.",
      hauteur: "Variable",
      color: "bg-gray-600",
    },
    {
      id: "penstock",
      name: "Conduite forcée",
      description: "Canalisation sous pression vers la turbine.",
      debit: "100-500 m³/s",
      color: "bg-blue-500",
    },
    {
      id: "generator",
      name: "Turbogénérateur",
      description:
        "Turbine + alternateur : convertit l'énergie hydraulique en électricité.",
      debit: "100-500 m³/s",
      color: "bg-gradient-to-r from-green-500 to-yellow-500",
    },
    {
      id: "tailrace",
      name: "Canal de fuite",
      description: "Évacuation vers l'aval.",
      color: "bg-cyan-500",
    },

  ];

  const measureAndComputePaths = React.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const newPaths: { id: string; d: string; active: boolean }[] = [];

    const connectionOrder = [
      ["reservoir", "dam"],
      ["dam", "penstock"],
      ["penstock", "generator"],
      ["generator", "tailrace"],
    ];

    connectionOrder.forEach(([from, to]) => {
      const fromEl = elemsRef.current[from];
      const toEl = elemsRef.current[to];

      if (fromEl && toEl) {
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();

        const fromX = fromRect.left - rect.left + fromRect.width / 2;
        const fromY = fromRect.top - rect.top + fromRect.height / 2;
        const toX = toRect.left - rect.left + toRect.width / 2;
        const toY = toRect.top - rect.top + toRect.height / 2;

        const pathData = `M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${
          (fromY + toY) / 2 - 20
        } ${toX} ${toY}`;
        newPaths.push({
          id: `${from}-${to}`,
          d: pathData,
          active: activeStep === from || activeStep === to,
        });
      }
    });

    setPaths(newPaths);
  }, [activeStep]);

  useEffect(() => {
    measureAndComputePaths();
    window.addEventListener("resize", measureAndComputePaths);
    return () => window.removeEventListener("resize", measureAndComputePaths);
  }, [measureAndComputePaths]);

  const runAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const order = ["reservoir", "dam", "penstock", "generator", "tailrace"];

    order.forEach((step, idx) => {
      setTimeout(() => {
        setActiveStep(step);
        if (idx === order.length - 1) {
          setTimeout(() => {
            setActiveStep("");
            setIsAnimating(false);
          }, 1500);
        }
      }, idx * 1200);
    });
  };

  const handleElementClick = (id: string) => {
    setActiveStep((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-2">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
          Centrale Hydroélectrique — Schéma interactif
        </h3>
        <div className="flex gap-2 flex-wrap">
          <select
            value={plantType}
            onChange={(e) => setPlantType(e.target.value as PlantType)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm"
          >
            <option value="dam">Barrage-réservoir</option>
            <option value="run-of-river">Au fil de l{"'"}eau</option>
          </select>
          <button
            onClick={runAnimation}
            disabled={isAnimating}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {isAnimating ? "Animation..." : "Animer le flux"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <div
            ref={containerRef}
            className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-b from-sky-200 to-sky-100 dark:from-sky-900 dark:to-sky-800 rounded-lg sm:rounded-xl border-2 border-sky-300 dark:border-sky-700 overflow-hidden"
          ><div className="absolute top-0 left-0 w-full h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-blue-300 to-blue-400 dark:from-blue-800 dark:to-blue-700"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-green-400 to-green-600 dark:from-green-700 dark:to-green-500 rounded-b-lg sm:rounded-b-xl"></div><div
              ref={(el) => {
                elemsRef.current["reservoir"] = el;
              }}
              onClick={() => handleElementClick("reservoir")}
              role="button"
              tabIndex={0}
              className={`absolute transition-all duration-300 cursor-pointer ${
                plantType === "dam"
                  ? "top-3 left-3 w-40 h-20 sm:top-4 sm:left-4 sm:w-48 sm:h-24 lg:top-6 lg:left-6 lg:w-56 lg:h-32"
                  : "top-4 left-4 w-24 h-10 sm:top-6 sm:left-6 sm:w-28 sm:h-12 lg:top-8 lg:left-8 lg:w-36 lg:h-16"
              } ${activeStep === "reservoir" ? "scale-105" : ""}`}
              aria-label="Réservoir"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 224 128"
                className={`transition-all duration-300 ${
                  activeStep === "reservoir" ? "filter drop-shadow-lg" : ""
                }`}
              >
                <defs>
                  <linearGradient
                    id="waterGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                  <pattern
                    id="waves"
                    x="0"
                    y="0"
                    width="40"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0,4 Q10,0 20,4 T40,4"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                  </pattern>
                </defs><rect
                  x="0"
                  y="20"
                  width={plantType === "dam" ? "224" : "160"}
                  height={plantType === "dam" ? "90" : "50"}
                  fill="url(#waterGradient)"
                  rx="8"
                  stroke="#1e40af"
                  strokeWidth="2"
                /><rect
                  x="0"
                  y="20"
                  width={plantType === "dam" ? "224" : "160"}
                  height="15"
                  fill="url(#waves)"
                  rx="8"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 40,0; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </rect><text
                  x="10"
                  y="40"
                  fill="#1e40af"
                  fontSize="12"
                  fontWeight="bold"
                >
                  {plantType === "dam" ? "Retenue" : "Cours d'eau"}
                </text>
              </svg>
            </div><div
              ref={(el) => {
                elemsRef.current["dam"] = el;
              }}
              onClick={() => handleElementClick("dam")}
              role="button"
              tabIndex={0}
              className={`absolute transition-all duration-300 cursor-pointer ${
                plantType === "dam"
                  ? "left-40 bottom-20 w-6 h-24 sm:left-48 sm:bottom-24 sm:w-8 sm:h-28 lg:left-62 lg:bottom-32 lg:w-10 lg:h-36"
                  : "left-28 bottom-16 w-5 h-16 sm:left-36 sm:bottom-20 sm:w-6 sm:h-20 lg:left-44 lg:bottom-28 lg:w-8 lg:h-24"
              } ${activeStep === "dam" ? "scale-105" : ""}`}
              aria-label="Barrage"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 40 140"
                className={`transition-all duration-300 ${
                  activeStep === "dam" ? "filter drop-shadow-lg" : ""
                }`}
              >
                <defs>
                  <linearGradient
                    id="concreteGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#6b7280" />
                    <stop offset="50%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#4b5563" />
                  </linearGradient>
                  <pattern
                    id="concrete"
                    x="0"
                    y="0"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="8" height="8" fill="#6b7280" />
                    <circle cx="2" cy="2" r="0.5" fill="#9ca3af" />
                    <circle cx="6" cy="6" r="0.3" fill="#9ca3af" />
                  </pattern>
                </defs><path
                  d="M5,140 L5,10 Q5,5 10,5 L30,5 Q35,5 35,10 L35,140 Z"
                  fill="url(#concreteGradient)"
                  stroke="#374151"
                  strokeWidth="1"
                /><path
                  d="M5,140 L5,10 Q5,5 10,5 L30,5 Q35,5 35,10 L35,140 Z"
                  fill="url(#concrete)"
                  opacity="0.3"
                /><line
                  x1="8"
                  y1="30"
                  x2="32"
                  y2="30"
                  stroke="#4b5563"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <line
                  x1="8"
                  y1="60"
                  x2="32"
                  y2="60"
                  stroke="#4b5563"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <line
                  x1="8"
                  y1="90"
                  x2="32"
                  y2="90"
                  stroke="#4b5563"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <line
                  x1="8"
                  y1="120"
                  x2="32"
                  y2="120"
                  stroke="#4b5563"
                  strokeWidth="1"
                  opacity="0.7"
                /><rect
                  x="32"
                  y="100"
                  width="8"
                  height="12"
                  fill="#6b7280"
                  rx="2"
                />
                <rect
                  x="34"
                  y="102"
                  width="4"
                  height="8"
                  fill="#3b82f6"
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.9;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect><rect x="2" y="5" width="36" height="8" fill="#374151" rx="2" /><line
                  x1="5"
                  y1="5"
                  x2="5"
                  y2="0"
                  stroke="#4b5563"
                  strokeWidth="2"
                />
                <line
                  x1="35"
                  y1="5"
                  x2="35"
                  y2="0"
                  stroke="#4b5563"
                  strokeWidth="2"
                />
                <line
                  x1="5"
                  y1="2"
                  x2="35"
                  y2="2"
                  stroke="#4b5563"
                  strokeWidth="1"
                />
              </svg>
            </div><div
              ref={(el) => {
                elemsRef.current["penstock"] = el;
              }}
              onClick={() => handleElementClick("penstock")}
              role="button"
              tabIndex={0}
              className={`absolute transition-all duration-300 cursor-pointer ${
                plantType === "dam"
                  ? "left-46 bottom-26 w-24 h-4 sm:left-56 sm:bottom-30 sm:w-28 sm:h-5 lg:left-72 lg:bottom-40 lg:w-36 lg:h-6"
                  : "left-34 bottom-22 w-18 h-3 sm:left-42 sm:bottom-26 sm:w-22 sm:h-4 lg:left-52 lg:bottom-36 lg:w-28 lg:h-5"
              } ${activeStep === "penstock" ? "scale-105" : ""}`}
              style={{ transform: "rotate(20deg) translateY(0)" }}
              aria-label="Conduite forcée"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 144 24"
                className={`transition-all duration-300 ${
                  activeStep === "penstock" ? "filter drop-shadow-lg" : ""
                }`}
              >
                <defs>
                  <linearGradient
                    id="penstockGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#9ca3af" />
                    <stop offset="50%" stopColor="#6b7280" />
                    <stop offset="100%" stopColor="#4b5563" />
                  </linearGradient>
                  <linearGradient
                    id="penstockWater"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs><rect x="0" y="4" width="8" height="16" fill="#6b7280" rx="0" /><rect
                  x="6"
                  y="4"
                  width="138"
                  height="16"
                  fill="url(#penstockGradient)"
                  rx="8"
                /><rect
                  x="8"
                  y="6"
                  width="134"
                  height="12"
                  fill="url(#penstockWater)"
                  rx="6"
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </rect><circle cx="40" cy="12" r="10" fill="#374151" opacity="0.7" />
                <circle cx="76" cy="12" r="10" fill="#374151" opacity="0.7" />
                <circle cx="112" cy="12" r="10" fill="#374151" opacity="0.7" /><polygon
                  points="134,12 142,9 142,15"
                  fill="#1e40af"
                  opacity="0.9"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </polygon>
              </svg>
            </div><div
              ref={(el) => {
                elemsRef.current["generator"] = el;
              }}
              onClick={() => handleElementClick("generator")}
              role="button"
              tabIndex={0}
              className={`absolute bottom-16 left-72 w-18 h-12 sm:bottom-20 sm:left-96 sm:w-22 sm:h-14 lg:bottom-28 lg:left-140 lg:w-28 lg:h-20 rounded-lg transition-all duration-300 cursor-pointer ${
                activeStep === "generator" || activeStep === "turbine"
                  ? "scale-105"
                  : ""
              }`}
              aria-label="Turbogénérateur"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 112 80"
                className={`transition-all duration-300 ${
                  activeStep === "generator" || activeStep === "turbine"
                    ? "filter drop-shadow-lg"
                    : ""
                }`}
              >
                <defs>
                  <linearGradient
                    id="turbineGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                  <linearGradient
                    id="generatorGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <radialGradient id="turbineCenter" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6b7280" />
                    <stop offset="100%" stopColor="#374151" />
                  </radialGradient>
                  <linearGradient id="waterFlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs><rect
                  x="0"
                  y="35"
                  width="15"
                  height="10"
                  fill="url(#waterFlow)"
                  rx="5"
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect><rect
                  x="10"
                  y="10"
                  width="45"
                  height="60"
                  fill="url(#turbineGradient)"
                  rx="8"
                  stroke="#047857"
                  strokeWidth="2"
                /><rect
                  x="50"
                  y="10"
                  width="52"
                  height="60"
                  fill="url(#generatorGradient)"
                  rx="8"
                  stroke="#d97706"
                  strokeWidth="2"
                /><circle
                  cx="32"
                  cy="40"
                  r="15"
                  fill="url(#turbineCenter)"
                  stroke="#374151"
                  strokeWidth="2"
                  className={
                    activeStep === "turbine" || activeStep === "generator"
                      ? "animate-spin"
                      : ""
                  }
                  style={{ transformOrigin: "32px 40px" }}
                /><g
                  className={
                    activeStep === "turbine" || activeStep === "generator"
                      ? "animate-spin"
                      : ""
                  }
                  style={{ transformOrigin: "32px 40px" }}
                >
                  <path
                    d="M32,25 L38,32 L32,39 L26,32 Z"
                    fill="#9ca3af"
                    stroke="#6b7280"
                    strokeWidth="1"
                  />
                  <path
                    d="M47,40 L40,47 L33,40 L40,33 Z"
                    fill="#9ca3af"
                    stroke="#6b7280"
                    strokeWidth="1"
                  />
                  <path
                    d="M32,55 L26,48 L32,41 L38,48 Z"
                    fill="#9ca3af"
                    stroke="#6b7280"
                    strokeWidth="1"
                  />
                  <path
                    d="M17,40 L24,33 L31,40 L24,47 Z"
                    fill="#9ca3af"
                    stroke="#6b7280"
                    strokeWidth="1"
                  />
                </g><rect
                  x="45"
                  y="38"
                  width="10"
                  height="4"
                  fill="#374151"
                  rx="2"
                /><circle
                  cx="76"
                  cy="40"
                  r="15"
                  fill="url(#generatorGradient)"
                  stroke="#92400e"
                  strokeWidth="2"
                  className={
                    activeStep === "generator" || activeStep === "turbine"
                      ? "animate-spin"
                      : ""
                  }
                  style={{ transformOrigin: "76px 40px" }}
                /><g
                  className={
                    activeStep === "generator" || activeStep === "turbine"
                      ? "animate-spin"
                      : ""
                  }
                  style={{ transformOrigin: "76px 40px" }}
                >
                  <rect
                    x="74"
                    y="28"
                    width="4"
                    height="6"
                    fill="#92400e"
                    rx="2"
                  />
                  <rect
                    x="74"
                    y="46"
                    width="4"
                    height="6"
                    fill="#92400e"
                    rx="2"
                  />
                  <rect
                    x="66"
                    y="38"
                    width="6"
                    height="4"
                    fill="#92400e"
                    rx="2"
                  />
                  <rect
                    x="80"
                    y="38"
                    width="6"
                    height="4"
                    fill="#92400e"
                    rx="2"
                  />
                </g><circle
                  cx="56"
                  cy="8"
                  r="4"
                  fill="#fbbf24"
                  opacity="0.9"
                >
                  {(activeStep === "generator" || activeStep === "turbine") && (
                    <animate
                      attributeName="opacity"
                      values="0.5;1;0.5"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  )}
                </circle><rect
                  x="25"
                  y="70"
                  width="12"
                  height="8"
                  fill="url(#waterFlow)"
                  rx="4"
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.9;0.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </rect>{(activeStep === "turbine" || activeStep === "generator") && (
                  <g>
                    <circle
                      cx="32"
                      cy="40"
                      r="18"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        values="18;22;18"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0.1;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="76"
                      cy="40"
                      r="18"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        values="18;22;18"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0.1;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                )}
              </svg>
            </div><div
              ref={(el) => {
                elemsRef.current["tailrace"] = el;
              }}
              onClick={() => handleElementClick("tailrace")}
              role="button"
              tabIndex={0}
              className={`absolute bottom-3 left-104 w-32 h-6 sm:bottom-4 sm:left-140 sm:w-40 sm:h-7 lg:bottom-6 lg:left-206 lg:w-56 lg:h-10 rounded-lg transition-all duration-300 cursor-pointer ${
                activeStep === "tailrace" ? "scale-105" : ""
              }`}
              aria-label="Canal de fuite"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 224 40"
                className={`transition-all duration-300 ${
                  activeStep === "tailrace" ? "filter drop-shadow-lg" : ""
                }`}
              >
                <defs>
                  <linearGradient
                    id="tailraceGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#67e8f9" />
                  </linearGradient>
                  <pattern
                    id="waterRipples"
                    x="0"
                    y="0"
                    width="20"
                    height="6"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0,3 Q5,0 10,3 T20,3"
                      stroke="#0891b2"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.5"
                    />
                  </pattern>
                </defs><rect
                  x="0"
                  y="8"
                  width="224"
                  height="24"
                  fill="url(#tailraceGradient)"
                  rx="4"
                /><rect
                  x="0"
                  y="8"
                  width="224"
                  height="24"
                  fill="none"
                  stroke="#0e7490"
                  strokeWidth="2"
                  rx="4"
                /><rect
                  x="0"
                  y="8"
                  width="224"
                  height="8"
                  fill="url(#waterRipples)"
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.9;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect><g>
                  <circle cx="20" cy="20" r="2" fill="#67e8f9" opacity="0.8">
                    <animate
                      attributeName="cx"
                      values="20;204;20"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8;0.3;0.8"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="40" cy="16" r="1.5" fill="#67e8f9" opacity="0.6">
                    <animate
                      attributeName="cx"
                      values="40;224;40"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="60" cy="24" r="2.5" fill="#67e8f9" opacity="0.7">
                    <animate
                      attributeName="cx"
                      values="60;244;60"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g><polygon
                  points="200,20 208,16 208,24"
                  fill="#0e7490"
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </polygon>
              </svg>
            </div><svg className="absolute inset-0 w-full h-full pointer-events-none">
              {paths.map((path) => (
                <path
                  key={path.id}
                  d={path.d}
                  stroke={path.active ? "#3b82f6" : "#9ca3af"}
                  strokeWidth={path.active ? 3 : 2}
                  fill="none"
                  opacity={path.active ? 0.8 : 0.4}
                  className="transition-all duration-300"
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Étapes du processus
          </h4>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                activeStep === step.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
              onClick={() => handleElementClick(step.id)}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm ${step.color}`}
                >
                  {index + 1}
                </div>
                <h5 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  {step.name}
                </h5>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                {step.description}
              </p>
              {step.hauteur && (
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Hauteur: {step.hauteur}
                </div>
              )}
              {step.debit && (
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Débit: {step.debit}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
