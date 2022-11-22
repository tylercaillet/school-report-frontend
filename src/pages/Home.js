import "../styles/Home.css";
import schoolimg from "../assets/schoolimg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  updateAllCoursesList,
  updateAllStudentsList,
  updateAllGradesList
} from "../actions";
import { GetCourseList } from "../services/CourseServices";
import { GetStudentList } from "../services/StudentServices";
import { GetGrades } from "../services/GradeServices";
import StudentCard from '../components/StudentCard'
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const allStudentsList = useSelector((state) => state.allStudentsList)
  const [formValues, setFormValues] = useState({
    name: ''
  })
  // const [selectedStudent, setSelectedStudent] = useState([])
  const [needRefresh, setNeedRefresh] = useState([true])
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let student = await GetStudentList(formValues)
    setFormValues({
      name: ''
    })
    navigate(`/students`)
  }

  // const chooseStudent = (selected) => {
  //   setSelectedStudent(selected)
  //   navigate(`/${selected.id}`)
  // }

  useEffect(() => {
    const getCoursesList = async () => {
      let data = await GetCourseList();
      dispatch(updateAllCoursesList(data));
    };
    const getAllStudentsList = async () => {
      let data = await GetStudentList();
      dispatch(updateAllStudentsList(data));
    };
    const getGradesList = async () => {
      let data = await GetGrades();
      dispatch(updateAllGradesList(data));
    };
    getGradesList();
    getAllStudentsList();
    getCoursesList();
  }, []);

  let someStatisticRender = <div>Some useful info to show</div>;
  let searchStudentRender = (
    <div className="search-container-home">
      <div className="search-container-box">
      <form onSubmit={handleSubmit}  className="search-student-form">
        <input
          onChange={handleChange}
          value={formValues.name}
          name="name"
          type="text"
          placeholder="Search here"
        />
        <button type="submit" className="search-student">
          Search
        </button>
      </form>
      </div>
    </div>
  )
 
  


  let toRender = (
    <div className="home-container">
      {searchStudentRender}
      <div className="col-1">
        <h1>Browse Student & Courses Available</h1>
        {someStatisticRender}
      </div>
      <div className="col-2">
        <img src={schoolimg}></img>
      </div>
    </div>
  );
  
  return toRender;
};

export default Home;
