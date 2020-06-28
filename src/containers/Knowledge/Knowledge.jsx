import React from "react";
import "./Knowledge.css";
import img from "../../resources/img/books.jpg";
import { Grid, Typography, Avatar } from "@material-ui/core";
import Categories from "./components/categories";
import KnowItem from "./components/KnowItem";
import { Code, Storage, DeveloperBoard, DeviceHub } from "@material-ui/icons";

const Knowledge = () => {
  const languages = [
    {
      avatar: "I",
      typo: "Javascript",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Html",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Css",
      className: "avatar-int",
    },
    {
      avatar: "N",
      typo: "Sql",
      className: "avatar-novice",
    },
    {
      avatar: "N",
      typo: "C#",
      className: "avatar-novice",
    },
  ];
  const databases = [
    {
      avatar: "N",
      typo: "MongoDB",
      className: "avatar-novice",
    },
    {
      avatar: "N",
      typo: "Sql server",
      className: "avatar-novice",
    },
    {
      avatar: "N",
      typo: "Firebase",
      className: "avatar-novice",
    },
  ];
  const frameworks = [
    {
      avatar: "I",
      typo: "ReactJs",
      className: "avatar-int",
    },
    {
      avatar: "N",
      typo: "NodeJs",
      className: "avatar-novice",
    },
  ];

  const others = [
    {
      avatar: "I",
      typo: "GitHub",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Redux",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Material-ui",
      className: "avatar-int",
    },
    {
      avatar: "N",
      typo: "Boostrap 4",
      className: "avatar-novice",
    },
  ];
  return (
    <div className="container-Know">
      <img className="img-know" src={img} alt="img-know"></img>
      <div className="overlay-know"></div>
      <div className="cont-body-know">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className="typo-title-know" variant="h4">
              Knowledge
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div>
              <Categories />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} style={{ textAlign: "center" }}>
            <KnowItem
              title="Languages"
              icon={<Code className="icon-code" />}
              list={languages}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} style={{ textAlign: "center" }}>
            <KnowItem
              title="Frameworks"
              list={frameworks}
              icon={<DeveloperBoard className="icon-code" />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} style={{ textAlign: "center" }}>
            <KnowItem
              title="Databases"
              list={databases}
              icon={<Storage className="icon-code" />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} style={{ textAlign: "center" }}>
            <KnowItem
              title="Others"
              list={others}
              icon={<DeviceHub className="icon-code" />}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Knowledge;
