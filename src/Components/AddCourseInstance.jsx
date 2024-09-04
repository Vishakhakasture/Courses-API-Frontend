import React, { useState, useEffect } from "react";
import axios from "../services/api";

function AddCourseInstance() {
  // const [courses, setCourses] = useState([]);
  const [courseTitles, setCourseTitles] = useState([]);
  const [instance, setInstance] = useState({
    courseId: "",
    year: "",
    semester: "",
  });

  useEffect(() => {
    axios
      .get("/course/titles")
      .then((response) => {
        setCourseTitles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course titles:", error);
      });
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
      await axios.post("/instance/add", instance);
      alert("Course instance added successfully!");
    } catch (error) {
      console.error("There was an error adding the course instance!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <select>
          {courseTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="course code"
          className="form-control"
          placeholder="course code"
          value={instance.course_code}
          onChange={handleChange}
        />
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
