import { Home, Code, Briefcase, Wrench, Mail } from 'lucide-react';
import { useState } from "react";

function ItemComponent() {
    const menuItems = [
        { id: 'home', name: 'Casa', icon: Home, idMove: 'home' },
        { id: 'expertise', name: 'Experiencia', icon: Code, idMove: 'expertise' },
        { id: 'projects', name: 'Proyectos', icon: Briefcase, idMove: 'proyectos' }, // Nota: tu Body usa "proyectos"
        { id: 'services', name: 'Servicios', icon: Wrench, idMove: 'services' },
        { id: 'contact', name: 'Contacto', icon: Mail, idMove: 'contact' },
    ];
    return menuItems;
}

export default function NavComponent() {
    const [activeTab, setActiveTab] = useState('home');
    const items = ItemComponent();

    const handleScroll = (id, idMove) => {
        setActiveTab(id);
        const element = document.getElementById(idMove);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-1">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id, item.idMove)}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm transition-all 
                            ${isActive 
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-200 font-bold' 
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium'
                            }`}
                        >
                            <Icon size={18} className={isActive ? 'text-white' : 'text-gray-400'} />
                            <span>{item.name}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
