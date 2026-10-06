import React, { useState, useEffect } from 'react';

function HomeComponent() {
  // Reloj en vivo con la hora de San Juan
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000 * 30);
    return () => clearInterval(intervalo);
  }, []);

  const horaTexto = hora.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Argentina/San_Juan',
  });

  return (
    <div className="p-12 flex flex-col justify-between w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 relative overflow-hidden min-h-[550px]">
      
      <div className="flex justify-end">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-100 dark:border-gray-800">
          <span>✨</span> Armando experiencias Unicas.
        </div>
      </div>

      <div className="my-auto max-w-xl">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4">
          Hola, soy un<br/> desarrollador web<br/>
          creando experiencias digitales.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 max-w-md">
          Especializado en el desarrollo de aplicaciones web modernas y atractivas, combinando diseño y funcionalidad para ofrecer experiencias digitales excepcionales.
        </p>
        <p className="text-sm mb-8 max-w-md text-gray-700 dark:text-gray-300">
          🎮 Dueño y creador de{' '}
          <a href="https://animeless.com" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 hover:underline">
            animeless.com
          </a>
        </p>

        <div className="flex items-center gap-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-md transition-all">
            Contactame
          </a>
          <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">
            🕒 {horaTexto} (ARG)
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
          Confia en mi trabajo y habilidades para llevar tus ideas al siguiente nivel.
        </p>
        <div className="flex items-center gap-6 text-sm font-bold text-gray-400">
          <span>  <a href="https://github.com/elgonza7" target="_blank" rel="noopener noreferrer">Github</a></span>
          <span> <a href="https://www.instagram.com/gonfloress/" target="_blank" rel="noopener noreferrer">Instagram</a></span>
          <span> <a href="mailto:gokinflores@gmail.com">Gmail</a></span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-black transform origin-bottom-right skew-x-12 -z-10 hidden md:block"></div>
      
    </div>
  );
}

export default HomeComponent;
