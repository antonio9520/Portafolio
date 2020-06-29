import React from "react";
import "./styles.css";
import { Typography, Avatar } from "@material-ui/core";

const KnowItem = (props) => {
  const { title, icon, list } = props;
  return (
    <div className="container-knowItem">
      <div className="cont-icon-know">{icon}</div>
      <div className="cont-typo-know">
        <Typography variant="h5" className="title-know-item">
          {title}
        </Typography>
        <div className="cont-items-know">
          {list.map((list, index) => (
            <div key={index} className="cont-avatar-know">
              <Avatar className={list.className}>{list.avatar}</Avatar>
              <Typography variant="body1">{list.typo}</Typography>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default KnowItem;
