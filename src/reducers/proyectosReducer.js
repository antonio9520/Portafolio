import {
  OBTENER_PROYECTOS,
  OBTENER_PROYECTOS_ERROR,
  OBTENER_PROYECTOS_EXITO,
} from "../types";

const initialState = {
  proyectos: [],
  imagen: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PROYECTOS:
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
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
