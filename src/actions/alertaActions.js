import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA,
} from '../actionsTypes/alertaType';

export function mostrarAlertaAction(alerta) {
  return dispatch => {
    dispatch( mostrarAlerta(alerta) )
  }
}

export function ocultarAlertaAction() {
  return dispatch => {
    dispatch( ocultarAlerta() )
  }
}

const mostrarAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
});

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
});
