import React, { useState, useEffect, useCallback } from 'react';
import yo from '../../../assets/yo.jpeg';

function NameComponent() {
    // Arranca con lo que quedó guardado la última vez
    const [isDark, setIsDark] = useState(() => localStorage.getItem('tema') === 'dark');

    // Cada vez que cambia isDark, actualizamos la clase del <html> y lo guardamos
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('tema', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleModoOscuro = useCallback(() => {
        setIsDark(prev => !prev);
    }, []);

    return (
        <div className="flex flex-col gap-6">
            <section className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                    <img
                        className="object-cover w-12 h-12 rounded-xl" 
                        src={yo} 
                        alt="Foto de perfil de Gonzalo Flores"
                        width="48"
                        height="48" 
                    />
                </div>
                <div className="flex flex-col min-w-0">
                    <h2 className="font-semibold text-gray-800 dark:text-gray-100 text-xl truncate">Flores Gonzalo</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Desarrollador Fullstack</p>
                </div>
                
                <div className="flex items-center gap-2">
                                        <button 
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 transition-colors flex items-center justify-center" 
                        onClick={toggleModoOscuro}
                        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600 dark:text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m8.485-8.485h-1.5M4.515 12h-1.5m15.364 4.95l-1.06-1.06M6.636 6.636l-1.06-1.06m12.728 12.728l-1.06-1.06M6.636 17.364l-1.06 1.06M12 5a7 7 0 100 14 7 7 0 000-14z" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default NameComponent;