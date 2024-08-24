import { useState } from "react";

const AddCourseInstance = ({ addInstance }) => {
  const courses = ["AI", "ML", "cloud"];
  const [newInstance, setNewInstance] = useState({
    courseId: "",
    year: "",
    semester: "",
  });

  const semesters = ["Fall", "Spring", "Summer"];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInstance((prevInstance) => ({
      ...prevInstance,
      [name]: value,
    }));
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
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group d-flex">
        <select
          name="courseId"
          className="form-control"
          value={newInstance.courseId}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a course</option>
          {courses.map((course, index) => (
            <option key={index} value={course.id}>
              {course.title} ({course.courseCode})
            </option>
          ))}
        </select>
        <button className="btn btn-secondary">Refresh</button>
      </div>
      <div className="form-group mt-2">
        <input
          type="number"
          name="year"
          className="form-control"
          value={newInstance.year}
          onChange={handleInputChange}
          required
        />

        <select
          name="semester"
          className="form-control"
          value={newInstance.semester}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a semester</option>
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" onClick={addInstance}>
        Add instance
      </button>
    </form>
  );
};

export default AddCourseInstance;
