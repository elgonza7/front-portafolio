import React, { useState } from 'react';

const ToggleButton = ({ show, onClick, label }) => (
  <button
    onClick={onClick}
    className="w-full sm:w-auto bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-medium text-sm px-5 py-2 rounded-xl transition-colors duration-200 mt-4"
  >
    {show ? `Ocultar ${label}` : `Mostrar ${label}`}
  </button>
);

function ExperienciaComponent() {
  const [showTech, setShowTech] = useState(false);
  const [showMethods, setShowMethods] = useState(false);
  const [showSoft, setShowSoft] = useState(false);

  return (
    <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 flex flex-col gap-8">
      
      {/* Encabezado */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900">
          ⌨️ Mi Experiencia
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          He trabajado en diversos proyectos, desde aplicaciones web hasta soluciones móviles, utilizando tecnologías modernas y metodologías ágiles para entregar productos de alta calidad.
        </p>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Mi experiencia incluye el desarrollo de interfaces de usuario intuitivas, integración de APIs, optimización del rendimiento y colaboración con equipos multidisciplinarios para lograr resultados excepcionales.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8 mt-2">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            💻 Tecnologías
          </h3>
          {showTech && (
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 ml-1">
              <li>React.js, Next.js</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Git, GitHub</li>
              <li>Tailwind CSS</li>
              <li>Bases de datos (PostgreSQL, MySQL, MongoDB)</li>
              <li>C# (.NET)</li>
              <li>Python</li>
              <li>Unity 3D y 2D</li>
            </ul>
          )}
          <div className="mt-auto w-full">
            <ToggleButton show={showTech} onClick={() => setShowTech(!showTech)} label="Tecnologías" />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            🎬 Metodologías
          </h3>
          {showMethods && (
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 ml-1">
              <li>Desarrollo Ágil (Scrum, Kanban)</li>    
              <li>Control de versiones con Git</li>
              <li>Pruebas unitarias y de integración</li>
              <li>Despliegue continuo y DevOps</li>
            </ul>
          )}
          <div className="mt-auto w-full">
            <ToggleButton show={showMethods} onClick={() => setShowMethods(!showMethods)} label="Metodologías" />
          </div>
        </div>

        {/* Columna 3: Habilidades Blandas */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            🎯 Habilidades Blandas
          </h3>
          {showSoft && (
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 ml-1">
              <li>Comunicación efectiva</li>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
              <li>Liderazgo</li>
            </ul>
          )}
          <div className="mt-auto w-full">
            <ToggleButton show={showSoft} onClick={() => setShowSoft(!showSoft)} label="Habilidades" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExperienciaComponent;