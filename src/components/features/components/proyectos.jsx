import React from 'react';
import alborLogo from '../../../assets/albor.png';
import hfLogo from '../../../assets/hf.png';
import zeroAutoLogo from '../../../assets/zeroautoapp.png';

// Componente reutilizable para las tarjetas de proyecto (DRY)
const ProjectCard = ({ title, description, link, imgSrc, imgAlt }) => (
  <article className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
      📒 {title}
    </h3>
    
    <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">
      {description}
    </p>
    
    <div className="mt-5 flex flex-col gap-4">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex justify-center items-center w-full sm:w-auto bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-medium text-sm px-5 py-2 rounded-xl transition-colors duration-200"
      >
        Ir al sitio web
      </a>
      <div className="w-full h-40 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-2">
        <img 
          src={imgSrc} 
          alt={imgAlt} 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  </article>
);

function ProyectosComponent() {
  return (
    <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 flex flex-col gap-8">
      
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          📚 Proyectos
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Una selección de mis trabajos más recientes.
        </p>
      </div>

      {/* Grid responsivo: 1 columna en móviles, 2 en tablets, 3 en pantallas grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <ProjectCard 
          title="Zero Auto App"
          description="Una aplicación web para la gestión de consultas, desarrollada con React y NextJS. Permite a los Laboratorios automatizar sus consultas, preguntas y respuestas hacia los clientes por WhatsApp."
          link="https://zeroautoapp.com"
          imgSrc={zeroAutoLogo}
          imgAlt="Zero Auto App Logo"
        />

        <ProjectCard 
          title="Albor Propiedades"
          description="Un sitio web para una inmobiliaria, desarrollado con React y Tailwind CSS. Proporciona una interfaz atractiva y funcional para mostrar propiedades y facilitar la búsqueda de inmuebles."
          link="https://albor-propiedades.vercel.app/"
          imgSrc={alborLogo}
          imgAlt="Albor Propiedades Logo"
        />

        <ProjectCard 
          title="HF-Informatica"
          description="Un sitio web para una empresa de informática, desarrollado con React y Tailwind CSS. Proporciona información sobre los servicios ofrecidos y permite a los clientes ponerse en contacto."
          link="https://hf-info.vercel.app/"
          imgSrc={hfLogo}
          imgAlt="HF-Informatica Logo"
        />

      </div>
    </section>
  );
}

export default ProyectosComponent;