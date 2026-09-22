import React from 'react';


const ServiceCard = ({ icon, title, description }) => (
  <article className="flex flex-col bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </article>
);

function ServiciosComponent() {
  return (
    <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 flex flex-col gap-10">
      <div className="flex flex-col gap-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          ⚙️ Servicios
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Ofrezco una variedad de servicios de desarrollo web y móvil, incluyendo diseño de interfaces, desarrollo de aplicaciones, optimización de rendimiento y mantenimiento continuo. Mi objetivo es ayudar a las empresas a alcanzar sus metas digitales mediante soluciones tecnológicas innovadoras y eficientes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard 
          icon="💻"
          title="Desarrollo Web"
          description="Desarrollo de aplicaciones web modernas y atractivas utilizando tecnologías como React, Next.js y Tailwind CSS. Me especializo en crear interfaces de usuario intuitivas y funcionales que brindan experiencias digitales excepcionales."
        />
        <ServiceCard 
          icon="📱"
          title="Desarrollo Móvil"
          description="Desarrollo de aplicaciones móviles para iOS y Android utilizando tecnologías como React Native o Flutter. Me especializo en crear experiencias de usuario intuitivas y funcionales en dispositivos móviles."
        />
        <ServiceCard 
          icon="🎮"
          title="Desarrollo de Videojuegos"
          description="Desarrollo de videojuegos utilizando Unity 3D y 2D. Me especializo en crear experiencias de juego atractivas y envolventes, combinando diseño, programación y narrativa para ofrecer entretenimiento excepcional."
        />
        <ServiceCard 
          icon="🖥️"
          title="Desarrollo de Aplicaciones"
          description="Desarrollo con Python y C# para aplicaciones de escritorio y móviles, utilizando frameworks como PyQt, Kivy o Xamarin. Me especializo en crear aplicaciones funcionales y eficientes que satisfacen las necesidades de los usuarios."
        />
      </div>

      <div className="border-t border-gray-100 my-2"></div>
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-gray-800">
          ✨ Servicios Destacados
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            Desarrollo de aplicaciones web modernas y atractivas.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            Diseño de interfaces de usuario intuitivas y funcionales.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            Optimización del rendimiento y la velocidad de carga.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            Mantenimiento y soporte continuo para aplicaciones existentes.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            Desarrollo de aplicaciones móviles para iOS y Android.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            Integración de APIs y servicios externos.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            Consultoría tecnológica y asesoramiento en estrategias digitales.
          </li>
        </ul>
      </div>

    </section>
  );
}

export default ServiciosComponent;