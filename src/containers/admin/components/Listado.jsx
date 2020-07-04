import React, { Fragment, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { obtenerProyectosAction } from "../../../actions/proyectosAction";
import DataList from "./DataList";
import "./style.css";

const styles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "rgb(240, 240, 240)",
    paddingBottom: "30px"
  },
  item: {
    marginTop: "25px",
  },
});

const Listado = () => {
  const dispatch = useDispatch();
  const proyectos = useSelector((state) => state.proyectos.proyectos);
  const classes = styles();
  useEffect(() => {
    const result = () => dispatch(obtenerProyectosAction());
    result();
  }, []);

  return (
    <Fragment>
      <Grid container className={classes.root}>
        {proyectos.map((proyecto) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={proyecto._id}
            className={classes.item}
          >
            <div className="cont-data">
              <DataList proyecto={proyecto} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Listado;
