import React, { useState } from "react";
import { supabase } from "../services/supabase";

export default function AttendancePage() {
  const [studentId, setStudentId] = useState("");
  const [status, setStatus] = useState("Present");
  const [msg, setMsg] = useState("");

  async function markAttendance(e) {
    e.preventDefault();
    const geo = `${window.navigator.geolocation ? 'Available' : 'N/A'}`;
    const ip = "0.0.0.0"; // optional: fetch real IP via external service

    const { data, error } = await supabase.from("attendance").insert([
      { student_id: studentId, date: new Date().toISOString().split("T")[0], status, geo, ip_address: ip }
    ]);

    if (error) setMsg("Error: " + error.message);
    else setMsg("Attendance marked.");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Mark Attendance</h2>
      <form onSubmit={markAttendance}>
        <input placeholder="Student UUID" value={studentId} onChange={e => setStudentId(e.target.value)} /><br/>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>Present</option>
          <option>Absent</option>
        </select><br/>
        <button type="submit">Mark</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
