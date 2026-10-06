import React, { useState } from 'react';
import Aparecer from '../../ui/Aparecer.jsx';

const pestanas = [
  {
    id: 'tech',
    label: '💻 Tecnologías',
    items: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git / GitHub', 'PostgreSQL', 'C# (.NET)', 'Python', 'Unity 2D / 3D'],
  },
  {
    id: 'metodos',
    label: '🎬 Metodologías',
    items: ['Scrum', 'Control de versiones', 'Pruebas unitarias', 'Pruebas de integración', 'Despliegue continuo'],
  },
  {
    id: 'blandas',
    label: '🎯 Habilidades',
    items: ['Comunicación', 'Trabajo en equipo', 'Resolución de problemas', 'Liderazgo', 'Aprendizaje constante'],
  },
];

const datos = [
  { numero: '5+', texto: 'Proyectos publicados' },
  { numero: '13', texto: 'Tecnologías' },
  { numero: '1', texto: 'Producto propio' },
];

function ExperienciaComponent() {
  const [activa, setActiva] = useState('tech');
  const pestana = pestanas.find((p) => p.id === activa);

  return (
    <section className="w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 md:p-12 flex flex-col gap-10">
      <Aparecer>
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Experiencia</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Lo que sé hacer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Desarrollo aplicaciones web y móviles con tecnologías modernas, desde la interfaz hasta la integración con APIs.
          </p>
        </div>
      </Aparecer>

      {/* Números rápidos */}
      <div className="grid grid-cols-3 gap-4">
        {datos.map((dato, i) => (
          <Aparecer key={dato.texto} delay={i * 100}>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border border-blue-100 dark:border-gray-800 p-5 text-center hover:-translate-y-1 transition-transform duration-300">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-600">{dato.numero}</p>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">{dato.texto}</p>
            </div>
          </Aparecer>
        ))}
      </div>

      {/* Pestañas */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl self-start" role="tablist">
          {pestanas.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activa === p.id}
              onClick={() => setActiva(p.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activa === p.id
                  ? 'bg-white dark:bg-gray-900 text-blue-600 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* key={activa} hace que se vuelva a animar al cambiar de pestaña */}
        <ul key={activa} className="flex flex-wrap gap-3" role="tabpanel">
          {pestana.items.map((item, i) => (
            <li
              key={item}
              style={{ animationDelay: `${i * 40}ms` }}
              className="animate-aparecer px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:border-blue-500 hover:text-blue-600 hover:scale-105 transition-all duration-200 cursor-default"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Unity por afición */}
      <Aparecer>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl bg-gray-900 dark:bg-black text-white p-6 md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-400">Por afición</p>
            <h3 className="text-xl font-bold mt-1">🎮 Programador de videojuegos en Unity</h3>
            <p className="text-sm text-gray-300 mt-2 max-w-lg">
              En mi tiempo libre hago juegos en Unity (nivel junior) y los publico en itch.io.
            </p>
          </div>
          <a
            href="https://elgokin.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#fa5c5c] hover:bg-[#e04848] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors text-center"
          >
            Ver mis juegos ↗
          </a>
        </div>
      </Aparecer>
    </section>
  );
}

export default ExperienciaComponent;
