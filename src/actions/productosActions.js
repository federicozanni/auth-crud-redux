import apiProducts from '../config/apiProducts'
import Swal from 'sweetalert2';
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  CARGA_PRODUCTOS,
  CARGA_PRODUCTOS_EXITO,
  CARGA_PRODUCTOS_ERROR,
  PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_EDITAR,
  PRODUCTO_EDITAR_COMENZAR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from '../actionsTypes/productosType';


export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch( agregarProducto() );

    try {
      await apiProducts.post( '/productos', producto );
      dispatch( agregarProductoExito(producto) );

      Swal.fire(
        'Correcto',
        'El prodcuto se agrego correctamente',
        'success'
      )

    } catch (error) {
      dispatch( agregarProductoError(true) );

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'hubo un error intenta denuevo'
      })
    }
  }
};

export function obtenerProductoAction() {
  return async (dispatch) => {
    dispatch( descargarProductos() );

    try {
      const repuesta = await apiProducts.get('/productos');
      dispatch( descargarProductosExitosa(repuesta.data) );

    } catch (error) {
      dispatch( descargarProductosError() );
      
    }
  }
};

export function eliminarProductoAction(id) {
  return async (dispatch) => {
    dispatch( productoEliminar(id) );

    try {
      await apiProducts.delete(`/productos/${id}`);
      dispatch( productoEliminadoExito() );

      Swal.fire(
        'Eliminado!',
        'El producto se elimino correctamente.',
        'success'
      )

    } catch (error) {
      dispatch( productoEliminadoError() );

    }
  }
};

export function obtenerProductoEditarAction(producto) {
  return (dispatch) => {
    dispatch( obtenerProductoEditar(producto) );

  }
};

export function editarProductoAction(producto) {
  return async (dispatch) => {
    await apiProducts.put(`/productos/${producto.id}`, producto);
    dispatch( editarProducto() );

    try {
      dispatch( productoEditarExito(producto) );

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `El producto "${ producto.nombre.toUpperCase() }" se editó correctamente`,
        showConfirmButton: true,
      })

    } catch (error) {
      dispatch( productoEditarError() );

    }
  }
};

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado
});


const descargarProductos = () => ({
  type: CARGA_PRODUCTOS,
  payload: true
});

const descargarProductosExitosa = (productos) => ({
  type: CARGA_PRODUCTOS_EXITO,
  payload: productos
});

const descargarProductosError = () => ({
  type: CARGA_PRODUCTOS_ERROR,
  payload: true
});

const productoEliminar = (id) => ({
  type: PRODUCTO_ELIMINAR,
  payload: id
});

const productoEliminadoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO,
});

const productoEliminadoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true
});


const obtenerProductoEditar = (producto) => ({
  type: PRODUCTO_EDITAR,
  payload: producto
});

const productoEditarExito = (producto) => ({
  type: PRODUCTO_EDITADO_EXITO,
  payload: producto
});

const productoEditarError = () => ({
  type: PRODUCTO_EDITADO_ERROR,
  payload: true
});

const editarProducto = () => ({
  type: PRODUCTO_EDITAR_COMENZAR,
})