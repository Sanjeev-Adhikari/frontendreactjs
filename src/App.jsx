

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Test from './pages/Test/Test'

function App() {


  return (

  <BrowserRouter>

    <Routes>

      <Route path= "/" element = {< Home/>} />
      <Route path= "/about" element = {< About/> } />
      <Route path = "/contact" element = {<Contact />} />
      <Route path = "/test" element = { <Test />} />
    </Routes>
    
  </BrowserRouter>
   
  )
}

export default App
