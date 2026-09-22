import Sidebar from './components/header/sidebar.jsx'
import Body from './components/features/body.jsx'
import './App.css'

function App() {

    // Toggle side for demo purposes
  return (
    <div className="flex min-h-screen h-full bg-gray-50">
      <Sidebar />


      <Body />
    </div>
  )
}

export default App
