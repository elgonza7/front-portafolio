
import NameComponent from './components/name.jsx';
import NavComponent from './components/nav.jsx';
import DownloadButton from './components/download.jsx';

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-5 font-sans shadow-sm">

      <div className="flex flex-col gap-6">
        <NameComponent />
      </div>
      <div className="flex flex-col gap-6">
        <NavComponent />
      </div>    
    <div className="flex flex-col gap-6">
        <DownloadButton />
      </div>
    </aside>
  );
}

export default Sidebar;
