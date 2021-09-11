import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cerrarSesionAction } from '../actions/authActions';

const Header = () => {

  const estado = useSelector( (state) => state.auth.estado);
  const usuario = useSelector( (state) => state.auth.usuario.usuario);
  
  const dispatch = useDispatch();
  const cerrarSesion = () => dispatch( cerrarSesionAction() )
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div  className="container">
        <h1>
          <Link to={'/'} className="text-light">
            Crud Redux
          </Link>
        </h1>
      </div>

      {
        (estado === 'authenticated')
        ? <div>
            <Link to={'/producto/nuevo'}
              className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Agregar producto &#43;
            </Link>

            <button
              className="ml-3"
            >
              {usuario.correo}
            </button>

            <button
              className="ml-3"
              onClick={() => cerrarSesion()}
            >
              Cerrar sesion
            </button>
          </div>
 
        : <div>
            <Link to={'/registro'}
            className="btn btn-danger nuevo-post d-block d-md-inline-block mr-2"
            >
            Registrarse
            </Link>

            <Link to={'/logear'}
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >
            Logear
            </Link>
          </div>
      }

    </nav>
  )
}

export default Header;
