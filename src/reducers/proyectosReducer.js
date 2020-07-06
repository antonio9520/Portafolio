import {
  OBTENER_PROYECTOS,
  OBTENER_PROYECTOS_ERROR,
  OBTENER_PROYECTOS_EXITO,
  GUARDAR_PROYECTO,
  GUARDAR_EXITO,
  GUARDAR_ERROR,
  OBTENER_EDITAR,
  EDITAR_ERROR,
  EDITAR_EXITO,
  COMENZAR_EDITAR,
  ELIMINAR_EXITO,
  ELIMINAR_PROYECTO,
  ELIMINAR_ERROR,
} from "../types";

const initialState = {
  proyectos: [],
  loading: false,
  error: false,
  proyectoeditar: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PROYECTOS:
    case COMENZAR_EDITAR:
    case GUARDAR_PROYECTO:
      case ELIMINAR_PROYECTO:
      return {
        ...state,
        loading: true,
      };
    case OBTENER_PROYECTOS_EXITO:
      return {
        ...state,
        proyectos: action.payload,
        error: false,
        loading: false,
      };
    case OBTENER_PROYECTOS_ERROR:
    case EDITAR_ERROR:
    case GUARDAR_ERROR:
    case ELIMINAR_ERROR:  
      return {
        ...state,
        error: true,
      };
    case GUARDAR_EXITO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        loading: false,
        error: false,
      };
    case OBTENER_EDITAR:
      return {
        ...state,
        proyectoeditar: action.payload,
      };
    case EDITAR_EXITO:
      return {
        ...state,
        proyectos: state.proyectos.map((proyecto) =>
          proyecto._id === action.payload._id
            ? (proyecto = action.payload)
            : proyecto
        ),
        proyectoeditar: null,
        loading: false,
        error: false,
      };
     case ELIMINAR_EXITO:
       return{
         ...state,
         proyectos: state.proyectos.filter((proyecto) => proyecto._id !== action.payload)
       } 
    default:
      return state;
  }
}
