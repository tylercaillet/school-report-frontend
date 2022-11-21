const CourseCard = ({course}) => {
    return (
        <div>
            <div>{course.name}</div>
            <div>{course.description}</div>
        </div>
    )
}

export default CourseCard