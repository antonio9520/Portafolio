import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { obtenerProyectosAction } from "../../actions/proyectosAction";
import CardProyect from "./components/CardProyect";

const Proyects = () => {
  const dispatch = useDispatch();

  const proyectos = useSelector((state) => state.proyectos.proyectos);

  useEffect(() => {
    const consulta = () => dispatch(obtenerProyectosAction());
    consulta();
  }, []);

  return (
    <div className="container-proyects" id="proyects">
      <Typography variant="h4" className="title-proyect">Proyects</Typography>
      <Grid container>
        {proyectos.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto._id}>
            <CardProyect proyecto={proyecto} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Proyects;
