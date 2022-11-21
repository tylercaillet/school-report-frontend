import '../styles/Students.css'

const StudentCard = ({student}) => {
    return (
    <div className="student-card-containter">
        <ul>
            <li>
        <span className='name'>{student.name}</span>
        <span className='grade'>{student.averageGrade}</span>
        </li>
        </ul>
        
    </div>
    )
}

export default StudentCard