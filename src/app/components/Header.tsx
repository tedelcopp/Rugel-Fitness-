'use client';

import { useState } from 'react';
import Drawers from './Drawer'; // Asegúrate de importar el componente correctamente

const links = [
  { name: 'Personalizados', content: 'Información sobre entrenamientos personalizados.' },
  { name: 'Planes de Entrenamiento', content: 'Descubre nuestros diversos planes de entrenamiento.' },
  { name: 'Semi-Personalizados', content: 'Planes semi-personalizados para tus necesidades.' },
  { name: 'Seguimiento Online', content: 'Opciones para seguimiento online de tus progresos.' },
];

const stats = [
  { name: 'Oficinas alrededor del mundo', value: '12' },
  { name: 'Colegas de tiempo completo', value: '300+' },
  { name: 'Horas por semana', value: '40' },
  { name: 'Días libres pagados', value: 'Ilimitados' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleLinkClick = (linkContent: string) => {
    setContent(linkContent);
    setOpen(true);
  };

  return (
    <div
    id="header"
    className="relative isolate overflow-hidden py-20 sm:py-24 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark"
  >
    <Drawers open={open} onCloseAction={() => setOpen(false)} content={content} />
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Entrena conmigo
        </h2>
        <p className="mt-6 text-lg font-medium sm:text-xl">
          ¿Estás listo para alcanzar tus metas? 💪 Conoce nuestros planes de entrenamiento diseñados especialmente
          para ayudarte a lograr tus objetivos de salud y fitness. Ya sea que busques ganar fuerza, mejorar tu
          resistencia o simplemente llevar un estilo de vida más activo y saludable.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold sm:grid-cols-2 md:flex lg:gap-x-10">
          {links.map((link) => (
            <div key={link.name} className="text-left">
              <button
                onClick={() => handleLinkClick(link.content)}
                className="text-linkLight hover:underline dark:text-linkDark"
              >
                {link.name}
              </button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.content);
                }}
                className="text-linkLight hover:underline dark:text-linkDark text-sm mt-2 block"
              >
                + info
              </a>
            </div>
          ))}
        </div>
        <dl className="mt-0 mb-0 grid grid-cols-1 gap-8 sm:mb-0 sm:grid-cols-2 lg:grid-cols-4">
  {stats.map((stat) => (
    <div key={stat.name} className="flex flex-col-reverse gap-1">
      <dt className="text-base">{stat.name}</dt>
      <dd className="text-4xl font-semibold tracking-tight">{stat.value}</dd>
    </div>
  ))}
</dl>



        
      </div>
    </div>
  </div>
  
  
  );
}
