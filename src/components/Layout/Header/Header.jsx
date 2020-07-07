import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <div className="container-nav">
        <nav className="nav-primary">
          <ul>
            <Link
              activeClass="active"
              className="link"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                About Me
              </Typography>
            </Link>

            <Link
              activeClass="active"
              className="link"
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                Job’s Experience
              </Typography>
            </Link>

            <Link
              activeClass="active"
              className="link"
              to="knowledge"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                Knowledge
              </Typography>
            </Link>

            <Link
              activeClass="active"
              className="link"
              to="proyects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                Projects
              </Typography>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
