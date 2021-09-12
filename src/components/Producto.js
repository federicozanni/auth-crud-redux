import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { eliminarProductoAction, obtenerProductoEditarAction } from '../actions/productosActions'
import Swal from 'sweetalert2';

const Producto = ({producto, usuario}) => {

  const { id, nombre, precio } = producto;
  const { correo } = usuario;

  const dispatch = useDispatch();
  const history = useHistory();
  
  const estado = useSelector((state) => state.auth.estado);
  const usuarios = useSelector((state) => state.auth.usuario.usuario);

  const eliminarProducto = (id) =>{
    Swal.fire({
      title: 'Estas seguro?',
      text: "Un producto que se eliminta no se puede recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( eliminarProductoAction(id) )
      } 
    })
  }

  const rediteccionarEdicion = (producto) => {
    dispatch( obtenerProductoEditarAction(producto) );
    history.push(`/producto/editar/${producto.id}`);
  }

  return (
    <tr>
      <td className="text-center">{nombre}</td>
      
      <td className="text-center">
        <span className="font-weight-bold">$ {precio}</span>
      </td>

      <td className="text-center" >{correo}</td>

      <td className="acciones text-center">
        
        {
          ( estado === 'authenticated') &&
          ( usuarios.correo === correo ) &&
          <div>
            <button 
              className="btn btn-primary mr-2"
              type="button"
              onClick={ () => rediteccionarEdicion(producto) }
            >
              Editar
            </button>

            <button
              type="button"
              onClick={ () => eliminarProducto(id) }
              className="btn btn-danger"
            >Eliminar</button>
          </div>
        }
      </td>
    </tr>
  )
}

export default Producto;
