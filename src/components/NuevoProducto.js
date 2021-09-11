import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from '../actions/productosActions';
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';
import InputProductos from '../shared/InputProductos';


const NuevoProducto = ({history}) => {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);

  
  const cargando = useSelector( (state) => state.productos.loading );
  const error = useSelector( (state) => state.productos.error );
  const alerta = useSelector( (state) => state.alerta.alerta );
  const usuario = useSelector( (state) => state.auth.usuario.usuario);
  
  const dispatch = useDispatch();
  const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    if (nombre.trim === '' || precio <= 0) {
      
      const alerta = {
        msg: 'Todos los campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3',
      }
      dispatch( mostrarAlertaAction(alerta) );

      return;
    }

    dispatch( ocultarAlertaAction() );

    agregarProducto({
      nombre,
      precio,
      usuario,
    });

    history.push('/');
  }

  return (
    <InputProductos
      title="Agregar nuevo producto"
      alerta={alerta}
      nombre={nombre}
      precio={precio}
      changePrecio={  e => setPrecio( Number(e.target.value) ) }
      changeNombre={ e => setNombre( e.target.value ) }
      submitNuevoProducto={submitNuevoProducto}
      cargando={cargando}
      error={error}
      buttonSubmitText="Agregar"
    />
  )
}

export default NuevoProducto;
