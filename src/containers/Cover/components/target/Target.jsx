import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import "./Target.css";
import perfil from "../../../../resources/img/perfil-4.jpg";
const style = {
  containerTarget: {
    borderRadius: "10px",
    position: "relative",
  },
};
const useStyle = makeStyles(style);
const Target = () => {
  const classes = useStyle();
  return (
    <Grid container justify="center" className={classes.containerTarget}>
      {/* <div className='overlay'></div> */}
      <Grid item xs={12} sm={12} md={6} className="itemTarget">
        <div className="card-cover">
          <div className="overlay"></div>
          <div className="container-img-perfil">
            <a href="#avatar" onClick={(e) => e.preventDefault()}>
              <img src={perfil} alt="..." className="image-perfil" />
            </a>
          </div>
          <div className="title-target">
            <Typography variant="h6">Abraham Vidal</Typography>
            <Typography variant="subtitle2">React Junior Programmer</Typography>
          </div>
          <div className="content-target">
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              turpis orci, placerat vitae mi eget, posuere mattis mi. Vestibulum
              tristique pulvinar hendrerit. Pellentesque porta erat et nunc
              dignissim dignissim. Sed tempus eros id augue semper tempor.
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Target;
