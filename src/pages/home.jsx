import Marquee from '../components/Marquee'
import '../styles/App.css' 
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
export default function Home() {
    return (
   
        <>
          <Marquee />
          <div className='caja'>
          <div className='titulo'>
            <p>Make Your Own <span >STICKERS</span> Pixel Art</p>
            
          </div>
          </div>
          <div className='caja'>
        
        
          <Link to="/canvas"className="boton" >START CREATING</Link>
          </div>
          <div className='footer'>
          
          <Marquee />
          </div>
          
          </>
          
      )
    }