import './index.css'
import ClickOutsideDropdown from './components/ClickOutsideDropdown'
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="border-b py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">
          DropDown Component
        </h1>
      </header>

      <ClickOutsideDropdown />

    </div>
  )
}

export default App
