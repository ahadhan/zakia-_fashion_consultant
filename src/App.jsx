import { useEffect, useState } from 'react'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from './components/navbar/Index'
import Home from '../src/components/UI/Home'
import About from '../src/components/UI/AboutUs'
import Sections from './components/UI/Sections'
import Gallery from './components/UI/Gallery'
import Contact from './components/UI/Contact'
import Footer from './components/Footer/footer'

function App() {

  useEffect( () => {
    Aos.init();
  }, [])

  return (
    <>
      <div className='Navbar' >
        <Navbar />
      </div>
        <Home/>
        <About/>  
        <Sections/> 
        <Gallery/>
        <Contact/>
        <div className='footer'>
          <Footer/>
        </div>
    </>
  )
}

export default App
