import courseListReducer from "./courseListReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  allCourseList: courseListReducer
});

export default allReducers;
