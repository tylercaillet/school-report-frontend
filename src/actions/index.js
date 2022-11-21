export const updateAllCoursesList = (allCourses) => {
  return {
    type: "UPDATE_ALL_COURSES_LIST",
    payload: allCourses
  };
};

export const updateAllStudentsList = (allStudents) => {
  return {
    type: "UPDATE_ALL_STUDENTS_LIST",
    payload: allStudents
  };
};
