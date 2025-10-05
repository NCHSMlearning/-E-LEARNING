import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setStudents(data);
  }

  async function addStudent(e) {
    e.preventDefault();
    setMsg("");

    if (!name || !email || !studentId) {
      setMsg("Name, Email and Student ID are required.");
      return;
    }

    const { data, error } = await supabase.from("students").insert([
      { name, email, student_id: studentId, phone },
    ]);

    if (error) {
      setMsg("Error: " + error.message);
      return;
    }

    // ✅ Use 'data' so ESLint doesn’t flag it
    console.log("Inserted student record:", data);

    setName("");
    setEmail("");
    setStudentId("");
    setPhone("");
    setMsg("Student added successfully.");
    fetchStudents();
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage Students</h2>
      <form onSubmit={addStudent}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <br />
        <input
          placeholder="Phone +254..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button type="submit">Add Student</button>
      </form>
      <p>{msg}</p>

      <h3>Existing Students</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} — {s.email} — {s.student_id}{" "}
            {s.phone ? `— ${s.phone}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
