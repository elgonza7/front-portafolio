import React from 'react';

function ContactoComponent() {
  return (
    <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 flex flex-col relative">
      


      <div className="absolute top-8 right-8 hidden md:block">
        <span className="bg-gray-50 border border-gray-100 text-gray-500 text-xs py-1.5 px-4 rounded-full flex items-center gap-2">
          ✨ Armando experiencias únicas.
        </span>
      </div>
      <div className="mt-4 md:mt-8 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          ¿Tienes un proyecto en mente? <br className="hidden md:block" />
          <span className="text-blue-600">Hablemos.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
          Estoy disponible para colaboraciones, proyectos freelance y oportunidades laborales. Especializado en combinar diseño y funcionalidad para ofrecer experiencias digitales excepcionales.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-10">
        <a 
          href="mailto:gokinflores@gmail.com" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-base px-8 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
        >
          Contactame
        </a>
        <div className="bg-blue-50 text-blue-600 font-medium text-base px-6 py-3.5 rounded-xl flex items-center gap-2">
          📍 San Juan, Arg
        </div>
      </div>
      <hr className="border-gray-100 my-10 md:my-12" />
      <div className="flex flex-col gap-6">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Confía en mi trabajo y habilidades para llevar tus ideas al siguiente nivel.
        </p>
        
        <div className="flex flex-wrap items-center gap-8 text-sm md:text-base mt-2">
          <a 
            href="https://github.com/elgonza7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium"
          >
            💻 Github
          </a>
          <a 
            href="https://instagram.com/gokinflores" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium"
          >
            📸 Instagram
          </a>
          <a 
            href="mailto:gokinflores@gmail.com" 
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium"
          >
            📧 Gmail
          </a>
        </div>
      </div>

    </section>
  );
}

export default ContactoComponent;