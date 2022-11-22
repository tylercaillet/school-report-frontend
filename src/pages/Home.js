import "../styles/Home.css";
import schoolimg from "../assets/schoolimg.jpg";
import logo from "../assets/FretyirRed.png";
import { useDispatch, useSelector } from "react-redux";
import CourseSelectCard from "../components/CourseSelectCard";
import StudentSelectCard from "../components/StudentSelectCard";
import { useEffect, useState } from "react";
import {
  updateAllCoursesList,
  updateAllStudentsList,
  updateAllGradesList
} from "../actions";
import { GetCourseList } from "../services/CourseServices";
import { GetStudentList } from "../services/StudentServices";
import { GetGrades } from "../services/GradeServices";
import { GetStudentCourseRelation } from "../services/RelationServices";

const Home = () => {
  const dispatch = useDispatch();
  const allCoursesList = useSelector((state) => state.allCoursesList);
  const allGradesList = useSelector((state) => state.allGradesList);
  const allStudentsList = useSelector((state) => state.allStudentsList);

  const [formValues, setFormValues] = useState({
    studentId: "",
    courseId: ""
  });
  const [currentUserRelation, setCurrentUserRelation] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here");
    let selectedRelation = await GetStudentCourseRelation(
      formValues.studentId,
      formValues.courseId
    );
    setCurrentUserRelation(selectedRelation);
    // setFormValues({
    //   studentId: "",
    //   courseId: allCoursesList[0].id.toString(),
    //   gradeId: allGradesList[0].id.toString()
    // });
  };

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

  let searchStudentRender = (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <select id="studentId" onChange={handleChange}>
          {allStudentsList.map((student) => (
            <StudentSelectCard key={student.id} student={student} />
          ))}
        </select>
        <label>Course</label>
        <select id="courseId" onChange={handleChange}>
          {allCoursesList.map((course) => (
            <CourseSelectCard key={course.id} course={course} />
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );

  let searchResultRender = <div></div>;
  if (currentUserRelation) {
    searchResultRender = <div>Result found</div>;
  }

  let toRender = (
    <div>
      <div className="home-container">
        <div className="col-1">
          <img src={logo} width={200} className="logoImg"></img>
          <div className="hom-text-under-logo">
            <h1>Browse Student & Courses</h1>
          </div>
        </div>
        <div className="col-2">
          <img src={schoolimg}></img>
        </div>
      </div>
      {searchStudentRender}
      {searchResultRender}
    </div>
  );
  return toRender;
};

export default Home;
