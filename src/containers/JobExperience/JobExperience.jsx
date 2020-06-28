import React, { useState } from "react";
import "./JobExperience.css";
import { Typography } from "@material-ui/core";
import { LineEnd, LineStart, Line, CardArrow, LineItem } from "./components";
import { Grid } from "@material-ui/core";
import { School, Laptop } from "@material-ui/icons";


const JobExperience = () => {
  const [image, setImage] = useState();
  const changeImage = (img) => {
    setTimeout(() => {
      setImage(null)
    }, 500);
    setTimeout(() => {
      setImage(img)
    }, 1000);
  };

  return (
    <div className="container-job">
      {image ? <img className="img-job" alt="jobExp" src={image}></img> : null}

      <div className="overlay-job"></div>
      <div className="cont-body-job">
        <Typography  variant="h4" className="job-title">
          Job´s Experience
        </Typography>
        <div className="container-line">
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
                title="Titulo"
                sub1="1 Year"
                year="2020"
                sub2="Web FullStack"
                body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
          orci, placerat vitae mi eget, posuere mattis mi. Vestibulum tristique
          pulvinar hendrerit."
              >
                <LineItem />
              </CardArrow>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
              <CardArrow
                id="item"
                changeImage={changeImage}
                icon={<Laptop />}
                title="Titulo"
                sub1="1 Year"
                year="2020"
                sub2="Web FullStack"
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
            <Grid item xs={2} sm={2} md={2} className="container-line-end">
              <CardArrow>
                <LineEnd />
              </CardArrow>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default JobExperience;
