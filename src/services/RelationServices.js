import Client from "./api";
import axios from "axios";

export const AddRelation = async (data) => {
  try {
    let response = await axios.post(
      "http://localhost:3001/api/relations/",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetStudentRelation = async (studentId) => {
  try {
    let response = await axios.get(
      `http://localhost:3001/api/relations/${studentId}`
    );
    console.log("response data", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
