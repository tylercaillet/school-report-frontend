import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAllCoursesList } from '../actions'
import { AddCourse, GetCourseList } from '../services/CourseServices'
import CourseCard from '../components/CourseCard'
import '../styles/CourseCard.css'

const Courses = () => {
  const [needRefresh, setNeedRefresh] = useState([true])
  const [courseAddMode, setCourseAddMode] = useState(false)
  const dispatch = useDispatch()
  const allCoursesList = useSelector((state) => state.allCoursesList)
  const [formValues, setFormValues] = useState({
    name: '',
    description: ''
  })

  const enableAddCourseMode = () => {
    setCourseAddMode(true)
  }

  const disableAddCourseMode = () => {
    setCourseAddMode(false)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let createdCourse = await AddCourse(formValues)
    disableAddCourseMode()
    setFormValues({
      name: '',
      description: ''
    })
    setNeedRefresh(true)
  }

  useEffect(() => {
    let getCoursesList = async () => {
      let data = await GetCourseList()
      dispatch(updateAllCoursesList(data))
      setNeedRefresh(false)
    }

    if (needRefresh) {
      getCoursesList()
    }
  }, [needRefresh])

  let addButtonRender = (
    <button disabled className="add-course-btn">
      Add Course
    </button>
  )

  if (formValues.name && formValues.description) {
    addButtonRender = (
      <button type="submit" className="add-course-btn">
        Add Course
      </button>
    )
  }

  let courseAddRender = (
    <button onClick={enableAddCourseMode} className="add-course-btn">
      Add Course
    </button>
  )
  if (courseAddMode) {
    courseAddRender = (
      <form onSubmit={handleSubmit} className="course-form">
        <label>Course name</label>
        <input
          onChange={handleChange}
          value={formValues.name}
          name="name"
          type="text"
          placeholder="Astrology"
        />
        <label>Description</label>
        <input
          onChange={handleChange}
          value={formValues.description}
          name="description"
          type="text"
          placeholder="Teaching about space universe"
        />
        {addButtonRender}
      </form>
    )
  }

  let courseListRender = (
    <div>
      {allCoursesList.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )

  let toRender = (
    <div>
      <div>
        <h1>Courses</h1>
      </div>
      <div>{courseAddRender}</div>
      <div className="course-card-main">
        <div>{courseListRender}</div>
      </div>
    </div>
  )
  return toRender
}

export default Courses
