import Client from "./api";
import axios from "axios";

export const GetGrades = async () => {
  try {
    let response = await axios.get("http://localhost:3001/api/grades/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
