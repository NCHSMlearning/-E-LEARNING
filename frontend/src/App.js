import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import ManageStudents from "./pages/ManageStudents";
import AttendancePage from "./pages/AttendancePage";

function App() {
  return (
    <HashRouter>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>E-Learning System</h1>
        <nav>
          <Link to="/">Students</Link> | <Link to="/attendance">Attendance</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ManageStudents />} />
          <Route path="/attendance" element={<AttendancePage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
