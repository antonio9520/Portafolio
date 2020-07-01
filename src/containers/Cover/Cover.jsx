import React from "react";
import { Grid } from "@material-ui/core";
import image from "../../resources/img/laptop8.jpg";
import Layout from "../../components/Layout/Layout/Layout";
import "./style.css";
import video from "../../resources/videos/Mountain2.mp4"
import Target from "./components/target/Target";


const Cover = () => {
  
  return (
    <>
      <Grid container className="body">
        {/* <img className="img" alt="body" src={image}></img> */}
        <video id="video" className="img" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          </video>
        {/* <div className="overlay"></div> */}
        <Grid container className="container-Info">
          <Grid item xs={12} sm={12} md={12}>
            <div className="vidContent">
              <Target />
          
            </div>
          </Grid>
         
        </Grid>
      </Grid>
      <Layout />
    </>
  );
};

export default Cover;
