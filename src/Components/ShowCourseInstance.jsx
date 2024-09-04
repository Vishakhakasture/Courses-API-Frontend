import React, { useState, useEffect } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import axios from "../services/api";

function ShowCourseInstance() {
  const [years, setYears] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    axios
      .get("/instance/years")
      .then((response) => setYears(response.data))
      .catch((error) => console.error("Error fetching years:", error));

    axios
      .get("/instance/semesters")
      .then((response) => setSemesters(response.data))
      .catch((error) => console.error("Error fetching semesters:", error));
  }, []);

  const fetchInstances = () => {
    axios
      .get("/instance")
      .then((response) => setInstances(response.data))
      .catch((error) => console.error("Error fetching instances:", error));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/instance/delete/${id}`);
      setInstances(instances.filter((instance) => instance.id !== id));
      alert("Instance deleted successfully!");
    } catch (error) {
      console.error("There was an error deleting the instance!", error);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <select id="year" name="year">
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <select id="semester" name="semester">
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
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
