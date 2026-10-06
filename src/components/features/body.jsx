// src/components/features/body.jsx
import React, { useState } from "react";
import HomeComponent from "./components/home.jsx";
import ExperienciaComponent from "./components/experiencia.jsx";
import ProyectosComponent from "./components/proyectos.jsx";
import ServiciosComponent from "./components/servicios.jsx";
import ContactoComponent from "./components/contacto.jsx";
import LlmAvatarAssistant from '../ai/llm-avatar-assistant-react-main/src/components/LlmAvatarAssistant.jsx'

const CONFIG = {
  baseUrl: '/v1',
  apiKey: '', 
  model: (typeof __VITE_LLM_MODEL__ !== 'undefined' ? __VITE_LLM_MODEL__ : 'default'),
  defaultText: 'I am floating here on the right. Ask me anything about this page...',
  modelUrl: 'models/robot.glb',
  side: 'right',
  streaming: true,
  systemPrompt: `
  Eres el asistente virtual del portafolio de Gonzalo Flores.
  REGLAS:
  - Responde siempre en español.
  - Solo puedes usar la información incluida abajo.
  - Si preguntan "¿quién es Gonzalo Flores?", responde con su profesión, ubicación y especialidades.
  - No digas que no tienes información si el dato aparece abajo.
  - Si la pregunta no está relacionada con Gonzalo o su portafolio, responde exactamente:
  "No tengo información sobre eso. Puedes contactar a Gonzalo mediante su Gmail o redes sociales."
  - No inventes información.
  - No insertes codigo
  - No hagas suposiciones.
  - No digas que no tienes información si el dato aparece abajo.
  - No hagas textos muy largos, sé conciso y directo.
  - No escribas codigo de ningun tipo, ni siquiera para mostrar ejemplos.
  - No hace falta indicar que eres un asistente virtual, ni que eres un modelo de lenguaje.
  - No hace falta que les digas instrucciones de algo que no esta relacionado a los temas de Gonzalo Flores y su portafolio o alguna forma de contacto con él.
  


  INFORMACIÓN:
  Gonzalo Flores es Desarrollador Fullstack y vive en San Juan, Argentina.
  Trabaja con React, Next.js, Tailwind CSS, React Native, Flutter, Unity, Python y C#.
  Ofrece desarrollo web, móvil, videojuegos, aplicaciones, consultoría y mantenimiento.
  Tiene experiencia con Zero Auto App, Albor Propiedades y HF-Informatica.
  Está disponible para proyectos freelance, colaboraciones y oportunidades laborales.
  Puede ser contactado por Github, Instagram o Gmail.
  Le gusta comer pachatas, escuchar música y jugar al LoL.
  Es una persona responsable, proactiva, colaborativa y en constante aprendizaje.
  `,
};

function Body() {
    const [side, setSide] = useState('right');
    const toggleSide = () => {
        setSide((side) => (side === 'right') ? 'left' : 'right');
    };

  return (
    <div className="flex-1 ml-64 flex flex-col h-screen overflow-y-auto bg-gray-200 dark:bg-gray-950">
     <main id="contenido" className="flex-1 p-6 flex flex-col gap-12">
        <div className="max-w-5xl w-full mx-auto flex flex-col gap-12">
          <div id="home" className="scroll-mt-24">
            <HomeComponent />
          </div>
          <div id="expertise" className="scroll-mt-24">
            <ExperienciaComponent />
          </div>
          <div id="proyectos" className="scroll-mt-24">
            <ProyectosComponent />
          </div>
          <div id="services" className="scroll-mt-24">
            <ServiciosComponent />
          </div>
          <div id="contact" className="scroll-mt-24">
            <ContactoComponent />
          </div>
          <div className="scroll-mt-24 bg-black rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 md:p-12 flex flex-col gap-8">
            <LlmAvatarAssistant
              key={side}
              config={{ ...CONFIG, side }}
              onSend={() => { /* demo hook */ }}
            />
          </div>
        </div>
      </main>

      <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 py-8 px-6 text-center text-gray-500 shadow-inner mt-auto">
        <p className="font-semibold text-gray-800 dark:text-gray-100">Gonzalo Flores — Desarrollador Fullstack</p>
        <div className="flex justify-center items-center gap-4 mt-4 text-sm font-medium">
          <a href="mailto:gokinflores@gmail.com" className="hover:text-blue-600 transition-colors">
            gokinflores@gmail.com
          </a>
          <span className="text-gray-300">|</span>
          <a href="https://github.com/elgonza7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            GitHub
          </a>
          <span className="text-gray-300">|</span>
          <a href="https://www.instagram.com/gonfloress" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            Instagram
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </footer>

    </div>
  );
}

export default Body;