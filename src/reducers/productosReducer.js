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
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from '../actionsTypes/productosType';


const initialState = {
  productos: [],
  estado: '',
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null
}

export default function productos( state = initialState, action ) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
    case CARGA_PRODUCTOS:
        return {
            ...state,
            loading: true,
            estado: 'checking',
        }

    case AGREGAR_PRODUCTO_EXITO:
        return {
            ...state,
            loading: false,
            productos: [...state.productos, action.payload]
        }
        
    case AGREGAR_PRODUCTO_ERROR:
    case CARGA_PRODUCTOS_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }

    case CARGA_PRODUCTOS_EXITO:
        return {
          ...state,
          loading: false,
          error: null,
          productos: action.payload,
          estado: 'exito'
        }

    case PRODUCTO_ELIMINAR:
        return {
          ...state,
          loading: false,
          error: null,
          productoEliminar: action.payload,
        }
    
    case PRODUCTO_ELIMINADO_EXITO:
        return {
          ...state,
          loading: false,
          error: null,
          productoEliminar: null,
          productos: state.productos.filter( producto => producto.id !== state.productoEliminar)
        }
    
    case PRODUCTO_EDITAR:
        return {
          ...state,
          productoEditar: action.payload,
        }
    
    case PRODUCTO_EDITADO_EXITO: 
        return {
          ...state,
          productoEditar: null,
          productos: state.productos.map( 
            (producto) => 
              producto.id === action.payload
              ? producto = action.payload
              : producto
          )
        }
  
    default:
      return state;
  }
}