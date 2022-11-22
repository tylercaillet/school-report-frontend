import allCoursesListReducer from "./allCoursesListReducer";
import allStudentsListReducer from "./allStudentsListReducer";
import allGradesListReducer from "./allGradesListReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  allCoursesList: allCoursesListReducer,
  allStudentsList: allStudentsListReducer,
  allGradesList: allGradesListReducer
});

export default allReducers;
