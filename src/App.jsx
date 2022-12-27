import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import CV from './Components/CV/CV'

function App() {
  const [view, changeView] = useState(false)

  const handleChangeView = () => {
    changeView(!view)
  }

  return (
    <div className="App">
      <Navbar
        changeView={handleChangeView}
      />
      <CV
        inputStatus={view}
      ></CV>
    </div>
  )
}

export default App
