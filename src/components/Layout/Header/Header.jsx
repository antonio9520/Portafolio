import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <div className="container-nav">
        <nav className="nav-primary">
          <ul>
          <li>
              <a href='/'><Typography variant="h6" gutterBottom>About Me</Typography></a>
            </li>
            <li>
              <a href='/'><Typography variant="h6" gutterBottom>Job’s Experience</Typography></a>
            </li>
            <li>
              <a href='/'><Typography variant="h6" gutterBottom>Knowledge</Typography></a>
            </li>
            <li>
              <a href='/'><Typography variant="h6" gutterBottom>Projects</Typography></a>
            </li>
           
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
