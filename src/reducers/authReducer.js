import {
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  LOGEAR_USUARIO,
  LOGEAR_USUARIO_EXITO,
  LOGEAR_USUARIO_ERROR,
  CERRAR_SESION,
} from '../actionsTypes/authType';


const initialState = {
  usuario: [],
  error: null,
  token: null,
  estado: '',
}

export default function auth( state = initialState, action ) {
  switch ( action.type ) {
    case REGISTRAR_USUARIO:
        return {
          ...state,
          estado: 'checking',
        }

    case LOGEAR_USUARIO_EXITO:
    case REGISTRAR_USUARIO_EXITO:
      return {
        ...state,
        usuario: action.payload,
        estado: 'authenticated',
        token: action.payload.token,
      }

    case LOGEAR_USUARIO_ERROR:
    case REGISTRAR_USUARIO_ERROR:
        return {
          ...state,
          error: action.payload,
          estado: 'not-authenticated',
        }

    case LOGEAR_USUARIO:
        return {
          ...state,
          estado: 'checking',
          usuario: action.payload,
          error: null,
        }
    
    case CERRAR_SESION:
        return {
          ...state,
          estado: 'not-authenticated',
        }
    
    default:
      return state;
  }
}