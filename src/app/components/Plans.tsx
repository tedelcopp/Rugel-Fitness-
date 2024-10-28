"use client";

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

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
    name: 'Personalizado',
    id: 'tier-hobby',
    priceMonthly: '$29',
    description: "El plan perfecto para empezar.",
    features: ['Hasta 10,000 suscriptores', 'Análisis avanzado', 'Soporte 24 horas'],
    featured: false,
  },
  {
    name: 'Planes de Entrenamiento',
    id: 'tier-pro',
    priceMonthly: '$49',
    description: 'Ideal para negocios en crecimiento.',
    features: [
      '100 productos',
      'Hasta 50,000 suscriptores',
      'Análisis avanzado',
    ],
    featured: false,
  },
  {
    name: 'Semi-Personalizados',
    id: 'tier-enterprise',
    priceMonthly: '$99',
    description: 'Soporte dedicado e infraestructura para tu empresa.',
    features: [
      'Productos ilimitados',
      'Suscriptores ilimitados',
      'Análisis avanzado',
    ],
    featured: true,
  },
  {
    name: 'Seguimiento Online',
    id: 'tier-premium',
    priceMonthly: '$149',
    description: 'Todas las características con soporte personalizado.',
    features: [
      'Productos ilimitados',
      'Suscriptores ilimitados',
      'Análisis avanzado',
    ],
    featured: false,
  },
];

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div  id="plans" className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 text-gray-300">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-400">Planes</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
          Elegí el plan que más se adapte a vos
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl">
        Elegí un plan accesible con las mejores características para atraer a tu audiencia y aumentar tus ventas.
      </p>
      <div className="mx-auto mt-16 flex justify-center space-x-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              'cursor-pointer transform transition-transform duration-300 ease-in-out',
              selectedPlan === tier.id 
                ? 'scale-105 z-10 bg-indigo-600 text-white ring-2 ring-indigo-500' 
                : 'scale-100 bg-gray-800 text-gray-300',
              'relative p-6 rounded-lg shadow-lg hover:shadow-xl',
              'w-72 h-80'
            )}
            onClick={() => setSelectedPlan(tier.id)}
          >
            <h3 className={classNames('text-lg font-semibold', selectedPlan === tier.id ? 'text-yellow-400' : tier.featured ? 'text-indigo-400' : 'text-gray-300')}>
              {tier.name}
            </h3>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
              <span className="text-base">{selectedPlan === tier.id ? '' : '/mes'}</span>
            </p>
            <p className="mt-4 text-base">{tier.description}</p>
            <ul className="mt-6 space-y-2 text-sm leading-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-x-2">
                  <CheckIcon className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="cursor-pointer mt-8 w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-500">+ Información</button>
          </div>
        ))}
      </div>
    </div>
  );
}
