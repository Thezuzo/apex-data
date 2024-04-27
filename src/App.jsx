import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//react router
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
