'use client';

import { useState } from 'react';
import Drawers from './Drawer';

type Link = {
  name: string;
  content: string;
  image: string;
  details: string;
  whatsappMessage: string;
};

const links: Link[] = [
  {
    name: 'Personalizados',
    content: 'Información sobre entrenamientos personalizados.',
    image: '/images/Entrenamiento5.jpg',
    details: 'Entrenamientos diseñados a medida para alcanzar tus metas específicas, sea ganar fuerza, bajar de peso o aumentar tu resistencia.',
    whatsappMessage: '¡Hola! Estoy interesado en los entrenamientos personalizados.',
  },
  {
    name: 'Planes de Entrenamiento',
    content: 'Descubre nuestros diversos planes de entrenamiento.',
    image: '/images/Entrenamiento5.jpg',
    details: 'Nuestros planes incluyen rutinas variadas, adaptadas a diferentes niveles de experiencia, para garantizar el máximo progreso.',
    whatsappMessage: '¡Hola! Me gustaría conocer más sobre los planes de entrenamiento.',
  },
  {
    name: 'Semi-Personalizados',
    content: 'Planes semi-personalizados para tus necesidades.',
    image: '/images/Entrenamiento5.jpg',
    details: 'Combinamos la flexibilidad de un plan general con ajustes específicos para ti, logrando un balance entre eficiencia y personalización.',
    whatsappMessage: '¡Hola! Quiero saber más sobre los planes semi-personalizados.',
  },
  {
    name: 'Seguimiento Online',
    content: 'Opciones para seguimiento online de tus progresos.',
    image: '/images/Entrenamiento5.jpg',
    details: 'Accede a herramientas de seguimiento y consultas con tu entrenador desde la comodidad de tu hogar.',
    whatsappMessage: '¡Hola! Estoy interesado en el seguimiento online.',
  },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<Link | null>(null);

  const handleLinkClick = (link: Link) => {
    setDrawerContent(link);
    setOpen(true);
  };

  return (
    <header
      id="header"
      className="relative flex flex-col items-center justify-center px-4 py-12 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark"
    >
      <Drawers open={open} onCloseAction={() => setOpen(false)} content={drawerContent} />

      <div className="text-center max-w-3xl mb-12">
        <h2
          className="text-5xl font-semibold tracking-tight sm:text-6xl underline decoration-[#D64D0C] decoration-4"
        >
          Entrena conmigo
        </h2>
        <p className="mx-auto mt-8 max-w-1xl text-lg font-medium sm:text-xl">
          ¿Estás listo para alcanzar tus metas? 💪 Conoce nuestros planes de entrenamiento diseñados especialmente
          para ayudarte a lograr tus objetivos de salud y fitness.
        </p>
      </div>

      <section className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-2 mb-12">
        {links.map((link) => (
          <div
            key={link.name}
            className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={link.image}
              alt={link.name}
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-lg font-semibold mb-2 text-center text-gray-800 dark:text-gray-200">{link.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">{link.content}</p>
            <button
              onClick={() => handleLinkClick(link)}
              className="px-5 py-2 text-white bg-[#D64D0C] rounded-full hover:bg-[#B0400A] transition-all focus:ring-4 focus:ring-[#D64D0C]/50"
            >
              Conoce más
            </button>
          </div>
        ))}
      </section>
    </header>
  );
}
