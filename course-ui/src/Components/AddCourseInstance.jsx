import { useState } from "react";

const AddCourseInstance = ({ addInstance }) => {
  const [newInstance, setNewInstance] = useState({
    courseId: "",
    year: "",
    semester: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInstance({ ...newInstance, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInstance(newInstance);
    setNewInstance({
      courseId: "",
      year: "",
      semester: "",
    });
  };

  return (
    <div className="mb-4">
      <div className="form-group d-flex">
        <select
          className="form-control mr-2"
          value={newInstance.courseId}
          onChange={handleInputChange}
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
          value={newInstance.year}
          onChange={handleInputChange}
        />
        <select
          className="form-control mb-2"
          value={newInstance.semester}
          onChange={handleInputChange}
        >
          <option value="">Select semester</option>
          {/* Populate with semester options */}
        </select>
      </div>
      <button className="btn btn-primary" onClick={addInstance}>
        Add instance
      </button>
    </div>
  );
};

export default AddCourseInstance;
