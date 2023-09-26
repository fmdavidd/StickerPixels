import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './styles/App.css'

import Canvas from './pages/canvas'
import Home from './pages/home'
function App() {
  

  return (
   
    <>
      
      <BrowserRouter>
       
        <Routes>
          <Route index element={<Home />} />
          
          <Route path='/canvas' element={<Canvas />} />
        </Routes>
        
      </BrowserRouter>
    
      
      </>
      
  )
}

export default App

