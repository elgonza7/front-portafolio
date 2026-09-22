import {Download }from 'lucide-react';

function DownloadButton() {
return ( 
<div div className="flex flex-col gap-3 pt-4 border-t border-dashed border-gray-300">
        <div className="bg-blue-50/50 rounded-xl p-3 text-center border border-blue-50">
          <p className="text-xs font-semibold text-blue-600/70">8/4/2025</p>
          <p className="text-xs font-bold text-gray-700 mt-0.5">San Juan, Argentina</p>
        </div>
        <button 
        className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-3 
        text-xs font-medium transition-colors shadow-sm">
          <Download size={16} />
          <span className="text-xs font-bold">Download CV</span>
        </button>
      </div>
    )

}
export default DownloadButton;