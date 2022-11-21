import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Nav = () => {
    return (
    <div className='navbar'>
        <Link to="/"><div>School logo</div></Link>
        <div>Initial</div>
    </div>
    
    )
}
export default Nav