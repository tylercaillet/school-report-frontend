import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <Link to="/students">Students</Link>
            <Link to="/courses">courses</Link>
        </div>
    )
}
export default Sidebar