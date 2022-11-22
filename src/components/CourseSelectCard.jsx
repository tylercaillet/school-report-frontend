const CourseSelectCard = ({course}) => {
    return <option id = "courseId" value={course.id}>{course.name}</option>
}

export default CourseSelectCard