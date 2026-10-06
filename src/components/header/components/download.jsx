import { Download } from 'lucide-react';

function DownloadButton() {
  const hoy = new Date().toLocaleDateString('es-AR');

  return ( 
    <div className="flex flex-col gap-3 pt-4 border-t border-dashed border-gray-300">
      <div className="bg-blue-50/50 rounded-xl p-3 text-center border border-blue-50">
        <p className="text-xs font-semibold text-blue-600/70">{hoy}</p>
        <p className="text-xs font-bold text-gray-700 dark:text-gray-200 mt-0.5">San Juan, Argentina</p>
      </div>
    </div>
  )
}
export default DownloadButton;