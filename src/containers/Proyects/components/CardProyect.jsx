import React from "react";
import "./style.css";
import clsx from 'clsx';
import { useDispatch } from "react-redux";
import { Typography, IconButton, makeStyles, Collapse } from "@material-ui/core";
import { ExpandMore, GitHub, QueuePlayNext} from "@material-ui/icons"
import image from "../../../resources/img/reactimage.jpg";
import LenguajeIcon from "./LenguajeIcon";

const useStyles = makeStyles((theme) => ({
 
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  
  }));
   
   
const CardProyect = ({ proyecto }) => {

  const dispatch = useDispatch();

  const { imageURL, nombre, lenguajes, descripcion } = proyecto;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container-targetProyect">
      <div className="cont-contenido">
        <div className="cont-img-card">
          <img className="img-targetProyect" src={imageURL} alt="imagen"></img>
        </div>
        <div className="cont-typo">
        <Typography className="name-proyect" variant="h5">
          {nombre}
        </Typography>
        <div className="container-icons">  
                  {lenguajes.map((lenguaje) => (
          <LenguajeIcon lenguaje={lenguaje} />
        ))}
        </div>
        <div className='cont-arrow-collapse'>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
        </div>
        <div className="cont-descripcion">
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography variant="body2">{descripcion}</Typography>
        <div>
            <IconButton>
               <GitHub  titleAccess="Ver en GitHub"/>
            </IconButton>
            <IconButton >
                <QueuePlayNext titleAccess="Abrir Aplicación"/>
            </IconButton>
        </div>
      </Collapse>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardProyect;
