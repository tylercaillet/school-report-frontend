import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CourseSelectCard from '../components/CourseSelectCard'
import GradeSelectCard from '../components/GradeSelectCard'
import { AddRelation, GetStudentRelation } from '../services/RelationServices'
import RelationCard from '../components/RelationCard'
import '../styles/RelationsCard.css'

const StudentDetails = () => {
  const { studentId, studentName } = useParams()
  const allCoursesList = useSelector((state) => state.allCoursesList)
  const allGradesList = useSelector((state) => state.allGradesList)

  const [needRefresh, setNeedRefresh] = useState([true])
  const [relationList, setRelationList] = useState([])
  const [formValues, setFormValues] = useState({
    studentId: studentId,
    courseId: allCoursesList[0].id.toString(),
    gradeId: allGradesList[0].id.toString()
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let addRelation = await AddRelation(formValues)
    setFormValues({
      studentId: studentId,
      courseId: allCoursesList[0].id.toString(),
      gradeId: allGradesList[0].id.toString()
    })
    setNeedRefresh(true)
  }

  useEffect(() => {
    const getAllRelations = async () => {
      let data = await GetStudentRelation(studentId)
      setRelationList(data)
      setNeedRefresh(false)
    }

    getAllRelations()
  }, [needRefresh])

  console.log('myList', relationList)
  let relationListRender = (
    <div>
      {relationList.map((relation) => (
        <RelationCard key={relation.id} relation={relation} />
      ))}
    </div>
  )

  let addStudentCourseRender = (
    <form onSubmit={handleSubmit} className="course-form">
      <label>Course</label>
      <select id="courseId" onChange={handleChange}>
        {allCoursesList.map((course) => (
          <CourseSelectCard key={course.id} course={course} />
        ))}
      </select>
      <label>Grade</label>
      <select id="gradeId" onChange={handleChange}>
        {allGradesList.map((grade) => (
          <GradeSelectCard key={grade.id} grade={grade} />
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  )
  let toRender = (
    <div>
      <h1>{studentName}</h1>
      {relationListRender}
      {addStudentCourseRender}
    </div>
  )

  return toRender
}
export default StudentDetails
