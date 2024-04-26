import './App.css'
import Navbar from './components/Navbar'
import Login from './routes/Login'
import Banner from './components/Banner'
import About from './components/About'
import SearchServices from './components/SearchServices'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <About />
      <SearchServices />
      <Services />
      <Footer />
    </div>
  )
}

export default App
