'use client';

import { useState } from 'react';
import Drawers from './Drawer';

const links = [
  { 
    name: 'Personalizados', 
    content: 'Información sobre entrenamientos personalizados.', 
    image: '/images/Entrenamiento5.jpg',
    details: 'Entrenamientos diseñados a medida para alcanzar tus metas específicas, sea ganar fuerza, bajar de peso o aumentar tu resistencia.'
  },
  { 
    name: 'Planes de Entrenamiento', 
    content: 'Descubre nuestros diversos planes de entrenamiento.', 
    image: '/images/planes.jpg',
    details: 'Nuestros planes incluyen rutinas variadas, adaptadas a diferentes niveles de experiencia, para garantizar el máximo progreso.'
  },
  { 
    name: 'Semi-Personalizados', 
    content: 'Planes semi-personalizados para tus necesidades.', 
    image: '/images/semi-personalizados.jpg',
    details: 'Combinamos la flexibilidad de un plan general con ajustes específicos para ti, logrando un balance entre eficiencia y personalización.'
  },
  { 
    name: 'Seguimiento Online', 
    content: 'Opciones para seguimiento online de tus progresos.', 
    image: '/images/seguimiento.jpg',
    details: 'Accede a herramientas de seguimiento y consultas con tu entrenador desde la comodidad de tu hogar.'
  },
];

const stats = [
  { name: 'Oficinas alrededor del mundo', value: '12' },
  { name: 'Colegas de tiempo completo', value: '+ 300' },
  { name: 'Horas por semana', value: '+ 40' },
  { name: 'Días libres pagados', value: 'Ilimitados' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<{ image: string; content: string; details: string } | null>(null);

  const handleLinkClick = (linkContent: { image: string; content: string; details: string }) => {
    setDrawerContent(linkContent);
    setOpen(true);
  };

  return (
    <div
      id="header"
      className="relative isolate overflow-hidden py-20 sm:py-24 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark"
    >
      <Drawers open={open} onCloseAction={() => setOpen(false)} content={drawerContent} />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-5xl font-semibold tracking-tight sm:text-7xl underline decoration-[#D64D0C]"
            style={{ textUnderlineOffset: '12px' }}
          >
            Entrena conmigo
          </h2>
          <p className="mt-8 text-lg font-medium sm:text-xl">
            ¿Estás listo para alcanzar tus metas? 💪 Conoce nuestros planes de entrenamiento diseñados especialmente
            para ayudarte a lograr tus objetivos de salud y fitness.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <div key={link.name} className="text-left space-y-2">
                <button
                  onClick={() => handleLinkClick(link)}
                  className="text-linkLight hover:underline dark:text-linkDark text-lg"
                >
                  {link.name}
                </button>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link);
                  }}
                  className="text-linkLight hover:underline dark:text-linkDark text-sm block"
                >
                  + info
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center gap-2">
              <dt
                className="text-xl font-medium text-white dark:text-gray-300 underline decoration-[#D64D0C]"
                style={{ textUnderlineOffset: '8px' }}
              >
                {stat.name}
              </dt>
              <dd className="text-4xl font-semibold tracking-tight text-white dark:text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
