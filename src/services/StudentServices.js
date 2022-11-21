import Client from "./api";
import axios from "axios";

export const GetStudentList = async () => {
  try {
    let response = await axios.get("http://localhost:3001/api/students/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddStudent = async (data) => {
  try {
    let response = await axios.post(
      "http://localhost:3001/api/students/",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
