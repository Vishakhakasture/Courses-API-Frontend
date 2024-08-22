import React from "react";
import AddCourse from "./Components/AddCourse";
import AddCourseInstance from "./Components/AddCourseInstance";
import ShowCourseDetails from "./Components/ShowCourseDetails";
import ShowCourseInstance from "./Components/ShowCourseInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h3 className="my-4 text-center">Course Management</h3>
      <div className="row">
        <div className="col-md-6">
          <AddCourse />
        </div>
        <div className="col-md-6">
          <AddCourseInstance />
        </div>
      </div>
      <hr />
      <div>
        <ShowCourseDetails />
        <hr />
        <ShowCourseInstance />
      </div>
    </div>
  );
}

export default App;
