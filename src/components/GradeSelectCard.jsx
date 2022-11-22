const GradeSelectCard = ({grade}) => {
    return <option id="gradeId" value={grade.id}>{grade.letter}</option>
}

export default GradeSelectCard