import React, { useState } from "react";
import "./JobExperience.css";
import { Typography, IconButton } from "@material-ui/core";
import { LineEnd, LineStart, Line, CardArrow, LineItem } from "./components";
import { Grid } from "@material-ui/core";
import { School, Visibility, VisibilityOff } from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";

const JobExperience = () => {
  const [image, setImage] = useState();
  const [collapse, setCollapse] = useState(false);

  const changeImage = (img) => {
    setImage(img);
  };
  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="container-job" id="experience">
      {image ? <img className="img-job" alt="jobExp" src={image}></img> : null}

      <div className="overlay-job"></div>
      <div className="cont-body-job">
        <Typography
          variant="h4"
          className={collapse ? "job-title-active" : "job-title"}
        >
          Job´s Experience
        </Typography>
        <div className={collapse ? "cont-show-btn-active" : "cont-show-btn"}>
          <IconButton onClick={handleClick}>
            {collapse ? (
              <VisibilityOff className="btn-show-job" />
            ) : (
              <Visibility className="btn-show-job" />
            )}
          </IconButton>
        </div>
        <CSSTransition
          in={collapse}
          unmountOnExit
          timeout={2000}
          classNames="lineJob"
        >
          <div>
            <Grid container>
              <Grid item xs={2} sm={2} md={2}>
                <CardArrow>
                  <LineStart />
                </CardArrow>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <CardArrow
                  id="school"
                  changeImage={changeImage}
                  icon={<School />}
                  title="I.P. Duoc UC."
                  sub1="2 Year"
                  year="2018"
                  sub2="Student"
                  body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
          orci, placerat vitae mi eget, posuere mattis mi. Vestibulum tristique
          pulvinar hendrerit."
                >
                  <LineItem />
                </CardArrow>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <CardArrow>
                  <Line />
                </CardArrow>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <CardArrow>
                  <Line />
                </CardArrow>
              </Grid>

              <Grid item xs={2} sm={2} md={2}>
                <CardArrow>
                  <Line />
                </CardArrow>
              </Grid>
              <Grid item xs={2} sm={2} md={2} className="container-line-end">
                <CardArrow>
                  <LineEnd />
                </CardArrow>
              </Grid>
            </Grid>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default JobExperience;
