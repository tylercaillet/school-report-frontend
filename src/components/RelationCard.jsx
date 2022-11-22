import { useSelector} from 'react-redux'

const RelationCard = ({relation}) => {
    const allCoursesList = useSelector((state) => state.allCoursesList)
    const allGradesList = useSelector((state) => state.allGradesList)

    const courseName = allCoursesList.find(course=>course.id === relation.courseId).name
    const gradeLetter = allGradesList.find(grade=>grade.id === relation.gradeId).letter
    const gradeScore = allGradesList.find(grade=>grade.id === relation.gradeId).score
    
    return (<div>
        <div>{courseName}</div>
        <div>{gradeLetter}</div>
        <div>{gradeScore}</div>
    </div>)
}

export default RelationCard