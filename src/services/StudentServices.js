import Client from "./api";
import axios from "axios";

export const GetStudentList = async () => {
  try {
    // let response = await axios.get("http://localhost:3001/api/student/");
    // return response.data;

    let tempData = [
      {
        id: 1,
        userName: "student1",
        email: "student1@email.com",
        averageGrade: 4
      },
      {
        id: 2,
        userName: "student2",
        email: "student2@email.com",
        averageGrade: 3.5
      },
      {
        id: 3,
        userName: "student3",
        email: "student3@email.com",
        averageGrade: 3.75
      },
      {
        id: 4,
        userName: "student4",
        email: "student4@email.com",
        averageGrade: 4
      },
      {
        id: 5,
        userName: "student5",
        email: "student5@email.com",
        averageGrade: 3
      }
    ];
    return tempData;
  } catch (error) {
    throw error;
  }
};
