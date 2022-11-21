import allCoursesListReducer from "./allCoursesListReducer";
import allStudentsListReducer from "./allStudentsListReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  allCoursesList: allCoursesListReducer,
  allStudentsList: allStudentsListReducer
});

export default allReducers;
