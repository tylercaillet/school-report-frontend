import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddStudent, GetStudentList } from "../services/StudentServices";
import { updateAllStudentsList } from "../actions";
import StudentCard from "../components/StudentCard";
import "../styles/Students.css";
const Students = () => {
  const [needRefresh, setNeedRefresh] = useState([true]);
  const [addStudentMode, setAddStudentMode] = useState([false]);
  const dispatch = useDispatch();
  const allStudentsList = useSelector((state) => state.allStudentsList);
  const [formValues, setFormValues] = useState({
    name: ""
  });

  const enableAddStudentMode = () => {
    setAddStudentMode(true);
  };
  const disableAddStudentMode = () => {
    setAddStudentMode(false);
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let createdStudent = await AddStudent(formValues);
    disableAddStudentMode();
    setFormValues({
      name: ""
    });
    setNeedRefresh(true);
  };

  useEffect(() => {
    const getAllStudentsList = async () => {
      let data = await GetStudentList();
      dispatch(updateAllStudentsList(data));
      setNeedRefresh(false);
    };
    getAllStudentsList();
  }, [needRefresh]);

  let addStudentRender = (
    <button onClick={enableAddStudentMode}>Add new student</button>
  );

  if (enableAddStudentMode) {
    addStudentRender = (
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          onChange={handleChange}
          value={formValues.name}
          name="name"
          type="text"
          placeholder="John Doe"
        />
        <button type="submit">Add student</button>
      </form>
    );
  }

  let searchStudentRender = (
    <div className="search-container-main">
      <div className="search-container-box">
        <input type="text" placeholder="Search student" />
        <button>Search</button>
      </div>
    </div>
  );
  let studentListRender = (
    <div>
      <div></div>
      {allStudentsList.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
  let toRender = (
    <div className="student-container">
      <div></div>
      {searchStudentRender}
      {addStudentRender}
      {studentListRender}
    </div>
  );
  return toRender;
};

export default Students;
