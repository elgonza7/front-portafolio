import React from 'react';
import { useState } from 'react';
import './name.css';


function NameComponent() {
    return (
        <div className="flex flex-col gap-6">
            <section className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                <img
                className="object-cover w-12 h-12 rounded-xl" 
                src="https://avatars.githubusercontent.com/u/12345677?v=4" 
                alt="Profile" 
                />
            </div>
            <div className="flex flex-col min-w-0">
                <h2 className="font-semibold text-gray-800 text-xl truncate">Flores Gonzalo</h2>
                <p className="text-xs text-gray-400 truncate">Desarrollador Fullstack</p>
            </div>
            
            <div className="flex items-center gap-2">

                <button className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors" onClick={modoOscuro}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m8.485-8.485h-1.5M4.515 12h-1.5m15.364 4.95l-1.06-1.06M6.636 6.636l-1.06-1.06m12.728 12.728l-1.06-1.06M6.636 17.364l-1.06 1.06M12 5a7 7 0 100 14 7 7 0 000-14z" />
                    </svg>
                </button>
            </div>
            
            </section>
        </div>
    );
}

function modoOscuro(){
    const mode = useState('light','dark');


}

export default NameComponent;