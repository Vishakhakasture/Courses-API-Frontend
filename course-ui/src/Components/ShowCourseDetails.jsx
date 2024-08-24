import React from "react";
import { FaTrash, FaSearch } from "react-icons/fa";

const ShowCourseDetails = ({ courses }) => {
  if (!courses || !Array.isArray(courses)) {
    return <p>No courses available</p>;
  }
  return (
    <div className="text-center">
      <button className="btn btn-primary mb-3 ">List courses</button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th className="bg-primary text-white">Course Title</th>
            <th className="bg-primary text-white">Code</th>
            <th className="bg-primary text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.code}</td>
              <td>
                <button className="btn btn-link">
                  <FaSearch />
                </button>
                <button className="btn btn-link">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowCourseDetails;
