import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAllCoursesList } from "../actions";
import { GetCourseList } from "../services/CourseServices";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [needRefresh, setNeedRefresh] = useState([true]);
  const dispatch = useDispatch();
  const allCoursesList = useSelector((state) => state.allCoursesList);

  useEffect(() => {
    let getCoursesList = async () => {
      let data = await GetCourseList();
      dispatch(updateAllCoursesList(data));
      setNeedRefresh(false);
    };

    if (needRefresh) {
      getCoursesList();
    }
  }, [needRefresh]);

  let courseListRender = (
    <div>
      {allCoursesList.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );

  let toRender = (
    <div>
      <div>this is courses page</div>
      <div>{courseListRender}</div>
    </div>
  );
  return toRender;
};

export default Courses;
