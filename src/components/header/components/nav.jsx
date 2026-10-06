import { Home, Code, Briefcase, Wrench, Mail } from 'lucide-react';
import { useState, useEffect } from "react";

const menuItems = [
    { id: 'home', name: 'Casa', icon: Home, idMove: 'home' },
    { id: 'expertise', name: 'Experiencia', icon: Code, idMove: 'expertise' },
    { id: 'projects', name: 'Proyectos', icon: Briefcase, idMove: 'proyectos' }, 
    { id: 'services', name: 'Servicios', icon: Wrench, idMove: 'services' },
    { id: 'contact', name: 'Contacto', icon: Mail, idMove: 'contact' },
];

export default function NavComponent() {
    const [activeTab, setActiveTab] = useState('home');

    // Mira qué sección está en pantalla y marca ese botón del menú
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const item = menuItems.find((m) => m.idMove === entry.target.id);
                        if (item) setActiveTab(item.id);
                    }
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );

        menuItems.forEach((item) => {
            const seccion = document.getElementById(item.idMove);
            if (seccion) observer.observe(seccion);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col gap-6">
            <nav>
                <ul className="flex flex-col gap-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <li key={item.id}>
                                <a
                                    href={`#${item.idMove}`}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm transition-all 
                                    ${isActive 
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200 font-bold' 
                                        : 'text-gray-500 hover:bg-gray-50 dark:bg-gray-800 hover:text-gray-800 dark:text-gray-100 font-medium'
                                    }`}
                                >
                                    <Icon size={18} className={isActive ? 'text-white' : 'text-gray-500'} />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}