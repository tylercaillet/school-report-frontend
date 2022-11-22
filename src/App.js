import logo from "./logo.svg";
import "./styles/App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:studentId" element={<StudentDetails />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
