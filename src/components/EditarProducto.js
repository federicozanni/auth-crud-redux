import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarProductoAction } from '../actions/productosActions'
import InputProductos from '../shared/InputProductos';

const EditarProducto = () => {

  const [producto, setEditarProducto] = useState({
    nombre: '',
    precio: 0
  })
  
  const dispatch = useDispatch();
  const editarProducto = useSelector( (state) => state.productos.productoEditar);
  const history = useHistory()

  useEffect(() => {
    setEditarProducto( editarProducto );

  }, [editarProducto])

  const { nombre, precio } = producto;

  const onChangeFormulario = (e) => {
    setEditarProducto({
      ...producto,
      [e.target.name] : e.target.value
    })
  }
  
  const submitEditarProducto = (e) => {
    e.preventDefault();

    dispatch( editarProductoAction(producto) );
    history.push('/');
  }

  return (
    <InputProductos
      title="Editar producto"
      nombre={nombre}
      precio={precio}
      changePrecio={onChangeFormulario}
      changeNombre={onChangeFormulario}
      submitNuevoProducto={submitEditarProducto}
      buttonSubmitText="Editar"
    />
  )
}

export default EditarProducto;
