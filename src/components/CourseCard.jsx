import '../styles/CourseCard.css'

const CourseCard = ({course}) => {
    return (
        <div className="course-card-container">
            <div className="course-name"><h3>{course.name}</h3></div>
            <div className="
            course-description"><p>{course.description}</p></div>
        </div>
    )
}

export default CourseCard