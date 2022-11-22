import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  return <div>This is Student Details for {studentId}</div>;
};
export default StudentDetails;
