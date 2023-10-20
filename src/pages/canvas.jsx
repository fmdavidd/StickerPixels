import Marquee from '../components/Marquee'
import Editor from '../components/Editor'
import { Link} from 'react-router-dom'
export default function Canvas() {
return(
    <> 
    <Marquee></Marquee>
    <div className='caja'>
    <h1 className='titulo2'>PIXEL ART EDITOR</h1>
    <Editor />
    <Link reloadDocument to="/canvas"className="boton" >RESET</Link>
    <Link reloadDocument to="/checkout"className="boton" >CONTINUE</Link>
    </div>
    </>
)

}