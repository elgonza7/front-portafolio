import { Home, Code, Briefcase, Wrench, Mail} from 'lucide-react';
import { useState } from "react";
function NavComponent(){
const [activeTab, setActiveTab] = useState('home');
  const menuItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'expertise', name: 'Expertise', icon: Code },
    { id: 'projects', name: 'Projects', icon: Briefcase },
    { id: 'services', name: 'Services', icon: Wrench },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];
    return ( <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
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
    )
}

export default NavComponent;