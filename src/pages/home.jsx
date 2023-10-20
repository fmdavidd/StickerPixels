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
          </div>

          <div className='info'>
          <div className='caja2'>
            <h3>STEP 1</h3>
            <p>Choose De Panel Dimensions.</p>
          </div>
          <div className='caja2'>
            <h3>STEP 2</h3>
            <p>Design your Pixelart Sticker.</p>
          </div>
          <div className='caja2'>
            <h3>STEP 3</h3>
            <p>Choose your payment method.</p>
          </div>
          </div>
          <Marquee />
          </>
          
      )
    }