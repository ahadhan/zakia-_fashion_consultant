import { useEffect, useState } from 'react'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from './components/navbar/Index'
import Home from '../src/components/UI/Home'
import About from '../src/components/UI/AboutUs'
import Gallery from './components/UI/Gallery'
import Contact from './components/UI/Contact'
import Footer from './components/Footer/footer'

import Fashion from '../src/components/UI/Services/Fashion'
import Modeling from '../src/components/UI/Services/Modeling';
import Pageant from '../src/components/UI/Services/Pageant'


import FashionG from '../src/components/UI/Gallery/FashionG'
import ModelingG from '../src/components/UI/Gallery/ModelG';
import PageantG from '../src/components/UI/Gallery/PageantG'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Whatsapp from './assets/images/WhatsApp_icon.png'

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <Router>
    <div>

      <div className='Navbar' >
        <Navbar />
      </div>

      <Routes>

          <Route path='/' element={<Home />}/>
          
          <Route path='/about' element={<About />}/>
          {/* <Route path='/section' element={<Sections />}/> */}
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contact' element={<Contact />}/>
                   
          
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/modeling' element={<Modeling />} />
        <Route path='/pageant' element={<Pageant />} />

        <Route path='/fashiongallery' element={<FashionG />} />
        <Route path='/modelinggallery' element={<ModelingG />} />
        <Route path='/pageantgallery' element={<PageantG />} />

        
      </Routes>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    </Router>
  )
}

export default App
