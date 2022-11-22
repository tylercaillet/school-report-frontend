const allGradesListReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_ALL_GRADES_LIST":
      return (state = action.payload);
    default:
      return state;
  }
};

export default allGradesListReducer;
