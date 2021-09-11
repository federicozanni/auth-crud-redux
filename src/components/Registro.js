import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mostrarAlertaAction } from '../actions/alertaActions';
import { registrarUsuarioAction } from '../actions/authActions';
import LoadingSpinner from './LoadingSpinner';


const Registro = ({history}) => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const alerta = useSelector( (state) => state.alerta.alerta );
  const error = useSelector( (state) => state.auth.error );
  const estado = useSelector( (state) => state.auth.estado);

  const dispatch = useDispatch();
  const crearUsuario = (usuario) => dispatch( registrarUsuarioAction(usuario) );

  useEffect(() => {
    if (estado === 'authenticated') {
    history.push('/');
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estado]);

  const submitRegistroUsuario = (e) => {
    e.preventDefault();

    if ( nombre.length <= 0  || correo.length  <= 0 || password.length  <= 0 ){ 
  
      const alerta = {
        msg: 'Todos los campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3',
      }
      dispatch( mostrarAlertaAction(alerta) );

      return;
  }
  
    crearUsuario({
      nombre,
      correo,
      password,
    });
    
  }
  

  return (
    <Fragment>
      <form
        onSubmit={submitRegistroUsuario}
      >
        {
          alerta && <p className={alerta.classes}>{alerta.msg}</p>
        }

        {
          error && <p className="alert alert-danger text-center p3">{error}</p>
        }

      <div className="form-floating mb-3 mt-2">
        <label>Nombre</label>
        <input 
          type="nombre" 
          className="form-control" 
          placeholder="nombre"
          name="nombre"
          value={nombre}
          onChange={ e => setNombre( e.target.value ) } 
        />
      </div>

      <div className="form-floating mb-3 mt-2">
        <label>Correo</label>
        <input 
          type="email" 
          className="form-control" 
          placeholder="name@example.com"
          name="correo"
          value={correo}
          onChange={ e => setCorreo( e.target.value ) } 
        />
      </div>

      <div className="form-floating">
        <label>Contraseña</label>
        <input 
          type="password" 
          className="form-control" 
          placeholder="contraseña"
          name="password"
          value={password}
          onChange={ e => setPassword( e.target.value ) } 
        />
      </div>

      <div className="col-13 mt-3">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox"
          />
          <label className="form-check-label">
            Recordar usuario
          </label>
        </div>
      </div>

      <div className="col-15 mt-3">
        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Registrarse
        </button>
      </div>
    </form>

    {
      ( estado === 'checking' )
      && <LoadingSpinner />
    }

    </Fragment>
  )
}

export default Registro;