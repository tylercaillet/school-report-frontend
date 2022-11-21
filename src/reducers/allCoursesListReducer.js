const allCoursesListReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_ALL_COURSES_LIST":
      return (state = action.payload);
    default:
      return state;
  }
};

export default allCoursesListReducer;
