import React, { useState } from "react";
import "./Knowledge.css";
import img from "../../resources/img/books.jpg";
import { Grid, Typography, IconButton } from "@material-ui/core";
import Categories from "./components/categories";
import KnowItem from "./components/KnowItem";
import {
  Code,
  Storage,
  DeveloperBoard,
  DeviceHub,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";

const Knowledge = () => {
  const [collapse, setCollapse] = useState(false);

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
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="container-Know" id="knowledge">
     
      <div className="overlay-know"></div>
      <CSSTransition classNames="transition-know"
            in={collapse}
            unmountOnExit
            timeout={2000}>
         <img className="img-know" src={img} alt="img-know"></img>
      </CSSTransition>

      <div className="cont-body-know">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={collapse ? "title-know-active" : "title-know"} variant="h4">
              Knowledge
            </Typography>
            <div className={ collapse ? "show-btn-know-active" : "show-btn-know"}>
              <IconButton onClick={handleClick}>
                {collapse ? (
                  <VisibilityOff className="btn-show-job" />
                ) : (
                  <Visibility className="btn-show-job" />
                )}
              </IconButton>
            </div>
          </Grid>
          <CSSTransition
            classNames="transition-know"
            in={collapse}
            unmountOnExit
            timeout={2000}
          >
            <Grid container>
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
          </CSSTransition>
        </Grid>
      </div>
    </div>
  );
};

export default Knowledge;
