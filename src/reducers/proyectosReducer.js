import {
  OBTENER_PROYECTOS,
  OBTENER_PROYECTOS_ERROR,
  OBTENER_PROYECTOS_EXITO,
  GUARDAR_PROYECTO,
  GUARDAR_EXITO,
  GUARDAR_ERROR,
} from "../types";

const initialState = {
  proyectos: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PROYECTOS:
    case GUARDAR_PROYECTO:
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
    case GUARDAR_ERROR:
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
    default:
      return state;
  }
}
