const StudentCard = ({student}) => {
    return (
    <div>
        <div>{student.userName}</div>
        <div>{student.averageGrade}</div>
    </div>
    )
}

export default StudentCard