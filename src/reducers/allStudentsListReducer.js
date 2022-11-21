const allStudentsListReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_ALL_STUDENTS_LIST":
      return (state = action.payload);
    default:
      return state;
  }
};

export default allStudentsListReducer;
