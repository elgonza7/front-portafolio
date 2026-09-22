import React from 'react';

function HomeComponent() {
  return (
    <div className="p-12 flex flex-col justify-between w-full bg-white rounded-3xl border border-gray-100 relative overflow-hidden min-h-[550px]">
      
      <div className="flex justify-end">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
          <span>✨</span> Armando experiencias Unicas.
        </div>
      </div>

      <div className="my-auto max-w-xl">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          Hola, soy un<br/> desarrollador web<br/>
          creando experiencias digitales.
        </h1>
        <p className="text-gray-400 text-sm mb-8 max-w-md">
          Especializado en el desarrollo de aplicaciones web modernas y atractivas, combinando diseño y funcionalidad para ofrecer experiencias digitales excepcionales.
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-md transition-all">
            Contactame
          </button>
          <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">
            03:20 pm
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">
          Confia en mi trabajo y habilidades para llevar tus ideas al siguiente nivel.
        </p>
        <div className="flex items-center gap-6 text-sm font-bold text-gray-400">
          <span>  <a href="https://github.com/gokinflores" target="_blank" rel="noopener noreferrer">Github</a></span>
          <span> <a href="https://www.instagram.com/gonfloress/" target="_blank" rel="noopener noreferrer">Instagram</a></span>
          <span> <a href="mailto:gokinflores@gmail.com">Gmail</a></span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-black transform origin-bottom-right skew-x-12 -z-10 hidden md:block"></div>
      
    </div>
  );
}

export default HomeComponent;
