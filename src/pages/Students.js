const Students = () => {
  let searchStudentRender = (
    <div>
      <input type="text" placeholder="Search student" />
      <button>Search</button>
    </div>
  );
  let studentListRender = (
    <div>
      <div>this is student list</div>
      <div>this is student list2</div>
    </div>
  );
  let toRender = (
    <div>
      <div>this is Students page</div>
      {searchStudentRender}
      {studentListRender}
    </div>
  );
  return toRender;
};

export default Students;
