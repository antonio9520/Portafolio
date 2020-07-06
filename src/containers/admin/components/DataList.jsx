import React from "react";
import "./style.css";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  obtenerEditarAction,
  eliminarProyectoAction,
} from "../../../actions/proyectosAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const DataList = ({ proyecto }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { nombre, descripcion, imageURL, _id } = proyecto;
  const goEditProyect = (proyecto) => {
    dispatch(obtenerEditarAction(proyecto));
    history.push(`/admin/edit-proyect/${_id}`);
  };
  const deleteProyect = (id) => {
    dispatch(eliminarProyectoAction(id));
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => goEditProyect(proyecto)} size="small" color="primary">
          Editar
        </Button>
        <Button onClick={() => deleteProyect(_id)} size="small" color="primary">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default DataList;
