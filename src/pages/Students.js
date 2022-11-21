import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetStudentList } from "../services/StudentServices";
import { updateAllStudentsList } from "../actions";
import StudentCard from "../components/StudentCard";

const Students = () => {
  const [needRefresh, setNeedRefresh] = useState([true]);
  const dispatch = useDispatch();
  const allStudentsList = useSelector((state) => state.allStudentsList);

  useEffect(() => {
    const getAllStudentsList = async () => {
      let data = await GetStudentList();
      dispatch(updateAllStudentsList(data));
      setNeedRefresh(false);
    };
    getAllStudentsList();
    console.log("my students all list", allStudentsList);
  }, [needRefresh]);
  let searchStudentRender = (
    <div>
      <input type="text" placeholder="Search student" />
      <button>Search</button>
    </div>
  );
  let studentListRender = (
    <div>
      <div>this is student list</div>
      {allStudentsList.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
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
