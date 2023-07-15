/* eslint-disable */
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Offerings from "./Offerings";
import Projects from "./Projects";
import Experience from "./Experience";
import Blogs from "./Blogs";

function App() {
  return (
    <div>
      <a href="#">LinkedIn</a>
      <br></br>
      <a href="#">GitHub</a>
      <br></br>
      <hr></hr>
      <nav>
        <Link to="/">Home </Link>
        <br></br>
        <Link to="/about">About </Link>
        <br></br>
        <Link to="/skills">Skills </Link>
        <br></br>
        <Link to="/certs">Certifications </Link>
        <br></br>
        <Link to="/offerings">Offerings </Link>
        <br></br>
        <Link to="/projects">Past Projects </Link>
        <br></br>
        <Link to="/experience">Work Experience </Link>
        <br></br>
        <Link to="/blogs">Blogs </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certs" element={<Certifications />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <br></br>
      <h3>2023 All rights reserved [don't take this serious]</h3>
    </div>
  );
}

export default App;
