import React from "react";
import "./style.css";
import css3 from "../../../resources/icons/css.svg";
import js from "../../../resources/icons/js.svg";
import html from "../../../resources/icons/html.svg";
import node from "../../../resources/icons/nodejs.svg";
import react from "../../../resources/icons/react.jpg";
import redux from "../../../resources/icons/redux.svg"
import mongo from "../../../resources/icons/mongo.svg"
import firebase from "../../../resources/icons/firebase.svg"
import bt4 from "../../../resources/icons/bt4.png"
import mysql from "../../../resources/icons/mysql.svg"

const LenguajeIcon = ({ lenguaje }) => {
  return (
    <div className="cont-lengujeIcon">
      {lenguaje === "html" ? (
        <img className="icon-leng" title='Html' src={html} alt="html"></img>
      ) : lenguaje === "js" ? (
        <img className="icon-leng" title='JavaScript' src={js} alt="javascript"></img>
      ) : lenguaje === "css" ? (
        <img className="icon-leng" title='Css3' src={css3} alt="css3"></img>
      ) : lenguaje === "node" ? (
        <img className="icon-leng" title='NodeJs' src={node} alt="NodeJs"></img>
      ) : lenguaje === "react" ? (
        <img className="icon-leng" title='ReactJs' src={react} alt="ReactJs"></img>
      ) : lenguaje === "redux" ? (
        <img className="icon-leng" title='Redux' src={redux} alt="NodeJs"></img>
      ) : lenguaje === "mongo" ? (
        <img className="icon-leng" title='MongoDB' src={mongo} alt="MongoDB"></img>
      ) : lenguaje === "firebase" ? (
        <img className="icon-leng" title='Firebase' src={firebase} alt="Firebase"></img>
      ) :lenguaje === "mysql" ? (
        <img className="icon-leng" title='Bootstrap4' src={bt4} alt="Bootstrap4"></img>
      ) :lenguaje === "bt4" ? (
        <img className="icon-leng" title='MySql' src={mysql} alt="MySql"></img>
      ) :(
        <p>{lenguaje}</p>
      )}
    </div>
  );
};

export default LenguajeIcon;
