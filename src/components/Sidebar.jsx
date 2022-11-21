import { Link } from 'react-router-dom'
import "../styles/Sidebar.css"


const Sidebar = () => {
    return (
        <div className='main-box'>
        <div className='side-search'>
            <div className='content-sidebar'>
            <div className="links">
                <ul>
                <li><Link to="/students">Students</Link></li>
                <li><Link to="/courses">courses</Link></li>
                </ul>
           
        </div>
        </div>
        </div>
        </div>
    )
}
export default Sidebar