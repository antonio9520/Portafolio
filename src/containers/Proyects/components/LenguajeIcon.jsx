import React from "react";
import "./style.css";
import css3 from "../../../resources/icons/css.svg";
import js from "../../../resources/icons/js.svg";
import html from "../../../resources/icons/html.svg";
import node from "../../../resources/icons/nodejs.svg";
import react from "../../../resources/icons/react.jpg";

const LenguajeIcon = ({ lenguaje }) => {
  return (
    <div className="cont-lengujeIcon">
      {lenguaje === "Html" ? (
        <img className="icon-leng" title='Html' src={html} alt="html"></img>
      ) : lenguaje === "JavaScript" ? (
        <img className="icon-leng" title='JavaScript' src={js} alt="javascript"></img>
      ) : lenguaje === "Css" ? (
        <img className="icon-leng" title='Css3' src={css3} alt="css3"></img>
      ) : lenguaje === "NodeJs" ? (
        <img className="icon-leng" title='NodeJs' src={node} alt="NodeJs"></img>
      ) : (
        <p>{lenguaje}</p>
      )}
    </div>
  );
};

export default LenguajeIcon;
