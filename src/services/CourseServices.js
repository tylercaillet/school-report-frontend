import Client from "./api";
import axios from "axios";

export const GetCourseList = async () => {
  try {
    // let response  = {
    //     // do axios call to get course list
    // }
    // return response.data

    let tempData = [
      {
        id: 1,
        name: "Mathematic",
        description: "Mathematic course "
      },
      {
        id: 2,
        name: "English",
        description: "English course"
      },
      {
        id: 3,
        name: "Science",
        description: "Science course"
      },
      {
        id: 4,
        name: "Sport",
        description: "Sport course"
      }
    ];
    return tempData;
  } catch (error) {
    throw error;
  }
};
