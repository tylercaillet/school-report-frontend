import "../styles/Home.css";
import schoolimg from "../assets/schoolimg.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateAllCoursesList, updateAllStudentsList } from "../actions";
import { GetCourseList } from "../services/CourseServices";
import { GetStudentList } from "../services/StudentServices";
import { GetGrades } from "../services/GradeServices";

const Home = () => {
  const dispatch = useDispatch();

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
    };
    getAllStudentsList();
    getCoursesList();
  }, []);

  let someStatisticRender = <div>Some useful info to show</div>;
  let toRender = (
    <div className="home-container">
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
