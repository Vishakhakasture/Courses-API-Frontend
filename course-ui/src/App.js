import React from "react";
import { useState, useEffect } from "react";
import AddCourse from "./Components/AddCourse";
import AddCourseInstance from "./Components/AddCourseInstance";
import ShowCourseDetails from "./Components/ShowCourseDetails";
import ShowCourseInstance from "./Components/ShowCourseInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [instances, setInstances] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchInstances = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/instances");
      const data = await response.json();
      setInstances(data);
    } catch (error) {
      console.error("Error fetching instances:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchInstances();
  }, []);

  const addCourse = async (course) => {
    try {
      const response = await fetch("http://localhost:8080/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
      if (response.ok) {
        const newCourse = await response.json();
        setCourses([...courses, newCourse]);
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const addInstance = async (instance) => {
    try {
      const response = await fetch("http://localhost:8080/api/instances", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(instance),
      });
      if (response.ok) {
        const newInstance = await response.json();
        setInstances([...instances, newInstance]);
      }
    } catch (error) {
      console.error("Error adding instance:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="my-4">Courses and Course Instances Management</h3>

      <h4>Course</h4>
      <AddCourse addCourse={addCourse} />
      <h4>Instance</h4>
      <AddCourseInstance courses={courses} />
      <h4>Course List</h4>
      <ShowCourseDetails addInstance={addInstance} />
      <h4>Instance List</h4>
      <ShowCourseInstance instances={instances} />
    </div>
  );
}
export default App;
