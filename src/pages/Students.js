const Students = () => {
  let searchStudentRender = (
    <div>
      <input type="text" placeholder="Search student" />
      <button>Search</button>
    </div>
  );
  let toRender = (
    <div>
      <div>this is Students page</div>
      {searchStudentRender}
    </div>
  );
  return toRender;
};

export default Students;
