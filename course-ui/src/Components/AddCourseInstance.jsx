import React, { useState, useEffect } from "react";
import axios from "../services/api";
function AddCourseInstance() {
  const [courses, setCourses] = useState([]);
  const [instance, setInstance] = useState({
    courseId: "",
    year: "",
    semester: "",
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("There was an error fetching the courses!", error);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setInstance({
      ...instance,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/instances", instance);
      alert("Course instance added successfully!");
    } catch (error) {
      console.error("There was an error adding the course instance!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <select
          name="courseId"
          className="form-select"
          value={instance.courseId}
          onChange={handleChange}
        >
          <option value="">Select course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="year"
          className="form-control"
          placeholder="Year"
          value={instance.year}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="semester"
          className="form-control"
          placeholder="Semester"
          value={instance.semester}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add instance
      </button>
    </form>
  );
}

export default AddCourseInstance;
