import React, { useState } from "react";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add course logic
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add course
        </button>
      </div>
    </form>
  );
};

export default AddCourse;
