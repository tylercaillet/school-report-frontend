import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/Fretyir.png'

const Nav = () => {
    return (
    <div className='navbar'>
        <Link to="/"><img src={logo}></img></Link>
        <div className='initial'>Initial</div>
    </div>
    
    )
}
export default Nav