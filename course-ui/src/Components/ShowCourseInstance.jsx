import React from "react";
import { FaTrash, FaSearch } from "react-icons/fa";

const ShowCourseInstance = () => {
  const instances = [];

  return (
    <div>
      <div className="form-group d-flex mb-3">
        <input type="text" className="form-control mr-2" placeholder="Year" />
        <select className="form-control mr-2">
          <option value="">Select semester</option>
        </select>
        <button className="btn btn-primary">List instances</button>
      </div>
      <table className="table table-bordered">
        <thead className="thead-dark ">
          <tr>
            <th className="bg-primary text-white">Course Title</th>
            <th className="bg-primary text-white">Year-Sem</th>
            <th className="bg-primary text-white"> Code</th>
            <th className="bg-primary text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {instances.map((instance, index) => (
            <tr key={index}>
              <td>{instance.title}</td>
              <td>{instance.yearSem}</td>
              <td>{instance.code}</td>
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

export default ShowCourseInstance;
