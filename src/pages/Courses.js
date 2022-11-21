import { useEffect, useState } from "react";
import { GetCourseList } from "../services/CourseServices";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);
  const [needRefresh, setNeedRefresh] = useState([true]);

  useEffect(() => {
    let getCoursesList = async () => {
      let data = await GetCourseList();
      console.log(data);
      setCourseList(data);
      setNeedRefresh(false);
    };

    if (needRefresh) {
      getCoursesList();
    }
  }, [needRefresh]);

  let courseListRender = <div></div>;
  if (courseList) {
    console.log("CourseList", courseList);
    courseListRender = (
      <div>
        {courseList.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    );
  }

  let toRender = (
    <div>
      <div>this is courses page</div>
      <div>{courseListRender}</div>
    </div>
  );
  return toRender;
};

export default Courses;
