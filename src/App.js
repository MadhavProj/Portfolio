import React from "react";
import "./App.css";

function App() {
  return (
    <div className="etc">
      <div className="App">
        <h1 className="new1">MY NEW PORTFOLIO</h1>
        <h2 className="new2">S MADHAV ADITHYA </h2>
        <div className="roles">
          <span>
            <b>
              <p>Expertise</p>
            </b>
          </span>
          <ul>
            <li>MERN Full stack Developer</li>
            <li>RPA Developer</li>
          </ul>
        </div>

        <div className="proj">
          <b>
            <p>My Projects</p>
          </b>
          <ul>
            <li>CRUD App</li>
            <li>Arduino Programs</li>
            <li>3 in 1 Robot</li>
            <li>BMI Python Program</li>
            <li>Hand Controlled Robot</li>
          </ul>
        </div>
        <div id="contact" className="contact">
          <b>
            <p className="try1">Contact</p>
          </b>
          <p>Email: madithya003@gmail.com</p>
          <p>
            LinkedIn:
            <a href="https://www.linkedin.com/in/s-madhav-adithya-62a301251/">
              LinkedIn Profile
            </a>
          </p>
          <p>
            Github: <a href="https://github.com/MadhavProj">GitHub Profile</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
