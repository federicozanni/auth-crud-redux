import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductoAction } from '../actions/productosActions';
import Producto from './Producto';

const Productos = () => {

  const dispatch = useDispatch();
  const cargarProductos = () => dispatch( obtenerProductoAction() )

  useEffect(() => {
    cargarProductos();
    //eslint-disable-next-line
  }, [])

  const productos = useSelector((state) => state.productos.productos);
  const loading = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  
  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de productos</h2>

      { error &&
       <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p>
      }

      {
        loading &&
        <p className="text-center">Cargando...</p>
      }      

      <table className="table table-bordered table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th className="text-center" scope="col">Nombre</th>
            <th className="text-center" scope="col">Precio</th>
            <th className="text-center" scope="col">Publicado por</th>
            <th className="text-center" scope="col">Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          { (
              productos.map(
                (producto, id) => (
                  <Producto
                      key={id}
                      producto={producto}
                      usuario={producto.usuario}
                  />
                )
              )
            )
          }
          
        </tbody>
      </table>
      {
        productos.length === 0 && <h4>Sin productos</h4>
      }
    </Fragment>
  )
}

export default Productos;
