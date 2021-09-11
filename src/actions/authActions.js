import {
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  LOGEAR_USUARIO,
  LOGEAR_USUARIO_EXITO,
  LOGEAR_USUARIO_ERROR,
  CERRAR_SESION
} from '../actionsTypes/authType';
import db from '../config/db'


export function registrarUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch( registrarUsuario() );

    try {
      const { data } = await db.post('/usuarios', {nombre: usuario.nombre, correo: usuario.correo, password: usuario.password});
      dispatch( registrarUsuarioExito(data) );
      

    } catch (error) {
      dispatch( registrarUsuarioError(error) );
      
    }
  }
}

export function logearUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch( logearUsuario() );

    try {
      const { data } = await db.post('/auth/login', {correo: usuario.correo, password: usuario.password});
      window.localStorage.setItem('token', data.token);
      dispatch( logearUsuarioExito(data) )

    } catch (error) {
      dispatch( logearUsuarioError(error) )

    }
  }
}

export function cerrarSesionAction() {
  return async (dispatch) => {
    dispatch( cerrarSesion() )
  }
}


const registrarUsuario = () => ({
  type: REGISTRAR_USUARIO,
});

const registrarUsuarioExito = (usuario) => ({
  type: REGISTRAR_USUARIO_EXITO,
  payload: usuario
});

const registrarUsuarioError = (error) => ({
  type: REGISTRAR_USUARIO_ERROR,
  payload: error.response.data.errors[0].msg
});

const logearUsuario = () => ({
  type: LOGEAR_USUARIO,
  payload: true
});

const logearUsuarioExito = (usuario) => ({
  type: LOGEAR_USUARIO_EXITO,
  payload: usuario
});

const logearUsuarioError = (error) => ({
  type: LOGEAR_USUARIO_ERROR,
  payload: error.response.data
});

const cerrarSesion = () => ({
  type: CERRAR_SESION,
})