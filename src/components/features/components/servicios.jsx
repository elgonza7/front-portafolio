import React from 'react';
import Aparecer from '../../ui/Aparecer.jsx';

const servicios = [
  { icon: '💻', color: 'bg-blue-100 dark:bg-blue-900/40', title: 'Desarrollo Web', description: 'Sitios y apps web modernas con React, Next.js y Tailwind.' },
  { icon: '📱', color: 'bg-green-100 dark:bg-green-900/40', title: 'Desarrollo Móvil', description: 'Apps para iOS y Android con React Native o Flutter.' },
  { icon: '🎮', color: 'bg-red-100 dark:bg-red-900/40', title: 'Videojuegos', description: 'Juegos 2D y 3D en Unity, como hobby y proyectos chicos.' },
  { icon: '🖥️', color: 'bg-purple-100 dark:bg-purple-900/40', title: 'Aplicaciones', description: 'Programas de escritorio con Python y C#.' },
];

const extras = [
  'Diseño de interfaces',
  'Integración de APIs',
  'Optimización de rendimiento',
  'Mantenimiento y soporte',
  'Consultoría tecnológica',
];

const ServiceCard = ({ icon, color, title, description }) => (
  <article className="group h-full flex flex-col gap-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl hover:bg-white dark:hover:bg-gray-900 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
  </article>
);

function ServiciosComponent() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 md:p-12 flex flex-col gap-10">
      <Aparecer>
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            ¿En qué te puedo ayudar?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Soluciones a medida, desde la idea hasta que está funcionando.
          </p>
        </div>
      </Aparecer>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {servicios.map((s, i) => (
          <Aparecer key={s.title} delay={i * 100}>
            <ServiceCard {...s} />
          </Aparecer>
        ))}
      </div>

      <Aparecer>
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-white flex flex-col gap-4">
          <h3 className="text-lg font-bold">✨ Además incluyo</h3>
          <ul className="flex flex-wrap gap-2">
            {extras.map((e) => (
              <li key={e} className="bg-white/15 hover:bg-white/25 transition-colors px-4 py-2 rounded-full text-sm font-medium">
                ✓ {e}
              </li>
            ))}
          </ul>
        </div>
      </Aparecer>
    </section>
  );
}

export default ServiciosComponent;
