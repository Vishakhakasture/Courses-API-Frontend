import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import AddCourse from "./Components/AddCourse";
import AddCourseInstance from "./Components/AddCourseInstance";
import ShowCourseDetails from "./Components/ShowCourseDetails";
import ShowCourseInstance from "./Components/ShowCourseInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">
            Course Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/add-course"
                  className="nav-link"
                  activeClassName="active"
                >
                  Add Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/add-instance"
                  className="nav-link"
                  activeClassName="active"
                >
                  Add Instance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/show-courses"
                  className="nav-link"
                  activeClassName="active"
                >
                  Show Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/show-instances"
                  className="nav-link"
                  activeClassName="active"
                >
                  Show Instances
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/add-instance" element={<AddCourseInstance />} />
          <Route path="/show-courses" element={<ShowCourseDetails />} />
          <Route path="/show-instances" element={<ShowCourseInstance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
