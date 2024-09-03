import React, { useState, useEffect } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import axios from "../services/api";

function ShowCourseInstance() {
  const [instances, setInstances] = useState([]);
  const [filters, setFilters] = useState({
    year: "",
    semester: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const fetchInstances = async () => {
    try {
      const response = await axios.get(
        `/api/instances/${filters.year}/${filters.semester}`
      );
      setInstances(response.data);
    } catch (error) {
      console.error("There was an error fetching the instances!", error);
    }
  };

  useEffect(() => {
    fetchInstances();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `/api/instances/${filters.year}/${filters.semester}/${id}`
      );
      setInstances(instances.filter((instance) => instance.id !== id));
      alert("Instance deleted successfully!");
    } catch (error) {
      console.error("There was an error deleting the instance!", error);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <select
          name="year"
          className="form-select"
          value={filters.year}
          onChange={handleChange}
        >
          <option value="">Select year</option>
        </select>
      </div>
      <div className="mb-3">
        <select
          name="semester"
          className="form-select"
          value={filters.semester}
          onChange={handleChange}
        >
          <option value="">Select semester</option>
        </select>
      </div>
      <button className="btn btn-primary mb-3" onClick={fetchInstances}>
        List instances
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="bg-primary text-white">Course Title</th>
            <th className="bg-primary text-white">Year-Sem</th>
            <th className="bg-primary text-white">Code</th>
            <th className="bg-primary text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {instances.map((instance) => (
            <tr key={instance.id}>
              <td>{instance.title}</td>
              <td>{`${instance.year}-${instance.semester}`}</td>
              <td>{instance.code}</td>
              <td>
                <button className="btn btn-secondary me-2">
                  <FaSearch />
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(instance.id)}
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

export default ShowCourseInstance;
