import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='main-box'>
        <div className='side-search'>
            <div className='content-sidebar'>
            <div className="links">
            <Link to="/students">Students</Link>
            <Link to="/courses">courses</Link>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Sidebar