import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA,
} from '../actionsTypes/alertaType';

const initialState = {
  alerta: null,
}

export default function alerta( state = initialState, action ) {
  switch ( action.type ) {
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alerta : action.payload,
      }
    
    case OCULTAR_ALERTA:
      return {
        ...state,
        alerta : null,
      }

    default:
      return state;
  }
}
