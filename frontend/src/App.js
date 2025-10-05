import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ManageStudents from "./pages/ManageStudents";
import AttendancePage from "./pages/AttendancePage";

function App() {
  return (
    <BrowserRouter basename="/-E-LEARNING">
      <div style={{ padding: 20 }}>
        <h1>E-Learning System</h1>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/students" style={{ marginRight: 10 }}>Manage Students</Link>
          <Link to="/attendance">Attendance</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ManageStudents />} />
          <Route path="/students" element={<ManageStudents />} />
          <Route path="/attendance" element={<AttendancePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
