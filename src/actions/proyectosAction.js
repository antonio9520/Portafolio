import {
  OBTENER_PROYECTOS,
  OBTENER_PROYECTOS_ERROR,
  OBTENER_PROYECTOS_EXITO,
  GUARDAR_PROYECTO,
  GUARDAR_EXITO,
  GUARDAR_ERROR,
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


export function guardarProyectoAction(proyecto){
  return async (dispatch) => {
      dispatch(guardarProyecto())
    try {
      const fd = new FormData();
      fd.append("imageURL", proyecto.imageURL)
      fd.append("nombre", proyecto.nombre)
      fd.append("descripcion", proyecto.descripcion)
      fd.append("proyectoURL", proyecto.poyectoURL)
      fd.append("gitURL", proyecto.gitURL)
      for(let i = 0; i < proyecto.lenguajes.length; i++){
        fd.append("lenguajes[]", proyecto.lenguajes[i])
      }
      await Axios.post("/api/proyectos", fd).then((res) => proyecto.imageURL = res.data.proyectoSend.imageURL)
      dispatch(guardarExito(proyecto))
    } catch (error) {
      console.log(error)
      dispatch(guardarError())
    }
  }
}

const guardarError = () => ({
  type: GUARDAR_ERROR
})

const guardarProyecto = () => ({
  type: GUARDAR_PROYECTO,
})

const guardarExito = data => ({
  type: GUARDAR_EXITO,
  payload: data,
})