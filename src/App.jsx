import Sidebar from './components/header/sidebar.jsx'
import Body from './components/features/body.jsx'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen h-full bg-gray-50 relative">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:rounded-xl focus:shadow-lg focus:font-bold">
        Saltar al contenido principal
      </a>
      
      <header>
        <Sidebar />
      </header>
      <Body />
    </div>
  )
}

export default App