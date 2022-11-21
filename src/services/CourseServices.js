import Client from "./api";
import axios from "axios";

export const AddCourse = async (data) => {
  try {
    let response = await axios.post("http://localhost:3001/api/courses/", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetCourseList = async () => {
  try {
    let response = await axios.get("http://localhost:3001/api/courses/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
