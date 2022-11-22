const StudentSelectCard = ({student}) => {
    return <option id = "studentId" value={student.id}>{student.name}</option>
}

export default StudentSelectCard