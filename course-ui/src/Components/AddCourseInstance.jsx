import React, { useState } from "react";

const AddCourseInstance = () => {
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  const handleAddInstance = () => {
    // Add instance logic
  };

  return (
    <div className="mb-4">
      <div className="form-group d-flex">
        <select
          className="form-control mr-2"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select course</option>
          {/* Populate with course options */}
        </select>
        <button className="btn btn-secondary">Refresh</button>
      </div>
      <div className="form-group mt-2">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <select
          className="form-control mb-2"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">Select semester</option>
          {/* Populate with semester options */}
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleAddInstance}>
        Add instance
      </button>
    </div>
  );
};

export default AddCourseInstance;
