"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

interface Tier {
  name: string;
  id: string;
  priceMonthly: string;
  description: string;
  features: string[];
  featured: boolean;
}

const tiers: Tier[] = [
  {
    name: "Personalizado",
    id: "tier-hobby",
    priceMonthly: "$29",
    description: "El plan perfecto para empezar.",
    features: ["Hasta 10,000 suscriptores", "Análisis avanzado", "Soporte 24 horas"],
    featured: false,
  },
  {
    name: "Planes de Entrenamiento",
    id: "tier-pro",
    priceMonthly: "$49",
    description: "Ideal para negocios en crecimiento.",
    features: ["100 productos", "Hasta 50,000 suscriptores", "Análisis avanzado"],
    featured: false,
  },
  {
    name: "Semi-Personalizados",
    id: "tier-enterprise",
    priceMonthly: "$99",
    description: "Soporte dedicado e infraestructura para tu empresa.",
    features: ["Productos ilimitados", "Suscriptores ilimitados", "Análisis avanzado"],
    featured: true,
  },
];

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
<div
  id="plans"
  className={classNames(
    "relative isolate -mt-10 px-6 py-16 sm:py-20 lg:px-8 transition-colors duration-500",
    "bg-[#4A966F] dark:bg-[#838683]"
  )}
>
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-7 text-linkLight dark:text-linkDark">
          Planes
        </h2>
        <p className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Elegí el plan que más se adapte a vos
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium sm:text-xl">
        Elegí un plan accesible con las mejores características para atraer a tu audiencia y aumentar tus ventas.
      </p>
      <div className="mx-auto mt-16 flex flex-wrap justify-center gap-6 md:gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              "cursor-pointer transform transition-transform duration-300 ease-in-out",
              selectedPlan === tier.id
                ? "scale-105 z-10 ring-2 ring-linkLight dark:ring-linkDark"
                : "scale-100",
              "relative p-6 rounded-lg shadow-lg hover:shadow-xl",
              "bg-cardBgLight text-textLight dark:bg-cardBgDark dark:text-textDark",
              "w-full sm:w-72 lg:w-80 max-w-xs"
            )}
            onClick={() => setSelectedPlan(tier.id)}
          >
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
              <span className="text-base">{selectedPlan === tier.id ? "" : "/mes"}</span>
            </p>
            <p className="mt-4 text-base">{tier.description}</p>
            <ul className="mt-6 space-y-2 text-sm leading-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-x-2">
                  <CheckIcon className="h-5 w-5 text-linkLight dark:text-linkDark" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
