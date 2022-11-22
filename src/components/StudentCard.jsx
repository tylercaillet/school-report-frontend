import '../styles/Students.css'
import { useNavigate } from "react-router-dom";

const StudentCard = ({student}) => {
    let navigate = useNavigate();
    const toDetail = () => {
        navigate(`/students/${student.id}`)
    }
    return (
    <div className="student-card-containter">
        <ul onClick={toDetail}>
            <li>
        <span className='name'>{student.name}</span>
        <span className='grade'>{student.averageGrade}</span>
        </li>
        </ul>
        
    </div>
    )
}

export default StudentCard