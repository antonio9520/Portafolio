import React from "react";
import { Typography, Avatar } from "@material-ui/core";
import "./styles.css"

const categories = () => {
  return (
    <div className='cont-categories'>
      <div className="cont-categories-sub">
        <Avatar className='avatar-expert'>E</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Expert
        </Typography>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-advanced'>A</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Advanced
        </Typography>
      </div>
      <div className="cont-categories-sub"> 
      <Avatar className='avatar-int'>I</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Intermediate
        </Typography>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-novice'>N</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Novice
        </Typography>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-fund'>F</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Fundamental Awareness
        </Typography>
      </div>
    </div>
  );
};

export default categories;
