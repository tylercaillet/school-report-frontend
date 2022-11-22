import { useSelector} from 'react-redux'
import '../styles/RelationsCard.css'
const RelationCard = ({relation}) => {
    const allCoursesList = useSelector((state) => state.allCoursesList)
    const allGradesList = useSelector((state) => state.allGradesList)

    const courseName = allCoursesList.find(course=>course.id === relation.courseId).name
    const gradeLetter = allGradesList.find(grade=>grade.id === relation.gradeId).letter
    const gradeScore = allGradesList.find(grade=>grade.id === relation.gradeId).score
    
    return (<div div className="student-card-containter">
        <ul>
            <li>
            <span className='name'>{courseName}</span>
         <span className='letter-grade'>{gradeLetter}</span>
        <span className='grade'>{gradeScore}</span>
            </li>
        </ul>
        
    </div>)
}

export default RelationCard