import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector} from "react-redux"
import { Grid } from "@material-ui/core";
import { obtenerProyectosAction} from "../../actions/proyectosAction"
import TargetProyect from  './components/TargetProyect';

const Proyects = () => {

   const dispatch = useDispatch()  

   const proyectos = useSelector((state) => state.proyectos.proyectos)

  useEffect(() => {
   const consulta = () => dispatch(obtenerProyectosAction())
    consulta();
  }, []);


  return (
    <div className="container-proyects">
      <Grid container>
        {proyectos.map((proyecto) => (
           <Grid item xs={12} sm={6} md={4}>
             <TargetProyect/>
           </Grid>
        ))}
       
      </Grid>
    </div>
  );
};

export default Proyects;
