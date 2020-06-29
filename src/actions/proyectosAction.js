import {
  OBTENER_PROYECTOS,
  OBTENER_PROYECTOS_ERROR,
  OBTENER_PROYECTOS_EXITO,
} from "../types";
import Axios from "../config/axios";
export function obtenerProyectosAction() {
  return async (dispatch) => {
    dispatch(obtenerProyectos());
    try {
      const proyectos = await Axios.get("/api/proyectos");
      dispatch(obtenerProyectosExito(proyectos.data.proyectos));
    } catch (error) {
      console.log(error);
      dispatch(obtenerError());
    }
  };
}

const obtenerProyectos = () => ({
  type: OBTENER_PROYECTOS,
});

const obtenerProyectosExito = (data) => ({
  type: OBTENER_PROYECTOS_EXITO,
  payload: data,
});

const obtenerError = () => ({
  type: OBTENER_PROYECTOS_ERROR,
});
