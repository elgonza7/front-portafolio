import React from "react";
import HomeComponent from "./components/home.jsx";
import ExperienciaComponent from "./components/experiencia.jsx";
import ProyectosComponent from "./components/proyectos.jsx";
import ServiciosComponent from "./components/servicios.jsx";
import ContactoComponent from "./components/contacto.jsx";
import LlmAvatarAssistant from '../ai/llm-avatar-assistant-react-main/src/components/LlmAvatarAssistant.jsx'
import { useState } from 'react'

/**
 * Demo host: a small "portfolio / docs" SPA for the assistant itself.
 * Every <section id> is a target the assistant can scroll to. The titles are
 * deliberately distinctive ("Overview", "Quick Start", …) so the model can be
 * asked to reference one and the auto-scroll is easy to verify in tests.
 *
 * The assistant is configured to talk to the local llama.cpp router through
 * the dev proxy (baseUrl "/v1" -> http://192.168.1.2:8080). Override with
 * VITE_LLM_PROXY_TARGET in .env.local, or point cfg.baseUrl at any
 * OpenAI-compatible URL.
 */

const CONFIG = {
  baseUrl: '/v1',
  apiKey: '', // dev: the Vite proxy injects the real key server-side
  model: (typeof __VITE_LLM_MODEL__ !== 'undefined' ? __VITE_LLM_MODEL__ : 'default'),
  defaultText:
    'I am floating here on the right. Ask me anything about this page — e.g. "what can I do with the assistant?" and I will point you to the right section.',
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
    <main className="flex-1 ml-64 p-6 bg-gray-200 flex flex-col gap-12 overflow-y-auto">
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
        <div className="scroll-mt-24 bg-black rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 flex flex-col gap-8">
                <LlmAvatarAssistant
        key={side}
        config={{ ...CONFIG, side }}
        onSend={() => { /* demo hook */ }}
      />
        </div>
      </div>
    </main>
  );
}


export default Body;
