import React, { useState, useEffect } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import axios from "../services/api";

function ShowCourseDetails() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    axios
      .get("/course")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/course/delete/${id}`);
      setCourses(courses.filter((course) => course.id !== id));
      alert("Course deleted successfully!");
    } catch (error) {
      console.error("There was an error deleting the course!", error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={fetchCourses}>
        List courses
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="bg-primary text-white">Course Title</th>
            <th className="bg-primary text-white">Course code</th>
            <th className="bg-primary text-white">Course description</th>
            <th className="bg-primary text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.course_code}</td>
              <td>{course.description}</td>
              <td>
                <button className="btn btn-secondary me-2">
                  <FaSearch
                    style={{
                      color: "white",
                    }}
                  />
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(course.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowCourseDetails;
