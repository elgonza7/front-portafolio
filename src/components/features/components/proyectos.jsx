import React, { useState } from 'react';
import Aparecer from '../../ui/Aparecer.jsx';
import alborLogo from '../../../assets/albor.png';
import hfLogo from '../../../assets/hf.png';
import zeroAutoLogo from '../../../assets/zeroautoapp.png';
import animelessImg from '../../../assets/animeless.png';

const proyectos = [
  {
    title: 'AnimeLess',
    tipo: 'Propio',
    destacado: true,
    description: 'Juego web estilo "Higher or Lower" con animes. Enfrentamientos nuevos cada día, login, avatares y leaderboard global.',
    tags: ['React', 'Tailwind', 'Auth'],
    link: 'https://animeless.com',
    imgSrc: animelessImg,
    imgAlt: 'Captura del leaderboard global de AnimeLess',
  },
  {
    title: 'Zero Auto App',
    tipo: 'Cliente',
    description: 'Automatiza las consultas de laboratorios con sus clientes por WhatsApp.',
    tags: ['React', 'Next.js'],
    link: 'https://zeroautoapp.com',
    imgSrc: zeroAutoLogo,
    imgAlt: 'Logo de Zero Auto App',
  },
  {
    title: 'Albor Propiedades',
    tipo: 'Cliente',
    description: 'Sitio de inmobiliaria para mostrar propiedades y buscar inmuebles.',
    tags: ['React', 'Tailwind'],
    link: 'https://albor-propiedades.vercel.app/',
    imgSrc: alborLogo,
    imgAlt: 'Logo de Albor Propiedades',
  },
  {
    title: 'HF-Informática',
    tipo: 'Cliente',
    description: 'Web de empresa de informática con servicios y contacto.',
    tags: ['React', 'Tailwind'],
    link: 'https://hf-info.vercel.app/',
    imgSrc: hfLogo,
    imgAlt: 'Logo de HF-Informática',
  },
  {
    title: 'Juegos en itch.io',
    tipo: 'Juegos',
    description: 'Juegos que hago en Unity por afición. Nivel junior, pero con muchas ganas.',
    tags: ['Unity', 'C#'],
    link: 'https://elgokin.itch.io',
    emoji: '🎮',
  },
];

const filtros = ['Todos', 'Propio', 'Cliente', 'Juegos'];

const ProjectCard = ({ title, description, tags, link, imgSrc, imgAlt, emoji, destacado }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex flex-col h-full rounded-2xl border overflow-hidden bg-white dark:bg-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
      destacado ? 'border-purple-300 dark:border-purple-700' : 'border-gray-100 dark:border-gray-800'
    }`}
  >
    <div className="relative h-44 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={imgAlt}
          width="400"
          height="176"
          loading="lazy"
          className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${destacado ? 'object-cover object-top' : 'object-contain p-6'}`}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#fa5c5c] to-purple-600 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
          {emoji}
        </div>
      )}
      {destacado && (
        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          ⭐ Soy el dueño
        </span>
      )}
    </div>

    <div className="flex flex-col flex-grow p-5 gap-3">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center justify-between">
        {title}
        <span className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">↗</span>
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

function ProyectosComponent() {
  const [filtro, setFiltro] = useState('Todos');

  const visibles = filtro === 'Todos' ? proyectos : proyectos.filter((p) => p.tipo === filtro);

  return (
    <section className="w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 md:p-12 flex flex-col gap-8">
      <Aparecer>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Proyectos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              Trabajos recientes
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filtros.map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                aria-pressed={filtro === f}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filtro === f
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </Aparecer>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibles.map((p, i) => (
          <div key={p.title} className={`animate-aparecer ${p.destacado && filtro === 'Todos' ? 'md:col-span-2' : ''}`} style={{ animationDelay: `${i * 80}ms` }}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProyectosComponent;
