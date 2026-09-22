
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
            </section>
        </div>
    );
}

export default NameComponent;