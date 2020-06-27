import React from "react";
import { Grid } from "@material-ui/core";
import image from "../../resources/img/laptop8.jpg";
import Layout from "../../components/Layout/Layout/Layout";
import "./style.css";
import Target from "./components/target/Target";

const Cover = () => {
  return (
    <>
      <Grid container className="body">
        <img className="img" alt="body" src={image}></img>
        {/* <div className="overlay"></div> */}
        <Grid container className="container-Info">
          <Grid item xs={12} sm={12} md={12}>
            <div className="vidContent">
              <Target />
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              ></div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            style={{ paddingTop: "100px" }}
          ></Grid>
        </Grid>
      </Grid>
      <Layout />
    </>
  );
};

export default Cover;
