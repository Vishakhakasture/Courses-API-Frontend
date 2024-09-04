import React, { useState } from "react";
import axios from "../services/api";

function AddCourse() {
  const [course, setCourse] = useState({
    title: "",
    code: "",
    description: "",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/course/add", course);
      alert("Course added successfully!");
    } catch (error) {
      console.error("There was an error adding the course!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Course title"
          value={course.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="code"
          className="form-control"
          placeholder="Course code"
          value={course.code}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Course description"
          value={course.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add course
      </button>
    </form>
  );
}

export default AddCourse;
