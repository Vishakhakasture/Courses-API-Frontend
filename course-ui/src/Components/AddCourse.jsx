import { useState } from "react";

const AddCourse = ({ addCourse }) => {
  const [newCourse, setNewCourse] = useState({
    title: "",
    courseCode: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    setNewCourse({
      title: "",
      courseCode: "",
      description: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course title"
          value={newCourse.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course code"
          value={newCourse.courseCode}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course description"
          value={newCourse.description}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={addCourse} className="btn btn-primary">
          Add course
        </button>
      </div>
    </form>
  );
};

export default AddCourse;
